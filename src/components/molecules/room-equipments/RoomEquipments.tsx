//Libraries
import React from 'react';

//Interfaces & Styled Components
import {
  RoomEquipmentsProps,
  StyledEquipmentContainer,
  StyledEquipmentItem,
  StyledSpan,
} from '..';

//Shared & Components
import {
  RoomEquipment,
  ROOM_EQUIPMENTS,
} from '../../../constants/room-equipments';
import { Icon, Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';

export const RoomEquipments: React.FC<RoomEquipmentsProps> = (props) => {
  const equipments: RoomEquipment[] = [];

  props.isVault && equipments.push(ROOM_EQUIPMENTS.VAULT);
  props.isParking && equipments.push(ROOM_EQUIPMENTS.PARKING);
  props.isTv && equipments.push(ROOM_EQUIPMENTS.TV);
  props.isHotWater && equipments.push(ROOM_EQUIPMENTS.HOT_WATER);
  props.isHotelInsurance && equipments.push(ROOM_EQUIPMENTS.HOTEL_INSURANCE);
  props.isCoffeOpenBar && equipments.push(ROOM_EQUIPMENTS.COFFE_OPEN_BAR);
  props.isPool && equipments.push(ROOM_EQUIPMENTS.POOL);
  props.isJaccuzzi && equipments.push(ROOM_EQUIPMENTS.JACUZZI);

  return (
    <>
      <Text
        text={props.title}
        font="Royale"
        align="center"
        color={COLORS.GOLD}
      />
      <StyledEquipmentContainer>
        {equipments.map((equipment, index) => (
          <StyledEquipmentItem key={`${props.title}-equipment-${index}`}>
            <Icon src={equipment.ICON} width="24px" />
            <StyledSpan />
            <Text
              text={equipment.NAME}
              align="center"
              color={COLORS.SMOKE_GREY}
              size="8px"
              weight="300"
            />
          </StyledEquipmentItem>
        ))}
      </StyledEquipmentContainer>
    </>
  );
};
