import React from 'react';
import {
  HotelsGalleryContainerStyled,
  ContactForm,
  StyledHotelsContainer,
  HotelsGalleriesStyled,
} from '..';
import {
  Banner,
  LIGHT_FONT_STYLE,
  Paragraph,
  SECTION_TITLE_FONT_STYLE,
} from '../../atoms';
import {
  BookingReview,
  Gallery,
  HotelsCards,
  HotelsDescription,
  SectionLogoTitle,
} from '../../molecules';
import PhotoBanner from '../../../assets/hoteles/banner.jpg';
import PhotoBannerMobile from '../../../assets/hoteles/banner-mobile.jpg';
import LogoHotels from '../../../assets/logo-hoteles.svg';
import { GALLERY_BOURBON, GALLERY_TYPICA } from '../../../constants/gallery';

export const Hotels: React.FC = () => {
  return (
    <>
      <Banner desktopImage={PhotoBanner} mobileImage={PhotoBannerMobile} />
      <StyledHotelsContainer>
        <SectionLogoTitle
          logo={LogoHotels}
          title="DOS HOTELES, MUCHAS EXPERIENCIAS"
        />
        <Paragraph
          style={{
            ...LIGHT_FONT_STYLE,
            textAlign: 'justify',
            width: '75%',
          }}
          text="Nuestros hoteles te garantizan una estadía con todas las experiencias del hub
            gastronómico y de entretenimiento de nuestro Mirador del café y acceso a los
            espacios de ambos hoteles. Todos ubicados a 200 mts de distancia
            entre sí"
        />
        <HotelsDescription />
        <BookingReview />
        <HotelsCards />
        <HotelsGalleriesStyled>
          <HotelsGalleryContainerStyled>
            <Paragraph
              style={SECTION_TITLE_FONT_STYLE}
              text="GALERÍA BOURBON"
            />
            <Gallery gallery={GALLERY_BOURBON} />
          </HotelsGalleryContainerStyled>
          <HotelsGalleryContainerStyled>
            <Paragraph style={SECTION_TITLE_FONT_STYLE} text="GALERÍA TYPICA" />
            <Gallery gallery={GALLERY_TYPICA} />
          </HotelsGalleryContainerStyled>
        </HotelsGalleriesStyled>
        <ContactForm />
      </StyledHotelsContainer>
    </>
  );
};
