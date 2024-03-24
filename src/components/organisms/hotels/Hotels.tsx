import React from 'react';
import {
  BLACK_BUTTON,
  BOLD_FONT_STYLE,
  Banner,
  Button,
  Icon,
  LIGHT_FONT_STYLE,
  Paragraph,
} from '../../atoms';
import {
  HotelsCardsContainerStyled,
  HotelsDescriptionSpanStyled,
  HotelsGalleryContainerStyled,
  HotelsLogoContainerStyled,
  HotelsSpanStyled,
  ContactForm,
  StyledHotelsContainer,
  HotelsPhotoDescriptionContainerStyled,
  HotelsPhotoDescriptionTextContainerStyled,
  HotelsDescriptionContainerStyled,
  HotelsGalleriesStyled,
} from '..';
import { COLORS } from '../../../constants/colors';
import PhotoBanner from '../../../assets/hoteles/banner.jpg';
import PhotoBannerMobile from '../../../assets/hoteles/banner-mobile.jpg';
import CulturaMagica from '../../../assets/tour-cafe/cultura-magica.jpg';
import BourbonModelPhoto from '../../../assets/hoteles/modelo.jpg';
import BourbonPhoto from '../../../assets/hoteles/bourbon.jpg';
import TypicaPhoto from '../../../assets/hoteles/typica.jpg';
import LogoHotels from '../../../assets/logo-hoteles.svg';
import { CelebracionesCard } from '../../molecules/celebraciones-card/CelebracionesCard';
import { BookingReview, Gallery } from '../../molecules';
import { GALLERY_BOURBON, GALLERY_TYPICA } from '../../../constants/gallery';
import { openNewTab } from '../../../shared/helper/open-new-tab';
import { Link } from 'react-router-dom';
import { HOTELS } from '../../../constants/hotels';

export const Hotels: React.FC = () => {
  return (
    <>
      <Banner desktopImage={PhotoBanner} mobileImage={PhotoBannerMobile} />
      <StyledHotelsContainer>
        <HotelsLogoContainerStyled>
          <Icon src={LogoHotels} width="10rem" />
        </HotelsLogoContainerStyled>
        <HotelsSpanStyled />
        <Paragraph
          style={{
            ...BOLD_FONT_STYLE,
            color: `${COLORS.GOLD}`,
            fontFamily: 'Royale',
            fontSize: '2rem',
            textAlign: 'center',
          }}
          text="DOS HOTELES, MUCHAS EXPERIENCIAS"
        />
        <HotelsSpanStyled />
        <HotelsDescriptionSpanStyled>
          <Paragraph
            style={{
              ...LIGHT_FONT_STYLE,
              textAlign: 'justify',
            }}
            text="Nuestros hoteles te garantizan una estadía con todas las experiencias del hub
            gastronómico y de entretenimiento de nuestro Mirador del café y acceso a los
            espacios de ambos hoteles. Todos ubicados a 200 mts de distancia
            entre sí"
          />
        </HotelsDescriptionSpanStyled>
        <HotelsSpanStyled />
        <HotelsDescriptionContainerStyled>
          <HotelsPhotoDescriptionContainerStyled>
            <img src={BourbonPhoto} width={'100%'} />
            <HotelsPhotoDescriptionTextContainerStyled>
              <Paragraph
                style={{
                  fontFamily: 'Royale',
                  fontSize: '1.5rem',
                  textAlign: 'center',
                }}
                text={`HOTEL ${HOTELS.BOURBON.NAME.toLocaleUpperCase()}`}
              />
              <Paragraph
                style={{
                  ...LIGHT_FONT_STYLE,
                  fontFamily: 'Royale',
                  fontSize: '1.5rem',
                  textAlign: 'center',
                }}
                text={
                  'UN DISEÑO VIBRANTE EN EL CORAZÓN DE LAS MONTAÑAS CAFETERAS'
                }
              />
            </HotelsPhotoDescriptionTextContainerStyled>
            <Paragraph
              style={{
                ...LIGHT_FONT_STYLE,
                textAlign: 'justify',
              }}
              text={
                'La mezcla del lujo contemporáneo con la inspiración del encanto característico de las haciendas cafeteras. Las habitaciones y espacios del hotel Bourbon están especialmente diseñados y equipados para estadías de placer, negocios y bodas. Disfruta de nuestros jacuzzi y el aire puro de nuestras montañas.'
              }
            />
            <HotelsSpanStyled />
            <Link
              to={'/habitaciones#bourbon-description'}
              style={{ width: 'max-content', margin: '0 auto' }}
            >
              <Button
                style={{
                  ...BLACK_BUTTON,
                  margin: '-8px auto 0 auto',
                }}
                text="Ver habitaciones"
              />
            </Link>
          </HotelsPhotoDescriptionContainerStyled>
          <HotelsSpanStyled />
          <HotelsPhotoDescriptionContainerStyled>
            <img src={TypicaPhoto} width={'100%'} />
            <HotelsPhotoDescriptionTextContainerStyled>
              <Paragraph
                style={{
                  ...LIGHT_FONT_STYLE,
                  fontFamily: 'Royale',
                  fontSize: '1.5rem',
                  textAlign: 'center',
                }}
                text={`HOTEL ${HOTELS.TIPICA.NAME.toLocaleUpperCase()}`}
              />
              <Paragraph
                style={{
                  ...LIGHT_FONT_STYLE,
                  textAlign: 'center',
                }}
                text={
                  'UN HOSPEDAJE QUE TE CONECTA CON LA MAGÍA DEL CAFÉ PAISAJE CULTURAL CAFETERO'
                }
              />
            </HotelsPhotoDescriptionTextContainerStyled>
            <Paragraph
              style={{
                ...LIGHT_FONT_STYLE,
                textAlign: 'justify',
              }}
              text={
                'Ubicado junto a una finca cafetera tradicional con acceso a los cultivos donde nace nuestro café, nuestro alojamiento tradicional es perfecto para extranjeros y nacionales que desean conocer la cultura cafetera y una estadía tradicional con todo el confort de sus habitaciones y espacios.'
              }
            />
            <HotelsSpanStyled />
            <Link
              to={'/habitaciones#typica-description'}
              style={{ width: 'max-content', margin: '0 auto' }}
            >
              <Button
                style={{
                  ...BLACK_BUTTON,
                  margin: '-8px auto 0 auto',
                }}
                text="Ver habitaciones"
              />
            </Link>
          </HotelsPhotoDescriptionContainerStyled>
        </HotelsDescriptionContainerStyled>
        <HotelsSpanStyled />
        <BookingReview />
        <HotelsSpanStyled />
        <HotelsCardsContainerStyled>
          <CelebracionesCard
            extended
            button
            onClick={() =>
              openNewTab('https://api.whatsapp.com/send?phone=573183866398')
            }
            photo={BourbonModelPhoto}
            width="100%"
            title="Reserva tu momento de placer"
            text="Si el plan que tienes en mente es pasar un día de energía
            renovadora, nuestros jacuzzi Bourbon son el espacio perfecto
            para vivir el presente en medio del paraíso cafetero de
            nuestras montañas, nuestras habitaciones también cuentan
            con un jacuzzi camas King, sabanas de lujo y una vista desde tu
            propio balcón que te permitirá conectar de nuevo con tu paz
            interior."
          />
          <CelebracionesCard
            extended
            button
            onClick={() =>
              openNewTab('https://api.whatsapp.com/send?phone=573183866398')
            }
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
        </HotelsCardsContainerStyled>
        <HotelsSpanStyled />
        <HotelsGalleriesStyled>
          <HotelsGalleryContainerStyled>
            <Paragraph
              style={{
                ...BOLD_FONT_STYLE,
                color: `${COLORS.GOLD}`,
                fontFamily: 'Royale',
                fontSize: '2rem',
                textAlign: 'center',
              }}
              text="GALERÍA BOURBON"
            />
            <Gallery gallery={GALLERY_BOURBON} />
          </HotelsGalleryContainerStyled>
          <HotelsGalleryContainerStyled>
            <Paragraph
              style={{
                ...BOLD_FONT_STYLE,
                color: `${COLORS.GOLD}`,
                fontFamily: 'Royale',
                fontSize: '2rem',
                textAlign: 'center',
              }}
              text="GALERÍA TYPICA"
            />
            <Gallery gallery={GALLERY_TYPICA} />
          </HotelsGalleryContainerStyled>
        </HotelsGalleriesStyled>
        <HotelsSpanStyled />
        <ContactForm />
      </StyledHotelsContainer>
    </>
  );
};
