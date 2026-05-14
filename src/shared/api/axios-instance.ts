import { env } from '@config/env';
import { authService } from '@shared/store/auth';
import axios from 'axios';

import { setupRequestInterceptor, setupResponseInterceptor } from './interceptors';

export const axiosInstance = axios.create({
  baseURL: env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

setupRequestInterceptor(axiosInstance, () => authService.getAccessToken());
setupResponseInterceptor(axiosInstance);
