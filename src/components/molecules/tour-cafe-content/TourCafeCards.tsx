import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TourCafeCardsContainerStyled } from '.';
import CulturaMagica from '../../../assets/tour-cafe/cultura-magica.jpg';
import Descubre from '../../../assets/tour-cafe/descubre.jpg';
import Recorre from '../../../assets/tour-cafe/recorre.jpg';
import Prepara from '../../../assets/tour-cafe/prepara.jpg';
import { CelebracionesCard } from '..';

export const TourCafeCards: React.FC = () => {
  const cardInfo = [
    {
      extended: true,
      button: true,
      onClick: () => changeRoute(),
      photo: CulturaMagica,
      width: '100%',
      title: 'Sumérgete en nuestras montañas',
      text: 'Una experiencia auténtica, donde conoces el proceso del café sustentable desde la semilla hasta el paladar. Al iniciar el recorrido recibes sombrero, poncho y canasto, accesorios propios de la cultura cafetera, para luego ir a través de estaciones mientras caminas por senderos seguros, rodeados de flores y árboles frutales y recolectas manualmente el grano maduro de nuestros cafetales, como lo hacen día a día los recolectores en una finca productiva del Paisaje Cultural Cafetero.',
    },
    {
      extended: false,
      button: false,
      onClick: () => ({}),
      photo: Descubre,
      width: '100%',
      title: 'Descubre',
      text: 'Conocerás el almácigo osemillero, donde te enseñamos la forma como se germina la semilla del café hasta transformarse en una planta joven lista para ser sembrada en el cafetal. Posteriormente ingresas a nuestro innovador Secador Solar Parabólico, donde te enseñamos las diferentes formas de secar el café',
    },
    {
      extended: false,
      button: false,
      onClick: () => ({}),
      photo: Recorre,
      width: '100%',
      title: 'Recorre',
      text: 'Atravesarás un bosque de guadua o bambú donde escucharás los sonidos de ranas, aves y de un pequeño riachuelo. Con esta misma guadua cultivada en nuestra finca, construimos puentes y miradores donde respiras, descansas y contemplas el verde paisaje cafetero..',
    },
    {
      extended: false,
      button: false,
      onClick: () => ({}),
      photo: Prepara,
      width: '100%',
      title: 'Prepara',
      text: 'Ingresarás a una casa típica campesina donde una mujer caficultora o “chapolera” te enseñará a procesar el café que recolectaste durante el recorrido. Tuestas el grano seco en un fogón de leña y lo mueles a la usanza de las abuelas para finalmente filtrarlo, servirlo y disfrutarlo.',
    },
  ];
  const navigate = useNavigate();
  const changeRoute = () => {
    navigate('/tour-cafe-reservation');
  };

  return (
    <TourCafeCardsContainerStyled>
      {cardInfo.map((info, i) => (
        <CelebracionesCard
          key={`tour-cafe-card-${i}`}
          extended={info.extended}
          button={info.button}
          onClick={info.onClick}
          photo={info.photo}
          width={info.width}
          title={info.title}
          text={info.text}
        />
      ))}
    </TourCafeCardsContainerStyled>
  );
};
