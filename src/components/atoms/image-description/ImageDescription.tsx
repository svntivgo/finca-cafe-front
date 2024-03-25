import React from 'react';
import { Link } from 'react-router-dom';
import {
  Image,
  LIGHT_FONT_STYLE,
  Paragraph,
  PhotoDescriptionContainerStyled,
  PhotoDescriptionProps,
  PhotoDescriptionTextContainerStyled,
} from '..';
import { COLORS } from '../../../constants/colors';

export const ImageDescription: React.FC<PhotoDescriptionProps> = (props) => {
  return (
    <PhotoDescriptionContainerStyled>
      <Link to={props.goTo} style={{ width: props.width, margin: '0 auto' }}>
        <Image src={props.photo} width={props.width} />
        <PhotoDescriptionTextContainerStyled>
          <Paragraph
            style={{
              color: `${COLORS.WHITE}`,
              fontFamily: 'Royale',
              fontSize: '1.5rem',
              textAlign: 'center',
            }}
            text={props.title}
          />
          <Paragraph
            style={{
              ...LIGHT_FONT_STYLE,
              color: `${COLORS.WHITE}`,
              fontSize: '0.8rem',
              textAlign: 'center',
            }}
            text={props.description}
          />
        </PhotoDescriptionTextContainerStyled>
      </Link>
    </PhotoDescriptionContainerStyled>
  );
};
