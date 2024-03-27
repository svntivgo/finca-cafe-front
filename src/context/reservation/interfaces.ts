export interface Reservation {
  occupancy: Occupancy;
  minorAges: MinorAges[];
  dates: Dates;
  room: Room;
  customer: Customer;
  extras: Extras;
  coffeeTour: CoffeeTour;
  isLoading: boolean;
}

export interface Occupancy {
  adults: number;
  minors: number;
}

export interface Minors {
  children: MinorAges[];
  youngs: MinorAges[];
}

export interface MinorAges {
  index: number;
  age: number;
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
  idType: number;
  isVatPayer: boolean;
}

export interface ExtrasDetail {
  quantity: number;
  price: number;
}

export interface Extras {
  tourCafe: ExtrasDetail;
}

export interface CoffeeTour {
  date: Date;
  name: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  isEnglish: boolean;
  id: string;
  idType: string;
  countCafeTour: number;
}

export interface ReservationContextType {
  reservation: Reservation;
  setOccupancy: (occupancy: Occupancy) => void;
  setMinorAges: (minorAges: MinorAges[]) => void;
  setDates: (dates: Dates) => void;
  setRoom: (room: Room) => void;
  setCustomer: (customer: Customer) => void;
  setExtras: (extra: Extras) => void;
  setCoffeeTour: (coffeeTour: CoffeeTour) => void;
  setIsLoading: (isLoading: boolean) => void;
}
