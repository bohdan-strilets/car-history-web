import { authService } from '@shared/store/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { authApi } from './auth.api';

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSettled: () => {
      authService.clearAuth();
      queryClient.clear();
    },
  });
};
