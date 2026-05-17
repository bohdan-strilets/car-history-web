import { useMutation } from '@tanstack/react-query';

import { authApi } from '../api';
import type { ForgotPasswordDto, ForgotPasswordFormProps } from '../model';

export const useForgotPasswordMutation = ({ onSuccess }: ForgotPasswordFormProps) => {
  return useMutation({
    mutationFn: (dto: ForgotPasswordDto) => authApi.forgotPassword(dto),
    onSuccess: (_, variables) => onSuccess(variables.email),
  });
};
