import photo from '../assets/habitaciones/bourbon.png';
import SuiteJaccuzzi from '../assets/rooms/suite-jacuzzi/room.jpg';
import StandardTwin from '../assets/rooms/standard-twin/room.jpg';
import SuitePareja from '../assets/rooms/suite-pareja/room.jpg';
import SuiteCuadruple from '../assets/rooms/suite-cuadruple/room.jpg';
import SuiteFamiliar from '../assets/rooms/suite-familiar/room.jpg';
import { ROOM_EQUIPMENTS, RoomEquipment } from './room-equipments';

export interface Room {
  title: string;
  photo: string;
  description: string;
  detailsUrl: string;
  reserveUrl: string;
  inverted: boolean;
  banner: string;
  equipment: RoomEquipment[];
  hotel: HotelKey;
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
        photo: SuiteJaccuzzi,
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
        hotel: 'BOURBON',
      },
      ESTANDAR_TWIN: {
        title: 'SUITE ESTANDAR TWIN',
        photo: StandardTwin,
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
        hotel: 'BOURBON',
      },
    },
  },
  TIPICA: {
    NAME: 'Tipica',
    DESCRIPTION:
      'Ubicado junto a una finca cafetera tradicional con acceso a los cultivos donde nace nuestro café, nuestro alojamiento tradicional es perfecto para extranjeros y nacionales que desean conocer la cultura cafetera y una estadia tradicional con todo el confort de sus habitaciones y espacios',
    ROOMS: {
      SUITE_PAREJA_ESTANDAR: {
        title: 'PAREJA ESTANDAR',
        photo: SuitePareja,
        description:
          'Las habitaciones pareja estandard cuentan con cama doble. Amplias, acogedoras y llenas de luz natural, estas habitaciones ofrecen un espacio perfecto para tu estancia.',
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
        hotel: 'TIPICA',
      },
      SUITE_CUADRUPLE_ESTANDAR: {
        title: 'CUADRUPLE ESTANDAR',
        photo: SuiteCuadruple,
        description:
          'Experimenta la comodidad de la habitación cuádruple con 2 camas dobles. Son espaciosas y rebosan de luz natural, lo que te brindará un ambiente agradable durante tu estancia.',
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
        hotel: 'TIPICA',
      },
      SUITE_FAMILIAR_CONNECTING: {
        title: 'FAMILIAR CONNECTING',
        photo: SuiteFamiliar,
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
        hotel: 'TIPICA',
      },
    },
  },
};
