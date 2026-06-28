export { apiClient } from './api.client';
export { HttpError, ValidationError } from './api.errors';
export { axiosInstance } from './axios-instance';

export { BEARER_PREFIX, CSRF_TOKEN_COOKIE, CSRF_TOKEN_HEADER } from './constants.cookie';

export {
  getCookieValue,
  getErrorCode,
  isHttpError,
  isValidationError,
  parseApiError,
} from './api.utils';

export { setupRequestInterceptor, setupResponseInterceptor } from './interceptors';

export type {
  ApiError,
  ApiMeta,
  ApiPaginatedResponse,
  ApiResponse,
  ApiValidationError,
} from './api.types';
