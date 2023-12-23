import * as Yup from 'yup';

export const contactFormValidationSchema = Yup.object().shape({
  name: Yup.string().required('Campo obligatorio'),
  email: Yup.string()
    .required('Campo obligatorio')
    .email('Dirección de correo electrónico no válida'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'El número de teléfono debe tener 10 dígitos')
    .optional(),
  city: Yup.string().optional(),
  message: Yup.string().optional(),
});
