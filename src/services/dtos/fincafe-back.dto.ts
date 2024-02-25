export interface IReservationTransaction {
  name: string;
  lastname: string;
  docNumber: string;
  docType: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  minors: number;
  adults: number;
  hotelName: string;
  room: string;
  roomName: string;
  roomPrice: number;
  roomIva: number;
  roomTotal: number;
  startDate: Date;
  endDate: Date;
  extra: string;
  extraPrice: number;
  extraIva: number;
  extraTotal: number;
  transactionReference: string;
  transactionTotal: number;
  transactionGateway: string;
  reservationTotal: number;
}

export interface ICoffeeTourReservation {
  name: string;
  lastname: string;
  docNumber: string;
  docType: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  numberOfPersons: number;
  isEnglish: boolean;
  date: Date;
  transactionReference: string;
  transactionTotal: number;
  transactionGateway: string;
  reservationTotal: number;
}

export interface IReservationTransactionResponse {
  publicKey: string;
  signatureIntegrity: string;
}
