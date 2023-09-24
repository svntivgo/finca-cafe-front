import { RoomCardProps } from '../components/molecules';
import photo from '../assets/habitaciones/bourbon.png';

export const ROOMS_BOURBON: RoomCardProps[] = [
  {
    title: 'SUITE Jacuzzi',
    photo: photo,
    description:
      'La suite Bourbon es perfecta para parejas que buscan una escapada romántica y un alojamiento lujoso y relajante. Ideal para cualquier persona que valore la comodidad y el bienestar',
    detailsUrl: '/',
    reserveUrl: '/',
    inverted: true,
  },
  {
    title: 'ESTANDAR TWIN',
    photo: photo,
    description:
      'Las habitaciones estandard twin Bourbon cuentan con cama doble. Amplias, acogedoras y llenas de luz natural, estas habitaciones ofrecen un refugio perfecto para tu estancia.',
    detailsUrl: '/',
    reserveUrl: '/',
    inverted: false,
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
  },
  {
    title: 'SUITE CUADRUPLE ESTANDAR',
    photo: photo,
    description:
      'Experimenta la comodidad de la suite cuádruple con 2 camas dobles. Son espaciosas y rebosan de luz natural, lo que te brindará un ambiente agradable durante tu estancia.',
    detailsUrl: '/',
    reserveUrl: '/',
    inverted: true,
  },
  {
    title: 'SUITE FAMILIAR CONECTING',
    photo: photo,
    description:
      'Dos habitaciones contiguas, cada una con dos camas king-size una opción ideal para familias o grupos que desean estar juntos pero con la privacidad de habitaciones separadas.',
    detailsUrl: '/',
    reserveUrl: '/',
    inverted: false,
  },
];
