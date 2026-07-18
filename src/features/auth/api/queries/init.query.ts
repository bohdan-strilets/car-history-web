import { useQuery } from '@tanstack/react-query';

import { useWorkspaceStore } from '@entities/workspace';
import { refreshAccessToken } from '@shared/api';
import { queryKeys } from '@shared/config';
import { authService } from '@shared/store';

import { authApi } from '../auth.api';

const clearAuthAndWorkspace = () => {
  authService.clearAuth();
  useWorkspaceStore.getState().clearActiveWorkspaceId();
};

export const useInitQuery = () => {
  return useQuery({
    queryKey: queryKeys.auth.me(),
    queryFn: async () => {
      try {
        if (!authService.getAccessToken()) {
          if (!authService.hasSessionHint()) {
            clearAuthAndWorkspace();
            return null;
          }
          await refreshAccessToken();
        }
        const meResponse = await authApi.getMe();
        authService.setUser(meResponse.data);
        return meResponse.data;
      } catch {
        clearAuthAndWorkspace();
        return null;
      }
    },
    retry: false,
    staleTime: Infinity,
  });
};
