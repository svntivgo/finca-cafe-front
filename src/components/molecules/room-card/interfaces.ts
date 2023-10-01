import { RoomEquipment } from '../../../constants/room-equipments';

export interface RoomCardProps {
  description: string;
  detailsUrl: string;
  inverted?: boolean;
  photo: string;
  reserveUrl: string;
  title: string;
  hotel: {
    name: string;
    description: string;
  };
  banner: string;
  equipment: RoomEquipment[];
}
