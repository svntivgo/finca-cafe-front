import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

export const ContainerHomeStyled = styled.div`
  padding: 40px;
`;

export const HomeSpanStyled = styled.div`
  height: 16px;
`;

export const BookingContainterStyled = styled.div`
  border: 1px solid ${COLORS.PEARL_GREY};
`;

export const BookingTitleContainerStyled = styled.div`
  width: 80%;
  padding: 16px 0;
  margin: 0 auto;
  border-bottom: 1px solid ${COLORS.PEARL_GREY};
  text-align: center;
`;

export const BookingReviewContainerStyled = styled.div`
  display: flex;
  place-content: space-between;
  place-items: center;
  padding: 16px;
`;

export const BookingQualyContainerStyled = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  background-color: #283b7d;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
`;

export const ReviewerNameContainerStyled = styled.div`
  padding: 8px;
  margin-left: 40px;
  border-bottom: 1px solid ${COLORS.WHITE};
`;

export const ReviewContainerStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  place-content: space-between;
  place-items: center;
  margin: 16px;
`;

export const ReviewTextContainerStyled = styled.div`
  margin: 0 16px;
`;

export const HomeGalleryContainerStyled = styled.div`
  display: flex;
  margin: 16px 0;
`;

export const HomePhotoGalleryContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomePhotoGalleryTextContainerStyled = styled.div`
  margin: -80px 0 62px 0;
`;

export const GastroPhotoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px 120px 8px;
`;

export const GastroPhotoDescriptionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: ${COLORS.PEARL_BLACK};
  padding: 24px;
  margin: -80px auto;
  place-content: center;
  place-items: center;
`;

export const ArrowStyled = styled.div`
  width: 58px;
  height: 16px;
  border: 1px solid ${COLORS.WHITE};
  border-bottom: 1px;
  border-right: 1px;
  transform: rotate(-45deg);
  z-index: 9;
`;

export const ArrowInvertedStyled = styled.div`
  width: 58px;
  height: 16px;
  border: 1px solid ${COLORS.WHITE};
  border-bottom: 1px;
  border-right: 1px;
  transform: rotate(135deg);
  z-index: 9;
`;
