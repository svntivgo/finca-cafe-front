//Libraries
import React from 'react';

//Interfaces & Styled Components
import { StyledMenuContainer, StyledMenuItem, WingCard } from '..';

//Shared & Components
import { Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { HOTELS } from '../../../constants/hotels';

export const MenuRooms: React.FC = () => {
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
        {HOTELS.BOURBON.ROOMS.map((roomName, index) => (
          <a
            href={`#bourbon-room-${index}`}
            key={`menu-rooms-bourbon-${index}`}
          >
            <StyledMenuItem key={`menu-rooms-bourbon-${index}`}>
              <Text
                text={roomName.toLowerCase()}
                size="24px"
                weight="200"
                capitalize={true}
                color={COLORS.SMOKE_GREY}
              />
            </StyledMenuItem>
          </a>
        ))}
        {HOTELS.TIPICA.ROOMS.map((roomName, index) => (
          <a href={`#tipica-room-${index}`} key={`menu-rooms-tipica-${index}`}>
            <StyledMenuItem>
              <Text
                text={roomName.toLowerCase()}
                size="24px"
                weight="200"
                capitalize={true}
                color={COLORS.SMOKE_GREY}
              />
            </StyledMenuItem>
          </a>
        ))}
      </StyledMenuContainer>
    </WingCard>
  );
};
