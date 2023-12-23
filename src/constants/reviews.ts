import spain from '../assets/flags/spain-flag.svg';
import chile from '../assets/flags/chile-flag.svg';
import uk from '../assets/flags/uk-flag.svg';

interface IReviews {
  user: string;
  review: string;
  flag: string;
}

export const REVIEWS: IReviews[] = [
  {
    user: 'Carmelawar',
    review: `"La familia que lo regenta, son encantadores.
    También la habitación y las camas, fueron las
    más cómodas de todo el viaje. Las vistas son
    espectaculares y el tour del café muy
    instructivo"`,
    flag: spain,
  },
  {
    user: 'Daniel',
    review: `Excelente lugar , hermoso, habitación amplia , todo muy limpio, muy buen desayuno .. excelente atención de Adriana y Fernando , siempre atentos y cálidos ... El tour cafetero super entretenido y didáctico !! recomiendo 100 %"`,
    flag: chile,
  },
  {
    user: 'Juliette',
    review: `"I honestly didn’t want to leave this hotel, it is a home away from home where the staff make you feel so welcome. The surrounding area is beautiful, peaceful, and the hotel facilities are excellent with pool and jacuzzi."`,
    flag: uk,
  },
];
