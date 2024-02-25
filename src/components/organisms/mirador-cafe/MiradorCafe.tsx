import React from 'react';
import { Banner, Button, Icon, Text } from '../../atoms';
import {
  MiradorCafeDescriptionSpanStyled,
  MiradorCafeLogoContainerStyled,
  MiradorCafeSpanStyled,
  ContactForm,
  StyledMiradorCafeContainer,
  MiradorCafePhotoDescriptionContainerStyled,
  MiradorCafePhotoDescriptionTextContainerStyled,
  MiradorCafeDescriptionContainerStyled,
  MiradorCafeEventsContainerStyled,
  MiradorCafePhotoContainerStyled,
  MiradorCafePhotoTextDescriptionContainerStyled,
} from '..';
import { COLORS } from '../../../constants/colors';
import PhotoBanner from '../../../assets/mirador-cafe/banner.jpg';
import BarPhoto from '../../../assets/mirador-cafe/bar.jpg';
import CafePhoto from '../../../assets/mirador-cafe/cafe.jpg';
import ResturantPhoto from '../../../assets/mirador-cafe/restaurante.jpg';
import PiqueteaderoPhoto from '../../../assets/mirador-cafe/piquetadero.jpg';
import EventsPhoto from '../../../assets/mirador-cafe/experience.jpg';
import LogoFincaCafe from '../../../assets/logo-finca-circulo-negro.svg';
import { openNewTab } from '../../../shared/helper/open-new-tab';
import { Link } from 'react-router-dom';
import { CelebracionesContact } from '../../molecules';

export const MiradorCafe: React.FC = () => {
  return (
    <>
      <Banner height="800px" image={PhotoBanner} />
      <StyledMiradorCafeContainer>
        <MiradorCafeLogoContainerStyled>
          <Icon src={LogoFincaCafe} width="10rem" />
        </MiradorCafeLogoContainerStyled>
        <MiradorCafeSpanStyled />
        <Text
          text="EXPERIENCIAS GASTRONÓMICAS Y ENTRETENIMIENTO"
          align="center"
          font="Royale"
          color={COLORS.GOLD}
          size="2rem"
          weight="800"
        />
        <MiradorCafeSpanStyled />
        <MiradorCafeDescriptionSpanStyled>
          <Text
            text="Disfruta días de sol, aire puro y la mejor energía en nuestro Mirador del Café junto a
            tu familia y amigos. Poseemos 4 espacios dónde podrás disfrutar nuestra
            grastronomía, música en vivo o realizar tus celebraciones familiares o corporativas."
            color={COLORS.PEARL_BLACK}
            weight="200"
            align="justify"
          />
        </MiradorCafeDescriptionSpanStyled>
        <MiradorCafeSpanStyled />
        <MiradorCafeEventsContainerStyled>
          <MiradorCafePhotoTextDescriptionContainerStyled>
            <Text
              text="Eventos & Celebraciones"
              align="left"
              font="Poppins"
              color={COLORS.GOLD}
              size="2.5rem"
              weight="300"
            />
            <MiradorCafeSpanStyled />
            <Text
              text="Contamos con una increíble selección de lugares que se
                ajustan a tus necesidades, como nuestro restaurante,
                piquetadero, lobbie, habitaciones y suites, todos los
                cuales pueden ser adaptados y reservados de forma
                privada para eventos como lanzamientos de productos,
                cenas privadas, eventos corporativos, bodas y
                celebraciones familiares."
              align="left"
              font="Poppins"
              color={COLORS.WHITE}
              size="0.7rem"
              weight="200"
            />
            <MiradorCafeSpanStyled />
            <Button
              text="Solicitar propuesta"
              colors={COLORS.CREAM}
              font={COLORS.PEARL_BLACK}
              weight={600}
              fontSize="0.7rem"
              margin="16px 0 0 0"
              radius="8px"
              onCLick={() =>
                openNewTab('https://api.whatsapp.com/send?phone=573178000001')
              }
            />
          </MiradorCafePhotoTextDescriptionContainerStyled>
          <MiradorCafePhotoContainerStyled>
            <img src={EventsPhoto} width={'100%'} />
          </MiradorCafePhotoContainerStyled>
        </MiradorCafeEventsContainerStyled>
        <MiradorCafeSpanStyled />
        <MiradorCafeDescriptionContainerStyled>
          <MiradorCafePhotoDescriptionContainerStyled>
            <img src={ResturantPhoto} width={'100%'} />
            <MiradorCafePhotoDescriptionTextContainerStyled>
              <Text
                text={`RESTAURANTE`}
                align="center"
                font="Royale"
                size="1.5rem"
              />
              <Text
                text={'GASTRONOMÍA CREATIVA EN EL PAISAJE CAFETERO'}
                align="center"
                weight="200"
                size="0.7rem"
              />
            </MiradorCafePhotoDescriptionTextContainerStyled>
            <Link
              to={'/restaurante'}
              style={{ width: 'max-content', margin: '0 auto' }}
            >
              <Button
                colors={COLORS.PEARL_BLACK}
                text="Ver más"
                font="Poppins"
                fontSize="0.7rem"
                padding="0.25rem 0.5rem"
                radius="8px"
                margin="-8px auto 0 auto"
              />
            </Link>
          </MiradorCafePhotoDescriptionContainerStyled>
          <MiradorCafePhotoDescriptionContainerStyled>
            <img src={CafePhoto} width={'100%'} />
            <MiradorCafePhotoDescriptionTextContainerStyled>
              <Text text={`CAFÉ`} align="center" font="Royale" size="1.5rem" />
              <Text
                text={'DE NUESTRAS MONTAÑAS A TU MESA'}
                align="center"
                weight="200"
                size="0.7rem"
              />
            </MiradorCafePhotoDescriptionTextContainerStyled>
            <Link
              to={'/cafe'}
              style={{ width: 'max-content', margin: '0 auto' }}
            >
              <Button
                colors={COLORS.PEARL_BLACK}
                text="Ver más"
                font="Poppins"
                fontSize="0.7rem"
                padding="0.25rem 0.5rem"
                radius="8px"
                margin="-8px auto 0 auto"
              />
            </Link>
          </MiradorCafePhotoDescriptionContainerStyled>
          <MiradorCafePhotoDescriptionContainerStyled>
            <img src={BarPhoto} width={'100%'} />
            <MiradorCafePhotoDescriptionTextContainerStyled>
              <Text text={`BAR`} align="center" font="Royale" size="1.5rem" />
              <Text
                text={'SUMÉRGETE EN LA ATMÓSFERA VIBRANTE DE NUESTRO BAR'}
                align="center"
                weight="200"
                size="0.7rem"
              />
            </MiradorCafePhotoDescriptionTextContainerStyled>
            <Link
              to={'/bar'}
              style={{ width: 'max-content', margin: '0 auto' }}
            >
              <Button
                colors={COLORS.PEARL_BLACK}
                text="Ver más"
                font="Poppins"
                fontSize="0.7rem"
                padding="0.25rem 0.5rem"
                radius="8px"
                margin="-8px auto 0 auto"
              />
            </Link>
          </MiradorCafePhotoDescriptionContainerStyled>
          <MiradorCafePhotoDescriptionContainerStyled>
            <img src={PiqueteaderoPhoto} width={'100%'} />
            <MiradorCafePhotoDescriptionTextContainerStyled>
              <Text
                text={`PIQUETEADERO`}
                align="center"
                font="Royale"
                size="1.5rem"
              />
              <Text
                text={'MÚSICA EN VIVO Y LAS MEJORES PICADAS'}
                align="center"
                weight="200"
                size="0.7rem"
              />
            </MiradorCafePhotoDescriptionTextContainerStyled>
            <Link
              to={'/piqueteadero'}
              style={{ width: 'max-content', margin: '0 auto' }}
            >
              <Button
                colors={COLORS.PEARL_BLACK}
                text="Ver más"
                font="Poppins"
                fontSize="0.7rem"
                padding="0.25rem 0.5rem"
                radius="8px"
                margin="-8px auto 0 auto"
              />
            </Link>
          </MiradorCafePhotoDescriptionContainerStyled>
        </MiradorCafeDescriptionContainerStyled>
        <MiradorCafeSpanStyled />
        <MiradorCafeSpanStyled />
        <CelebracionesContact />
        <ContactForm />
      </StyledMiradorCafeContainer>
    </>
  );
};
