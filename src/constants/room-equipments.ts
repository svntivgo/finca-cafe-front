import icon from '../assets/react.svg';

export interface RoomEquipment {
  NAME: string;
  ICON: string;
}

type RoomEquipments = Record<string, RoomEquipment>;

export const ROOM_EQUIPMENTS: RoomEquipments = {
  VAULT: {
    NAME: 'Caja de seguridad',
    ICON: icon,
  },
  PARKING: {
    NAME: 'Parqueadero',
    ICON: icon,
  },
  TV: {
    NAME: 'Televisión por cable',
    ICON: icon,
  },
  HOT_WATER: {
    NAME: 'Agua Caliente',
    ICON: icon,
  },
  HOTEL_INSURANCE: {
    NAME: 'Seguro hotelero',
    ICON: icon,
  },
  COFFE_OPEN_BAR: {
    NAME: 'Barra libre de café',
    ICON: icon,
  },
  POOL: {
    NAME: 'Piscina',
    ICON: icon,
  },
  JACUZZI: {
    NAME: 'Jacuzzi',
    ICON: icon,
  },
};
