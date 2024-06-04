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
import { Button, ROOM_BUTTON, Paragraph } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { useReservation } from '../../../context';
import { Link } from 'react-router-dom';
import { DEVICE_SCREEN } from '../../../shared/helper/screen';
import { formatMoney } from '../../../shared/helper/formatter';

export const RoomCard: React.FC<RoomCardProps> = (props) => {
  const { setRoom, reservation } = useReservation();
  return (
    <StyledRoomCardContainer inverted={props.inverted}>
      <Gallery gallery={props.photos} width="100%" bordered />
      <StyledRoomCardBox>
        <Paragraph
          style={{
            color: `${COLORS.GOLD}`,
            fontFamily: 'Royale',
            fontSize: `${DEVICE_SCREEN.isDesktop ? '2rem' : '1.5rem'}`,
            textAlign: 'center',
          }}
          text={props.title}
        />
        <StyledSpanRoomCard />
        <Paragraph
          style={{
            fontWeight: '200',
          }}
          text={props.description}
        />
        {props.priceInfo && (
          <div
            style={{
              display: 'flex',
              placeContent: 'space-between',
              placeItems: 'center',
              margin: '0 16px 0 0',
            }}
          >
            <Button
              style={{ ...ROOM_BUTTON, marginLeft: '0' }}
              text={props.hotel.name}
              onClick={() => ({})}
            />
            <Paragraph
              style={{
                fontWeight: '400',
              }}
              text={formatMoney(props.price + props.iva)}
            />
          </div>
        )}
        <StyledSpanRoomCard />
        <StyleSeparator />
        <StyledButtonsContainer>
          {!props.disableDetail && (
            <Link to={`/habitacion/${props.hotel.name}/${props.title}`}>
              <Button style={ROOM_BUTTON} text="Detalles" />
            </Link>
          )}

          <Button
            style={ROOM_BUTTON}
            text="Reservar"
            onClick={() => {
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
