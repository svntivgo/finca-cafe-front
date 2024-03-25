import React from 'react';
import {
  TourCafeGalleryContainerStyled,
  ContactForm,
  StyledTourCafeContainer,
} from '..';
import {
  Banner,
  LIGHT_FONT_STYLE,
  Paragraph,
  SECTION_TITLE_FONT_STYLE,
} from '../../atoms';
import {
  CelebracionesContact,
  Gallery,
  SectionLogoTitle,
  TourCafeCards,
  TourCafeInfo,
} from '../../molecules';
import LogoTourCafe from '../../../assets/logo-tour-cafe.svg';
import PhotoBanner from '../../../assets/tour-cafe/recorre.jpg';
import PhotoBannerMobile from '../../../assets/tour-cafe/banner-mobile.jpg';
import { GALLERY_TOUR_CAFE } from '../../../constants/gallery';

export const TourCafe: React.FC = () => {
  return (
    <>
      <Banner desktopImage={PhotoBanner} mobileImage={PhotoBannerMobile} />
      <StyledTourCafeContainer>
        <SectionLogoTitle
          logo={LogoTourCafe}
          title="AMANTES DE UNA CULTURA MÁGICA"
        />
        <Paragraph
          style={{
            ...LIGHT_FONT_STYLE,
            textAlign: 'justify',
            width: '75%',
          }}
          text="Nuestro Tour del café conserva la experiencia de una tradición que te conecta con las
            raíces de la cultura cafetera, en un recorrido que te llevará a preparar con tus propias
            manos la taza del mejor café del mundo tal y como lo hacían nuestros ancestros."
        />
        <TourCafeCards />
        <TourCafeInfo />
        <Paragraph style={SECTION_TITLE_FONT_STYLE} text="GALERÍA" />
        <TourCafeGalleryContainerStyled>
          <Gallery gallery={GALLERY_TOUR_CAFE} />
        </TourCafeGalleryContainerStyled>
        <CelebracionesContact />
        <ContactForm />
      </StyledTourCafeContainer>
    </>
  );
};
