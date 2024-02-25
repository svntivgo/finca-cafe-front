import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

export const StyledMenuItem = styled.div`
  border-bottom: 1px solid ${COLORS.SMOKE_GREY};
  display: flex;
  padding-bottom: 8px;
  padding-top: 24px;
  padding-right: 3rem;
  width: 100%;
`;

export const StyledMenuItemsContainer = styled.div`
  @media (min-width: 1023px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 250px;
  }
`;

export const StyledMenuBox = styled.div`
  margin-bottom: 24px;
  @media (min-width: 1023px) {
    margin-right: 6rem;
    width: 15%;
  }
`;

export const StyledMenuRoomBox = styled.div`
  margin-bottom: 24px;
  @media (min-width: 1023px) {
    margin-right: 6rem;
    width: 40%;
  }
`;

export const StyledMenuContainerBox = styled.div`
  @media (min-width: 1023px) {
    display: flex;
  }
`;

export const StyledLinkMenuRooms = styled.a`
  @media (min-width: 1023px) {
    margin-right: 2rem;
    padding-right: 5rem;
  }
`;
