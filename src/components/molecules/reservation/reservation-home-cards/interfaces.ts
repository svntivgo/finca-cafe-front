export interface ReservationHomeCardsProps {
  reservationDates: { checkin: Date | undefined; checkout: Date | undefined };
  reservationOccupancy: {
    adults: number;
    minors: number;
  };
  onClickDate: () => void;
  onClickOccupancy: () => void;
}
