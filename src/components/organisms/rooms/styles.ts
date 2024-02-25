import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

export const StyledMenuContainer = styled.div`
  margin-top: -24px;
  margin-bottom: 3rem;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin: 64px auto;
  @media (min-width: 1023px) {
    width: 80%;
    margin: 128px auto;
  }
`;

export const StyledSeparator = styled.span`
  border-bottom: 2px solid ${COLORS.PEARL_BLACK};
  margin: 24px 0;
  width: 100%;
`;

export const StyledImageContainer = styled.div`
  padding: 0 16px;
  @media (min-width: 1023px) {
    padding: 0 30% 0 10%;
  }
`;

export const StyledImage = styled.img`
  border-radius: 0 0 0 24px;
  width: 100%;
  @media (min-width: 1023px) {
    border-radius: 0 0 0 0;
  }
`;

export const StyledHotelDescription = styled.div`
  @media (min-width: 1023px) {
    display: flex;
    place-items: center;
  }
`;

export const StyledHotelDescriptionText = styled.div`
  @media (min-width: 1023px) {
    position: absolute;
    margin-left: 65%;
    min-height: 300px;
  }
`;

export const StyledRoomsSeparator = styled.span`
  display: block;
  margin-top: 32px;
`;

export const StyledRoomsEquipmentContainer = styled.div`
  @media (min-width: 1023px) {
    width: 100%;
    margin: 32px 0;
    background: ${COLORS.PEARL_BLACK};
  }
`;

export const StyledTextRooms = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 0 auto;
  @media (min-width: 1023px) {
    width: 90%;
  }
`;
