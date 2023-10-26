import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

export const StyledBorderedContainer = styled.div`
  display: flex;
  padding: 8px 16px;
  place-content: space-between;
  border: 1px solid ${COLORS.PEARL_BLACK};
  border-radius: 16px;
  place-items: center;
`;

export const StyledCafeContainer = styled.div`
  display: flex;
  padding: 16px 0px;
  place-content: space-between;
  place-items: center;
`;

export const StyledSelectorContainer = styled.div`
  display: flex;
  min-width: 50%;
  width: 50%;
  height: 5rem;
  border: 1px solid ${COLORS.PEARL_BLACK};
  border-radius: 16px;
  place-content: space-between;
  place-items: center;
  background-color: ${COLORS.WHITE};
  overflow: hidden;
`;

export const StyledSelectorButton = styled.div`
  width: 33%;
  height: 100%;
  background-color: ${COLORS.PEARL_BLACK};
  display: flex;
  place-items: center;
  place-content: center;
  color: ${COLORS.PEARL_GREY};
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  place-items: center;
  place-content: center;
  margin: 16px 0;
`;
