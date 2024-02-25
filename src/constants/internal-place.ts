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
      'La excelencia culinaria ha sido durante mucho tiempo parte de la experiencia del Mirador Del Café. Desde cenas elegantes hasta bistrós relajados, nuestras innovadoras preparaciones gastronómicas le ofrecerán algunos de los sabores más extraordinarios del mundo. Nuestro talentoso equipo de chefs está comprometido en brindar sabores auténticos y deliciosos en cada plato que servimos. Exploramos una amplia variedad de platos inspirados en la cocina local e internacional, utilizando ingredientes frescos y de temporada para ofrecer una experiencia culinaria de primer nivel.',
    menu: menuRestaurante,
  },
  PIQUETEADERO: {
    photo: piqueteadero,
    title: 'PIQUETEADERO',
    description:
      'Los fines de semana mereces darte el placer de la música en vivo, el aire fresco y la picada 100% parrilla que solo el #MiradorDelCafé sabe hacer. Nuestro piqueteadero es el lugar perfecto para disfrutar en compañía de amigos y familiares. Sumérgete en un ambiente acogedor y familiar, donde cada rincón está diseñado para vibrar con la música y el paisaje de nuestras montañas. \n *Disponible para eventos corporativos',
    menu: menuPiqueteadero,
  },
  BAR: {
    photo: bar,
    title: 'BAR',
    description:
      'Sumérgete en la atmósfera vibrante de nuestro bar, un lugar diseñado para aquellos que buscan experiencias auténticas, cócteles excepcionales y un ambiente inigualable. *2x1 Gin Tonic & Cocktail de martes a sábado de 3pm a 7pm',
    menu: menuBar,
  },
  CAFE: {
    photo: cafe,
    title: 'CAFÉ',
    description:
      '¡Bienvenido a nuestro acogedor rincón del café, donde los aromas exquisitos y los sabores cautivadores se fusionan para ofrecerte una experiencia única! creamos momentos especiales a través de la magia de una buena taza de café.',
    menu: menuCafe,
  },
};
