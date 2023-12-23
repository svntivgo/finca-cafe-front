import styled from '@emotion/styled';
import { InternalPlaceProps } from './interfaces';

export const StyledInternalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;
`;

export const StyledInternalBanner = styled.div<InternalPlaceProps>`
  width: 100%;
  height: 500px;
  background: linear-gradient(
      rgba(0, 0, 0, 0.4),
      transparent,
      transparent,
      rgba(0, 0, 0, 0.4)
    ),
    url(${(props) => props.photo});
  background-size: cover;
  background-position: ${(props) => props.position ?? 'center'};
  margin-bottom: -4rem;
`;

export const StyledInternalButtonsContainer = styled.div`
  margin: 5rem 0;
`;

export const StyledInternalSpan = styled.div`
  margin-top: 4rem;
`;

export const StyledInternalTextContainer = styled.div`
  padding: 0 16px;
  @media (min-width: 1023px) {
    padding: 0 30%;
  }
`;
