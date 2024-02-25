import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

export const StyledMiradorCafeContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-top: -5rem;
  background-color: ${COLORS.CREAM};
`;

export const MiradorCafeLogoContainerStyled = styled.div`
  margin-top: -5rem;
`;

export const MiradorCafeSpanStyled = styled.div`
  margin: 1.5rem;
`;

export const MiradorCafeDescriptionSpanStyled = styled.div`
  width: 75%;
`;

export const MiradorCafePhotoDescriptionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 32px 16px;
  @media (min-width: 1023px) {
    width: 40%;
  }
`;

export const MiradorCafePhotoDescriptionTextContainerStyled = styled.div`
  margin: -80px 24px 46px 24px;
`;

export const MiradorCafeDescriptionContainerStyled = styled.div`
  @media (min-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
    place-content: center;
  }
`;

export const MiradorCafeEventsContainerStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  place-content: center;
  margin: 0 0.5rem;
  width: 90%;
  @media (min-width: 1023px) {
    flex-direction: row;
  }
`;

export const MiradorCafePhotoContainerStyled = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  @media (min-width: 1023px) {
    width: 50%;
  }
`;

export const MiradorCafePhotoTextDescriptionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  background-color: ${COLORS.PEARL_BLACK};
  padding: 16px;
  place-content: center;
  @media (min-width: 1023px) {
    width: 50%;
    padding: 24px;
  }
`;
