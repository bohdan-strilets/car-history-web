import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { workspaceApi } from './workspace.api';

import type { InviteToken } from '../model';

// Get invite by token

export const useInviteQuery = (token: InviteToken) => {
  return useQuery({
    queryKey: queryKeys.invites.detail(token),
    queryFn: () => workspaceApi.getInvite(token),
    enabled: !!token,
  });
};
