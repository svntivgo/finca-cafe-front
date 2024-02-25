import React, { useEffect, useState } from 'react';
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

export const CafeTourService: React.FC<{
  isEnglish?: boolean;
  simpleForm?: boolean;
}> = (props) => {
  const [count, setCount] = useState(0);
  const { setExtras, reservation } = useReservation();

  useEffect(() => {}, [reservation.extras.tourCafe.quantity]);

  return (
    <>
      <StyledBorderedContainer>
        <Text
          text={`Tour del café ${props.isEnglish ? '(English)' : ''}`}
          color={COLORS.PEARL_GREY}
        />
        <div>
          <Text
            text={`$${
              props.isEnglish
                ? SERVICES.CAFE_TOUR.english
                : SERVICES.CAFE_TOUR.normal
            }`}
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
              count > 0 &&
                setExtras({
                  ...reservation.extras,
                  tourCafe: { ...reservation.extras.tourCafe, quantity: count },
                });
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
              setExtras({
                ...reservation.extras,
                tourCafe: {
                  ...reservation.extras.tourCafe,
                  quantity: count + 1,
                },
              });
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
        text={`Total: ${
          count *
          (props.isEnglish
            ? SERVICES.CAFE_TOUR.english
            : SERVICES.CAFE_TOUR.normal)
        } COP`}
        color={COLORS.PEARL_GREY}
      />
      <Text text="Impuestos incluidos" color={COLORS.PEARL_GREY} />
      {!props.simpleForm && (
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
      )}
    </>
  );
};
