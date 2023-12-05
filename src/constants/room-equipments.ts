import StrongBox from '../assets/equipments/strong-box.svg';
import Parking from '../assets/equipments/parking.svg';
import Tv from '../assets/equipments/tv.svg';
import Shower from '../assets/equipments/shower.svg';
import Insurance from '../assets/equipments/insurance.svg';
import Coffee from '../assets/equipments/coffee.svg';
import Pool from '../assets/equipments/pool.svg';
import Jaccuzzi from '../assets/equipments/jacuzzi.svg';
import OpticFiber from '../assets/equipments/Recurso 31.svg';

export interface RoomEquipment {
  NAME: string;
  ICON: string;
}

export type RoomEquipments = Record<string, RoomEquipment>;

export const ROOM_EQUIPMENTS = {
  VAULT: {
    NAME: 'Caja de seguridad',
    ICON: StrongBox,
  },
  PARKING: {
    NAME: 'Parqueadero',
    ICON: Parking,
  },
  TV: {
    NAME: 'Televisión por cable',
    ICON: Tv,
  },
  HOT_WATER: {
    NAME: 'Agua Caliente',
    ICON: Shower,
  },
  HOTEL_INSURANCE: {
    NAME: 'Seguro hotelero',
    ICON: Insurance,
  },
  COFFE_OPEN_BAR: {
    NAME: 'Barra libre de café',
    ICON: Coffee,
  },
  POOL: {
    NAME: 'Piscina',
    ICON: Pool,
  },
  JACUZZI: {
    NAME: 'Jacuzzi',
    ICON: Jaccuzzi,
  },
  OPTIC_FIBER: {
    NAME: 'Fibra óptica',
    ICON: OpticFiber,
  },
};
