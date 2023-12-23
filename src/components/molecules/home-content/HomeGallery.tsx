import React, { useRef, useState } from 'react';
import {
  HomeGalleryContainerStyled,
  HomeGalleryDescriptionStyled,
  HomeGallerySectionStyled,
  HomePhotoGalleryContainerStyled,
  HomePhotoGalleryTextContainerStyled,
  HomeSpanStyled,
  RowLeftStyled,
  RowRightStyled,
} from '..';
import { Icon, Text } from '../../atoms';
import { GALLERY } from '../../../constants/gallery';
import rowLeft from '../../../assets/row-left.svg';
import rowRight from '../../../assets/row-right.svg';
import { COLORS } from '../../../constants/colors';

export const HomeGallery: React.FC = () => {
  const position = useRef(1);
  const [photo, setPhoto] = useState(GALLERY[0]);

  const nextReview = () => {
    if (position.current >= GALLERY.length) {
      setPhoto(GALLERY[0]);
      position.current = 1;
      return;
    }

    setPhoto(GALLERY[position.current]);
    position.current = position.current + 1;
  };

  const prevReview = () => {
    if (position.current <= 1) {
      position.current = GALLERY.length;
      setPhoto(GALLERY[GALLERY.length - 1]);
      return;
    }

    position.current = position.current - 1;
    setPhoto(GALLERY[position.current - 1]);
  };
  return (
    <HomeGallerySectionStyled>
      <HomeGalleryDescriptionStyled>
        <Text
          text="LA BODA PERFECTA SI EXISTE"
          font="Royale"
          color={COLORS.PEARL_BLACK}
          size="1.5rem"
        />
        <HomeSpanStyled />
        <Text
          text="Ofrecemos la misma atención al detalle, sin importar cuán grande o
          pequeña sea tú fiesta, y podemos organizar cada evento sin
          problemas, agregando tecnología audiovisual sofisticada y
          transformando la atmósfera con mantelería y arreglos florales que
          superan las expectativas de tus sueños."
          color={COLORS.GREEN}
          weight="200"
          align="justify"
        />
      </HomeGalleryDescriptionStyled>
      <HomeGalleryContainerStyled>
        <RowLeftStyled>
          <Icon src={rowLeft} width="20px" onClick={prevReview} />
        </RowLeftStyled>
        <HomePhotoGalleryContainerStyled>
          <img src={photo.photo} width="100%" />
          <HomePhotoGalleryTextContainerStyled>
            <Text text={photo.title} align="center" weight="200" />
            <Text
              text={photo.text}
              align="center"
              weight="200"
              size="0.75rem"
            />
          </HomePhotoGalleryTextContainerStyled>
        </HomePhotoGalleryContainerStyled>
        <RowRightStyled>
          <Icon src={rowRight} width="20px" onClick={nextReview} />
        </RowRightStyled>
      </HomeGalleryContainerStyled>
    </HomeGallerySectionStyled>
  );
};
