import type { ForgotPasswordDto, ForgotPasswordFormProps } from '@features/auth/model';
import { useMutation } from '@tanstack/react-query';

import { authApi } from '../auth.api';

export const useForgotPasswordMutation = ({ onSuccess }: ForgotPasswordFormProps) => {
  return useMutation({
    mutationFn: (dto: ForgotPasswordDto) => {
      return authApi.forgotPassword(dto);
    },

    onSuccess: (_, variables) => {
      return onSuccess(variables.email);
    },
  });
};
