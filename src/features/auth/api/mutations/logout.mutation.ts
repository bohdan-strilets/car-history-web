import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useWorkspaceStore } from '@entities/workspace';
import { authService } from '@shared/store';

import { authApi } from '../auth.api';

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return authApi.logout();
    },
    onSettled: () => {
      authService.clearAuth();
      useWorkspaceStore.getState().clearActiveWorkspaceId();
      queryClient.clear();
    },
  });
};
