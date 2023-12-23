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
import Head from '../../../assets/habitaciones/head-habitaciones.jpg';
import { ROOMS_BOURBON, ROOMS_TIPICA } from '../../../constants/rooms';
import { MenuRooms, RoomCard, RoomEquipments, WingCard } from '../../molecules';

export const Rooms: React.FC = () => {
  return (
    <>
      <Banner image={Head} height="240px" />
      <StyledMenuContainer>
        <MenuRooms />
        <StyledTextContainer>
          <StyledSeparator />
          <Text
            text="EXPERIMENTE EL DISEÑO CONFORTABLE DE NUESTRAS HABITACIONES, EQUIPADAS PARA QUE PUEDA DESCANSAR, CONOCER EL EJE CAFETERO, SU CULTURA ENTRE SUS MONTAÑAS."
            align="center"
            font="Royale"
            color={COLORS.GOLD}
          />
          <StyledSeparator />
        </StyledTextContainer>
        <StyledImageContainer>
          <StyledImage src={Head} />
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
              banner={room.banner}
              equipment={room.equipment}
              hotel={room.hotel}
              price={0}
              reserveAction={() => console.log()}
              id={room.id}
              iva={room.iva}
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
              banner={room.banner}
              equipment={room.equipment}
              hotel={room.hotel}
              price={0}
              reserveAction={() => console.log()}
              id={room.id}
              iva={room.iva}
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
