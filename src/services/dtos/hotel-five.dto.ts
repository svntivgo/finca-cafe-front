export interface IDocumentTypesHotelFiveResponse {
  tipodocuid: number;
  nombre: string;
  NoLiquidarIVA: string;
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
  totalReserva: number;
  totalReservaIVA: number;
  totalReservaSinIva: number;
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

export interface IHotelFiveRoomsParams {
  cantAdultos: number;
  cantJovenes: number;
  cantMenores: number;
  fechaIni: string;
  fechaFin: string;
}
