import { queryKeys } from '@shared/config';
import { useQuery } from '@tanstack/react-query';

import type { InviteToken } from '../model';

import { workspaceApi } from './workspace.api';

// Get invite by token

export const useInviteQuery = (token: InviteToken) => {
  return useQuery({
    queryKey: queryKeys.invites.detail(token),
    queryFn: () => workspaceApi.getInvite(token),
    enabled: !!token,
  });
};
