import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

export const ContainerHomeStyled = styled.div`
  padding: 40px 16px;
  @media (min-width: 1023px) {
    margin: 0 auto;
  }
`;

export const HomeSpanStyled = styled.div`
  height: 16px;
`;

export const BookingContainterStyled = styled.div`
  border: 1px solid ${COLORS.PEARL_GREY};
  min-width: 300px;
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

export const ReviewerInfoContainerStyled = styled.div`
  display: flex;
  place-items: center;
  margin-left: 40px;
`;

export const ReviewerFlagContainerStyled = styled.div`
  display: flex;
  place-items: center;
  margin-right: 16px;
`;

export const ReviewerNameContainerStyled = styled.div`
  width: 70%;
  border-bottom: 1px solid ${COLORS.WHITE};
  padding-bottom: 8px;
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
  @media (min-width: 1023px) {
    width: 60%;
    position: relative;
    right: -16px;
  }
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
  margin: 0 8px 200px 8px;
  @media (min-width: 1023px) {
    width: 37.5%;
  }
`;

export const GastroPhotoDescriptionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: ${COLORS.PEARL_BLACK};
  padding: 24px;
  margin: -70px auto;
  place-content: center;
  place-items: center;
`;

export const RowLeftStyled = styled.div`
  position: relative;
  left: 32px;
  margin: auto;
`;

export const RowRightStyled = styled.div`
  position: relative;
  right: 32px;
  margin: auto;
`;

export const ReviewBoxContainerStyled = styled.div`
  @media (min-width: 1023px) {
    width: 50%;
  }
`;

export const BookingReviewBoxContainerStyled = styled.div`
  @media (min-width: 1023px) {
    width: 100%;
  }
`;

export const DescriptionPhotoContainerStyled = styled.div`
  display: none;
  @media (min-width: 1023px) {
    width: 90%;
    display: block;
    position: relative;
    left: -16px;
  }
`;

export const DescriptionTextContainerStyled = styled.div`
  @media (min-width: 1023px) {
    width: 50%;
    padding: 0 10%;
  }
`;

export const DescriptionContainerStyled = styled.div`
  @media (min-width: 1023px) {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    place-content: space-between;
    place-items: center;
  }
`;

export const HomeGallerySectionStyled = styled.div`
  overflow: hidden;
  @media (min-width: 1023px) {
    display: flex;
    flex-wrap: nowrap;
    place-items: center;
  }
`;

export const HomeGalleryDescriptionStyled = styled.div`
  margin: 0 16px;
  @media (min-width: 1023px) {
    width: 40%;
    padding: 0 5%;
    margin: 0;
  }
`;
