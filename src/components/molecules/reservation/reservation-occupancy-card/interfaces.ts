export interface ReservationOccupancyCardProps {
  adults: string;
  minors: string;
  setAdults: (adding: number) => void;
  setMinors: (adding: number) => void;
  close: () => void;
}
