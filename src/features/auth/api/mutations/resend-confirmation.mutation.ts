import type { ResendConfirmationParams } from '@features/auth/model';
import { useMutation } from '@tanstack/react-query';

import { authApi } from '../auth.api';

export const useResendConfirmationMutation = ({ onSuccess }: ResendConfirmationParams = {}) => {
  return useMutation({
    mutationFn: () => {
      return authApi.resendConfirmation();
    },

    onSuccess,
  });
};
