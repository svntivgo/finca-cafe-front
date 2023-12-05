import React from 'react';
import {
  HomeGalleryContainerStyled,
  HomePhotoGalleryContainerStyled,
  HomePhotoGalleryTextContainerStyled,
} from '..';
import { Text } from '../../atoms';
import Photo from '../../../assets/home/boda.jpg';

export const HomeGallery: React.FC = () => {
  return (
    <HomeGalleryContainerStyled>
      <HomePhotoGalleryContainerStyled>
        <img src={Photo} width="100%" />
        <HomePhotoGalleryTextContainerStyled>
          <Text
            text="EL AMOR SE CELEBRA A LO GRANDE"
            align="center"
            weight="200"
          />
          <Text
            text="Hacemos de tu boda el sueño que siempre vas recordar"
            align="center"
            weight="200"
            size="0.75rem"
          />
        </HomePhotoGalleryTextContainerStyled>
      </HomePhotoGalleryContainerStyled>
    </HomeGalleryContainerStyled>
  );
};
