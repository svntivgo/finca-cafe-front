import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';
import HallGoldChairs from '../../../assets/celebraciones/hall-gold-chairs.jpg';

export const StyledCelebrationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-top: -5rem;
`;

export const CelebrationsPhotoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: auto 0 32px 0;
  margin: 0 8px 0 8px;
  background: url(${HallGoldChairs});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 600px;
  @media (min-width: 1023px) {
    width: 37.5%;
  }
`;

export const CelebrationsPhotoDescriptionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: ${COLORS.PEARL_BLACK};
  padding: 24px;
  margin: auto auto 32px auto;
  place-content: center;
`;
