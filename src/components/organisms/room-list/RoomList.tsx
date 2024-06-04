import React from 'react';
import { RoomCard, RoomEquipments, WingCard } from '../../molecules';
import { COLORS } from '../../../constants/colors';
import { RoomListProps } from '..';
import { HOTELS } from '../../../constants/hotels';

export const RoomList: React.FC<RoomListProps> = (props) => {
  return (
    <>
      {props.rooms.map((room, index) => (
        <div id={`bourbon-room-${index}`} key={`bourbon-room-${index}`}>
          <RoomCard
            title={room.title}
            photo={room.photo}
            description={room.description}
            detailsUrl={room.detailsUrl}
            reserveUrl={room.reserveUrl}
            inverted={true}
            banner={room.banner}
            equipment={room.equipment}
            hotel={room.hotel}
            price={room.price}
            reserveAction={props.reservationAction}
            id={room.id}
            iva={room.iva}
            photos={room.photos}
            priceInfo
          />
          <WingCard background={COLORS.PEARL_BLACK} inverted>
            <RoomEquipments
              isVault={true}
              isParking={true}
              isTv={true}
              isJaccuzzi={true}
              isHotWater={true}
              isCoffeOpenBar={true}
              isHotelInsurance={true}
              isPool={room.hotel.name !== HOTELS.BOURBON.NAME}
              isOpticFiber={false}
              title="EQUIPAMENTO HOTEL"
            />
          </WingCard>
        </div>
      ))}
    </>
  );
};
