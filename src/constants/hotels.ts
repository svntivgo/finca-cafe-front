import photo from '../assets/habitaciones/bourbon.png';
import SuiteJaccuzzi from '../assets/rooms/suite-jacuzzi/room.jpg';
import StandardTwin from '../assets/rooms/standard-twin/room.jpg';
import SuitePareja from '../assets/rooms/suite-pareja/room.jpg';
import SuiteCuadruple from '../assets/rooms/suite-cuadruple/room.jpg';
import SuiteFamiliar from '../assets/rooms/suite-familiar/room.jpg';
import { ROOM_EQUIPMENTS, RoomEquipment } from './room-equipments';
import {
  GALLERY_CUADRUPLE_STANDARD,
  GALLERY_FAMILIAR_CONNECTING,
  GALLERY_PAREJA_STANDARD,
  GALLERY_STANDARD_TWIN,
  GALLERY_SUITE_JACUZZI,
  IGallery,
} from './gallery';

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
  photos: IGallery[];
}

export interface Hotel {
  NAME: string;
  DESCRIPTION: string;
  ROOMS: Record<string, Room>;
}

export type HotelKey = 'BOURBON' | 'TYPICA';
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
      'La mezcla del lujo contemporáneo con la inspiración del encanto característico de las haciendas cafeteras. Bourbon está especialmente diseñado y equipado para estadías de placer, negocios y bodas.',
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
        photos: GALLERY_SUITE_JACUZZI,
      },
      ESTANDAR_TWIN: {
        title: 'ESTÁNDAR TWIN',
        photo: StandardTwin,
        description:
          'Las habitaciones estándar twin Bourbon cuentan con cama doble. Amplias, acogedoras y llenas de luz natural, estas habitaciones ofrecen un refugio perfecto para tu estancia.',
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
        photos: GALLERY_STANDARD_TWIN,
      },
    },
  },
  TYPICA: {
    NAME: 'Typica',
    DESCRIPTION:
      'Ubicado junto a una finca cafetera tradicional con acceso a los cultivos donde nace nuestro café, nuestro alojamiento tradicional es perfecto para extranjeros y nacionales que desean conocer la cultura cafetera y una estadía tradicional con todo el confort de sus habitaciones y espacios',
    ROOMS: {
      PAREJA_ESTANDAR: {
        title: 'PAREJA ESTÁNDAR',
        photo: SuitePareja,
        description:
          'Las habitaciones pareja estándar cuentan con cama doble. Amplias, acogedoras y llenas de luz natural, estas habitaciones ofrecen un espacio perfecto para tu estancia.',
        detailsUrl: '/',
        reserveUrl: '/',
        inverted: false,
        banner: photo,
        equipment: [
          ROOM_EQUIPMENTS.VAULT,
          ROOM_EQUIPMENTS.PARKING,
          ROOM_EQUIPMENTS.HOTEL_INSURANCE,
          ROOM_EQUIPMENTS.COFFE_OPEN_BAR,
          ROOM_EQUIPMENTS.POOL,
          ROOM_EQUIPMENTS.TV,
          ROOM_EQUIPMENTS.HOT_WATER,
          ROOM_EQUIPMENTS.OPTIC_FIBER,
        ],
        hotel: 'TYPICA',
        photos: GALLERY_PAREJA_STANDARD,
      },
      CUADRUPLE_ESTANDAR: {
        title: 'CUÁDRUPLE ESTÁNDAR',
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
          ROOM_EQUIPMENTS.HOTEL_INSURANCE,
          ROOM_EQUIPMENTS.COFFE_OPEN_BAR,
          ROOM_EQUIPMENTS.POOL,
          ROOM_EQUIPMENTS.TV,
          ROOM_EQUIPMENTS.HOT_WATER,
          ROOM_EQUIPMENTS.OPTIC_FIBER,
        ],
        hotel: 'TYPICA',
        photos: GALLERY_CUADRUPLE_STANDARD,
      },
      FAMILIAR_CONNECTING: {
        title: 'FAMILIAR CONNECTING',
        photo: SuiteFamiliar,
        description:
          'Dos habitaciones contiguas, cada una con dos camas dobles, una opción ideal para familias o grupos que desean estar juntos pero con la privacidad de habitaciones separadas.',
        detailsUrl: '/',
        reserveUrl: '/',
        inverted: false,
        banner: photo,
        equipment: [
          ROOM_EQUIPMENTS.VAULT,
          ROOM_EQUIPMENTS.PARKING,
          ROOM_EQUIPMENTS.HOTEL_INSURANCE,
          ROOM_EQUIPMENTS.COFFE_OPEN_BAR,
          ROOM_EQUIPMENTS.POOL,
          ROOM_EQUIPMENTS.TV,
          ROOM_EQUIPMENTS.HOT_WATER,
          ROOM_EQUIPMENTS.OPTIC_FIBER,
        ],
        hotel: 'TYPICA',
        photos: GALLERY_FAMILIAR_CONNECTING,
      },
    },
  },
};
