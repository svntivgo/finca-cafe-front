import React from 'react';
import { Formik, useFormik, Form } from 'formik';
import {
  ContactButtonContainerStyled,
  ContactFormTextField,
  ContactFormTextFieldOutlined,
  StyledContactContainer,
  StyledContactFormContainer,
  StyledContactInputContainer,
  StyledContactSpan,
  contactFormSchema,
  contactFormValidationSchema,
} from '..';
import { Button, CREAM_BUTTON, Paragraph } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import axios from 'axios';
import { CONSTANTS } from '../../../constants/constants';
import { useLocation } from 'react-router-dom';

const initialValues: contactFormSchema = {
  name: '',
  email: '',
  phone: '',
  city: '',
  message: '',
};

export const ContactForm: React.FC = () => {
  const location = useLocation();

  const { FINCA_CAFE } = CONSTANTS;
  const { API } = FINCA_CAFE;
  const formik = useFormik({
    initialValues,
    validationSchema: contactFormValidationSchema,
    onSubmit: async (values) => {
      const formValues = values;
      await axios.post(`${API.BASE_URL}${API.SEND_PQRS}`, formValues);
    },
  });

  return (
    <StyledContactContainer
      location={location.pathname}
      style={{ marginTop: '32px' }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={contactFormValidationSchema}
        onSubmit={() => console.log('enviado')}
      >
        <Form onSubmit={formik.handleSubmit}>
          <StyledContactFormContainer>
            <Paragraph
              style={{
                color: `${COLORS.CREAM}`,
                fontFamily: 'Royale',
                fontSize: '1.5rem',
                textAlign: 'center',
              }}
              text="RECIBE MÁS INFORMACIÓN"
            />
            <StyledContactSpan />
            <StyledContactInputContainer>
              <ContactFormTextField
                fullWidth
                variant="standard"
                label="Nombre*"
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
              <ContactFormTextField
                fullWidth
                variant="standard"
                label="Email*"
                type="text"
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
              <ContactFormTextField
                fullWidth
                variant="standard"
                label="Número de teléfono"
                type="string"
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
              <ContactFormTextField
                fullWidth
                variant="standard"
                label="Ciudad"
                type="text"
                id="city"
                name="city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
            </StyledContactInputContainer>
            <StyledContactInputContainer>
              <ContactFormTextFieldOutlined
                multiline
                rows={5}
                fullWidth
                variant="outlined"
                label="Mensaje"
                type="text"
                id="message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </StyledContactInputContainer>
            <ContactButtonContainerStyled>
              <Button
                style={{
                  ...CREAM_BUTTON,
                  borderRadius: '0.2rem',
                  margin: '0 auto',
                  padding: '0 auto',
                  width: '100%',
                }}
                text="Enviar"
                type="submit"
                disabled={
                  formik.isSubmitting || !formik.isValid || !formik.dirty
                }
              />
            </ContactButtonContainerStyled>
          </StyledContactFormContainer>
        </Form>
      </Formik>
    </StyledContactContainer>
  );
};
