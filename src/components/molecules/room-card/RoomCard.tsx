//Libraries
import React from 'react';

//Interfaces & Styled Components
import {
  RoomCardProps,
  StyleSeparator,
  StyledRoomImage,
  StyledButtonsContainer,
  StyledRoomCardContainer,
} from '..';

//Shared & Components
import { Button, Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';

export const RoomCard: React.FC<RoomCardProps> = (props) => {
  return (
    <StyledRoomCardContainer inverted={props.inverted}>
      <Text
        color={COLORS.GOLD}
        font="Royale"
        size="24px"
        text={props.title}
        weight="400"
      />
      <StyledRoomImage src={props.photo} />
      <Text text={props.description} color={COLORS.PEARL_BLACK} weight="300" />
      <StyleSeparator />
      <StyledButtonsContainer>
        <Button
          colors={COLORS.PEARL_GREY}
          font={COLORS.PEARL_BLACK}
          margin="0 16px"
          padding="8px 24px"
          radius="50px"
          text="Detalles"
          weight={600}
        />
        <Button
          colors={COLORS.PEARL_BLACK}
          font={COLORS.SMOKE_GREY}
          padding="8px 24px"
          radius="50px"
          text="Reservar"
          weight={600}
        />
      </StyledButtonsContainer>
    </StyledRoomCardContainer>
  );
};
