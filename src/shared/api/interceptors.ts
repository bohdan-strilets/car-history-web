import axios, { type AxiosInstance } from 'axios';

import { ENDPOINTS } from '@shared/config';

import { getCookieValue, parseApiError } from './api.utils';
import { BEARER_PREFIX, CSRF_TOKEN_COOKIE, CSRF_TOKEN_HEADER } from './constants.cookie';

const AUTH_ENDPOINTS_WITHOUT_REFRESH: string[] = [
  ENDPOINTS.AUTH.LOGIN,
  ENDPOINTS.AUTH.REGISTER,
  ENDPOINTS.AUTH.REFRESH,
  ENDPOINTS.AUTH.ME,
  ENDPOINTS.AUTH.GOOGLE,
  ENDPOINTS.AUTH.GOOGLE_CALLBACK,
  ENDPOINTS.AUTH.FORGOT_PASSWORD,
  ENDPOINTS.AUTH.RESET_PASSWORD,
  ENDPOINTS.AUTH.CONFIRM_EMAIL,
  ENDPOINTS.AUTH.RESEND_CONFIRMATION,
];

export const setupRequestInterceptor = (instance: AxiosInstance, getToken: () => string | null) => {
  instance.interceptors.request.use(
    (config) => {
      const token = getToken();
      config.headers = config.headers ?? {};

      if (token) {
        config.headers.Authorization = `${BEARER_PREFIX} ${token}`;
      }

      const isCsrfRequired =
        config.url?.includes(ENDPOINTS.AUTH.REFRESH) || config.url?.includes(ENDPOINTS.AUTH.LOGOUT);

      if (isCsrfRequired) {
        const csrfToken = getCookieValue(CSRF_TOKEN_COOKIE);

        if (csrfToken) {
          config.headers[CSRF_TOKEN_HEADER] = csrfToken;
        }
      }

      return config;
    },
    (error) => Promise.reject(error),
  );
};

export const setupResponseInterceptor = (
  instance: AxiosInstance,
  onRefresh: () => Promise<string>,
  onLogout: () => void,
) => {
  let isRefreshing = false;
  let queue: Array<{
    resolve: (token: string) => void;
    reject: (error: unknown) => void;
  }> = [];

  const processQueue = (error: unknown, token: string | null) => {
    queue.forEach((p) => {
      if (error) {
        p.reject(error);
      } else {
        p.resolve(token!);
      }
    });

    queue = [];
  };

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      const isAuthEndpoint = AUTH_ENDPOINTS_WITHOUT_REFRESH.some((endpoint) =>
        originalRequest.url?.includes(endpoint),
      );
      const is401 = axios.isAxiosError(error) && error.response?.status === 401;

      if (is401 && !originalRequest._retry && !isAuthEndpoint) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            queue.push({ resolve, reject });
          }).then((token) => {
            originalRequest.headers.Authorization = `${BEARER_PREFIX} ${token}`;
            return instance(originalRequest);
          });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const newToken = await onRefresh();
          processQueue(null, newToken);
          originalRequest.headers.Authorization = `${BEARER_PREFIX} ${newToken}`;
          return instance(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);
          onLogout();
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      if (axios.isAxiosError(error) && error.response?.data) {
        return Promise.reject(parseApiError(error.response.data));
      }

      return Promise.reject(error);
    },
  );
};
