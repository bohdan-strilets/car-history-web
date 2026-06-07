import type { ResetPasswordDto, ResetPasswordParams } from '@features/auth/model';
import { useMutation } from '@tanstack/react-query';

import { authApi } from '../auth.api';

export const useResetPasswordMutation = ({ onSuccess }: ResetPasswordParams = {}) => {
  return useMutation({
    mutationFn: (dto: ResetPasswordDto) => {
      return authApi.resetPassword(dto);
    },

    onSuccess,
  });
};
