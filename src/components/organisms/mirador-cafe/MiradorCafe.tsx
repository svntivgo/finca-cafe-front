import React from 'react';
import {
  BOLD_FONT_STYLE,
  Banner,
  Button,
  CREAM_BUTTON,
  Image,
  LIGHT_FONT_STYLE,
  Paragraph,
} from '../../atoms';
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
import PhotoBannerMobile from '../../../assets/mirador-cafe/banner-mobile.jpg';
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
      <Banner desktopImage={PhotoBanner} mobileImage={PhotoBannerMobile} />
      <StyledMiradorCafeContainer>
        <MiradorCafeLogoContainerStyled>
          <Image src={LogoFincaCafe} width="10rem" />
        </MiradorCafeLogoContainerStyled>
        <MiradorCafeSpanStyled />
        <Paragraph
          style={{
            ...BOLD_FONT_STYLE,
            color: `${COLORS.GOLD}`,
            fontFamily: 'Royale',
            fontSize: '2rem',
            textAlign: 'center',
          }}
          text="EXPERIENCIAS GASTRONÓMICAS Y ENTRETENIMIENTO"
        />
        <MiradorCafeSpanStyled />
        <MiradorCafeDescriptionSpanStyled>
          <Paragraph
            style={{
              ...LIGHT_FONT_STYLE,
              textAlign: 'justify',
            }}
            text="Disfruta días de sol, aire puro y la mejor energía en nuestro Mirador del Café junto a
            tu familia y amigos. Poseemos 4 espacios dónde podrás disfrutar nuestra
            grastronomía, música en vivo o realizar tus celebraciones familiares o corporativas."
          />
        </MiradorCafeDescriptionSpanStyled>
        <MiradorCafeSpanStyled />
        <MiradorCafeEventsContainerStyled>
          <MiradorCafePhotoTextDescriptionContainerStyled>
            <Paragraph
              style={{
                ...LIGHT_FONT_STYLE,
                color: `${COLORS.GOLD}`,
                fontSize: '2.5rem',
              }}
              text="Eventos & Celebraciones"
            />
            <MiradorCafeSpanStyled />
            <Paragraph
              style={{
                ...LIGHT_FONT_STYLE,
                color: `${COLORS.WHITE}`,
              }}
              text="Contamos con una increíble selección de lugares que se
                ajustan a tus necesidades, como nuestro restaurante,
                piquetadero, lobbie, habitaciones y suites, todos los
                cuales pueden ser adaptados y reservados de forma
                privada para eventos como lanzamientos de productos,
                cenas privadas, eventos corporativos, bodas y
                celebraciones familiares."
            />
            <MiradorCafeSpanStyled />
            <Button
              style={{
                ...CREAM_BUTTON,
                fontSize: '0.7rem',
                fontWeight: `${600}`,
                margin: '16px 0 0 0',
              }}
              text="Solicitar propuesta"
              onClick={() =>
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
            <Link to={'/restaurante'} style={{ width: '100%' }}>
              <img src={ResturantPhoto} width={'100%'} />
              <MiradorCafePhotoDescriptionTextContainerStyled>
                <Paragraph
                  style={{
                    fontFamily: 'Royale',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                  }}
                  text={`RESTAURANTE`}
                />
                <Paragraph
                  style={{
                    ...LIGHT_FONT_STYLE,
                    textAlign: 'center',
                  }}
                  text={'GASTRONOMÍA CREATIVA EN EL PAISAJE CAFETERO'}
                />
              </MiradorCafePhotoDescriptionTextContainerStyled>
            </Link>
          </MiradorCafePhotoDescriptionContainerStyled>
          <MiradorCafePhotoDescriptionContainerStyled>
            <Link to={'/cafe'} style={{ width: '100%' }}>
              <img src={CafePhoto} width={'100%'} />
              <MiradorCafePhotoDescriptionTextContainerStyled>
                <Paragraph
                  style={{
                    fontFamily: 'Royale',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                  }}
                  text={`CAFÉ`}
                />
                <Paragraph
                  style={{
                    ...LIGHT_FONT_STYLE,
                    textAlign: 'center',
                  }}
                  text={'DE NUESTRAS MONTAÑAS A TU MESA'}
                />
              </MiradorCafePhotoDescriptionTextContainerStyled>
            </Link>
          </MiradorCafePhotoDescriptionContainerStyled>
          <MiradorCafePhotoDescriptionContainerStyled>
            <Link to={'/bar'} style={{ width: '100%' }}>
              <img src={BarPhoto} width={'100%'} />
              <MiradorCafePhotoDescriptionTextContainerStyled>
                <Paragraph
                  style={{
                    fontFamily: 'Royale',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                  }}
                  text={`BAR`}
                />
                <Paragraph
                  style={{
                    ...LIGHT_FONT_STYLE,
                    textAlign: 'center',
                  }}
                  text={'SUMÉRGETE EN LA ATMÓSFERA VIBRANTE DE NUESTRO BAR'}
                />
              </MiradorCafePhotoDescriptionTextContainerStyled>
            </Link>
          </MiradorCafePhotoDescriptionContainerStyled>
          <MiradorCafePhotoDescriptionContainerStyled>
            <Link to={'/piqueteadero'} style={{ width: '100%' }}>
              <img src={PiqueteaderoPhoto} width={'100%'} />
              <MiradorCafePhotoDescriptionTextContainerStyled>
                <Paragraph
                  style={{
                    fontFamily: 'Royale',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                  }}
                  text={`PIQUETEADERO`}
                />
                <Paragraph
                  style={{
                    ...LIGHT_FONT_STYLE,
                    textAlign: 'center',
                  }}
                  text={'MÚSICA EN VIVO Y LAS MEJORES PICADAS'}
                />
              </MiradorCafePhotoDescriptionTextContainerStyled>
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
