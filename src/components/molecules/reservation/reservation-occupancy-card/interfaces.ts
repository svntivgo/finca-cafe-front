export interface ReservationOccupancyCardProps {
  adult: string;
  minor: string;
  setAdult: (adding: number) => void;
  setMinor: (adding: number) => void;
  close: () => void;
}
