import boda_1 from '../assets/home/boda.jpg';
import boda_2 from '../assets/home/boda-1.jpg';
import boda_3 from '../assets/home/boda-2.jpg';
import boda_4 from '../assets/home/boda-3.jpg';

interface IGallery {
  photo: string;
  title: string;
  text: string;
}

export const GALLERY: IGallery[] = [
  {
    photo: boda_1,
    title: 'EL AMOR SE CELEBRA A LO GRANDE',
    text: 'Hacemos de tu boda el sueño que siempre vas recordar',
  },
  {
    photo: boda_2,
    title: 'EL AMOR SE CELEBRA A LO GRANDE',
    text: 'Hacemos de tu boda el sueño que siempre vas recordar',
  },
  {
    photo: boda_3,
    title: 'EL AMOR SE CELEBRA A LO GRANDE',
    text: 'Hacemos de tu boda el sueño que siempre vas recordar',
  },
  {
    photo: boda_4,
    title: 'EL AMOR SE CELEBRA A LO GRANDE',
    text: 'Hacemos de tu boda el sueño que siempre vas recordar',
  },
];
