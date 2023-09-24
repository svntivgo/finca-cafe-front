import { ROOMS_BOURBON, ROOMS_TIPICA } from './rooms';

export const HOTELS = {
  BOURBON: {
    NAME: 'Bourbon',
    DESCRIPTION:
      'La mezcla del lujo contemporaneo con la inspiración del encanto característico de las haciendas cafeteras. Bourbon está especialmente diseñado y equipado para estadías de placer, negocios y bodas.',
    ROOMS: ROOMS_BOURBON.map((room) => room.title),
  },
  TIPICA: {
    NAME: 'Tipica',
    DESCRIPTION:
      'Ubicado junto a una finca cafetera tradicional con acceso a los cultivos donde nace nuestro café, nuestro alojamiento tradicional es perfecto para extranjeros y nacionales que desean conocer la cultura cafetera y una estadia tradicional con todo el confort de sus habitaciones y espacios',
    ROOMS: ROOMS_TIPICA.map((room) => room.title),
  },
};
