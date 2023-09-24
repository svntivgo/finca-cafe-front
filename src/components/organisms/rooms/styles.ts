import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

export const StyledMenuContainer = styled.div`
  margin-top: -36px;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;

export const StyledSeparator = styled.span`
  border-bottom: 2px solid ${COLORS.PEARL_BLACK};
  margin: 24px 0;
  width: 100%;
`;

export const StyledImageContainer = styled.div`
  padding: 0 16px;
`;

export const StyledImage = styled.img`
  border-radius: 0 0 0 24px;
  width: 100%;
`;
