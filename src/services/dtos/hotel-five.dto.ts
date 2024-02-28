export interface IReservationHotelFive {
  nombre: string;
  identidad: string;
  tipoIdentidad: string;
  telefono: string;
  email: string;
  idTransaccion: string;
  valorTransaccion: number;
  valorTotal: number;
  idHabitacion: string;
  inicio: number;
  fin: number;
  numeroPersonas: number;
}

export interface IReservationHotelFiveResponse {
  idReserva: string;
  nReserva: number;
  estadoReserva: string;
}

export interface IDocumentTypesHotelFiveResponse {
  tipodocuid: number;
  nombre: string;
}

interface IDisponibilidad {
  fechaInicio: number;
  fechaFin: number;
}

type ICaracteristicas = Record<string, string[]>;

export interface IHabitaciones {
  id: string;
  habitacion: string;
  estado: string;
  mantenimientoPendiente: boolean;
  tipo: string;
  hotel: string;
  capacidad: number;
  capacidadMax: number;
  jacuzzi: boolean;
  ivaId: number;
  precioMin: number;
  ivaPrecioMin: number;
  valorMin: number;
  precioMax: number;
  ivaPrecioMax: number;
  fechaInicio: number;
  fechaFin: number;
  disponibilidad: IDisponibilidad[];
  caracteristicas: ICaracteristicas[];
}

interface ITemporadas {
  nombre: string;
  fechaInicial: number;
  fechaFinal: number;
}

export interface IRoomsHotelFiveResponse {
  habitaciones: IHabitaciones[];
  temporadas: ITemporadas[];
}
