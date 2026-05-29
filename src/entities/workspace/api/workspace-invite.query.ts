import { queryKeys } from '@shared/config';
import { useQuery } from '@tanstack/react-query';

import { workspaceApi } from './workspace.api';

export const useInviteQuery = (token: string) => {
  return useQuery({
    queryKey: queryKeys.invites.detail(token),
    queryFn: () => workspaceApi.getInvite(token),
    enabled: !!token,
  });
};
