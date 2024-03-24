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
import { Image, Paragraph } from '../../atoms';
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
  props.isOpticFiber && equipments.push(ROOM_EQUIPMENTS.OPTIC_FIBER);

  return (
    <>
      <Paragraph
        style={{
          textAlign: 'center',
          color: `${COLORS.GOLD}`,
          fontFamily: 'Royale',
        }}
        text={props.title}
      />
      <StyledEquipmentContainer>
        {equipments.map((equipment, index) => (
          <StyledEquipmentItem key={`${props.title}-equipment-${index}`}>
            <Image src={equipment.ICON} width="24px" />
            <StyledSpan />
            <Paragraph
              style={{
                textAlign: 'center',
                color: `${COLORS.SMOKE_GREY},`,
                fontSize: '8px',
                fontWeight: '300',
              }}
              text={equipment.NAME}
            />
          </StyledEquipmentItem>
        ))}
      </StyledEquipmentContainer>
    </>
  );
};
