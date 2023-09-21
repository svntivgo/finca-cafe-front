import styled from '@emotion/styled';
import { COLORS } from '../../../../constants/colors';

export const StyledContainer = styled.div`
  background: ${COLORS.GREEN};
`;

export const StyledBorder = styled.div`
  background: white;
  border-radius: 0 0 0 64px;
  display: flex;
  height: 200px;
  place-content: center;
  place-items: center;
  width: 100%;
`;

export const StyledInfoContainer = styled.div`
  border-radius: 0 32px 0 32px;
  border: 1px solid ${COLORS.PEARL_BLACK};
  display: flex;
  height: 64%;
  margin: 0 16px;
  padding: 0 8px;
  place-content: center;
  place-items: center;
  width: 100%;
`;
