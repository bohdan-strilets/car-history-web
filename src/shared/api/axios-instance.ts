import { env } from '@config/env';
import { ENDPOINTS, ROUTES } from '@shared/config';
import { authService } from '@shared/store/auth';
import axios from 'axios';

import { setupRequestInterceptor, setupResponseInterceptor } from './interceptors';

export const axiosInstance = axios.create({
  baseURL: env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

const refreshInstance = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
});

setupRequestInterceptor(axiosInstance, () => authService.getAccessToken());
setupResponseInterceptor(
  axiosInstance,
  async () => {
    const response = await refreshInstance.post(ENDPOINTS.AUTH.REFRESH);
    const newToken = response.data.data.accessToken;
    authService.setAccessToken(newToken);
    return newToken;
  },
  () => {
    authService.clearAuth();
    window.location.href = ROUTES.AUTH.LOGIN;
  },
);
