export const CONSTANTS = {
  HOTEL: {
    NIT: import.meta.env.VITE_HOTEL_FIVE_NIT as string,
    TOKEN: import.meta.env.VITE_HOTEL_FIVE_TOKEN as string,
    API: {
      BASE_URL: import.meta.env.VITE_HOTEL_FIVE_BASE_URL as string,
      // GET_DOC_TYPES: '/HotelFive/API/Reservas/TipoDocumentos',
      GET_DOC_TYPES: '/HotelFinca/API/Reservas/TipoDocumentos',
      // GET_ROOMS: '/HotelFive/API/Reservas/Habitaciones',
      GET_ROOMS: '/HotelFinca/API/Reservas/Habitaciones',
      POST_RESERVATION: 'hHotelFinca/API/Reservas/Reservacion',
    },
    EXCLUDE_IVA: ['41', '42'],
  },
  FINCA_CAFE: {
    API: {
      BASE_URL: import.meta.env.VITE_FINCA_CAFE_BASE_URL as string,
      SEND_PQRS: '/send-pqrs',
      GET_SECRETS: '/get-secrets',
      CREATE_COFFEE_TOUR: '/create-coffee-tour',
    },
  },
};
