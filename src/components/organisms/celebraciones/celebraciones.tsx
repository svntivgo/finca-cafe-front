import React from 'react';
import { Banner, Button, Icon, Text } from '../../atoms';
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
import HallUtilsGold from '../../../assets/celebraciones/hall-utils-gold.jpg';
import HallGoldDish from '../../../assets/celebraciones/hall-gold-dish.jpg';
import HallDesert from '../../../assets/celebraciones/hall-desert.jpg';
import HallMusician from '../../../assets/celebraciones/hall-musician.jpg';
import Piqueteadero from '../../../assets/celebraciones/piqueteadero.jpg';
import Restaurante from '../../../assets/celebraciones/restaurante.jpg';
import LogoBlack from '../../../assets/logo-finca-circulo-negro.svg';
import { CelebracionesCard } from '../../molecules/celebraciones-card/CelebracionesCard';
import { CelebracionesContact, Gallery } from '../../molecules';
import { GALLERY_CELEBRATIONS } from '../../../constants/gallery';
import { openNewTab } from '../../../shared/helper/open-new-tab';

export const Celebraciones: React.FC = () => {
  return (
    <>
      <Banner height="500px" image={HallBanner} />
      <StyledCelebrationsContainer>
        <CelebrationsLogoContainerStyled>
          <Icon src={LogoBlack} width="10rem" />
        </CelebrationsLogoContainerStyled>
        <CelebrationsSpanStyled />
        <Text
          text="CELEBRA A LO GRANDE"
          align="center"
          font="Royale"
          color={COLORS.GOLD}
          size="1.5rem"
          weight="800"
        />
        <CelebrationsSpanStyled />
        <CelebrationsDescriptionSpanStyled>
          <Text
            text="Nos especializamos en planificar, crear y
            ejecutar experiencias únicas y memorables
            para que el evento de tus sueños se convierta
            en una extraordinaria realidad. La Finca del
            Café ofrece el entorno más acogedor para tu
            ocasión especial."
            color={COLORS.PEARL_BLACK}
            weight="200"
            align="justify"
          />
        </CelebrationsDescriptionSpanStyled>
        <CelebrationsSpanStyled />
        <CelebrationsEventsContainerStyled>
          <CelebrationsPhotoContainerStyled>
            <CelebrationsPhotoDescriptionContainerStyled>
              <Text
                text="Eventos"
                align="left"
                font="Poppins"
                color={COLORS.GOLD}
                size="2.5rem"
                weight="300"
              />
              <CelebrationsSpanStyled />
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
                size="0.7rem"
                weight="200"
              />
              <CelebrationsSpanStyled />
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
            </CelebrationsPhotoDescriptionContainerStyled>
          </CelebrationsPhotoContainerStyled>
        </CelebrationsEventsContainerStyled>
        <CelebrationsSpanStyled />
        <Text
          text="PLANIFICACIÓN PERFECTA"
          align="center"
          font="Royale"
          color={COLORS.GOLD}
          size="2rem"
          weight="800"
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
        <Text
          text="LUGARES DE CELEBRACIÓN"
          align="center"
          font="Royale"
          color={COLORS.GOLD}
          size="2rem"
          weight="800"
        />
        <CelebrationsPlacesContainerStyled>
          <CelebrationsPlaceBoxStyled>
            <img src={Restaurante} width="100%" />
            <CelebrationsPlaceTextStyled>
              <Text
                text="RESTAURANTE"
                align="center"
                font="Royale"
                color={COLORS.GOLD}
                size="1.5rem"
                weight="800"
              />
            </CelebrationsPlaceTextStyled>
          </CelebrationsPlaceBoxStyled>
          <CelebrationsPlaceBoxStyled>
            <img src={Piqueteadero} width="100%" />
            <CelebrationsPlaceTextStyled>
              <Text
                text="PIQUETEADERO"
                align="center"
                font="Royale"
                color={COLORS.GOLD}
                size="1.5rem"
                weight="800"
              />
            </CelebrationsPlaceTextStyled>
          </CelebrationsPlaceBoxStyled>
        </CelebrationsPlacesContainerStyled>
        <CelebrationsPlaceSpanStyled />
        <Text
          text="GALERÍA"
          align="center"
          font="Royale"
          color={COLORS.GOLD}
          size="2rem"
          weight="800"
        />
        <CelebrationsGalleryContainerStyled>
          <Gallery gallery={GALLERY_CELEBRATIONS} />
        </CelebrationsGalleryContainerStyled>
        <CelebracionesContact />
        <CreditsContainerStyled>
          <Text
            text="Créditos de material fotográfico : @danielarcilafoto / @malamente_co"
            align="right"
            size="0.5rem"
            weight="200"
            color={COLORS.PEARL_BLACK}
          />
        </CreditsContainerStyled>
        <ContactForm />
      </StyledCelebrationsContainer>
    </>
  );
};
