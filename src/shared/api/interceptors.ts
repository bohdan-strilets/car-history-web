import axios, { type AxiosInstance } from 'axios';

import { parseApiError } from './api.utils';

export const setupInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      // TODO: attach access token
      return config;
    },
    (error) => Promise.reject(error),
  );

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
