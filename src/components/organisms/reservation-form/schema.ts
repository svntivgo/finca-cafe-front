import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Campo obligatorio'),
  lastName: Yup.string().required('Campo obligatorio'),
  phone: Yup.string()
    .required('Campo obligatorio')
    .matches(/^\d{10}$/, 'El número de teléfono debe tener 10 dígitos'),
  email: Yup.string()
    .required('Campo obligatorio')
    .email('Dirección de correo electrónico no válida'),
  country: Yup.string().required('Campo obligatorio'),
  city: Yup.string().required('Campo obligatorio'),
  countCafeTour: Yup.number().integer(),
  termsConditions: Yup.boolean()
    .oneOf([true], 'Debes aceptar los términos de privacidad')
    .required('Debes aceptar los términos de privacidad'),
});
