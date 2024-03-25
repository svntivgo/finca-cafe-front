import styled from '@emotion/styled';

export const HotelsDescriptionContainerStyled = styled.div`
  @media (min-width: 1023px) {
    display: flex;
    place-content: center;
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

export const HotelsCardsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  @media (min-width: 1023px) {
    padding: 0 5rem;
    place-content: space-between;
  }
`;
