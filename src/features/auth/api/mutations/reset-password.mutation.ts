import { useMutation } from '@tanstack/react-query';

import { authApi } from '../auth.api';

import type { ResetPasswordDto, ResetPasswordParams } from '@features/auth';

export const useResetPasswordMutation = ({ onSuccess }: ResetPasswordParams = {}) => {
  return useMutation({
    mutationFn: (dto: ResetPasswordDto) => {
      return authApi.resetPassword(dto);
    },

    onSuccess,
  });
};
