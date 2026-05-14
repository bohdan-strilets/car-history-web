import axios, { type AxiosInstance } from 'axios';

import { parseApiError } from './api.utils';

export const setupRequestInterceptor = (instance: AxiosInstance, getToken: () => string | null) => {
  instance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );
};

export const setupResponseInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (axios.isAxiosError(error) && error.response?.data) {
        return Promise.reject(parseApiError(error.response.data));
      }
      return Promise.reject(error);
    },
  );
};
