export { apiClient } from './api.client';
export { HttpError, ValidationError } from './api.errors';
export { axiosInstance } from './axios-instance';

export { getErrorCode, isHttpError, isValidationError, parseApiError } from './api.utils';
export { setupRequestInterceptor, setupResponseInterceptor } from './interceptors';

export type {
  ApiError,
  ApiMeta,
  ApiPaginatedResponse,
  ApiResponse,
  ApiValidationError,
} from './api.types';
