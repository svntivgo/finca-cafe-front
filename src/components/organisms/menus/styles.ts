import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

export const MenusContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.CREAM};
  place-items: center;
  padding: 80px 16px 40px 16px;
`;

export const MenusSpan = styled.span`
  height: 80px;
`;
