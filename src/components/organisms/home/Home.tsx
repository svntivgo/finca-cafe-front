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
import BannerVideo from '../../../assets/home/home-video.mp4';

export const Home: React.FC = () => {
  return (
    <HomeContainerStyled>
      {/* <Banner desktopImage={BannerPhoto} mobileImage={BannerPhotoMobile} /> */}
      <Video src={BannerVideo} />
      {/* <div style={{display: 'flex', placeContent: 'center'}}>
        <Link to={`/mirador-cafe`}>
          <Button
            style={{ ...BLACK_BUTTON, margin: '0.5px 0', borderRadius: '0', fontWeight: '300' }}
            text={`Mirador`}
          />
        </Link>
        <Link to={`/tour-cafe`}>
          <Button
            style={{ ...BLACK_BUTTON, margin: '0.5px', borderRadius: '0', fontWeight: '300' }}
            text={`Tour del café`}
          />
        </Link>
        <Link to={``}>
          <Button
            style={{ ...BLACK_BUTTON, margin: '0.5px 0', borderRadius: '0', fontWeight: '300' }}
            text={`SPA`}
          />
        </Link>
      </div> */}
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
