import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CONSTANTS } from '../constants/constants';

export class HttpAdapter {
  private readonly config: AxiosRequestConfig = {
    headers: {
      NIT: CONSTANTS.HOTEL.NIT,
      'Authorization-Token': CONSTANTS.HOTEL.TOKEN,
    },
  };

  async get<T>(endpoint: string): Promise<AxiosResponse<T>> {
    try {
      return await axios.get<T>(endpoint, {
        headers: this.config.headers,
      });
    } catch (error) {
      console.error(error);
      throw new Error('Error trying to get at axios request');
    }
  }

  async post<T>(endpoint: string, data: unknown): Promise<AxiosResponse<T>> {
    try {
      return await axios.post<T>(endpoint, data, {
        headers: this.config.headers,
      });
    } catch (error) {
      console.error(error);
      throw new Error('Error trying to post at axios request');
    }
  }
}
