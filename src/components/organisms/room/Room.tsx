import React from 'react';
import { StyledHotelDescriptionContainer, StyledRoomContainer } from '..';
import { Banner, Text } from '../../atoms';
import { RoomCard, RoomEquipments, WingCard } from '../../molecules';
import { COLORS } from '../../../constants/colors';
import { useParams } from 'react-router-dom';
import { HOTELS, HotelKey, RoomKey } from '../../../constants/hotels';

export const Room: React.FC = () => {
  const { hotel, room } = useParams<{ hotel: HotelKey; room: RoomKey }>();

  const hotelInfo = hotel && HOTELS[hotel];

  const roomInfo = room && hotelInfo?.ROOMS[room];

  return (
    <StyledRoomContainer>
      {hotelInfo && roomInfo && (
        <>
          <Banner image={roomInfo.banner} height="200px" />
          <StyledHotelDescriptionContainer>
            <WingCard background={COLORS.GREEN}>
              <Text
                text={hotelInfo.DESCRIPTION}
                size="12px"
                weight="300"
                align="justify"
              />
            </WingCard>
          </StyledHotelDescriptionContainer>
          <RoomCard
            banner={roomInfo.banner}
            description={roomInfo.description}
            detailsUrl={roomInfo.detailsUrl}
            equipment={roomInfo.equipment}
            hotel={{ description: hotelInfo.DESCRIPTION, name: hotelInfo.NAME }}
            photo={roomInfo.photo}
            reserveUrl={roomInfo.reserveUrl}
            title={roomInfo.title}
          />
          <WingCard background={COLORS.PEARL_BLACK} inverted={true}>
            <RoomEquipments
              isVault={true}
              isParking={true}
              isTv={true}
              isJaccuzzi={true}
              isHotWater={true}
              isCoffeOpenBar={false}
              isHotelInsurance={false}
              isPool={false}
              title="EQUIPAMENTO"
            />
          </WingCard>
        </>
      )}
    </StyledRoomContainer>
  );
};
