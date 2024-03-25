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
import {
  MENU_ROOM_FONT_STYLE,
  MENU_ROOM_TITLE_FONT_STYLE,
  Paragraph,
} from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { HOTELS, Room } from '../../../constants/hotels';

export const MenuRooms: React.FC = () => {
  const bourbonRooms: Record<string, Room> = HOTELS.BOURBON.ROOMS;
  const tipicaRooms: Record<string, Room> = HOTELS.TIPICA.ROOMS;

  return (
    <WingCard background={COLORS.PEARL_BLACK}>
      <StyledMenuContainerBox>
        <StyledMenuBox>
          <Paragraph style={MENU_ROOM_TITLE_FONT_STYLE} text="HOTELES" />
          <StyledMenuItemsContainer>
            <StyledLinkMenuRooms
              href={`#bourbon-description`}
              style={{ paddingRight: 0 }}
            >
              <StyledMenuItem>
                <Paragraph
                  style={{ ...MENU_ROOM_FONT_STYLE, fontFamily: 'Poppins' }}
                  text={`Hotel ${HOTELS.BOURBON.NAME}`}
                />
              </StyledMenuItem>
            </StyledLinkMenuRooms>
            <StyledLinkMenuRooms
              href={`#typica-description`}
              style={{ paddingRight: 0 }}
            >
              <StyledMenuItem>
                <Paragraph
                  style={{ ...MENU_ROOM_FONT_STYLE, fontFamily: 'Poppins' }}
                  text={`Hotel ${HOTELS.TIPICA.NAME}`}
                />
              </StyledMenuItem>
            </StyledLinkMenuRooms>
          </StyledMenuItemsContainer>
        </StyledMenuBox>
        <StyledMenuRoomBox>
          <Paragraph style={MENU_ROOM_TITLE_FONT_STYLE} text="HABITACIONES" />
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
                    <Paragraph
                      style={{ ...MENU_ROOM_FONT_STYLE, fontFamily: 'Poppins' }}
                      text={room.title.toLowerCase()}
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
                    <Paragraph
                      style={{ ...MENU_ROOM_FONT_STYLE, fontFamily: 'Poppins' }}
                      text={room.title.toLowerCase()}
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
