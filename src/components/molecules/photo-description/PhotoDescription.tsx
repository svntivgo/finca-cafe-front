import React from 'react';
import {
  PhotoDescriptionContainerStyled,
  PhotoDescriptionProps,
  PhotoDescriptionTextContainerStyled,
} from '..';
import { LIGHT_FONT_STYLE, Paragraph } from '../../atoms';
import { Link } from 'react-router-dom';

export const PhotoDescription: React.FC<PhotoDescriptionProps> = (props) => {
  return (
    <PhotoDescriptionContainerStyled>
      <Link to={props.goTo} style={{ width: props.width, margin: '0 auto' }}>
        <img src={props.photo} width={props.width} />
        <PhotoDescriptionTextContainerStyled>
          <Paragraph
            style={{
              fontFamily: 'Royale',
              fontSize: '1.5rem',
              textAlign: 'center',
            }}
            text={props.title}
          />
          <Paragraph
            style={{ ...LIGHT_FONT_STYLE, textAlign: 'center' }}
            text={props.description}
          />
        </PhotoDescriptionTextContainerStyled>
      </Link>
    </PhotoDescriptionContainerStyled>
  );
};
