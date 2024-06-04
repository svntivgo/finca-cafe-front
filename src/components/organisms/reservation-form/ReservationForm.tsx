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
// import { WompiApi } from '../../../services/wompi-api';
import { customAlphabet } from 'nanoid';
// import { FincafeBack } from '../../../services/fincafe-back';
import { IReservationTransaction } from '../../../services/dtos/fincafe-back.dto';
import { Link, useLocation } from 'react-router-dom';
import { HotelFive } from '../../../services';
import { CONSTANTS } from '../../../constants/constants';
import { MinorAgesToMinorsInfo } from '../../../shared/helper/minors-util';
import { getTotalRoomPrice } from '../../../shared/helper/calculator';
import { SelectChangeEvent } from '@mui/material';
import { formatHotelFiveQuery } from '../../../shared/helper/formatter';

const initialValues: formSchema = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  coupon: '',
  country: '',
  city: '',
  id: '',
  idType: '',
  countCafeTour: 0,
  termsConditions: false,
};

export const ReservationForm: React.FC = () => {
  const initDocumentTypes = { label: 'Seleccione un tipo', value: 0 };
  const [documentTypes, setDocumentTypes] = useState([initDocumentTypes]);
  const location = useLocation();
  const actualDate = new Date(Date.now());
  const { setCustomer, setCoupon, reservation } = useReservation();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { name, lastName, phone, email, country, city, id, idType, coupon } =
        values;
      const isVatPayer = !CONSTANTS.HOTEL.EXCLUDE_IVA.includes(
        Number(idType).toString(),
      );

      setCustomer({
        name,
        lastName,
        phone,
        email,
        country,
        city,
        id,
        idType: Number(idType),
        isVatPayer,
      });

      const vat = isVatPayer ? reservation.room.iva : 0

      const totalPriceRoom = vat + reservation.room.price

      const totalCafeTour =
        reservation.extras.tourCafe.price *
        reservation.extras.tourCafe.quantity;

      const totalReservation = getTotalRoomPrice({
        isVatPayer: reservation.customer.isVatPayer,
        vat: reservation.room.iva,
        price: reservation.room.price,
        coffeTour: reservation.extras.tourCafe.price *
        reservation.extras.tourCafe.quantity,
        coupon: reservation.coupon
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
        docType: Number(idType),
        isVatPayer,
        coupon,
        adults: reservation.occupancy.adults,
        minors: reservation.occupancy.minors,
        minorsInfo: MinorAgesToMinorsInfo(reservation.minorAges),
        startDate: reservation.dates.start,
        endDate: reservation.dates.end,
        hotelName: reservation.room.hotel,
        room: reservation.room.id,
        roomName: reservation.room.name,
        roomPrice: reservation.room.price,
        roomIva: reservation.room.iva,
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
      console.log("🚀 ~ onSubmit: ~ reservationData:", reservationData)

      // const reservationCheckout = async () => {
      //   const wompi = new WompiApi();
      //   const fincafeBack = new FincafeBack();
      //   const { data: fincafeBackResponse } =
      //     await fincafeBack.createReservationTransaction(reservationData);
      //   const { publicKey, signatureIntegrity } = fincafeBackResponse;
      //   wompi.checkout(
      //     publicKey,
      //     stringReference,
      //     `${totalReservation}00`,
      //     signatureIntegrity,
      //   );
      // };
      // await reservationCheckout();
    },
  });

  function formatMoney(amount: number) {
    if (isNaN(amount)) {
      return 'Invalid amount';
    }

    const roundedAmount = amount.toFixed(2);

    return `$${roundedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  }

  function handleIsVatPayer(event: SelectChangeEvent<unknown>) {
    const value = event.target.value;
    const isVatPayer = !CONSTANTS.HOTEL.EXCLUDE_IVA.includes(value as string);
    !isVatPayer &&
      alert(
        'La excensión del pago del IVA será válida únicamente si se presenta el documento de identidad en el hotel; caso contrario deberá pagar el impuesto en el hotel.',
      );
    setCustomer({ ...reservation.customer, isVatPayer });
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
      const responseFiltered = response.filter(
        (document) => document.value != 11 && document.value != 12,
      );
      setDocumentTypes(responseFiltered);
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
                onChange={(e) => {
                  handleIsVatPayer(e);
                  formik.handleChange(e);
                }}
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
            <StyledContactInputContainer>
              <InputField
                label="Cupón de descuento"
                type="coupon"
                id="coupon"
                name="coupon"
                onChange={(e) => {
                  formik.handleChange(e)
                  setCoupon(e.target.value)
                }}
                onBlur={formik.handleBlur}
                value={formik.values.coupon}
                error={formik.touched.coupon && Boolean(formik.errors.coupon)}
                helperText={formik.touched.coupon && formik.errors.coupon}
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
              <Link to="/terminos-condiciones/" target="_blank">
                *Acepto los terminos de privacidad
              </Link>
              {formik.touched.termsConditions &&
              formik.errors.termsConditions ? (
                <div className="error">{formik.errors.termsConditions}</div>
              ) : null}
            </div>
            <StyledContactSpan />
          </StyledContactFormContainer>
          <PaymentButtonContainerStyled>
            <div>
              <Paragraph
                style={{
                  color: `${COLORS.GREEN}`,
                  fontSize: '0.6rem',
                  fontWeight: '600',
                }}
                text={`Importe de ${formatMoney(getTotalRoomPrice({
                  isVatPayer: reservation.customer.isVatPayer,
                  vat: reservation.room.iva,
                  price: reservation.room.price,
                  coffeTour: reservation.extras.tourCafe.price *
                  reservation.extras.tourCafe.quantity,
                  coupon: reservation.coupon
                }))} COP a pagar el ${actualDate.getDate()}/${
                  actualDate.getMonth() + 1
                }/${actualDate.getFullYear()}. Habitación tipo ${reservation.room.name.toLocaleUpperCase()}, Check-In: ${formatHotelFiveQuery(
                  reservation.dates.start,
                )}, Check-Out: ${formatHotelFiveQuery(reservation.dates.end)}`}
              />
              <Paragraph
                style={{
                  color: `${COLORS.GREEN}`,
                }}
                text={`Proporcione un
                  método de pago válido.`}
              />
            </div>
            <Button
              // disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
              disabled
              style={{
                ...GREEN_BUTTON,
                borderRadius: '3rem',
              }}
              text="Pagar ahora"
              type="submit"
            />
            <StyledContactSpan />
          </PaymentButtonContainerStyled>
        </Form>
      </Formik>
    </StyledContactContainer>
  );
};
