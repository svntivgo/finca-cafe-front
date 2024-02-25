import React from 'react';
import { Banner, Button, Icon, Text } from '../../atoms';
import {
  TourCafeCardsContainerStyled,
  TourCafeDescriptionSpanStyled,
  TourCafeGalleryContainerStyled,
  TourCafeLogoContainerStyled,
  TourCafeSpanStyled,
  ContactForm,
  StyledTourCafeContainer,
  TourCafeInfoContainerStyled,
  TourCafeLogosStyled,
  TourCafeInfoBoxStyled,
  TourCafeInfoWingStyled,
} from '..';
import { COLORS } from '../../../constants/colors';
import PhotoBanner from '../../../assets/tour-cafe/recorre.jpg';
import CulturaMagica from '../../../assets/tour-cafe/cultura-magica.jpg';
import Descubre from '../../../assets/tour-cafe/descubre.jpg';
import Recorre from '../../../assets/tour-cafe/recorre.jpg';
import Prepara from '../../../assets/tour-cafe/prepara.jpg';
import LogoTourCafe from '../../../assets/logo-tour-cafe.svg';
import PaisajeIcon from '../../../assets/paisaje-cultural-cafetero.svg';
import ColombiaIcon from '../../../assets/colombia-logo.svg';
import { CelebracionesCard } from '../../molecules/celebraciones-card/CelebracionesCard';
import { CelebracionesContact, Gallery, WingCard } from '../../molecules';
import { GALLERY_TOUR_CAFE } from '../../../constants/gallery';
import { useNavigate } from 'react-router-dom';

export const TourCafe: React.FC = () => {
  const navigate = useNavigate();
  const changeRoute = () => {
    navigate('/tour-cafe-reservation');
  };

  return (
    <>
      <Banner height="800px" image={PhotoBanner} />
      <StyledTourCafeContainer>
        <TourCafeLogoContainerStyled>
          <Icon src={LogoTourCafe} width="10rem" />
        </TourCafeLogoContainerStyled>
        <TourCafeSpanStyled />
        <Text
          text="AMANTES DE UNA CULTURA MÁGICA"
          align="center"
          font="Royale"
          color={COLORS.GOLD}
          size="2rem"
          weight="800"
        />
        <TourCafeSpanStyled />
        <TourCafeDescriptionSpanStyled>
          <Text
            text="Nuestro Tour del café conserva la experiencia de una tradición que te conecta con las
            raíces de la cultura cafetera, en un recorrido que te llevará a preparar con tus propias
            manos la taza del mejor café del mundo tal y como lo hacían nuestros ancestros."
            color={COLORS.PEARL_BLACK}
            weight="200"
            align="justify"
          />
        </TourCafeDescriptionSpanStyled>
        <TourCafeSpanStyled />
        <TourCafeCardsContainerStyled>
          <CelebracionesCard
            extended
            button
            onClick={() => changeRoute()}
            photo={CulturaMagica}
            width="100%"
            title="Sumérgete en nuestras montañas"
            text="Una experiencia auténtica, donde conoces el proceso del café
            sustentable desde la semilla hasta el paladar. Al iniciar el recorrido
            recibes sombrero, poncho y canasto, accesorios propios de la cultura
            cafetera, para luego ir a través de estaciones mientras caminas por
            senderos seguros, rodeados de flores y árboles frutales y recolectas
            manualmente el grano maduro de nuestros cafetales, como lo
            hacen día a día los recolectores en una finca productiva del Paisaje
            Cultural Cafetero."
          />
          <CelebracionesCard
            photo={Descubre}
            width="100%"
            title="Descubre"
            text="Conocerás el almácigo o
            semillero, donde te enseñamos la
            forma como se germina la semilla
            del café hasta transformarse en
            una planta joven lista para ser
            sembrada en el cafetal.
            Posteriormente ingresas a nuestro
            innovador Secador Solar
            Parabólico, donde te enseñamos
            las diferentes formas de secar el
            café"
          />
          <CelebracionesCard
            photo={Recorre}
            width="100%"
            title="Recorre"
            text="Atravesarás un bosque de guadua
            o bambú donde escucharás los
            sonidos de ranas, aves y de un
            pequeño riachuelo. Con esta
            misma guadua cultivada en
            nuestra finca, construimos puentes
            y miradores donde respiras,
            descansas y contemplas el verde
            paisaje cafetero.."
          />
          <CelebracionesCard
            photo={Prepara}
            width="100%"
            title="Prepara"
            text="Ingresarás a una casa típica
            campesina donde una mujer
            caficultora o “chapolera” te
            enseñará a procesar el café que
            recolectaste durante el recorrido.
            Tuestas el grano seco en un fogón
            de leña y lo mueles a la usanza de
            las abuelas para finalmente filtrarlo,
            servirlo y disfrutarlo."
          />
        </TourCafeCardsContainerStyled>
        <TourCafeInfoContainerStyled>
          <TourCafeInfoWingStyled>
            <WingCard background={COLORS.PEARL_BLACK}>
              <TourCafeInfoBoxStyled>
                <Text text="Duración" />
                <Text text="2 a 3 horas." weight="200" />
                <TourCafeSpanStyled />
                <Text text="VALOR" weight="200" />
                <Text text="$90.000 COP + IVA por persona o" weight="200" />
                <Text
                  text="$130.000 COP + IVA si requieres guía en inglés."
                  weight="200"
                />
                <Text text="*(Mínimo dos personas)." weight="200" />
                <TourCafeSpanStyled />
                <Button
                  colors={COLORS.CREAM}
                  font={COLORS.PEARL_BLACK}
                  padding="4px 12px"
                  radius="4px"
                  text="Reservar"
                  weight={600}
                  onCLick={() => changeRoute()}
                />
              </TourCafeInfoBoxStyled>
            </WingCard>
          </TourCafeInfoWingStyled>
          <TourCafeLogosStyled>
            <Icon src={ColombiaIcon} width="100px" />
            <TourCafeSpanStyled />
            <Icon src={PaisajeIcon} width="140px" />
          </TourCafeLogosStyled>
        </TourCafeInfoContainerStyled>
        <TourCafeSpanStyled />
        <Text
          text="GALERÍA"
          align="center"
          font="Royale"
          color={COLORS.GOLD}
          size="2rem"
          weight="800"
        />
        <TourCafeGalleryContainerStyled>
          <Gallery gallery={GALLERY_TOUR_CAFE} />
        </TourCafeGalleryContainerStyled>
        <CelebracionesContact />
        <ContactForm />
      </StyledTourCafeContainer>
    </>
  );
};
