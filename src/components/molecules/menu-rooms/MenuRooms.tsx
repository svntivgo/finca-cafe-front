//Libraries
import React from 'react';

//Interfaces & Styled Components
import {
  StyledLinkMenuRooms,
  StyledMenuBox,
  StyledMenuContainerBox,
  StyledMenuItem,
  StyledMenuItemsContainer,
  StyledMenuRoomBox,
  WingCard,
} from '..';

//Shared & Components
import { Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { HOTELS, Room } from '../../../constants/hotels';

export const MenuRooms: React.FC = () => {
  const bourbonRooms: Record<string, Room> = HOTELS.BOURBON.ROOMS;
  const tipicaRooms: Record<string, Room> = HOTELS.TIPICA.ROOMS;

  return (
    <WingCard background={COLORS.PEARL_BLACK}>
      <StyledMenuContainerBox>
        <StyledMenuBox>
          <Text text="HOTELES" font="Royale" color={COLORS.GOLD} size="24px" />
          <StyledMenuItemsContainer>
            <StyledMenuItem>
              <Text
                text={`Hotel ${HOTELS.BOURBON.NAME}`}
                size="24px"
                weight="200"
                capitalize={true}
                color={COLORS.SMOKE_GREY}
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <Text
                text={`Hotel ${HOTELS.TIPICA.NAME}`}
                size="24px"
                weight="200"
                capitalize={true}
                color={COLORS.SMOKE_GREY}
              />
            </StyledMenuItem>
          </StyledMenuItemsContainer>
        </StyledMenuBox>
        <StyledMenuRoomBox>
          <Text
            text="HABITACIONES"
            font="Royale"
            color={COLORS.GOLD}
            size="24px"
          />
          <StyledMenuItemsContainer>
            {Object.keys(bourbonRooms).map((roomKey, index) => {
              const room: Room = bourbonRooms[roomKey];
              return (
                <StyledLinkMenuRooms
                  href={`#bourbon-room-${index}`}
                  key={`menu-rooms-bourbon-${index}`}
                  style={{ marginRight: '32px' }}
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
                </StyledLinkMenuRooms>
              );
            })}
            {Object.keys(tipicaRooms).map((roomKey, index) => {
              const room: Room = tipicaRooms[roomKey];
              return (
                <StyledLinkMenuRooms
                  href={`#tipica-room-${index}`}
                  key={`menu-rooms-tipica-${index}`}
                  style={{ marginRight: '32px' }}
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
                </StyledLinkMenuRooms>
              );
            })}
          </StyledMenuItemsContainer>
        </StyledMenuRoomBox>
      </StyledMenuContainerBox>
    </WingCard>
  );
};
