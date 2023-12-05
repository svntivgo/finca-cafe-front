export const CONSTANTS = {
  WOMPI: {
    PUBLIC_KEY: import.meta.env.VITE_PUBLIC_KEY as string,
    SIGNATURE: import.meta.env.VITE_SIGNATURE_INTEGRITY as string,
  },
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
};
