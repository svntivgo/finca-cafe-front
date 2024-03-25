import styled from '@emotion/styled';

export const TourCafeCardsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  @media (min-width: 1023px) {
    padding: 0 5rem;
    place-content: space-between;
  }
`;

export const TourCafeInfoContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1023px) {
    place-items: center;
    place-content: space-between;
    flex-direction: row;
  }
`;

export const TourCafeInfoWingStyled = styled.div`
  width: 100%;
  @media (min-width: 1023px) {
    width: 50%;
  }
`;

export const TourCafeInfoBoxStyled = styled.div`
  width: 100%;
  @media (min-width: 1023px) {
    padding: 0 6rem;
  }
`;

export const TourCafeLogosStyled = styled.div`
  display: flex;
  place-content: center;
  width: 100%;
  margin-top: 2rem;
  @media (min-width: 1023px) {
    width: 50%;
  }
`;
