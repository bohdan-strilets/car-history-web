import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';
import { authService } from '@shared/store';

import { authApi } from '../auth.api';

export const useInitQuery = () => {
  return useQuery({
    queryKey: queryKeys.auth.me(),

    queryFn: async () => {
      try {
        if (!authService.getAccessToken()) {
          const refreshResponse = await authApi.refresh();
          authService.setAccessToken(refreshResponse.data.accessToken);
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
