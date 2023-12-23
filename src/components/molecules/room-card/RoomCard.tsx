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
import { useReservation } from '../../../context';
import { Link } from 'react-router-dom';

export const RoomCard: React.FC<RoomCardProps> = (props) => {
  const { setRoom, reservation } = useReservation();
  return (
    <StyledRoomCardContainer inverted={props.inverted}>
      <StyledRoomImage src={props.photo} />
      <Text
        color={COLORS.GOLD}
        font="Royale"
        size="24px"
        text={props.title}
        weight="400"
      />
      <Text text={props.description} color={COLORS.PEARL_BLACK} weight="300" />
      <StyleSeparator />
      <StyledButtonsContainer>
        <Link to={`/habitacion/${props.hotel.name}/${props.title}`}>
          <Button
            colors={COLORS.PEARL_GREY}
            font={COLORS.PEARL_BLACK}
            margin="0 16px"
            padding="8px 24px"
            radius="50px"
            text="Detalles"
            weight={600}
          />
        </Link>
        <Button
          colors={COLORS.PEARL_BLACK}
          font={COLORS.SMOKE_GREY}
          padding="8px 24px"
          radius="50px"
          text="Reservar"
          weight={600}
          onCLick={() => {
            setRoom({
              ...reservation.room,
              hotel: props.hotel.name,
              name: props.title,
              price: props.price,
              id: props.id,
              iva: props.iva,
            });
            props.reserveAction();
          }}
          // disabled
        />
      </StyledButtonsContainer>
    </StyledRoomCardContainer>
  );
};
