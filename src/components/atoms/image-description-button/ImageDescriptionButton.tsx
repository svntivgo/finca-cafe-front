import React from 'react';
import {
  GastroPhotoContainerStyled,
  GastroPhotoDescriptionContainerStyled,
} from '../../molecules';
import { Button, Image, Paragraph, WHITE_BUTTON } from '..';
import { COLORS } from '../../../constants/colors';
import { Link } from 'react-router-dom';
import { ImageDescriptionButtonProps } from '.';

export const ImageDescriptionButton: React.FC<ImageDescriptionButtonProps> = (
  props,
) => {
  return (
    <GastroPhotoContainerStyled>
      <Image src={props.photo} width={props.width} />
      <GastroPhotoDescriptionContainerStyled>
        <Paragraph
          style={{
            color: `${COLORS.GOLD}`,
            fontFamily: 'Royale',
            fontSize: '1.5rem',
            textAlign: 'center',
          }}
          text={props.title}
        />
        <Link to={props.onClick}>
          <Button
            style={{
              ...WHITE_BUTTON,
              fontSize: '0.5rem',
              margin: '16px 0 0 0',
            }}
            text="Ver carta"
          />
        </Link>
      </GastroPhotoDescriptionContainerStyled>
    </GastroPhotoContainerStyled>
  );
};
