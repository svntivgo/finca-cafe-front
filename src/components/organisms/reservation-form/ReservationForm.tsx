import React from 'react';
import { Formik, useFormik, Form } from 'formik';
import {
  CafeTourService,
  StyledContainer,
  StyledFormContainer,
  StyledInputContainer,
  StyledSpan,
  formSchema,
  validationSchema,
} from '..';
import { Button, InputField, Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { useReservation } from '../../../context';
import { WompiApi } from '../../../services/wompi-api';
import { differenceInDays } from 'date-fns';
import { HotelFive } from '../../../services';

const initialValues: formSchema = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  country: '',
  city: '',
  countCafeTour: 0,
  termsConditions: false,
};

export const ReservationForm: React.FC = () => {
  const { setCustomer, reservation } = useReservation();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const { name, lastName, phone, email, country, city } = values;
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
      });

      const stringReference = `
      ini:${reservation.dates.start.toISOString()}_
      fin:${reservation.dates.end.toISOString()}_
      personas:${reservation.occupancy.adult + reservation.occupancy.minor}_
      cliente:${reservation.customer.name} ${reservation.customer.lastName}_
      cel:${reservation.customer.phone}_
      mail:${reservation.customer.email}_
      habitacion:${reservation.room.name}_
      tour-cantidad:${reservation.extras.tourCafe.quantity}
      `;

      const reservationData = {
        nombre: `${reservation.customer.name} ${reservation.customer.lastName}`,
        identidad: `${reservation.customer.email}`,
        tipoIdentidad: `CEDULA CIUDADANIA`,
        telefono: `${reservation.customer.phone}`,
        email: `${reservation.customer.email}`,
        idTransaccion: `${reservation.customer.email}`,
        valorTransaccion: 123,
        valorTotal: 123,
        idHabitacion: `${reservation.room.name}`,
        inicio: 20231201,
        fin: 20231224,
        numeroPersonas:
          reservation.occupancy.adult + reservation.occupancy.minor,
      };

      const reservationCheckout = async () => {
        const wompi = new WompiApi();
        const hotelFive = new HotelFive();

        await wompi.checkout(
          stringReference,
          totalReservation.toString() + '00',
        );
        await hotelFive.reservation(reservationData);
      };
    },
  });

  return (
    <StyledContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => console.log('enviado')}
      >
        <Form onSubmit={formik.handleSubmit}>
          <StyledFormContainer>
            <Text
              text="Información de contacto"
              color={COLORS.PEARL_GREY}
              size="2rem"
            />
            <StyledSpan />
            <StyledInputContainer>
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
            </StyledInputContainer>
            <StyledInputContainer>
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
            </StyledInputContainer>
            <StyledInputContainer>
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
            </StyledInputContainer>
            <StyledInputContainer>
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
            </StyledInputContainer>
          </StyledFormContainer>
          <StyledFormContainer>
            <Text text="Dirección" color={COLORS.PEARL_GREY} size="2rem" />
            <StyledSpan />
            <StyledInputContainer>
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
            </StyledInputContainer>
            <StyledInputContainer>
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
            </StyledInputContainer>
          </StyledFormContainer>
          <StyledFormContainer>
            <Text
              text="Servicios adicionales"
              color={COLORS.PEARL_GREY}
              size="2rem"
            />
            <Text text="(Opcional)" color={COLORS.PEARL_GREY} size="1rem" />
            <StyledSpan />
            <CafeTourService />
          </StyledFormContainer>
          <StyledFormContainer>
            <Text text="Consentimiento" color={COLORS.PEARL_GREY} size="2rem" />
            <StyledSpan />
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
            <StyledSpan />
          </StyledFormContainer>
          <Button
            font={COLORS.WHITE}
            text="Pagar ahora"
            colors={COLORS.GREEN}
            radius="3rem"
            disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
            type="submit"
          />
        </Form>
      </Formik>
    </StyledContainer>
  );
};
