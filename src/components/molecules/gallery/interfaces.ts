import { IGallery } from '../../../constants/gallery';

export interface GalleryProps {
  width?: string;
  bordered?: boolean;
  gallery: IGallery[];
}
