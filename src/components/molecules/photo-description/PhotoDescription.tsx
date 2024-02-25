import React from 'react';
import {
  PhotoDescriptionContainerStyled,
  PhotoDescriptionProps,
  PhotoDescriptionTextContainerStyled,
} from '..';
import { Text } from '../../atoms';
import { Link } from 'react-router-dom';

export const PhotoDescription: React.FC<PhotoDescriptionProps> = (props) => {
  return (
    <PhotoDescriptionContainerStyled>
      <Link to={props.goTo} style={{ width: props.width, margin: '0 auto' }}>
        <img src={props.photo} width={props.width} />
        <PhotoDescriptionTextContainerStyled>
          <Text text={props.title} align="center" font="Royale" size="1.5rem" />
          <Text
            text={props.description}
            align="center"
            weight="200"
            size="0.7rem"
          />
        </PhotoDescriptionTextContainerStyled>
      </Link>
    </PhotoDescriptionContainerStyled>
  );
};
