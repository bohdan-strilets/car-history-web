import { useMutation } from '@tanstack/react-query';

import { authApi } from '../auth.api';

import type { ResendConfirmationParams } from '@features/auth';

export const useResendConfirmationMutation = ({ onSuccess }: ResendConfirmationParams = {}) => {
  return useMutation({
    mutationFn: () => {
      return authApi.resendConfirmation();
    },

    onSuccess,
  });
};
