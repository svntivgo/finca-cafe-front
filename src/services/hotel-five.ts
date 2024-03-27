import { HttpAdapter } from './http-adapter';
import { CONSTANTS } from '../constants/constants';
import {
  IRoomsHotelFiveResponse,
  IDocumentTypesHotelFiveResponse,
  IHotelFiveRoomsParams,
} from '.';

export class HotelFive {
  private readonly httpAdapter = new HttpAdapter();
  private readonly baseUrl = CONSTANTS.HOTEL.API.BASE_URL;
  private readonly roomsEndpoint = CONSTANTS.HOTEL.API.GET_ROOMS;
  private readonly docTypesEndpoint = CONSTANTS.HOTEL.API.GET_DOC_TYPES;

  async documentTypes() {
    return await this.httpAdapter.get<IDocumentTypesHotelFiveResponse[]>(
      `${this.baseUrl}${this.docTypesEndpoint}`,
    );
  }

  async rooms({
    cantAdultos,
    cantJovenes,
    cantMenores,
    fechaIni,
    fechaFin,
  }: IHotelFiveRoomsParams) {
    const queries = `?cantAdultos=${cantAdultos}&cantJovenes=${cantJovenes}&cantMenores=${cantMenores}&fechaIni=${fechaIni}&fechaFin=${fechaFin}`;
    return await this.httpAdapter.get<IRoomsHotelFiveResponse>(
      `${this.baseUrl}${this.roomsEndpoint}${queries}`,
    );
  }
}
