import type { User } from '@entities/user';
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
  getMe: () => {
    const path = ENDPOINTS.AUTH.ME;
    return apiClient.get<User>(path);
  },

  login: (dto: LoginDto) => {
    const path = ENDPOINTS.AUTH.LOGIN;
    return apiClient.post<AuthResponse>(path, dto);
  },

  register: (dto: RegisterDto) => {
    const path = ENDPOINTS.AUTH.REGISTER;
    return apiClient.post<AuthResponse>(path, dto);
  },

  logout: () => {
    const path = ENDPOINTS.AUTH.LOGOUT;
    return apiClient.post<void>(path);
  },

  refresh: () => {
    const path = ENDPOINTS.AUTH.REFRESH;
    return apiClient.post<AuthResponse>(path);
  },

  forgotPassword: (dto: ForgotPasswordDto) => {
    const path = ENDPOINTS.AUTH.FORGOT_PASSWORD;
    return apiClient.post<void>(path, dto);
  },

  resetPassword: (dto: ResetPasswordDto) => {
    const path = ENDPOINTS.AUTH.RESET_PASSWORD;
    return apiClient.post<void>(path, dto);
  },

  confirmEmail: (dto: ConfirmEmailDto) => {
    const path = ENDPOINTS.AUTH.CONFIRM_EMAIL;
    return apiClient.post<void>(path, dto);
  },

  resendConfirmation: () => {
    const path = ENDPOINTS.AUTH.RESEND_CONFIRMATION;
    return apiClient.post<void>(path);
  },
};
