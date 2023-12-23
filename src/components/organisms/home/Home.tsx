import React from 'react';
import {
  GastronomyPhotoContainer,
  HomeContainerStyled,
  HomeLogoMiradorContainer,
  HomePhotoDescriptionContainer,
  ReviewsContainer,
  StyledBanner,
  VideoContainer,
} from './styles';
import {
  ReservationHome,
  HomeDescription,
  PhotoDescription,
  BookingReview,
  Reviews,
  HomeGallery,
  GastroPhoto,
  HomeSpanStyled,
} from '../../molecules';
import { openNewTab } from '../../../shared/helper/open-new-tab';
import { Icon, Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import TourCafePhoto from '../../../assets/home/tour-cafe.jpg';
import MiradorCafePhoto from '../../../assets/home/mirador-cafe.jpg';
import HotelPhoto from '../../../assets/home/hotel.jpg';
import RestaurantePhoto from '../../../assets/home/restaurante.jpg';
import PiqueteaderoPhoto from '../../../assets/home/piqueteadero.jpg';
import CafePhoto from '../../../assets/home/cafe.jpg';
import BarPhoto from '../../../assets/home/bar.jpg';
import GastronomyPhoto from '../../../assets/home/gastronomia.jpg';
import LogoMirador from '../../../assets/logo-mirador-cafe.svg';
import { ContactForm } from '..';

export const Home: React.FC = () => {
  return (
    <HomeContainerStyled>
      <StyledBanner />
      <ReservationHome />
      <HomeDescription />
      <HomePhotoDescriptionContainer>
        <PhotoDescription
          photo={TourCafePhoto}
          width="100%"
          title="TOUR DEL CAFÉ"
          description="DESCUBRE LA MAGÍA DEL CAFÉ MÁS FAMOSO DEL MUNDO"
          onClick={() => openNewTab('')}
        />
        <PhotoDescription
          photo={MiradorCafePhoto}
          width="100%"
          title="MIRADOR DEL CAFÉ"
          description="RESTAURANTE · BAR · CAFÉ · PIQUETAEDERO · EVENTOS"
          onClick={() => openNewTab('')}
        />
        <PhotoDescription
          photo={HotelPhoto}
          width="100%"
          title="HOTEL"
          description="UN DISEÑO VIBRANTE EN EL CORAZÓN DE LAS MONTAÑAS CAFETERAS"
          onClick={() => openNewTab('')}
        />
      </HomePhotoDescriptionContainer>
      <ReviewsContainer>
        <Reviews />
        <BookingReview />
      </ReviewsContainer>
      <HomeGallery />
      <GastronomyPhotoContainer>
        <img
          src={GastronomyPhoto}
          alt="Mirador del café desde el aire"
          width="100%"
        />
      </GastronomyPhotoContainer>
      <HomeLogoMiradorContainer>
        <Icon src={LogoMirador} width="10rem" />
      </HomeLogoMiradorContainer>
      <HomeSpanStyled />
      <HomeSpanStyled />
      <Text
        text="GASTRONOMÍA"
        align="center"
        font="Royale"
        color={COLORS.PEARL_BLACK}
        size="2rem"
        weight="800"
      />
      <HomeSpanStyled />
      <HomeSpanStyled />
      <HomePhotoDescriptionContainer>
        <GastroPhoto
          photo={RestaurantePhoto}
          width="100%"
          title="RESTAURANTE"
          onClick="/restaurante"
        />
        <GastroPhoto
          photo={PiqueteaderoPhoto}
          width="100%"
          title="PIQUETEADERO"
          onClick="/piqueteadero"
        />
        <GastroPhoto
          photo={CafePhoto}
          width="100%"
          title="CAFÉ"
          onClick="/cafe"
        />
        <GastroPhoto photo={BarPhoto} width="100%" title="BAR" onClick="/bar" />
      </HomePhotoDescriptionContainer>
      <Text
        text="CONOCE MÁS"
        align="center"
        font="Royale"
        color={COLORS.PEARL_BLACK}
        size="2rem"
        weight="800"
      />
      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HoScQtCml8s?si=mRBKMliTNo5G7Xsb"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          allowFullScreen
        ></iframe>
      </VideoContainer>
      <ContactForm />
    </HomeContainerStyled>
  );
};
