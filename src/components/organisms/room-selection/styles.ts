import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

export const StyledInfoContainer = styled.div`
  border-radius: 0 32px 0 32px;
  border: 1px solid ${COLORS.GOLD};
  display: flex;
  height: 64%;
  margin: 24px 0;
  padding: 8px;
  place-content: center;
  place-items: center;
`;

export const StyledReservationInfoContainer = styled.div`
  margin-top: -36px;
`;
