export interface ApiMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  data: T;
}

export interface ApiPaginatedResponse<T> {
  data: T[];
  meta: ApiMeta;
}

export interface ApiError {
  statusCode: number;
  errorCode: string;
  details: Record<string, unknown>;
}

export interface ApiValidationError {
  statusCode: 422;
  errorCode: 'VALIDATION_ERROR';
  details: {
    fields: Record<string, string>;
  };
}

export interface RefreshTokenResponse {
  accessToken: string;
  csrfToken: string;
}
