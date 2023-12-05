import React from 'react';
import {
  GastroPhotoContainerStyled,
  GastroPhotoDescriptionContainerStyled,
} from '..';
import { Button, Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { GastroPhotoProps } from './interfaces';

export const GastroPhoto: React.FC<GastroPhotoProps> = (props) => {
  return (
    <GastroPhotoContainerStyled>
      <img src={props.photo} width={props.width} />
      <GastroPhotoDescriptionContainerStyled>
        <Text
          text={props.title}
          align="center"
          font="Royale"
          color={COLORS.GOLD}
          size="1.5rem"
        />
        <Button
          text="Ver carta"
          colors={COLORS.WHITE}
          font={COLORS.PEARL_BLACK}
          onCLick={props.onClick}
          fontSize="0.5rem"
          margin="16px 0 0 0"
          radius="8px"
        />
      </GastroPhotoDescriptionContainerStyled>
    </GastroPhotoContainerStyled>
  );
};
