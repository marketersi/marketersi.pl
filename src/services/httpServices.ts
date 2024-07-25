import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://marketersi.phpteam.in/',
  headers: {},
});
