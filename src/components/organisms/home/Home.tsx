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
import { Video } from '../../atoms';

import { ContactForm } from '..';
// import BannerPhoto from '../../../assets/hoteles/banner.jpg';
// import BannerPhotoMobile from '../../../assets/hoteles/banner-mobile.jpg';
import BannerVideo from '../../../assets/home/home-video.mov';

export const Home: React.FC = () => {
  return (
    <HomeContainerStyled>
      {/* <Banner desktopImage={BannerPhoto} mobileImage={BannerPhotoMobile} /> */}
      <Video src={BannerVideo} />
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
