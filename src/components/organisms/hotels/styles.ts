import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

export const StyledHotelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-top: -5rem;
  background-color: ${COLORS.CREAM};
`;

export const HotelsLogoContainerStyled = styled.div`
  margin-top: -5rem;
`;

export const HotelsSpanStyled = styled.div`
  margin: 1.5rem;
`;

export const HotelsDescriptionSpanStyled = styled.div`
  width: 75%;
`;

export const HotelsCardsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 1023px) {
    padding: 0 5rem;
    place-content: space-between;
  }
`;

export const HotelsGalleriesStyled = styled.div`
  @media (min-width: 1023px) {
    display: flex;
    place-content: center;
  }
`;

export const HotelsGalleryContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  @media (min-width: 1023px) {
    width: 100%;
  }
`;

export const HotelsPhotoDescriptionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 32px 16px;
  @media (min-width: 1023px) {
    width: 40%;
  }
`;

export const HotelsPhotoDescriptionTextContainerStyled = styled.div`
  margin: -80px 24px 46px 24px;
`;

export const HotelsDescriptionContainerStyled = styled.div`
  @media (min-width: 1023px) {
    display: flex;
    place-content: center;
  }
`;
