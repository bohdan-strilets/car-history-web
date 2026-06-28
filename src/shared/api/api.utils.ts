import { ERROR_CODES } from '@shared/config';

import { HttpError, ValidationError } from './api.errors';

import type { ApiError, ApiValidationError } from './api.types';

export const isHttpError = (error: unknown): error is HttpError => {
  return error instanceof HttpError;
};

export const isValidationError = (error: unknown): error is ValidationError => {
  return error instanceof ValidationError;
};

export const parseApiError = (data: ApiError | ApiValidationError): HttpError => {
  if (data.errorCode === ERROR_CODES.General.VALIDATION_ERROR) {
    const validationData = data as ApiValidationError;
    return new ValidationError(validationData.details.fields);
  }

  return new HttpError(data.statusCode, data.errorCode, data.details);
};

export const getErrorCode = (error: unknown): string => {
  if (isHttpError(error)) return error.errorCode;
  return ERROR_CODES.General.UNKNOWN_ERROR;
};

export const getCookieValue = (name: string): string | null => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
};
