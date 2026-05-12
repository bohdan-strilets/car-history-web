import { ERROR_CODES } from '@shared/config';

export class HttpError extends Error {
  statusCode: number;
  errorCode: string;
  details: Record<string, unknown>;

  constructor(statusCode: number, errorCode: string, details: Record<string, unknown> = {}) {
    super(errorCode);
    this.name = 'HttpError';
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.details = details;
  }
}

export class ValidationError extends HttpError {
  fields: Record<string, string>;

  constructor(fields: Record<string, string>) {
    super(422, ERROR_CODES.General.VALIDATION_ERROR, { fields });
    this.name = 'ValidationError';
    this.fields = fields;
  }
}
