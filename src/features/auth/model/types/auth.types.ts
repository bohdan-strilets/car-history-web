import type { User } from '@entities/user';

// API Response Types

export interface AuthResponse {
  user: User;
  accessToken: string;
  csrfToken: string;
}

// Props

export interface ForgotPasswordFormProps {
  onSuccess: (email: string) => void;
}

export interface ResetPasswordFormProps {
  token: string;
  onSuccess?: () => void;
}

// Params
export interface ResendConfirmationParams {
  onSuccess?: () => void;
}

export type ResetPasswordParams = Pick<ResetPasswordFormProps, 'onSuccess'>;

export type ForgotPasswordFormParams = Pick<ForgotPasswordFormProps, 'onSuccess'>;

export type ResetPasswordFormParams = Pick<ResetPasswordFormProps, 'onSuccess' | 'token'>;
