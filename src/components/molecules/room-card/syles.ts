import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

interface StyledRoomCardProps {
  description?: string;
  detailsUrl?: string;
  inverted?: boolean;
  reserveUrl?: string;
  title?: string;
}

export const StyledRoomCardContainer = styled.div<StyledRoomCardProps>`
  background: ${COLORS.SMOKE_GREY};
  border-radius: ${(props) => (props.inverted ? '0 0 0 24px' : '0 0 24px 0')};
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.inverted ? '16px' : 0)};
  margin-right: ${(props) => (props.inverted ? 0 : '16px')};
  margin-top: 32px;
  overflow: hidden;
  padding: 24px 32px;
  place-content: center;
  place-items: center;
`;

export const StyledRoomImage = styled.img`
  border-radius: 0 24px 0 0;
  margin: 24px 0;
  width: 100%;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  place-content: end;
  width: 100%;
`;

export const StyleSeparator = styled.span`
  border-top: 1px solid ${COLORS.PEARL_BLACK};
  margin: 24px 0;
  width: 100%;
`;
