import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://superadmin.marketersi.pl',
  //baseURL: 'https://marketsi.phpdev.co.in',
  headers: {},
});
