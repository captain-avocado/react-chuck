import axios from 'axios';

export const baseURL = 'https://api.chucknorris.io/';

export const axiosInstance = axios.create({
  baseURL
});
