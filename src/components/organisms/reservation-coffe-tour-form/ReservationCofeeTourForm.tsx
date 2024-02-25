import React from 'react';
import { Formik, useFormik, Form } from 'formik';
import {
  CafeTourService,
  PaymentButtonContainerStyled,
  StyledCalendarTourCafeContainer,
  StyledContactContainer,
  StyledContactFormContainer,
  StyledContactInputContainer,
  StyledContactSpan,
  validationSchemaCoffeTour,
} from '..';
import { Button, InputField, Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { useReservation } from '../../../context';
import { WompiApi } from '../../../services/wompi-api';
import { customAlphabet } from 'nanoid';
import { FincafeBack } from '../../../services/fincafe-back';
import { ICoffeeTourReservation } from '../../../services/dtos/fincafe-back.dto';
import { useLocation } from 'react-router-dom';
import { Calendar } from 'react-date-range';
import { addDays } from 'date-fns';
import { es } from 'date-fns/locale';

const initialValues = {
  date: addDays(new Date(), 1),
  name: '',
  lastName: '',
  phone: '',
  email: '',
  country: '',
  city: '',
  isEnglish: false,
  id: '',
  idType: '',
  countCafeTour: 0,
  termsConditions: false,
};

export const ReservationCoffeeTourForm: React.FC = () => {
  const location = useLocation();
  const actualDate = new Date(Date.now());
  const { setCoffeeTour, reservation } = useReservation();
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchemaCoffeTour,
    onSubmit: async (values) => {
      const {
        date,
        name,
        lastName,
        phone,
        email,
        country,
        city,
        isEnglish,
        id,
        idType,
      } = values;

      setCoffeeTour({
        date,
        name,
        lastName,
        phone,
        email,
        country,
        city,
        isEnglish,
        countCafeTour: reservation.extras.tourCafe.quantity,
        id,
        idType,
      });

      console.log(reservation.extras.tourCafe.quantity);

      const price = isEnglish ? 130000 : 90000;
      const totalReservation = price * reservation.extras.tourCafe.quantity;

      const characters =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const stringReference = `CT${customAlphabet(characters, 7)()}`;

      const reservationData: ICoffeeTourReservation = {
        name,
        lastname: lastName,
        docNumber: id,
        docType: 'Cedula de Ciudadania',
        phone,
        email,
        country,
        city,
        numberOfPersons: reservation.extras.tourCafe.quantity,
        isEnglish,
        date,
        transactionReference: stringReference,
        transactionTotal: totalReservation,
        transactionGateway: 'Wompi',
        reservationTotal: totalReservation,
      };

      const reservationCheckout = async () => {
        const wompi = new WompiApi();
        const fincafeBack = new FincafeBack();
        const { data: fincafeBackResponse } =
          await fincafeBack.createCoffeTourReservationTransaction(
            reservationData,
          );
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

  return (
    <StyledContactContainer location={location.pathname}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaCoffeTour}
        onSubmit={() => console.log('enviado')}
      >
        <Form onSubmit={formik.handleSubmit} style={{ placeContent: 'center' }}>
          <StyledContactFormContainer>
            <Text text="Fecha deseada" color={COLORS.PEARL_GREY} size="2rem" />
            <StyledContactSpan />
            <StyledCalendarTourCafeContainer>
              <Calendar
                minDate={addDays(new Date(), 1)}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onChange={async (item) => formik.setFieldValue('date', item)}
                date={formik.values.date}
                locale={es}
                color="#C0985A"
              />
            </StyledCalendarTourCafeContainer>
            <StyledContactSpan />
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
            <StyledContactSpan />
            <Text
              text="Idioma de preferencia."
              color={COLORS.PEARL_GREY}
              size="1rem"
            />
            <div style={{ color: '#9A9A9A' }}>
              <input
                type="checkbox"
                id="isEnglish"
                name="isEnglish"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.isEnglish}
              />{' '}
              Do you prefer the english tour?
              {formik.touched.isEnglish && formik.errors.isEnglish ? (
                <div className="error">{formik.errors.isEnglish}</div>
              ) : null}
            </div>
            <StyledContactSpan />
          </StyledContactFormContainer>
          <StyledContactFormContainer>
            <CafeTourService isEnglish={formik.values.isEnglish} simpleForm />
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
              // disabled
              type="submit"
            />
            <StyledContactSpan />
            <div>
              <Text
                text={`Importe de ${formatMoney(
                  (formik.values.isEnglish ? 130000 : 90000) *
                    reservation.extras.tourCafe.quantity,
                )} COP debido el ${actualDate.getDate()}/${
                  actualDate.getMonth() + 1
                }/${actualDate.getFullYear()}.`}
                weight="600"
                size="0.5rem"
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