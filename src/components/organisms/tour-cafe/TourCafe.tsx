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
import PhotoBannerMobile from '../../../assets/tour-cafe/banner-mobile.jpg';
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
      <Banner desktopImage={PhotoBanner} mobileImage={PhotoBannerMobile} />
      <StyledTourCafeContainer>
        <TourCafeLogoContainerStyled>
          <Image src={LogoTourCafe} width="10rem" />
        </TourCafeLogoContainerStyled>
        <TourCafeSpanStyled />
        <Paragraph
          style={{
            ...BOLD_FONT_STYLE,
            color: `${COLORS.GOLD}`,
            fontFamily: 'Royale',
            fontSize: '2rem',
            textAlign: 'center',
          }}
          text="AMANTES DE UNA CULTURA MÁGICA"
        />
        <TourCafeSpanStyled />
        <TourCafeDescriptionSpanStyled>
          <Paragraph
            style={{
              ...LIGHT_FONT_STYLE,
              textAlign: 'justify',
            }}
            text="Nuestro Tour del café conserva la experiencia de una tradición que te conecta con las
            raíces de la cultura cafetera, en un recorrido que te llevará a preparar con tus propias
            manos la taza del mejor café del mundo tal y como lo hacían nuestros ancestros."
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
                <Paragraph text="Duración" />
                <Paragraph
                  style={{
                    ...LIGHT_FONT_STYLE,
                  }}
                  text="2 a 3 horas."
                />
                <TourCafeSpanStyled />
                <Paragraph
                  style={{
                    ...LIGHT_FONT_STYLE,
                  }}
                  text="VALOR"
                />
                <Paragraph
                  style={{
                    ...LIGHT_FONT_STYLE,
                  }}
                  text="$90.000 COP + IVA por persona o"
                />
                <Paragraph
                  style={{
                    ...LIGHT_FONT_STYLE,
                  }}
                  text="$130.000 COP + IVA si requieres guía en inglés."
                />
                <Paragraph
                  style={{
                    ...LIGHT_FONT_STYLE,
                  }}
                  text="*(Mínimo dos personas)."
                />
                <TourCafeSpanStyled />
                <Button
                  style={{
                    ...CREAM_BUTTON,
                    borderRadius: '4px',
                    fontWeight: `${600}`,
                    padding: '4px 12px',
                  }}
                  text="Reservar"
                  onClick={() => changeRoute()}
                />
              </TourCafeInfoBoxStyled>
            </WingCard>
          </TourCafeInfoWingStyled>
          <TourCafeLogosStyled>
            <Image src={ColombiaIcon} style={{ width: '100px' }} />
            <TourCafeSpanStyled />
            <Image src={PaisajeIcon} width="140px" />
          </TourCafeLogosStyled>
        </TourCafeInfoContainerStyled>
        <TourCafeSpanStyled />
        <Paragraph
          style={{
            ...BOLD_FONT_STYLE,
            color: `${COLORS.GOLD}`,
            fontFamily: 'Royale',
            fontSize: '2rem',
            textAlign: 'center',
          }}
          text="GALERÍA"
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
