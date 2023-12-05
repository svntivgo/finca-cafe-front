import photo from '../assets/habitaciones/bourbon.png';
import SuiteJaccuzzi from '../assets/rooms/suite-jacuzzi/room.jpg';
import StandardTwin from '../assets/rooms/standard-twin/room.jpg';
import SuitePareja from '../assets/rooms/suite-pareja/room.jpg';
import SuiteCuadruple from '../assets/rooms/suite-cuadruple/room.jpg';
import SuiteFamiliar from '../assets/rooms/suite-familiar/room.jpg';
import { ROOM_EQUIPMENTS, RoomEquipment } from './room-equipments';

export interface Room {
  description: string;
  detailsUrl: string;
  inverted?: boolean;
  photo: string;
  reserveUrl: string;
  title: string;
  hotel: {
    name: string;
    description: string;
  };
  banner: string;
  equipment: RoomEquipment[];
  price: number;
}

const HOTELS = {
  BOURBON: {
    NAME: 'Bourbon',
    DESCRIPTION:
      'La mezcla del lujo contemporaneo con la inspiración del encanto característico de las haciendas cafeteras. Bourbon está especialmente diseñado y equipado para estadías de placer, negocios y bodas.',
  },
  TIPICA: {
    NAME: 'Tipica',
    DESCRIPTION:
      'Ubicado junto a una finca cafetera tradicional con acceso a los cultivos donde nace nuestro café, nuestro alojamiento tradicional es perfecto para extranjeros y nacionales que desean conocer la cultura cafetera y una estadia tradicional con todo el confort de sus habitaciones y espacios',
  },
};

export const ROOMS_BOURBON: Room[] = [
  {
    title: 'SUITE Jacuzzi',
    photo: SuiteJaccuzzi,
    description:
      'La suite Bourbon es perfecta para parejas que buscan una escapada romántica y un alojamiento lujoso y relajante. Ideal para cualquier persona que valore la comodidad y el bienestar',
    detailsUrl: '/',
    reserveUrl: '/',
    inverted: true,
    hotel: {
      name: HOTELS.BOURBON.NAME,
      description: HOTELS.BOURBON.DESCRIPTION,
    },
    banner: photo,
    equipment: [
      ROOM_EQUIPMENTS.VAULT,
      ROOM_EQUIPMENTS.PARKING,
      ROOM_EQUIPMENTS.TV,
      ROOM_EQUIPMENTS.JACUZZI,
      ROOM_EQUIPMENTS.HOT_WATER,
      ROOM_EQUIPMENTS.OPTIC_FIBER,
    ],
    price: 773500,
  },
  {
    title: 'SUITE ESTANDAR TWIN',
    photo: StandardTwin,
    description:
      'Las habitaciones estandard twin Bourbon cuentan con cama doble. Amplias, acogedoras y llenas de luz natural, estas habitaciones ofrecen un refugio perfecto para tu estancia.',
    detailsUrl: '/',
    reserveUrl: '/',
    inverted: false,
    hotel: {
      name: HOTELS.BOURBON.NAME,
      description: HOTELS.BOURBON.DESCRIPTION,
    },
    banner: photo,
    equipment: [
      ROOM_EQUIPMENTS.VAULT,
      ROOM_EQUIPMENTS.PARKING,
      ROOM_EQUIPMENTS.TV,
      ROOM_EQUIPMENTS.JACUZZI,
      ROOM_EQUIPMENTS.HOT_WATER,
      ROOM_EQUIPMENTS.OPTIC_FIBER,
    ],
    price: 476000,
  },
];

export const ROOMS_TIPICA: Room[] = [
  {
    title: 'PAREJA ESTANDAR',
    photo: SuitePareja,
    description:
      'Las habitaciones pareja estandard cuentan con cama doble. Amplias, acogedoras y llenas de luz natural, estas habitaciones ofrecen un espacio perfecto para tu estancia.',
    detailsUrl: '/',
    reserveUrl: '/',
    inverted: false,
    hotel: {
      name: HOTELS.TIPICA.NAME,
      description: HOTELS.TIPICA.DESCRIPTION,
    },
    banner: photo,
    equipment: [
      ROOM_EQUIPMENTS.VAULT,
      ROOM_EQUIPMENTS.PARKING,
      ROOM_EQUIPMENTS.TV,
      ROOM_EQUIPMENTS.HOT_WATER,
      ROOM_EQUIPMENTS.OPTIC_FIBER,
    ],
    price: 476000,
  },
  {
    title: 'CUADRUPLE ESTANDAR',
    photo: SuiteCuadruple,
    description:
      'Experimenta la comodidad de la habitación cuádruple con 2 camas dobles. Son espaciosas y rebosan de luz natural, lo que te brindará un ambiente agradable durante tu estancia.',
    detailsUrl: '/',
    reserveUrl: '/',
    inverted: true,
    hotel: {
      name: HOTELS.TIPICA.NAME,
      description: HOTELS.TIPICA.DESCRIPTION,
    },
    banner: photo,
    equipment: [
      ROOM_EQUIPMENTS.VAULT,
      ROOM_EQUIPMENTS.PARKING,
      ROOM_EQUIPMENTS.TV,
      ROOM_EQUIPMENTS.HOT_WATER,
      ROOM_EQUIPMENTS.OPTIC_FIBER,
    ],
    price: 714000,
  },
  {
    title: 'FAMILIAR CONNECTING',
    photo: SuiteFamiliar,
    description:
      'Dos habitaciones contiguas, cada una con dos camas king-size una opción ideal para familias o grupos que desean estar juntos pero con la privacidad de habitaciones separadas.',
    detailsUrl: '/',
    reserveUrl: '/',
    inverted: false,
    hotel: {
      name: HOTELS.TIPICA.NAME,
      description: HOTELS.TIPICA.DESCRIPTION,
    },
    banner: photo,
    equipment: [
      ROOM_EQUIPMENTS.VAULT,
      ROOM_EQUIPMENTS.PARKING,
      ROOM_EQUIPMENTS.TV,
      ROOM_EQUIPMENTS.HOT_WATER,
      ROOM_EQUIPMENTS.OPTIC_FIBER,
    ],
    price: 1071000,
  },
];
