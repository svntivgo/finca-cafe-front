import React, { useState } from 'react';
import {
  StyledBorderedContainer,
  StyledButtonContainer,
  StyledCafeContainer,
  StyledSelectorButton,
  StyledSelectorContainer,
} from '..';
import { Button, Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { SERVICES } from '../../../constants/services';
import { useReservation } from '../../../context';

export const CafeTourService: React.FC = () => {
  const [count, setCount] = useState(0);
  const { setExtras, reservation } = useReservation();

  return (
    <>
      <StyledBorderedContainer>
        <Text text="Tour del café" color={COLORS.PEARL_GREY} />
        <div>
          <Text
            text={`$${SERVICES.CAFE_TOUR.price}`}
            color={COLORS.PEARL_GREY}
            align="center"
          />
          <Text text="por persona" color={COLORS.PEARL_GREY} align="center" />
        </div>
      </StyledBorderedContainer>
      <StyledCafeContainer>
        <Text
          text="Seleccione cantidad de huéspedes"
          color={COLORS.PEARL_GREY}
        />
        <StyledSelectorContainer>
          <StyledSelectorButton
            onClick={() => {
              count > 0 && setCount(count - 1);
            }}
          >
            <Text
              text="-"
              color={COLORS.PEARL_GREY}
              align="center"
              size="3.5rem"
            />
          </StyledSelectorButton>
          <Text
            text={count.toString()}
            color={COLORS.PEARL_GREY}
            size="3.5rem"
          />
          <StyledSelectorButton
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <Text
              text="+"
              color={COLORS.PEARL_GREY}
              align="center"
              size="3.5rem"
            />
          </StyledSelectorButton>
        </StyledSelectorContainer>
      </StyledCafeContainer>
      <Text
        text={`Total: ${count * SERVICES.CAFE_TOUR.price} COP`}
        color={COLORS.PEARL_GREY}
      />
      <Text text="Impuestos incluidos" color={COLORS.PEARL_GREY} />
      <StyledButtonContainer>
        <Button
          text="Añadir a mi reserva"
          colors={COLORS.PEARL_BLACK}
          font={COLORS.PEARL_GREY}
          radius="3rem"
          onCLick={() =>
            setExtras({
              ...reservation.extras,
              tourCafe: { ...reservation.extras.tourCafe, quantity: count },
            })
          }
        />
      </StyledButtonContainer>
    </>
  );
};
