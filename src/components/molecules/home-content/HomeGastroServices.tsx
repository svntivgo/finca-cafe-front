import React from 'react';
import {
  GastronomyPhotoContainer,
  HomeLogoMiradorContainer,
  HomeServicesContainer,
} from '.';
import {
  ImageDescriptionButton,
  Image,
  Paragraph,
  BOLD_FONT_STYLE,
} from '../../atoms';
import RestaurantePhoto from '../../../assets/home/restaurante.jpg';
import PiqueteaderoPhoto from '../../../assets/home/piqueteadero.jpg';
import CafePhoto from '../../../assets/home/cafe.jpg';
import BarPhoto from '../../../assets/home/bar.jpg';
import GastronomyPhoto from '../../../assets/home/gastronomia.jpg';
import LogoMirador from '../../../assets/logo-mirador-cafe.svg';

export const HomeGastroServices: React.FC = () => {
  const services = [
    {
      photo: RestaurantePhoto,
      width: '100%',
      title: 'RESTAURANTE',
      onClick: '/restaurante',
    },
    {
      photo: PiqueteaderoPhoto,
      width: '100%',
      title: 'PIQUETEADERO',
      onClick: '/piqueteadero',
    },
    {
      photo: CafePhoto,
      width: '100%',
      title: 'CAFÉ',
      onClick: '/cafe',
    },
    {
      photo: BarPhoto,
      width: '100%',
      title: 'BAR',
      onClick: '/bar',
    },
  ];

  return (
    <HomeServicesContainer style={{ marginTop: '32px' }}>
      <GastronomyPhotoContainer>
        <Image
          src={GastronomyPhoto}
          alt="Mirador del café desde el aire"
          width="100%"
        />
      </GastronomyPhotoContainer>
      <HomeLogoMiradorContainer>
        <Image src={LogoMirador} width="150px" />
      </HomeLogoMiradorContainer>
      <Paragraph
        style={{
          ...BOLD_FONT_STYLE,
          fontFamily: 'Royale',
          fontSize: '2rem',
          marginTop: '32px',
          textAlign: 'center',
        }}
        text="GASTRONOMÍA"
      />
      {services.map((service, i) => (
        <ImageDescriptionButton
          key={`image-description-button-${i}`}
          photo={service.photo}
          width={service.width}
          title={service.title}
          onClick={service.onClick}
        />
      ))}
    </HomeServicesContainer>
  );
};
