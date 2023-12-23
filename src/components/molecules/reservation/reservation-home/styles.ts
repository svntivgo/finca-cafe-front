import styled from '@emotion/styled';
import { COLORS } from '../../../../constants/colors';

export const StyledContainer = styled.div`
  background: ${COLORS.CREAM};

  @media (min-width: 1023px) {
    padding: 0 5%;
  }
`;

export const StyledBorder = styled.div`
  background: ${COLORS.CREAM};
  border-radius: 0 0 0 64px;
  display: flex;
  place-content: center;
  place-items: center;
  width: 100%;
`;

export const StyledInfoContainer = styled.div`
  background: ${COLORS.PEARL_BLACK};
  border-radius: 0 16px 0 16px;
  border: 1px solid ${COLORS.PEARL_BLACK};
  display: flex;
  margin: 16px 8px 0 8px;
  padding: 29px 8px;
  place-content: center;
  place-items: center;
  width: 100%;
`;

export const StyledTextHomeContainer = styled.div`
  padding: 24px 8px 0 8px;
`;
