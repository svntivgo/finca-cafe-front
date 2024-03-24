import React from 'react';
import {
  GastroPhotoContainerStyled,
  GastroPhotoDescriptionContainerStyled,
} from '..';
import { Button, Paragraph, WHITE_BUTTON } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { GastroPhotoProps } from './interfaces';
import { Link } from 'react-router-dom';

export const GastroPhoto: React.FC<GastroPhotoProps> = (props) => {
  return (
    <GastroPhotoContainerStyled>
      <img src={props.photo} width={props.width} />
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
