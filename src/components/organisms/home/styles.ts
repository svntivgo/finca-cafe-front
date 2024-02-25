import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

export const HomeContainerStyled = styled.div`
  background-color: ${COLORS.CREAM};
`;

export const HomeLogoMiradorContainer = styled.div`
  width: 100%;
  display: flex;
  place-content: center;
  @media (min-width: 1023px) {
    margin-top: -5rem;
  }
`;

export const HomePhotoDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1023px) {
    flex-direction: row;
    flex-wrap: wrap;
    place-content: space-evenly;
    margin-top: 2rem;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 95%;
  margin: 50px auto;
  margin-bottom: 100px;
  padding-bottom: 45%;
  overflow: hidden;

  @media (min-width: 1023px) {
    width: 50%;
    padding-bottom: 25%;
  }
`;

export const ReviewsContainer = styled.div`
  @media (min-width: 1023px) {
    display: flex;
    place-content: space-between;
    place-items: center;
    margin-bottom: 64px;
  }
`;

export const GastronomyPhotoContainer = styled.div`
  display: none;
  @media (min-width: 1023px) {
    display: block;
  }
`;
