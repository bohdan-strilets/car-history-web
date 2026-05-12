import { env } from '@config/env';
import axios from 'axios';

import { setupInterceptors } from './interceptors';

export const axiosInstance = axios.create({
  baseURL: env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

setupInterceptors(axiosInstance);
