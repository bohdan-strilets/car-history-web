import { useMutation } from '@tanstack/react-query';

import { authApi } from '../api';
import type { ResetPasswordDto, ResetPasswordParams } from '../model';

export const useResetPasswordMutation = ({ onSuccess }: ResetPasswordParams = {}) => {
  return useMutation({
    mutationFn: (dto: ResetPasswordDto) => authApi.resetPassword(dto),
    onSuccess,
  });
};
