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
  margin-left: ${(props) => (props.inverted ? '8px' : 0)};
  margin-right: ${(props) => (props.inverted ? 0 : '8px')};
  margin-top: 32px;
  overflow: hidden;
  padding: 24px 16px;
  place-content: center;
  place-items: center;
  @media (min-width: 1023px) {
    width: min-content;
    min-width: 95%;
    flex-direction: ${(props) => (props.inverted ? 'row' : 'row-reverse')};
    place-content: ${(props) => (props.inverted ? 'start' : 'end')};
    margin-left: ${(props) => (props.inverted ? 'auto' : 0)};
    margin-right: ${(props) => (props.inverted ? 0 : 'auto')};
  }
`;

export const StyledRoomCardBox = styled.div`
  @media (min-width: 1023px) {
    margin: 0 32px;
    width: 45%;
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  place-content: end;
  width: 100%;
`;

export const StyleSeparator = styled.span`
  display: block;
  border-top: 1px solid ${COLORS.PEARL_BLACK};
  margin: 24px 0;
  width: 100%;
`;

export const StyledSpanRoomCard = styled.span`
  display: block;
  height: 2rem;
`;
