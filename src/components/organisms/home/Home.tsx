import React from 'react';
import { HomeContainerStyled, ReviewsContainer } from './styles';
import {
  ReservationHome,
  HomeDescription,
  BookingReview,
  Reviews,
  HomeGallery,
  HomeServices,
  HomeGastroServices,
  LearnMore,
} from '../../molecules';
import { Banner } from '../../atoms';

import { ContactForm } from '..';
import BannerPhoto from '../../../assets/hoteles/banner.jpg';
import BannerPhotoMobile from '../../../assets/hoteles/banner-mobile.jpg';

export const Home: React.FC = () => {
  return (
    <HomeContainerStyled>
      <Banner desktopImage={BannerPhoto} mobileImage={BannerPhotoMobile} />
      <ReservationHome />
      <HomeDescription />
      <HomeServices />
      <ReviewsContainer>
        <Reviews />
        <BookingReview />
      </ReviewsContainer>
      <HomeGallery />
      <HomeGastroServices />
      <LearnMore />
      <ContactForm />
    </HomeContainerStyled>
  );
};
