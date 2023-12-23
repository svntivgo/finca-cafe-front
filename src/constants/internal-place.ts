import restaurante from '../assets/places/restaurant.jpg';
import menuRestaurante from '../assets/menus/pdf/restaurante-menu-mirador-del-cafe.pdf';
import piqueteadero from '../assets/places/piqueteadero.jpg';
import menuPiqueteadero from '../assets/menus/pdf/piqueteadero-menu-mirador-del-cafe.pdf';
import bar from '../assets/places/bar.jpg';
import menuBar from '../assets/menus/pdf/bar-menu-mirador-del-cafe.pdf';
import cafe from '../assets/places/cafe.jpg';
import menuCafe from '../assets/menus/pdf/cafe-menu-mirador-del-cafe.pdf';
import { InternalPlaceProps } from '../components/organisms/internal-place/interfaces';

type Internals = 'RESTAURANT' | 'PIQUETEADERO' | 'BAR' | 'CAFE';
type InternalPlace = Record<Internals, InternalPlaceProps>;

export const INTERNAL_PLACE: InternalPlace = {
  RESTAURANT: {
    photo: restaurante,
    title: 'RESTAURANTE',
    description:
      'La excelencia culinaria ha sido durante mucho tiempo parte de la experiencia del mirador Finca del café. Desde cenas elegantes hasta bistrós relajados, nuestras innovadoras preparaciones gastronómicos le ofrecerán algunos de los sabores más extraordinarios del mundo. Nuestro talentoso equipo de chefs está comprometido en brindar sabores auténticos y deliciosos en cada plato que servimos. Exploramos una amplia variedad de platos inspirados en la cocina local e internacional, utilizando ingredientes frescos y de temporada para ofrecer una experiencia culinaria de primer nivel.',
    contact: '',
    menu: menuRestaurante,
  },
  PIQUETEADERO: {
    photo: piqueteadero,
    title: 'PIQUETEADERO',
    description:
      'La excelencia culinaria ha sido durante mucho tiempo parte de la experiencia del mirador Finca del café. Desde cenas elegantes hasta bistrós relajados, nuestras innovadoras preparaciones gastronómicos le ofrecerán algunos de los sabores más extraordinarios del mundo. Nuestro talentoso equipo de chefs está comprometido en brindar sabores auténticos y deliciosos en cada plato que servimos. Exploramos una amplia variedad de platos inspirados en la cocina local e internacional, utilizando ingredientes frescos y de temporada para ofrecer una experiencia culinaria de primer nivel.',
    contact: '',
    menu: menuPiqueteadero,
  },
  BAR: {
    photo: bar,
    title: 'BAR',
    description:
      'Sumérgete en la atmósfera vibrante de nuestro bar, un lugar diseñado para aquellos que buscan experiencias auténticas, cócteles excepcionales y un ambiente inigualable. *2x1 Gin Tonic & Cocktail de martes a sabado de 3pm a 7pm',
    contact: '',
    menu: menuBar,
  },
  CAFE: {
    photo: cafe,
    title: 'CAFÉ',
    description:
      '¡Bienvenido a nuestro acogedor rincón del café, donde los aromas exquisitos y los sabores cautivadores se fusionan para ofrecerte una experiencia única! nos dedicamos a crear momentos especiales a través de la magia de una buena taza de café.',
    contact: '',
    menu: menuCafe,
  },
};
