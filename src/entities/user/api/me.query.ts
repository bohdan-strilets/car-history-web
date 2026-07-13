import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { userApi } from './user.api';

export const useMeQuery = (enabled = true) => {
  return useQuery({
    queryKey: queryKeys.user.me(),
    queryFn: () => userApi.getMe(),
    enabled,
  });
};
