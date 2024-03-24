import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

export const HomeContainerStyled = styled.div`
  background-color: ${COLORS.CREAM};
`;

export const ReviewsContainer = styled.div`
  @media (min-width: 1023px) {
    display: flex;
    place-content: space-between;
    place-items: center;
    margin-bottom: 64px;
  }
`;


