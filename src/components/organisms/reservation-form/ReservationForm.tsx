import React from 'react';
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
import { Button, InputField, Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { useReservation } from '../../../context';
import { WompiApi } from '../../../services/wompi-api';
import { differenceInDays } from 'date-fns';
import { customAlphabet } from 'nanoid';
import { FincafeBack } from '../../../services/fincafe-back';
import { IReservationTransaction } from '../../../services/dtos/fincafe-back.dto';

const initialValues: formSchema = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  country: '',
  city: '',
  id: '',
  idType: '',
  countCafeTour: 0,
  termsConditions: false,
};

export const ReservationForm: React.FC = () => {
  const { setCustomer, reservation } = useReservation();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { name, lastName, phone, email, country, city, id, idType } =
        values;
      const quantityDays = differenceInDays(
        reservation.dates.end,
        reservation.dates.start,
      );
      const totalPriceRoom = reservation.room.price * quantityDays;
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
        idType: 'Cedula de Ciudadania',
      });

      const characters =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const stringReference = customAlphabet(characters, 9)();

      const reservationData: IReservationTransaction = {
        name,
        lastname: lastName,
        phone,
        email,
        country,
        city,
        docNumber: id,
        docType: idType || 'Cedula de Ciudadania',
        adults: reservation.occupancy.adult,
        minors: reservation.occupancy.minor,
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

      const reservationCheckout = async () => {
        const wompi = new WompiApi();
        const fincafeBack = new FincafeBack();
        const { data: fincafeBackResponse } =
          await fincafeBack.createReservationTransaction(reservationData);
        const { publicKey, signatureIntegrity } = fincafeBackResponse;
        const result = wompi.checkout(
          publicKey,
          stringReference,
          `${totalReservation}00`,
          signatureIntegrity,
        );
        console.log(result);
      };
      await reservationCheckout();
    },
  });

  return (
    <StyledContactContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => console.log('enviado')}
      >
        <Form onSubmit={formik.handleSubmit} style={{ placeContent: 'center' }}>
          <StyledContactFormContainer>
            <Text
              text="Información de contacto"
              color={COLORS.PEARL_GREY}
              size="2rem"
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
            <Text text="Dirección" color={COLORS.PEARL_GREY} size="2rem" />
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
            <Text
              text="Servicios adicionales"
              color={COLORS.PEARL_GREY}
              size="2rem"
            />
            <Text text="(Opcional)" color={COLORS.PEARL_GREY} size="1rem" />
            <StyledContactSpan />
            <CafeTourService />
          </StyledContactFormContainer>
          <StyledContactFormContainer>
            <Text text="Consentimiento" color={COLORS.PEARL_GREY} size="2rem" />
            <StyledContactSpan />
            <Text
              text="Al completar esta reserva, acepto terminos y condiciones de la reserva."
              color={COLORS.PEARL_GREY}
              size="1rem"
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
              font={COLORS.WHITE}
              text="Pagar ahora"
              colors={COLORS.GREEN}
              radius="3rem"
              disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
              type="submit"
            />
            <StyledContactSpan />
            <div>
              <Text
                text={`Importe de ${
                  reservation.room.price * reservation.room.quantity
                } COP debido el 29 de septiembre de 2023.`}
                weight="600"
                size="0.7rem"
                color={COLORS.GREEN}
              />
              <Text
                text={`Proporcione un
                método de pago válido.`}
                size="0.7rem"
                color={COLORS.GREEN}
              />
            </div>
          </PaymentButtonContainerStyled>
        </Form>
      </Formik>
    </StyledContactContainer>
  );
};
