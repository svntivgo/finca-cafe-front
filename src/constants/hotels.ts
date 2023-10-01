import photo from '../assets/habitaciones/bourbon.png';
import { ROOM_EQUIPMENTS, RoomEquipment } from './room-equipments';

export interface Room {
  title: string;
  photo: string; // Reemplaza 'string' con el tipo correcto para la foto
  description: string;
  detailsUrl: string; // Reemplaza 'string' con el tipo correcto para la URL
  reserveUrl: string; // Reemplaza 'string' con el tipo correcto para la URL
  inverted: boolean;
  banner: string; // Reemplaza 'string' con el tipo correcto para el banner
  equipment: RoomEquipment[];
}

export interface Hotel {
  NAME: string;
  DESCRIPTION: string;
  ROOMS: Record<string, Room>;
}

export type HotelKey = 'BOURBON' | 'TIPICA';
export type RoomKey =
  | 'SUITE_JACUZZI'
  | 'ESTANDAR_TWIN'
  | 'SUITE_PAREJA_ESTANDAR'
  | 'SUITE_CUADRUPLE_ESTANDAR'
  | 'SUITE_FAMILIAR_CONNECTING';

export type Hotels = Record<HotelKey, Hotel>;

export const HOTELS: Hotels = {
  BOURBON: {
    NAME: 'Bourbon',
    DESCRIPTION:
      'La mezcla del lujo contemporaneo con la inspiración del encanto característico de las haciendas cafeteras. Bourbon está especialmente diseñado y equipado para estadías de placer, negocios y bodas.',
    ROOMS: {
      SUITE_JACUZZI: {
        title: 'SUITE Jacuzzi',
        photo: photo,
        description:
          'La suite Bourbon es perfecta para parejas que buscan una escapada romántica y un alojamiento lujoso y relajante. Ideal para cualquier persona que valore la comodidad y el bienestar',
        detailsUrl: '/',
        reserveUrl: '/',
        inverted: true,
        banner: photo,
        equipment: [
          ROOM_EQUIPMENTS.VAULT,
          ROOM_EQUIPMENTS.PARKING,
          ROOM_EQUIPMENTS.TV,
          ROOM_EQUIPMENTS.JACUZZI,
          ROOM_EQUIPMENTS.HOT_WATER,
          ROOM_EQUIPMENTS.OPTIC_FIBER,
        ],
      },
      ESTANDAR_TWIN: {
        title: 'ESTANDAR TWIN',
        photo: photo,
        description:
          'Las habitaciones estandard twin Bourbon cuentan con cama doble. Amplias, acogedoras y llenas de luz natural, estas habitaciones ofrecen un refugio perfecto para tu estancia.',
        detailsUrl: '/',
        reserveUrl: '/',
        inverted: false,
        banner: photo,
        equipment: [
          ROOM_EQUIPMENTS.VAULT,
          ROOM_EQUIPMENTS.PARKING,
          ROOM_EQUIPMENTS.TV,
          ROOM_EQUIPMENTS.JACUZZI,
          ROOM_EQUIPMENTS.HOT_WATER,
          ROOM_EQUIPMENTS.OPTIC_FIBER,
        ],
      },
    },
  },
  TIPICA: {
    NAME: 'Tipica',
    DESCRIPTION:
      'Ubicado junto a una finca cafetera tradicional con acceso a los cultivos donde nace nuestro café, nuestro alojamiento tradicional es perfecto para extranjeros y nacionales que desean conocer la cultura cafetera y una estadia tradicional con todo el confort de sus habitaciones y espacios',
    ROOMS: {
      SUITE_PAREJA_ESTANDAR: {
        title: 'SUITE PAREJA ESTANDAR',
        photo: photo,
        description:
          'Las suites pareja estandard cuentan con cama doble. Amplias, acogedoras y llenas de luz natural, estas habitaciones ofrecen un espacio perfecto para tu estancia.',
        detailsUrl: '/',
        reserveUrl: '/',
        inverted: false,
        banner: photo,
        equipment: [
          ROOM_EQUIPMENTS.VAULT,
          ROOM_EQUIPMENTS.PARKING,
          ROOM_EQUIPMENTS.TV,
          ROOM_EQUIPMENTS.HOT_WATER,
          ROOM_EQUIPMENTS.OPTIC_FIBER,
        ],
      },
      SUITE_CUADRUPLE_ESTANDAR: {
        title: 'SUITE CUADRUPLE ESTANDAR',
        photo: photo,
        description:
          'Experimenta la comodidad de la suite cuádruple con 2 camas dobles. Son espaciosas y rebosan de luz natural, lo que te brindará un ambiente agradable durante tu estancia.',
        detailsUrl: '/',
        reserveUrl: '/',
        inverted: true,
        banner: photo,
        equipment: [
          ROOM_EQUIPMENTS.VAULT,
          ROOM_EQUIPMENTS.PARKING,
          ROOM_EQUIPMENTS.TV,
          ROOM_EQUIPMENTS.HOT_WATER,
          ROOM_EQUIPMENTS.OPTIC_FIBER,
        ],
      },
      SUITE_FAMILIAR_CONNECTING: {
        title: 'SUITE FAMILIAR CONECTING',
        photo: photo,
        description:
          'Dos habitaciones contiguas, cada una con dos camas king-size una opción ideal para familias o grupos que desean estar juntos pero con la privacidad de habitaciones separadas.',
        detailsUrl: '/',
        reserveUrl: '/',
        inverted: false,
        banner: photo,
        equipment: [
          ROOM_EQUIPMENTS.VAULT,
          ROOM_EQUIPMENTS.PARKING,
          ROOM_EQUIPMENTS.TV,
          ROOM_EQUIPMENTS.HOT_WATER,
          ROOM_EQUIPMENTS.OPTIC_FIBER,
        ],
      },
    },
  },
};
