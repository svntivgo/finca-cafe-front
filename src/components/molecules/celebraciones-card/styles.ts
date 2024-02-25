import styled from '@emotion/styled';
import { CelebracionesCardProps } from '..';

export const StyledCelebrationsCardContainer = styled.div<CelebracionesCardProps>`
  padding: 0 32px;
  margin-bottom: 3rem;
  @media (min-width: 1023px) {
    display: ${(props) => props.extended && 'flex'};
    width: ${(props) => (props.extended ? '100%' : '25%')};
    flex-wrap: ${(props) => props.extended && 'nowrap'};
  }
`;

export const StyledTextCelebrationsCard = styled.div<CelebracionesCardProps>`
  @media (min-width: 1023px) {
    display: ${(props) => props.extended && 'flex'};
    flex-direction: ${(props) => props.extended && 'column'};
    width: ${(props) => props.extended && '60%'};
    padding-left: ${(props) => props.extended && '5rem'};
    place-content: ${(props) => props.extended && 'center'};
  }
`;

export const CelebrationsCardsPhotoStyled = styled.img<CelebracionesCardProps>`
  width: '100%';
  @media (min-width: 1023px) {
    width: ${(props) => (props.extended ? '40%' : '100%')};
  }
`;
