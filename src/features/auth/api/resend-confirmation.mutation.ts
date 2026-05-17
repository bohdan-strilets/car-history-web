import { useMutation } from '@tanstack/react-query';

import { authApi } from '../api';
import type { ResendConfirmationParams } from '../model';

export const useResendConfirmationMutation = ({ onSuccess }: ResendConfirmationParams = {}) => {
  return useMutation({
    mutationFn: () => authApi.resendConfirmation(),
    onSuccess,
  });
};
