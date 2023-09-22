import { ReactNode, useState } from 'react';
import { Dates, Occupancy, Reservation, ReservationContext } from '..';

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [reservation, setReservation] = useState<Reservation>({});

  const setOccupancy = (occupancy: Occupancy) => {
    setReservation((prevState) => ({
      ...prevState,
      occupancy,
    }));
  };

  const setDates = (dates: Dates) => {
    setReservation((prevState) => ({
      ...prevState,
      dates,
    }));
  };

  return (
    <ReservationContext.Provider
      value={{ reservation, setOccupancy, setDates }}
    >
      {children}
    </ReservationContext.Provider>
  );
}
