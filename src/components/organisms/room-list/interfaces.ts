import { Room } from '../../../constants/rooms';

export interface RoomListProps {
  rooms: Room[];
  reservationAction: () => void;
}
