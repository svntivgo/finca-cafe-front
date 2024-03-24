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
import {
  BLACK_BUTTON,
  Button,
  Image,
  LIGHT_FONT_STYLE,
  Paragraph,
} from '../../atoms';
import { GALLERY } from '../../../constants/gallery';
import rowLeft from '../../../assets/row-left.svg';
import rowRight from '../../../assets/row-right.svg';
import { COLORS } from '../../../constants/colors';
import { Link } from 'react-router-dom';

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
        <Paragraph
          style={{
            fontFamily: 'Royale',
            fontSize: '1.5rem',
          }}
          text="LA BODA PERFECTA SI EXISTE"
        />
        <HomeSpanStyled />
        <Paragraph
          text="Ofrecemos la misma atención al detalle, sin importar cuán grande o
          pequeña sea tú fiesta, y podemos organizar cada evento sin
          problemas, agregando tecnología audiovisual sofisticada y
          transformando la atmósfera con mantelería y arreglos florales que
          superan las expectativas de tus sueños."
          style={{
            ...LIGHT_FONT_STYLE,
            color: `${COLORS.GREEN}`,
            textAlign: 'justify',
          }}
        />
        <Link to="/celebraciones">
          <Button
            style={{ ...BLACK_BUTTON, margin: '2rem auto 0 auto' }}
            text="Celebraciones"
          />
        </Link>
      </HomeGalleryDescriptionStyled>
      <HomeGalleryContainerStyled>
        <RowLeftStyled>
          <Image src={rowLeft} width="20px" onClick={prevReview} />
        </RowLeftStyled>
        <HomePhotoGalleryContainerStyled>
          <img src={photo.photo} width="100%" />
          <HomePhotoGalleryTextContainerStyled>
            <Paragraph
              text={photo.title ?? ''}
              style={{ ...LIGHT_FONT_STYLE, textAlign: 'center' }}
            />
            <Paragraph
              text={photo.text ?? ''}
              style={{ ...LIGHT_FONT_STYLE, textAlign: 'center' }}
            />
          </HomePhotoGalleryTextContainerStyled>
        </HomePhotoGalleryContainerStyled>
        <RowRightStyled>
          <Image src={rowRight} width="20px" onClick={nextReview} />
        </RowRightStyled>
      </HomeGalleryContainerStyled>
    </HomeGallerySectionStyled>
  );
};
