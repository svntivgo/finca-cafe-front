import { RoomEquipment } from '../../../constants/room-equipments';
import { Room } from '../../../constants/rooms';

export interface RoomCardProps extends Room {
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
  price: number;
  reserveAction: () => void;
}
