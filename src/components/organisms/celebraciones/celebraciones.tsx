import React from 'react';
import {
  Banner,
  Button,
  CREAM_BUTTON,
  Image,
  LIGHT_FONT_STYLE,
  Paragraph,
  SECTION_TITLE_FONT_STYLE,
} from '../../atoms';
import {
  CelebrationsCardsContainerStyled,
  CelebrationsDescriptionSpanStyled,
  CelebrationsEventsContainerStyled,
  CelebrationsGalleryContainerStyled,
  CelebrationsLogoContainerStyled,
  CelebrationsPhotoContainerStyled,
  CelebrationsPhotoDescriptionContainerStyled,
  CelebrationsPlaceBoxStyled,
  CelebrationsPlaceSpanStyled,
  CelebrationsPlaceTextStyled,
  CelebrationsPlacesContainerStyled,
  CelebrationsSpanStyled,
  ContactForm,
  CreditsContainerStyled,
  StyledCelebrationsContainer,
} from '..';
import { COLORS } from '../../../constants/colors';
import HallBanner from '../../../assets/celebraciones/hall-banner.jpg';
import HallBannerMobile from '../../../assets/celebraciones/hall-banner-mobile.jpg';
import HallUtilsGold from '../../../assets/celebraciones/hall-utils-gold.jpg';
import HallGoldDish from '../../../assets/celebraciones/hall-gold-dish.jpg';
import HallDesert from '../../../assets/celebraciones/hall-desert.jpg';
import HallMusician from '../../../assets/celebraciones/hall-musician.jpg';
import Piqueteadero from '../../../assets/celebraciones/piqueteadero.jpg';
import Restaurante from '../../../assets/celebraciones/restaurante.jpg';
import LogoBlack from '../../../assets/logo-finca-circulo-negro.svg';
import { CelebracionesCard } from '../../molecules/celebraciones-card/CelebracionesCard';
import {
  CelebracionesContact,
  Gallery,
  SectionLogoTitle,
} from '../../molecules';
import { GALLERY_CELEBRATIONS } from '../../../constants/gallery';
import { openNewTab } from '../../../shared/helper/open-new-tab';

export const Celebraciones: React.FC = () => {
  return (
    <>
      <Banner desktopImage={HallBanner} mobileImage={HallBannerMobile} />
      <StyledCelebrationsContainer>
        <SectionLogoTitle logo={LogoBlack} title="CELEBRA A LO GRANDE" />
        <CelebrationsDescriptionSpanStyled>
          <Paragraph
            style={{
              ...LIGHT_FONT_STYLE,
              textAlign: 'justify',
            }}
            text="Nos especializamos en planificar, crear y
            ejecutar experiencias únicas y memorables
            para que el evento de tus sueños se convierta
            en una extraordinaria realidad. La Finca del
            Café ofrece el entorno más acogedor para tu
            ocasión especial."
          />
        </CelebrationsDescriptionSpanStyled>
        <CelebrationsSpanStyled />
        <CelebrationsEventsContainerStyled>
          <CelebrationsPhotoContainerStyled>
            <CelebrationsPhotoDescriptionContainerStyled>
              <Paragraph
                style={{
                  color: `${COLORS.GOLD}`,
                  fontFamily: 'Poppins',
                  fontSize: '2.5rem',
                  fontWeight: '300',
                  textAlign: 'left',
                }}
                text="Eventos"
              />
              <CelebrationsSpanStyled />
              <Paragraph
                style={{
                  ...LIGHT_FONT_STYLE,
                  color: `${COLORS.WHITE}`,
                }}
                text="Contamos con una increíble selección de
              lugares que se ajustan a tus
              necesidades, como nuestro restaurante,
              piquetadero, lobbie, habitaciones y
              suites, todos los cuales pueden ser
              adaptados y reservados de forma
              privada para eventos como lanzamientos
              de productos, cenas privadas, eventos
              corporativos o bodas."
              />
              <CelebrationsSpanStyled />
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
            </CelebrationsPhotoDescriptionContainerStyled>
          </CelebrationsPhotoContainerStyled>
        </CelebrationsEventsContainerStyled>
        <CelebrationsSpanStyled />
        <Paragraph
          style={SECTION_TITLE_FONT_STYLE}
          text="PLANIFICACIÓN PERFECTA"
        />
        <CelebrationsSpanStyled />
        <CelebrationsCardsContainerStyled>
          <CelebracionesCard
            extended
            photo={HallUtilsGold}
            width="100%"
            title="Celebrar con los mejores"
            text="Contamos con un equipo de eventos
            experimentado que puede ayudarte a
            organizar tu gran día. Diseñados para
            cumplir con tus expectativas y hacer que
            nuestros espacios para eventos se adapten
            fácilmente a tus necesidades. Nuestro
            equipo de chefs son expertos en crear
            banquetes de bodas, un almuerzo delicioso
            o una cena familiar lujosa.
            Además tus invitados pueden ser alojados
            en nuestras confortables habitaciones, las
            cuentan con todas las comodidades
            necesarias para vivir momentos
            memorables."
          />
          <CelebracionesCard
            photo={HallGoldDish}
            width="100%"
            title="Organización"
            text="Nuestro gerente especializado en
          eventos será tu único punto de
          contacto, independientemente del
          tamaño del evento. Durante tu
          evento, un equipo de personal
          completamente informado estará
          a tu entera disposición y la de tus
          invitados."
          />
          <CelebracionesCard
            photo={HallDesert}
            width="100%"
            title="Abastecimiento"
            text="Sabores exquisitos diseños
          llamativos. Nuestro Chef hará
          realidad los platos que deseas y
          puede sorprenderte con ingeniosos
          y nuevos sabores."
          />
          <CelebracionesCard
            photo={HallMusician}
            width="100%"
            title="Tecnología"
            text="Encontrarás toda la tecnología que
          necesitas para tu reunión o evento.
          Déjanos saber con antelación qué
          equipo necesitarás y nos
          esforzaremos en proporcionártelo."
          />
        </CelebrationsCardsContainerStyled>
        <Paragraph
          style={SECTION_TITLE_FONT_STYLE}
          text="LUGARES DE CELEBRACIÓN"
        />
        <CelebrationsPlacesContainerStyled>
          <CelebrationsPlaceBoxStyled>
            <img src={Restaurante} width="100%" />
            <CelebrationsPlaceTextStyled>
              <Paragraph
                style={{
                  color: `${COLORS.GOLD}`,
                  fontFamily: 'Royale',
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  textAlign: 'center',
                }}
                text="RESTAURANTE"
              />
            </CelebrationsPlaceTextStyled>
          </CelebrationsPlaceBoxStyled>
          <CelebrationsPlaceBoxStyled>
            <img src={Piqueteadero} width="100%" />
            <CelebrationsPlaceTextStyled>
              <Paragraph
                style={{
                  color: `${COLORS.GOLD}`,
                  fontFamily: 'Royale',
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  textAlign: 'center',
                }}
                text="PIQUETEADERO"
              />
            </CelebrationsPlaceTextStyled>
          </CelebrationsPlaceBoxStyled>
        </CelebrationsPlacesContainerStyled>
        <CelebrationsPlaceSpanStyled />
        <Paragraph style={SECTION_TITLE_FONT_STYLE} text="GALERÍA" />
        <CelebrationsGalleryContainerStyled>
          <Gallery gallery={GALLERY_CELEBRATIONS} />
        </CelebrationsGalleryContainerStyled>
        <CelebracionesContact />
        <CreditsContainerStyled>
          <Paragraph
            style={{
              ...LIGHT_FONT_STYLE,
              fontSize: '0.5rem',
              textAlign: 'right',
            }}
            text="Créditos de material fotográfico : @danielarcilafoto / @malamente_co"
          />
        </CreditsContainerStyled>
        <ContactForm />
      </StyledCelebrationsContainer>
    </>
  );
};
