import React from 'react';
import { HomeServicesContainer } from '.';
import { ImageDescription } from '../../atoms';
import TourCafePhoto from '../../../assets/home/tour-cafe.jpg';
import MiradorCafePhoto from '../../../assets/home/mirador-cafe.jpg';
import HotelPhoto from '../../../assets/home/hotel.jpg';

export const HomeServices: React.FC = () => {
  const services = [
    {
      photo: TourCafePhoto,
      width: '100%',
      title: 'TOUR DEL CAFÉ',
      description: 'DESCUBRE LA MAGIA DEL CAFÉ MÁS FAMOSO DEL MUNDO',
      goTo: '/tour-cafe',
    },
    {
      photo: MiradorCafePhoto,
      width: '100%',
      title: 'MIRADOR DEL CAFÉ',
      description: 'RESTAURANTE · BAR · CAFÉ · PIQUETAEDERO · EVENTOS',
      goTo: '/mirador-cafe',
    },
    {
      photo: HotelPhoto,
      width: '100%',
      title: 'HOTELES',
      description: 'UN DISEÑO VIBRANTE EN EL CORAZÓN DE LAS MONTAÑAS CAFETERAS',
      goTo: '/hoteles',
    },
  ];

  return (
    <HomeServicesContainer>
      {services.map((service, i) => (
        <ImageDescription
          key={`home-service-image-${i}`}
          photo={service.photo}
          width={service.width}
          title={service.title}
          description={service.description}
          goTo={service.goTo}
        />
      ))}
    </HomeServicesContainer>
  );
};
