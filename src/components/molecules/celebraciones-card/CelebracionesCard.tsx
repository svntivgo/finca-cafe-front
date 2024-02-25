import React from 'react';
import {
  CelebracionesCardProps,
  CelebrationsCardsPhotoStyled,
  StyledCelebrationsCardContainer,
  StyledTextCelebrationsCard,
} from '..';
import { Button, Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';

export const CelebracionesCard: React.FC<CelebracionesCardProps> = (props) => {
  return (
    <StyledCelebrationsCardContainer
      photo={props.photo}
      text={props.text}
      title={props.title}
      width={props.width}
      extended={props.extended}
    >
      <CelebrationsCardsPhotoStyled
        src={props.photo}
        photo={props.photo}
        text={props.text}
        title={props.title}
        width={props.width}
        extended={props.extended}
      />
      <StyledTextCelebrationsCard
        photo={props.photo}
        text={props.text}
        title={props.title}
        width={props.width}
        extended={props.extended}
      >
        <Text
          text={props.title}
          align="left"
          font="Poppins"
          color={COLORS.PEARL_BLACK}
          size={props.extended ? '2rem' : '1.5rem'}
        />
        <Text
          text={props.text}
          align="left"
          font="Poppins"
          color={COLORS.PEARL_BLACK}
          size="1rem"
          weight="200"
        />
        {props.button && (
          <Button
            colors={COLORS.PEARL_BLACK}
            text="Reservar"
            font="Poppins"
            fontSize="0.5rem"
            padding="0.25rem 1rem"
            radius="8px"
            margin="2rem 0"
            onCLick={props.onClick ? props.onClick : () => ({})}
          />
        )}
      </StyledTextCelebrationsCard>
    </StyledCelebrationsCardContainer>
  );
};
