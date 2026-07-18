import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { sessionApi } from './session.api';

export const useSessionsQuery = () => {
  return useQuery({
    queryKey: queryKeys.user.sessions(),
    queryFn: () => sessionApi.getAll(),
  });
};
