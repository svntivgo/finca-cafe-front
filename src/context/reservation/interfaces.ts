export interface Reservation {
  occupancy: Occupancy;
  dates: Dates;
  room: Room;
  customer: Customer;
  extras: Extras;
}

export interface Occupancy {
  adult: number;
  minor: number;
}

export interface Dates {
  start: Date;
  end: Date;
}

export interface Room {
  id: string;
  name: string;
  hotel: string;
  price: number;
  iva: number;
  quantity: number;
}

export interface Customer {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  id: string;
  idType: string;
}

export interface ExtrasDetail {
  quantity: number;
  price: number;
}

export interface Extras {
  tourCafe: ExtrasDetail;
}

export interface ReservationContextType {
  reservation: Reservation;
  setOccupancy: (occupancy: Occupancy) => void;
  setDates: (dates: Dates) => void;
  setRoom: (room: Room) => void;
  setCustomer: (customer: Customer) => void;
  setExtras: (extra: Extras) => void;
}
