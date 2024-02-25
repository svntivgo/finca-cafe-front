import styled from '@emotion/styled';

export const GallerySectionStyled = styled.div`
  overflow: hidden;
  @media (min-width: 1023px) {
    display: flex;
    flex-wrap: nowrap;
    place-items: center;
    place-content: center;
  }
`;

export const GalleryContainerStyled = styled.div`
  display: flex;
  margin: 16px 0;
  @media (min-width: 1023px) {
    width: 60%;
    position: relative;
    right: -16px;
  }
`;

export const PhotoGalleryContainerStyled = styled.div`
  margin: 0 -20px;
  display: flex;
  flex-direction: column;
`;
