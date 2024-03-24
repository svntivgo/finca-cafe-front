import React, { useRef, useState } from 'react';
import { RowLeftStyled, RowRightStyled } from '..';
import { Image } from '../../atoms';
import rowLeft from '../../../assets/row-left.svg';
import rowRight from '../../../assets/row-right.svg';
import { GalleryProps } from './interfaces';
import {
  GalleryContainerStyled,
  GallerySectionStyled,
  PhotoGalleryContainerStyled,
} from './styles';

export const Gallery: React.FC<GalleryProps> = (props) => {
  const GALLERY = props.gallery;
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
    <GallerySectionStyled>
      <GalleryContainerStyled>
        <RowLeftStyled>
          <Image src={rowLeft} width="20px" onClick={prevReview} />
        </RowLeftStyled>
        <PhotoGalleryContainerStyled>
          <img
            src={photo.photo}
            width="100%"
            style={{
              borderRadius: `${props.bordered ? '0 24px 0 0' : 'none'}`,
            }}
          />
        </PhotoGalleryContainerStyled>
        <RowRightStyled>
          <Image src={rowRight} width="20px" onClick={nextReview} />
        </RowRightStyled>
      </GalleryContainerStyled>
    </GallerySectionStyled>
  );
};
