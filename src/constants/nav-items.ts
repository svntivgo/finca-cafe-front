import { MenuItemProps } from '../components/molecules';
import MiradorSVG from '../assets/navmenu/icono-mirador.svg';
import HabitacionesSVG from '../assets/navmenu/icono-habitaciones.svg';
import RestauranteSVG from '../assets/navmenu/icono-restaurante.svg';
import TourCafeSVG from '../assets/navmenu/icono-tour-del-cafe.svg';
// import CorporativoSVG from '../assets/navmenu/icono-corporativo.svg';
import CelebracionesSVG from '../assets/navmenu/icono-celebraciones.svg';
// import ContactoSVG from '../assets/navmenu/icono-corporativo.svg';
// import UbicacionSVG from '../assets/navmenu/icono-corporativo.svg';

export const NAV_ITEMS: MenuItemProps[] = [
  {
    path: '/mirador-cafe',
    src: MiradorSVG,
    text: 'Mirador del café',
    width: '24px',
  },
  {
    path: '/habitaciones',
    src: HabitacionesSVG,
    text: 'Habitaciones',
    width: '1.5rem',
  },
  {
    path: '/restaurante',
    src: RestauranteSVG,
    text: 'Restaurante',
    width: '1.5rem',
  },
  {
    path: '/piqueteadero',
    src: CelebracionesSVG,
    text: 'Piqueteadero',
    width: '1.5rem',
  },
  {
    path: '/bar',
    src: CelebracionesSVG,
    text: 'Bar',
    width: '1.5rem',
  },
  {
    path: '/cafe',
    src: TourCafeSVG,
    text: 'Café',
    width: '1.5rem',
  },
  {
    path: '/celebraciones',
    src: CelebracionesSVG,
    text: 'Celebraciones',
    width: '1.5rem',
  },
  {
    path: '/tour-cafe',
    src: TourCafeSVG,
    text: 'Tour del café',
    width: '1.5rem',
  },
  {
    path: '/hoteles',
    src: HabitacionesSVG,
    text: 'Hoteles',
    width: '1.5rem',
  },
  // {
  //   path: '/corporativo',
  //   src: CorporativoSVG,
  //   text: 'Corporativo',
  //   width: '1.5rem',
  // },
  // {
  //   path: '/contacto',
  //   src: ContactoSVG,
  //   text: 'Contacto',
  //   width: '1.5rem',
  // },
  // {
  //   path: '/ubicacion',
  //   src: UbicacionSVG,
  //   text: 'Ubicación',
  //   width: '1.5rem',
  // },
];
