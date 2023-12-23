export const CONSTANTS = {
  HOTEL: {
    NIT: import.meta.env.VITE_HOTEL_FIVE_NIT as string,
    TOKEN: import.meta.env.VITE_HOTEL_FIVE_TOKEN as string,
    API: {
      BASE_URL: import.meta.env.VITE_HOTEL_FIVE_BASE_URL as string,
      GET_DOC_TYPES: '/HotelFinca/API/Reservas/TipoDocumentos',
      GET_ROOMS: '/HotelFinca/API/Reservas/Habitaciones',
      POST_RESERVATION: 'hHotelFinca/API/Reservas/Reservacion',
    },
  },
  FINCA_CAFE: {
    API: {
      BASE_URL: import.meta.env.VITE_FINCA_CAFE_BASE_URL as string,
      SEND_PQRS: '/send-pqrs',
      GET_SECRETS: '/get-secrets',
    },
  },
};
