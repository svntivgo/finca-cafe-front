import React, { useEffect, useState } from 'react';
import {
  HomeContainerStyled,
  HomeLogoMiradorContainer,
  StyledBanner,
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
import LogoMirador from '../../../assets/logo-mirador-cafe.svg';
import { HotelFive } from '../../../services';

export const Home: React.FC = () => {
  const [State, setState] = useState<unknown>([]);
  const hotel = new HotelFive();

  useEffect(() => {
    const fetchData = async () => {
      const rooms = await hotel.rooms();
      setState(rooms.data);
    };
    void fetchData();
  }, []);
  console.log(State);

  return (
    <HomeContainerStyled>
      <StyledBanner />
      <ReservationHome />
      <HomeDescription />
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
      <Reviews />
      <BookingReview />
      <HomeGallery />
      <HomeLogoMiradorContainer>
        <Icon src={LogoMirador} width="5rem" />
      </HomeLogoMiradorContainer>
      <HomeSpanStyled />
      <HomeSpanStyled />
      <Text
        text="GASTRONOMÍA"
        align="center"
        font="Royale"
        color={COLORS.PEARL_BLACK}
        size="1.5rem"
        weight="800"
      />
      <HomeSpanStyled />
      <HomeSpanStyled />
      <GastroPhoto
        photo={RestaurantePhoto}
        width="100%"
        title="RESTAURANTE"
        onClick={() => openNewTab('/mirador-del-cafe-carta-restaurante/')}
      />
      <GastroPhoto
        photo={PiqueteaderoPhoto}
        width="100%"
        title="PIQUETEADERO"
        onClick={() => openNewTab('/mirador-del-cafe-carta-piqueteadero/')}
      />
      <GastroPhoto
        photo={CafePhoto}
        width="100%"
        title="CAFÉ"
        onClick={() => openNewTab('/mirador-del-cafe-carta-cafe/')}
      />
      <GastroPhoto
        photo={BarPhoto}
        width="100%"
        title="BAR"
        onClick={() => openNewTab('/mirador-del-cafe-carta-bar/')}
      />
    </HomeContainerStyled>
  );
};
