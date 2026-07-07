import { useQuery } from '@tanstack/react-query';

import { CSRF_TOKEN_COOKIE, getCookieValue } from '@shared/api';
import { queryKeys } from '@shared/config';
import { authService } from '@shared/store';

import { authApi } from '../auth.api';

export const useInitQuery = () => {
  return useQuery({
    queryKey: queryKeys.auth.me(),

    queryFn: async () => {
      try {
        if (!authService.getAccessToken()) {
          const hasSessionHint = getCookieValue(CSRF_TOKEN_COOKIE);

          if (!hasSessionHint) {
            authService.clearAuth();
            return null;
          }

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
