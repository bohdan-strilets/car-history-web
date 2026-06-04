import type { User } from '@entities/user';

// DTOs

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ForgotPasswordDto {
  email: string;
}

export interface ResetPasswordDto {
  token: string;
  password: string;
}

export interface ConfirmEmailDto {
  token: string;
}

// API Response Types

export interface AuthResponse {
  user: User;
  accessToken: string;
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
