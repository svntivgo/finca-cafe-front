import axios, { AxiosResponse } from "axios";

export const get = async (endpoint: string): Promise<AxiosResponse> => {
  try {
    const result = await axios.get(endpoint)
    return result
  } catch (error) {
    console.error(error)
    throw new Error('Error trying to get at axios request')
  }
}

export const post = async (endpoint: string, data: unknown): Promise<AxiosResponse> => {
  try {
    const result = await axios.post(endpoint, data)
    return result
  } catch (error) {
    console.error(error)
    throw new Error('Error trying to post at axios request')
  }
}