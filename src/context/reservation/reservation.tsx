import { ReactNode, useState } from 'react';
import {
  CoffeeTour,
  Customer,
  Dates,
  Extras,
  MinorAges,
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
      adults: 1,
      minors: 0,
    },
    minorAges: [],
    room: {
      name: '',
      hotel: '',
      price: 0,
      quantity: 1,
      id: '',
      iva: 0,
    },
    customer: {
      name: '',
      lastName: '',
      phone: '',
      email: '',
      country: '',
      city: '',
      id: '',
      idType: 13,
      isVatPayer: true,
    },
    extras: {
      tourCafe: {
        quantity: 0,
        price: SERVICES.CAFE_TOUR.normal,
      },
    },
    coffeeTour: {
      name: '',
      lastName: '',
      phone: '',
      email: '',
      country: '',
      city: '',
      preferredTime: '',
      isEnglish: false,
      id: '',
      idType: '',
      countCafeTour: 0,
      date: new Date(),
    },
    isLoading: true,
    coupon: '',
  });

  const setOccupancy = (occupancy: Occupancy) => {
    setReservation((prevState) => ({
      ...prevState,
      occupancy,
    }));
  };

  const setMinorAges = (minorAges: MinorAges[]) => {
    setReservation((prevState) => ({
      ...prevState,
      minorAges,
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

  const setCoffeeTour = (coffeeTour: CoffeeTour) => {
    setReservation((prevState) => ({
      ...prevState,
      coffeeTour,
    }));
  };

  const setIsLoading = (isLoading: boolean) => {
    setReservation((prevState) => ({
      ...prevState,
      isLoading,
    }));
  };

  const setCoupon = (coupon: string) => {
    setReservation((prevState) => ({
      ...prevState,
      coupon,
    }));
  };

  return (
    <ReservationContext.Provider
      value={{
        reservation,
        setOccupancy,
        setMinorAges,
        setDates,
        setRoom,
        setCustomer,
        setExtras,
        setCoffeeTour,
        setIsLoading,
        setCoupon,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}
