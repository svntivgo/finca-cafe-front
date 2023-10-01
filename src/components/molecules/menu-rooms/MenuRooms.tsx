//Libraries
import React from 'react';

//Interfaces & Styled Components
import { StyledMenuContainer, StyledMenuItem, WingCard } from '..';

//Shared & Components
import { Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { HOTELS, Room } from '../../../constants/hotels';

export const MenuRooms: React.FC = () => {
  const bourbonRooms: Record<string, Room> = HOTELS.BOURBON.ROOMS;
  const tipicaRooms: Record<string, Room> = HOTELS.TIPICA.ROOMS;

  return (
    <WingCard background={COLORS.GREEN}>
      <Text text="ALOJAMIENTOS" font="Royale" color={COLORS.GOLD} size="24px" />
      <StyledMenuContainer>
        <StyledMenuItem>
          <Text
            text={HOTELS.BOURBON.NAME}
            size="24px"
            weight="200"
            capitalize={true}
            color={COLORS.SMOKE_GREY}
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <Text
            text={HOTELS.TIPICA.NAME}
            size="24px"
            weight="200"
            capitalize={true}
            color={COLORS.SMOKE_GREY}
          />
        </StyledMenuItem>
      </StyledMenuContainer>
      <Text text="HABITACIONES" font="Royale" color={COLORS.GOLD} size="24px" />
      <StyledMenuContainer>
        {Object.keys(bourbonRooms).map((roomKey, index) => {
          const room: Room = bourbonRooms[roomKey];
          return (
            <a
              href={`#bourbon-room-${index}`}
              key={`menu-rooms-bourbon-${index}`}
            >
              <StyledMenuItem key={`menu-rooms-bourbon-${index}`}>
                <Text
                  text={room.title.toLowerCase()}
                  size="24px"
                  weight="200"
                  capitalize={true}
                  color={COLORS.SMOKE_GREY}
                />
              </StyledMenuItem>
            </a>
          );
        })}
        {Object.keys(tipicaRooms).map((roomKey, index) => {
          const room: Room = tipicaRooms[roomKey];
          return (
            <a
              href={`#tipica-room-${index}`}
              key={`menu-rooms-tipica-${index}`}
            >
              <StyledMenuItem key={`menu-rooms-tipica-${index}`}>
                <Text
                  text={room.title.toLowerCase()}
                  size="24px"
                  weight="200"
                  capitalize={true}
                  color={COLORS.SMOKE_GREY}
                />
              </StyledMenuItem>
            </a>
          );
        })}
      </StyledMenuContainer>
    </WingCard>
  );
};
