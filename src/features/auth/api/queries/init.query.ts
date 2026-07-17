import { useQuery } from '@tanstack/react-query';

import { refreshAccessToken } from '@shared/api';
import { queryKeys } from '@shared/config';
import { authService } from '@shared/store';

import { authApi } from '../auth.api';

export const useInitQuery = () => {
  return useQuery({
    queryKey: queryKeys.auth.me(),
    queryFn: async () => {
      try {
        if (!authService.getAccessToken()) {
          if (!authService.hasSessionHint()) {
            authService.clearAuth();
            return null;
          }
          await refreshAccessToken();
        }
        const meResponse = await authApi.getMe();
        authService.setUser(meResponse.data);
        return meResponse.data;
      } catch {
        authService.clearAuth();
        return null;
      }
    },
    retry: false,
    staleTime: Infinity,
  });
};
