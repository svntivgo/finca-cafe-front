import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';
import Speaker from '../../../assets/celebraciones/speaker.jpg';
import SpeakerMobile from '../../../assets/celebraciones/speaker-mobile.jpg';

export const StyledCelebrationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-top: -5rem;
  background-color: ${COLORS.CREAM};
`;

export const CelebrationsEventsContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  place-content: center;
  margin: 0 0.5rem;
`;

export const CelebrationsPhotoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: auto 0 32px 0;
  background: url(${SpeakerMobile});
  background-size: cover;
  width: 90%;
  height: 200vw;
  @media (min-width: 1023px) {
    background: url(${Speaker});
    height: 700px;
  }
`;

export const CelebrationsPhotoDescriptionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: ${COLORS.PEARL_BLACK};
  padding: 16px;
  margin: auto auto 2rem auto;
  place-content: center;
  @media (min-width: 1023px) {
    padding: 24px;
    margin: auto auto auto 5rem;
    width: 20%;
  }
`;

export const CelebrationsLogoContainerStyled = styled.div`
  margin-top: -5rem;
`;

export const CelebrationsSpanStyled = styled.div`
  margin: 1.5rem;
`;

export const CelebrationsDescriptionSpanStyled = styled.div`
  width: 75%;
`;

export const CelebrationsCardsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 1023px) {
    padding: 0 5rem;
    place-content: space-between;
  }
`;

export const CelebrationsPlacesContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CelebrationsPlaceBoxStyled = styled.div`
  width: 100%;
  margin: 3rem 0 -2.7rem 0;
  @media (min-width: 1023px) {
    width: 50%;
    margin: 3rem 0 5rem 0;
    margin: 3rem 0 -1.7rem 0;
  }
`;

export const CelebrationsPlaceSpanStyled = styled.div`
  margin-bottom: 6rem;
  @media (min-width: 1023px) {
    margin-bottom: 6rem;
  }
`;

export const CelebrationsPlaceTextStyled = styled.div`
  margin-top: -3rem;
  @media (min-width: 1023px) {
    margin-top: -4rem;
  }
`;

export const CelebrationsGalleryContainerStyled = styled.div`
  display: flex;
  place-content: center;
  margin-top: 2rem;
`;

export const CreditsContainerStyled = styled.div`
  width: 100%;
  display: flex;
  place-content: end;
  margin-top: 1rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
`;
