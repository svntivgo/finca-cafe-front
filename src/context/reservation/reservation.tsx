import { ReactNode, useState } from 'react';
import {
  Customer,
  Dates,
  Extras,
  Occupancy,
  Reservation,
  ReservationContext,
  Room,
} from '..';
import { addDays } from 'date-fns';
import { SERVICES } from '../../constants/services';

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [reservation, setReservation] = useState<Reservation>({
    dates: {
      start: new Date(),
      end: addDays(new Date(), 1),
    },
    occupancy: {
      adult: 1,
      minor: 0,
    },
    room: {
      name: '',
      hotel: '',
      price: 0,
      quantity: 0,
    },
    customer: {
      name: '',
      lastName: '',
      phone: '',
      email: '',
      country: '',
      city: '',
    },
    extras: {
      tourCafe: {
        quantity: 0,
        price: SERVICES.CAFE_TOUR.price,
      },
    },
  });

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

  const setRoom = (room: Room) => {
    setReservation((prevState) => ({
      ...prevState,
      room,
    }));
  };

  const setCustomer = (customer: Customer) => {
    setReservation((prevState) => ({
      ...prevState,
      customer,
    }));
  };

  const setExtras = (extras: Extras) => {
    setReservation((prevState) => ({
      ...prevState,
      extras,
    }));
  };

  return (
    <ReservationContext.Provider
      value={{
        reservation,
        setOccupancy,
        setDates,
        setRoom,
        setCustomer,
        setExtras,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}
