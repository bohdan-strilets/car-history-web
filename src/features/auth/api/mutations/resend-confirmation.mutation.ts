import { useMutation } from '@tanstack/react-query';

import type { ResendConfirmationParams } from '@features/auth';

import { authApi } from '../auth.api';

export const useResendConfirmationMutation = ({ onSuccess }: ResendConfirmationParams = {}) => {
  return useMutation({
    mutationFn: () => {
      return authApi.resendConfirmation();
    },

    onSuccess,
  });
};
