import { HttpAdapter } from '.';
import { CONSTANTS } from '../constants/constants';
import {
  IReservationTransaction,
  IReservationTransactionResponse,
} from './dtos/fincafe-back.dto';

export class FincafeBack {
  private readonly httpAdapter = new HttpAdapter();
  private readonly api;
  constructor() {
    const { FINCA_CAFE } = CONSTANTS;
    const { API } = FINCA_CAFE;
    this.api = API;
  }

  async createReservationTransaction(reservationData: IReservationTransaction) {
    return await this.httpAdapter.post<IReservationTransactionResponse>(
      `${this.api.BASE_URL}${this.api.GET_SECRETS}`,
      reservationData,
    );
  }
}
