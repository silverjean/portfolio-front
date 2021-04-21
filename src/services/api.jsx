/* eslint-disable no-param-reassign */
import axios from 'axios';

const getToken = () => localStorage.getItem('token');

const api = axios.create({
  // baseURL: 'http://localhost:8080/',
  baseURL: 'https://portfolio-jean.herokuapp.com/',
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
