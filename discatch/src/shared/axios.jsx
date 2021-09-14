// LIBRARY
import axios from 'axios';

// FUNCTION
import { getToken } from './token';

axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: 'http://52.78.241.50/',
});

instance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['Accept'] = '*/*';
  config.headers['Authorization'] = getToken();
  return config;
});

export default instance;