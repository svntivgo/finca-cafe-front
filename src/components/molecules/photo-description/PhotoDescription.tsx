import React from 'react';
import {
  PhotoDescriptionContainerStyled,
  PhotoDescriptionProps,
  PhotoDescriptionTextContainerStyled,
} from '..';
import { Button, Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';

export const PhotoDescription: React.FC<PhotoDescriptionProps> = (props) => {
  return (
    <PhotoDescriptionContainerStyled>
      <img src={props.photo} width={props.description} />
      <PhotoDescriptionTextContainerStyled>
        <Text text={props.title} align="center" font="Royale" size="1.5rem" />
        <Text
          text={props.description}
          align="center"
          weight="200"
          size="0.7rem"
        />
      </PhotoDescriptionTextContainerStyled>
      <Button
        colors={COLORS.PEARL_BLACK}
        text="Ver más"
        font="Poppins"
        fontSize="0.5rem"
        padding="0.25rem"
        radius="8px"
        onCLick={props.onClick}
        margin="-8px auto 0 auto"
      />
    </PhotoDescriptionContainerStyled>
  );
};
