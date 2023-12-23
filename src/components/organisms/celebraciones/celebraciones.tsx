import React from 'react';
import { Banner, Button, Icon, Text } from '../../atoms';
import {
  CelebrationsPhotoContainerStyled,
  CelebrationsPhotoDescriptionContainerStyled,
  StyledCelebrationsContainer,
} from '..';
import { COLORS } from '../../../constants/colors';
import { Link } from 'react-router-dom';
import HallBanner from '../../../assets/celebraciones/hall-banner.jpg';
import LogoBlack from '../../../assets/logo-finca-circulo-negro.svg';

export const Celebraciones: React.FC = () => {
  return (
    <>
      <Banner height="500px" image={HallBanner} />
      <StyledCelebrationsContainer>
        <Icon src={LogoBlack} width="10rem" />
        <Text
          text="CELEBRA A LO GRANDE"
          align="center"
          font="Royale"
          color={COLORS.GOLD}
          size="2rem"
          weight="800"
        />
        <Text
          text="Nos especializamos en planificar, crear y
            ejecutar experiencias únicas y memorables
            para que el evento de tus sueños se convierta
            en una extraordinaria realidad. La Finca del
            Café ofrece el entorno más acogedor para tu
            ocación especial."
          color={COLORS.PEARL_BLACK}
          weight="200"
          align="justify"
        />
        <CelebrationsPhotoContainerStyled>
          {/* <Banner image={HallGoldChairs} height="500px" /> */}
          <CelebrationsPhotoDescriptionContainerStyled>
            <Text
              text="Eventos"
              align="left"
              font="Poppins"
              color={COLORS.GOLD}
              size="1.5rem"
            />
            <Text
              text="Contamos con una increíble selección de
              lugares que se ajustan a tus
              necesidades, como nuestro restaurante,
              piquetadero, lobbie, habitaciones y
              suites, todos los cuales pueden ser
              adaptados y reservados de forma
              privada para eventos como lanzamientos
              de productos, cenas privadas, eventos
              corporativos o bodas."
              align="left"
              font="Poppins"
              color={COLORS.WHITE}
              size="1rem"
            />
            <Link to={''}>
              <Button
                text="Solicitar propuesta"
                colors={COLORS.CREAM}
                font={COLORS.PEARL_BLACK}
                weight={600}
                fontSize="0.7rem"
                margin="16px 0 0 0"
                radius="8px"
              />
            </Link>
          </CelebrationsPhotoDescriptionContainerStyled>
        </CelebrationsPhotoContainerStyled>
        <Text
          text="PLANIFICACIÓN PERFECTA"
          align="center"
          font="Royale"
          color={COLORS.GOLD}
          size="2rem"
          weight="800"
        />
      </StyledCelebrationsContainer>
    </>
  );
};
