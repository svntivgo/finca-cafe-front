export interface ReservationHomeCardsProps {
  reservationDates: { checkin: Date | undefined; checkout: Date | undefined };
  reservationOccupancy: {
    adult: number;
    minor: number;
  };
  onClickDate: () => void;
  onClickOccupancy: () => void;
}
