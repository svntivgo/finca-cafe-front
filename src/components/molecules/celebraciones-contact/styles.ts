import styled from '@emotion/styled';

export const CelebrationsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  place-self: baseline;
  padding-left: 1rem;
  padding-top: 2rem;
  margin-bottom: 1rem;
  @media (min-width: 1023px) {
    flex-direction: row;
    place-items: center;
  }
`;

export const CelebrationsTextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CelebrationsTextInfoStyled = styled.div`
  display: flex;
`;
