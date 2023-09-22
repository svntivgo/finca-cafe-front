export interface Reservation {
  occupancy?: Occupancy;
  dates?: Dates;
}

export interface Occupancy {
  adult: number;
  minor: number;
}

export interface Dates {
  start: Date;
  end: Date;
}

export interface ReservationContextType {
  reservation: Reservation;
  setOccupancy: (occupancy: Occupancy) => void;
  setDates: (dates: Dates) => void;
}
