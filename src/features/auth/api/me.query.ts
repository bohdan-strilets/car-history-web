import { queryKeys } from '@shared/config';
import { authService } from '@shared/store/auth';
import { useQuery } from '@tanstack/react-query';

import { authApi } from './auth.api';

export const useMeQuery = () => {
  return useQuery({
    queryKey: queryKeys.auth.me(),
    queryFn: async () => {
      const response = await authApi.getMe();
      authService.setUser(response.data);
      return response.data;
    },
    retry: false,
    staleTime: Infinity,
  });
};
