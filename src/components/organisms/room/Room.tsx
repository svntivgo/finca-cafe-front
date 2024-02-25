import React from 'react';
import {
  StyledHotelDescriptionContainer,
  StyledRoomContainer,
  StyledRoomGalleryListContainer,
} from '..';
import { Banner, Text } from '../../atoms';
import {
  ImageGalleryList,
  RoomCard,
  RoomEquipments,
  WingCard,
} from '../../molecules';
import { COLORS } from '../../../constants/colors';
import { useNavigate, useParams } from 'react-router-dom';
import { HOTELS, Hotel, HotelKey, RoomKey } from '../../../constants/hotels';
import { GALLERY_BOURBON, GALLERY_TYPICA } from '../../../constants/gallery';

export const Room: React.FC = () => {
  const { hotel, room } = useParams<{ hotel: HotelKey; room: RoomKey }>();
  const hotelName = hotel?.toUpperCase() ?? '';
  const removeAccents = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const roomName = removeAccents(room?.toUpperCase().replace(/ /g, '_') ?? '');

  const hotelInfo: Hotel = HOTELS[hotelName as HotelKey];

  const roomInfo = room && hotelInfo?.ROOMS[roomName];

  const navigate = useNavigate();
  const changeRoute = () => {
    navigate('/reserva/selecciona');
  };

  return (
    <StyledRoomContainer>
      {hotelInfo && roomInfo && (
        <>
          <Banner image={roomInfo.banner} height="200px" />
          <StyledHotelDescriptionContainer>
            <WingCard background={COLORS.GREEN}>
              <Text
                text={`Hotel ${hotelInfo.NAME}`}
                size="3rem"
                weight="200"
                align="justify"
                font="Royale"
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
            price={0}
            reserveAction={() => changeRoute()}
            id={''}
            iva={0}
            photos={roomInfo.photos}
            disableDetail
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
              isOpticFiber={false}
              title="EQUIPAMENTO"
            />
          </WingCard>
        </>
      )}
      <StyledRoomGalleryListContainer>
        <ImageGalleryList
          photos={
            hotelInfo.NAME === 'Bourbon' ? GALLERY_BOURBON : GALLERY_TYPICA
          }
        />
      </StyledRoomGalleryListContainer>
    </StyledRoomContainer>
  );
};
