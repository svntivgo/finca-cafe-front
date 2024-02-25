//Libraries
import React from 'react';

//Interfaces & Styled Components
import {
  RoomCardProps,
  StyleSeparator,
  StyledButtonsContainer,
  StyledRoomCardContainer,
  StyledRoomCardBox,
  StyledSpanRoomCard,
  Gallery,
} from '..';

//Shared & Components
import { Button, Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { useReservation } from '../../../context';
import { Link } from 'react-router-dom';
import { DEVICE_SCREEN } from '../../../shared/helper/screen';

export const RoomCard: React.FC<RoomCardProps> = (props) => {
  const { setRoom, reservation } = useReservation();
  return (
    <StyledRoomCardContainer inverted={props.inverted}>
      <Gallery gallery={props.photos} width="100%" bordered />
      <StyledRoomCardBox>
        <Text
          color={COLORS.GOLD}
          font="Royale"
          size={DEVICE_SCREEN.isDesktop ? '2rem' : '1.5rem'}
          text={props.title}
          weight="400"
          align="center"
        />
        <StyledSpanRoomCard />
        <Text
          text={props.description}
          color={COLORS.PEARL_BLACK}
          weight="300"
        />
        <StyledSpanRoomCard />
        <StyleSeparator />
        <StyledButtonsContainer>
          {!props.disableDetail && (
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
          )}

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
          />
        </StyledButtonsContainer>
      </StyledRoomCardBox>
    </StyledRoomCardContainer>
  );
};
