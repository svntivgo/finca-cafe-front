import { RoomCardProps } from '../components/molecules';
import photo from '../assets/habitaciones/bourbon.png';
import { ROOM_EQUIPMENTS } from './room-equipments';

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

export const ROOMS_BOURBON: RoomCardProps[] = [
  {
    title: 'SUITE Jacuzzi',
    photo: photo,
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
  },
  {
    title: 'ESTANDAR TWIN',
    photo: photo,
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
  },
];

export const ROOMS_TIPICA: RoomCardProps[] = [
  {
    title: 'SUITE PAREJA ESTANDAR',
    photo: photo,
    description:
      'Las suites pareja estandard cuentan con cama doble. Amplias, acogedoras y llenas de luz natural, estas habitaciones ofrecen un espacio perfecto para tu estancia.',
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
  },
  {
    title: 'SUITE CUADRUPLE ESTANDAR',
    photo: photo,
    description:
      'Experimenta la comodidad de la suite cuádruple con 2 camas dobles. Son espaciosas y rebosan de luz natural, lo que te brindará un ambiente agradable durante tu estancia.',
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
  },
  {
    title: 'SUITE FAMILIAR CONECTING',
    photo: photo,
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
  },
];
