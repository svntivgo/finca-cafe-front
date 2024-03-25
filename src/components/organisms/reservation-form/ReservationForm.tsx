import React, { useEffect, useState } from 'react';
import { Formik, useFormik, Form } from 'formik';
import {
  CafeTourService,
  PaymentButtonContainerStyled,
  StyledContactContainer,
  StyledContactFormContainer,
  StyledContactInputContainer,
  StyledContactSpan,
  formSchema,
  validationSchema,
} from '..';
import {
  Button,
  GREEN_BUTTON,
  InputField,
  SelectInput,
  Paragraph,
  FORM_LABEL_FONT_STYLE,
} from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { useReservation } from '../../../context';
import { WompiApi } from '../../../services/wompi-api';
import { customAlphabet } from 'nanoid';
import { FincafeBack } from '../../../services/fincafe-back';
import { IReservationTransaction } from '../../../services/dtos/fincafe-back.dto';
import { useLocation } from 'react-router-dom';
import { HotelFive } from '../../../services';
import { CONSTANTS } from '../../../constants/constants';
import { MinorAgesToMinorsInfo } from '../../../shared/helper/minors-util';

const initialValues: formSchema = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  country: '',
  city: '',
  id: '',
  idType: 0,
  countCafeTour: 0,
  termsConditions: false,
};

export const ReservationForm: React.FC = () => {
  const initDocumentTypes = { label: 'Seleccione un tipo', value: 0 };
  const [documentTypes, setDocumentTypes] = useState([initDocumentTypes]);
  const location = useLocation();
  const actualDate = new Date(Date.now());
  const { setCustomer, reservation } = useReservation();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { name, lastName, phone, email, country, city, id, idType } =
        values;
      const isVatPayer = !CONSTANTS.HOTEL.EXCLUDE_IVA.includes(
        idType.toString(),
      );

      const totalPriceRoom = reservation.room.price;
      const totalCafeTour =
        reservation.extras.tourCafe.price *
        reservation.extras.tourCafe.quantity;

      const totalReservation = totalPriceRoom + totalCafeTour;

      setCustomer({
        name,
        lastName,
        phone,
        email,
        country,
        city,
        id,
        idType,
      });

      const characters =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const stringReference = `HR${customAlphabet(characters, 7)()}`;

      const reservationData: IReservationTransaction = {
        name,
        lastname: lastName,
        phone,
        email,
        country,
        city,
        docNumber: id,
        docType: idType,
        adults: reservation.occupancy.adults,
        minors: reservation.occupancy.minors,
        minorsInfo: MinorAgesToMinorsInfo(reservation.minorAges),
        startDate: reservation.dates.start,
        endDate: reservation.dates.end,
        hotelName: reservation.room.hotel,
        room: reservation.room.id,
        roomName: reservation.room.name,
        roomPrice: reservation.room.price,
        roomIva: isVatPayer ? reservation.room.iva : 0,
        roomTotal: totalPriceRoom,
        extra: '',
        extraIva: 0,
        extraPrice: reservation.extras.tourCafe.price,
        extraTotal: totalCafeTour,
        reservationTotal: totalReservation,
        transactionTotal: totalReservation,
        transactionGateway: 'Wompi',
        transactionReference: stringReference,
      };
      console.log('🚀 ~ onSubmit: ~ reservationData:', reservationData);
      const reservationCheckout = async () => {
        const wompi = new WompiApi();
        const fincafeBack = new FincafeBack();
        const { data: fincafeBackResponse } =
          await fincafeBack.createReservationTransaction(reservationData);
        const { publicKey, signatureIntegrity } = fincafeBackResponse;
        wompi.checkout(
          publicKey,
          stringReference,
          `${totalReservation}00`,
          signatureIntegrity,
        );
      };
      await reservationCheckout();
    },
  });

  function formatMoney(amount: number) {
    if (isNaN(amount)) {
      return 'Invalid amount';
    }

    const roundedAmount = amount.toFixed(2);

    return `$${roundedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  }

  async function getDocumentTypes() {
    const hotelFive = new HotelFive();
    const documentTypes = await hotelFive.documentTypes();
    return documentTypes.data.map((documentType) => {
      return { label: documentType.nombre, value: documentType.tipodocuid };
    });
  }

  useEffect(() => {
    void getDocumentTypes().then((response) => {
      setDocumentTypes(response);
    });
  }, []);

  return (
    <StyledContactContainer location={location.pathname}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => console.log('enviado')}
      >
        <Form onSubmit={formik.handleSubmit} style={{ placeContent: 'center' }}>
          <StyledContactFormContainer>
            <Paragraph
              style={FORM_LABEL_FONT_STYLE}
              text="Información de contacto"
            />
            <StyledContactSpan />
            <StyledContactInputContainer>
              <InputField
                label="Nombre"
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </StyledContactInputContainer>
            <StyledContactInputContainer>
              <InputField
                label="Apellidos"
                type="text"
                id="lastName"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </StyledContactInputContainer>
            <StyledContactInputContainer>
              <SelectInput
                label="Tipo de documento"
                id="idType"
                name="idType"
                options={documentTypes}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.idType}
                error={formik.touched.idType && Boolean(formik.errors.idType)}
                helperText={formik.touched.idType && formik.errors.idType}
              />
            </StyledContactInputContainer>
            <StyledContactInputContainer>
              <InputField
                label="Número de identificación"
                type="string"
                id="id"
                name="id"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.id}
                error={formik.touched.id && Boolean(formik.errors.id)}
                helperText={formik.touched.id && formik.errors.id}
              />
            </StyledContactInputContainer>
            <StyledContactInputContainer>
              <InputField
                label="Teléfono móvil"
                type="text"
                id="phone"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </StyledContactInputContainer>
            <StyledContactInputContainer>
              <InputField
                label="Dirección de correo electrónico"
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </StyledContactInputContainer>
          </StyledContactFormContainer>
          <StyledContactFormContainer>
            <Paragraph style={FORM_LABEL_FONT_STYLE} text="Dirección" />
            <StyledContactSpan />
            <StyledContactInputContainer>
              <InputField
                label="País"
                type="text"
                id="country"
                name="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
              />
            </StyledContactInputContainer>
            <StyledContactInputContainer>
              <InputField
                label="Ciudad"
                id="city"
                name="city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
            </StyledContactInputContainer>
          </StyledContactFormContainer>
          <StyledContactFormContainer>
            <Paragraph
              style={FORM_LABEL_FONT_STYLE}
              text="Servicios adicionales"
            />
            <Paragraph style={FORM_LABEL_FONT_STYLE} text="(Opcional)" />
            <StyledContactSpan />
            <CafeTourService />
          </StyledContactFormContainer>
          <StyledContactFormContainer>
            <Paragraph style={FORM_LABEL_FONT_STYLE} text="Consentimiento" />
            <StyledContactSpan />
            <Paragraph
              style={{ ...FORM_LABEL_FONT_STYLE, fontSize: '1rem' }}
              text="Al completar esta reserva, acepto terminos y condiciones de la reserva."
            />
            <div>
              <input
                type="checkbox"
                id="termsConditions"
                name="termsConditions"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.termsConditions}
              />{' '}
              *Acepto los terminos de privacidad
              {formik.touched.termsConditions &&
              formik.errors.termsConditions ? (
                <div className="error">{formik.errors.termsConditions}</div>
              ) : null}
            </div>
            <StyledContactSpan />
          </StyledContactFormContainer>
          <PaymentButtonContainerStyled>
            <Button
              disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
              style={{
                ...GREEN_BUTTON,
                borderRadius: '3rem',
              }}
              text="Pagar ahora"
              type="submit"
            />
            <StyledContactSpan />
            <div>
              <Paragraph
                style={{
                  color: `${COLORS.GREEN}`,
                  fontSize: '0.5rem',
                  fontWeight: '600',
                }}
                text={`Importe de ${formatMoney(
                  reservation.room.price +
                    reservation.extras.tourCafe.price *
                      reservation.extras.tourCafe.quantity,
                )} COP debido el ${actualDate.getDate()}/${
                  actualDate.getMonth() + 1
                }/${actualDate.getFullYear()}.`}
              />
              <Paragraph
                style={{
                  color: `${COLORS.GREEN}`,
                }}
                text={`Proporcione un
                método de pago válido.`}
              />
            </div>
          </PaymentButtonContainerStyled>
        </Form>
      </Formik>
    </StyledContactContainer>
  );
};
