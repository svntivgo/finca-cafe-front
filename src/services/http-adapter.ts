import axios, { AxiosResponse } from 'axios';

export class HttpAdapter {
  async get(endpoint: string): Promise<AxiosResponse> {
    try {
      const result = await axios.get(endpoint);
      return result;
    } catch (error) {
      console.error(error);
      throw new Error('Error trying to get at axios request');
    }
  }

  async post(endpoint: string, data: unknown): Promise<AxiosResponse> {
    try {
      const result = await axios.post(endpoint, data);
      return result;
    } catch (error) {
      console.error(error);
      throw new Error('Error trying to post at axios request');
    }
  }
}
