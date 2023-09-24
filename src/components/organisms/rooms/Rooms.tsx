//Libraries
import React from 'react';

//Interfaces & Styled Components
import {
  StyledImage,
  StyledSeparator,
  StyledImageContainer,
  StyledMenuContainer,
  StyledTextContainer,
} from '..';

//Shared & Components
import { Banner, Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { HOTELS } from '../../../constants/hotels';
import photo from '../../../assets/habitaciones/bourbon.png';
import { ROOMS_BOURBON, ROOMS_TIPICA } from '../../../constants/rooms';
import { MenuRooms, RoomCard, RoomEquipments, WingCard } from '../../molecules';

export const Rooms: React.FC = () => {
  return (
    <>
      <Banner image={photo} height="240px" />
      <StyledMenuContainer>
        <MenuRooms />
        <StyledTextContainer>
          <StyledSeparator />
          <Text
            text="EXPEMENTE EL DISEÑO CONFORTABLE DE NUESTRAS HABITACIONES, EQUIPADAS PARA QUE PUEDA DESCANSAR, CONOCER EL EJE FETERO, SU CULTURA ENTRE SUS MONATÑAS."
            align="center"
            font="Royale"
            color={COLORS.GOLD}
          />
          <StyledSeparator />
        </StyledTextContainer>
        <StyledImageContainer>
          <StyledImage src={photo} />
        </StyledImageContainer>
        <WingCard background={COLORS.SMOKE_GREY}>
          <Text
            text={HOTELS.BOURBON.DESCRIPTION}
            align="justify"
            weight="300"
            color={COLORS.PEARL_BLACK}
          />
        </WingCard>
        <WingCard background={COLORS.PEARL_BLACK} inverted={true}>
          <RoomEquipments
            title="EQUIPAMENTO Bourbon"
            isVault={true}
            isParking={true}
            isTv={true}
            isHotWater={true}
            isHotelInsurance={true}
            isCoffeOpenBar={true}
            isPool={true}
            isJaccuzzi={true}
          />
        </WingCard>
        {ROOMS_BOURBON.map((room, index) => (
          <div id={`bourbon-room-${index}`} key={`bourbon-room-${index}`}>
            <RoomCard
              title={room.title}
              photo={room.photo}
              description={room.description}
              detailsUrl={room.detailsUrl}
              reserveUrl={room.reserveUrl}
              inverted={room.inverted}
            />
          </div>
        ))}
        <WingCard background={COLORS.SMOKE_GREY}>
          <Text
            text={HOTELS.TIPICA.DESCRIPTION}
            align="justify"
            weight="300"
            color={COLORS.PEARL_BLACK}
          />
        </WingCard>
        {ROOMS_TIPICA.map((room, index) => (
          <div id={`tipica-room-${index}`} key={`bourbon-room-${index}`}>
            <RoomCard
              title={room.title}
              photo={room.photo}
              description={room.description}
              detailsUrl={room.detailsUrl}
              reserveUrl={room.reserveUrl}
              inverted={room.inverted}
            />
          </div>
        ))}
        <WingCard background={COLORS.PEARL_BLACK} inverted={true}>
          <RoomEquipments
            title="EQUIPAMENTO TIPICA"
            isVault={true}
            isParking={true}
            isTv={true}
            isHotWater={true}
            isHotelInsurance={true}
            isCoffeOpenBar={true}
            isPool={true}
            isJaccuzzi={false}
          />
        </WingCard>
      </StyledMenuContainer>
    </>
  );
};
