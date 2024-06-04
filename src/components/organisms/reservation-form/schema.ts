import * as Yup from 'yup';
import { COUPONS_KEYS } from '../../../constants/coupons';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Campo obligatorio'),
  lastName: Yup.string().required('Campo obligatorio'),
  idType: Yup.number().required('Campo obligatorio'),
  id: Yup.number()
    .required('Campo obligatorio')
    .typeError('Se debe ingresar solo números'),
  phone: Yup.string()
    .required('Campo obligatorio')
    .matches(/^\d{10}$/, 'El número de teléfono debe tener 10 dígitos'),
  email: Yup.string()
    .required('Campo obligatorio')
    .email('Dirección de correo electrónico no válida'),
  coupon: Yup.string().oneOf(COUPONS_KEYS, 'No es un cupón válido'),
  country: Yup.string().required('Campo obligatorio'),
  city: Yup.string().required('Campo obligatorio'),
  countCafeTour: Yup.number().integer(),
  termsConditions: Yup.boolean()
    .oneOf([true], 'Debes aceptar los términos de privacidad')
    .required('Debes aceptar los términos de privacidad'),
});
