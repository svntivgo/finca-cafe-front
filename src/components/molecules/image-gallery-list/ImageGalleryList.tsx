import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { IGallery } from '../../../constants/gallery';

export const ImageGalleryList: React.FC<{ photos: IGallery[] }> = (props) => {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {props.photos.map((item) => (
        <ImageListItem key={item.photo}>
          <img
            srcSet={`${item.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.photo}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
