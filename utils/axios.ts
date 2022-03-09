import Axios from 'axios';
import { getToken } from '@/utils/auth';

const axiosInstance = Axios.create({
  baseURL: 'https://c-tech.herokuapp.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getToken();

  if (token && token !== 'null' && token !== 'undefined') {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
});

export default axiosInstance;
