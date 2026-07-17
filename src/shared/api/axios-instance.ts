import axios from 'axios';

import { env } from '@config/env';
import type { AuthResponse } from '@features/auth';
import { ENDPOINTS, ROUTES } from '@shared/config';
import { authService } from '@shared/store';

import { CSRF_TOKEN_HEADER } from './constants.cookie';
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

let refreshPromise: Promise<string> | null = null;

const doRefresh = async (): Promise<string> => {
  const csrfToken = authService.getCsrfToken();

  const response = await refreshInstance.post<{ data: AuthResponse }>(
    ENDPOINTS.AUTH.REFRESH,
    undefined,
    { headers: csrfToken ? { [CSRF_TOKEN_HEADER]: csrfToken } : undefined },
  );

  const newAccessToken = response.data.data.accessToken;
  const newCsrfToken = response.data.data.csrfToken;

  authService.setAccessToken(newAccessToken);
  authService.setCsrfToken(newCsrfToken);

  return newAccessToken;
};

export const refreshAccessToken = (): Promise<string> => {
  if (refreshPromise) {
    return refreshPromise;
  }

  refreshPromise = doRefresh().finally(() => {
    refreshPromise = null;
  });

  return refreshPromise;
};

export const logoutAndRedirect = (): void => {
  authService.clearAuth();
  window.location.href = ROUTES.AUTH.LOGIN;
};

setupRequestInterceptor(axiosInstance, () => authService.getAccessToken());
setupResponseInterceptor(axiosInstance, refreshAccessToken, logoutAndRedirect);
