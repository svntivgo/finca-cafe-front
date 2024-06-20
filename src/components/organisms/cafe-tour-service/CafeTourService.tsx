import React, { useEffect, useState } from 'react';
import {
  StyledBorderedContainer,
  StyledButtonContainer,
  StyledCafeContainer,
  StyledSelectorButton,
  StyledSelectorContainer,
} from '..';
import { Button, Paragraph } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { useReservation } from '../../../context';

export const CafeTourService: React.FC<{
  isEnglish?: boolean;
  simpleForm?: boolean;
  normalPrice: number;
  englishPrice: number;
}> = (props) => {
  const [count, setCount] = useState(0);
  const { setExtras, reservation } = useReservation();
  const price = props.isEnglish
  ? props.englishPrice
  : props.normalPrice

  useEffect(() => {}, [reservation.extras.tourCafe.quantity]);

  return (
    <>
      <StyledBorderedContainer>
        <Paragraph
          text={`Tour del café ${props.isEnglish ? '(English)' : ''}`}
          color={COLORS.PEARL_GREY}
        />
        <div>
          <Paragraph
            style={{ color: `${COLORS.PEARL_GREY}`, textAlign: 'center' }}
            text={`$${price}`}
          />
          <Paragraph
            style={{ color: `${COLORS.PEARL_GREY}`, textAlign: 'center' }}
            text="por persona"
          />
        </div>
      </StyledBorderedContainer>
      <StyledCafeContainer>
        <Paragraph
          style={{ color: `${COLORS.PEARL_GREY}` }}
          text="Seleccione cantidad de huéspedes"
        />
        <StyledSelectorContainer>
          <StyledSelectorButton
            onClick={() => {
              count > 0 && setCount(count - 1);
              count > 0 &&
                setExtras({
                  ...reservation.extras,
                  tourCafe: { ...reservation.extras.tourCafe, quantity: count - 1, price },
                });

            }}
          >
            <Paragraph
              style={{
                color: `${COLORS.PEARL_GREY}`,
                textAlign: 'center',
                fontSize: '3.5rem',
              }}
              text="-"
            />
          </StyledSelectorButton>
          <Paragraph
            style={{
              color: `${COLORS.PEARL_GREY}`,
              fontSize: '3.5rem',
            }}
            text={count.toString()}
          />
          <StyledSelectorButton
            onClick={() => {
              setCount(count + 1);
              setExtras({
                ...reservation.extras,
                tourCafe: {
                  ...reservation.extras.tourCafe,
                  quantity: count + 1,
                  price
                },
              });
            }}
          >
            <Paragraph
              style={{
                color: `${COLORS.PEARL_GREY}`,
                fontSize: '3.5rem',
                textAlign: 'center',
              }}
              text="+"
            />
          </StyledSelectorButton>
        </StyledSelectorContainer>
      </StyledCafeContainer>
      <Paragraph
        text={`Total: ${
          count *
          (price)
        } COP`}
        color={COLORS.PEARL_GREY}
      />
      <Paragraph
        style={{ color: `${COLORS.PEARL_GREY}` }}
        text="Impuestos incluidos"
      />
      {!props.simpleForm && (
        <StyledButtonContainer>
          <Button
            style={{
              backgroundColor: `${COLORS.PEARL_BLACK}`,
              borderRadius: '3rem',
              color: `${COLORS.PEARL_GREY}`,
            }}
            text="Añadir a mi reserva"
            onClick={() =>
              setExtras({
                ...reservation.extras,
                tourCafe: { ...reservation.extras.tourCafe, quantity: count, price },
              })
            }
          />
        </StyledButtonContainer>
      )}
    </>
  );
};
