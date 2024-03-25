import React from 'react';
import { HotelsCardsContainerStyled } from '.';
import { CelebracionesCard } from '..';
import CulturaMagica from '../../../assets/tour-cafe/cultura-magica.jpg';
import BourbonModelPhoto from '../../../assets/hoteles/modelo.jpg';
import { openNewTab } from '../../../shared/helper/open-new-tab';

export const HotelsCards: React.FC = () => {
  const cardsInfo = [
    {
      extended: true,
      button: true,
      onClick: () =>
        openNewTab('https://api.whatsapp.com/send?phone=573183866398'),
      photo: BourbonModelPhoto,
      width: '100%',
      title: 'Reserva tu momento de placer',
      text: 'Si el plan que tienes en mente es pasar un día de energía renovadora, nuestros jacuzzi Bourbon son el espacio perfecto para vivir el presente en medio del paraíso cafetero de nuestras montañas, nuestras habitaciones también cuentan con un jacuzzi camas King, sabanas de lujo y una vista desde tu propio balcón que te permitirá conectar de nuevo con tu paz interior.',
    },
    {
      extended: true,
      button: true,
      onClick: () =>
        openNewTab('https://api.whatsapp.com/send?phone=573183866398'),
      photo: CulturaMagica,
      width: '100%',
      title: 'Sumérgete en nuestras montañas',
      text: 'Una experiencia auténtica, donde conoces el proceso del café sustentable desde la semilla hasta el paladar. Al iniciar el recorrido recibes sombrero, poncho y canasto, accesorios propios de la cultura cafetera, para luego ir a través de estaciones mientras caminas por senderos seguros, rodeados de flores y árboles frutales y recolectas manualmente el grano maduro de nuestros cafetales, como lo hacen día a día los recolectores en una finca productiva del Paisaje Cultural Cafetero.',
    },
  ];
  return (
    <HotelsCardsContainerStyled>
      {cardsInfo.map((info, i) => (
        <CelebracionesCard
          key={`hotels-cards-${i}`}
          extended={info.extended}
          button={info.button}
          onClick={info.onClick}
          photo={info.photo}
          width={info.width}
          title={info.title}
          text={info.text}
        />
      ))}
    </HotelsCardsContainerStyled>
  );
};
