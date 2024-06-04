import * as Yup from 'yup';

export const validationSchemaCoffeTour = Yup.object().shape({
  date: Yup.date().required('Campo obligatorio'),
  name: Yup.string().required('Campo obligatorio'),
  lastName: Yup.string().required('Campo obligatorio'),
  id: Yup.number()
    .required('Campo obligatorio')
    .typeError('Se debe ingresar solo números'),
  phone: Yup.string()
    .required('Campo obligatorio')
    .matches(/^\d{10}$/, 'El número de teléfono debe tener 10 dígitos'),
  email: Yup.string()
    .required('Campo obligatorio')
    .email('Dirección de correo electrónico no válida'),
  country: Yup.string().required('Campo obligatorio'),
  city: Yup.string().required('Campo obligatorio'),
  preferredTime: Yup.string().required('Campo obligatorio'),
  isEnglish: Yup.boolean().optional(),
  countCafeTour: Yup.number().integer(),
  termsConditions: Yup.boolean()
    .oneOf([true], 'Debes aceptar los términos de privacidad')
    .required('Debes aceptar los términos de privacidad'),
});
