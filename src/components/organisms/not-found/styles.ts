import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.CREAM};
  place-items: center;
  padding: 80px 16px 40px 16px;
`;

export const NotFoundSpan = styled.span`
  height: 16px;
`;
