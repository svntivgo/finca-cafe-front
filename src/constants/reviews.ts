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
    flag: 'spain',
  },
  {
    user: '123',
    review: `":)"`,
    flag: 'spain',
  },
  {
    user: '456',
    review: `":)"`,
    flag: 'spain',
  },
];
