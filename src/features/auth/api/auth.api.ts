import { apiClient, ENDPOINTS } from '@shared/api';

import type {
  AuthResponse,
  ConfirmEmailDto,
  ForgotPasswordDto,
  LoginDto,
  RegisterDto,
  ResetPasswordDto,
} from '../model';

export const authApi = {
  login: (dto: LoginDto) => {
    return apiClient.post<AuthResponse>(ENDPOINTS.AUTH.LOGIN, dto);
  },

  register: (dto: RegisterDto) => {
    return apiClient.post<AuthResponse>(ENDPOINTS.AUTH.REGISTER, dto);
  },

  logout: () => {
    return apiClient.post<void>(ENDPOINTS.AUTH.LOGOUT);
  },

  refresh: () => {
    return apiClient.post<AuthResponse>(ENDPOINTS.AUTH.REFRESH);
  },

  forgotPassword: (dto: ForgotPasswordDto) => {
    return apiClient.post<void>(ENDPOINTS.AUTH.FORGOT_PASSWORD, dto);
  },

  resetPassword: (dto: ResetPasswordDto) => {
    return apiClient.post<void>(ENDPOINTS.AUTH.RESET_PASSWORD, dto);
  },

  confirmEmail: (dto: ConfirmEmailDto) => {
    return apiClient.post<void>(ENDPOINTS.AUTH.CONFIRM_EMAIL, dto);
  },

  resendConfirmation: () => {
    return apiClient.post<void>(ENDPOINTS.AUTH.RESEND_CONFIRMATION);
  },
};
