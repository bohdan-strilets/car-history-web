import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { workspaceApi } from './workspace.api';

import type { WorkspaceId } from '../model';

// Get all workspaces for current user

export const useWorkspaceMembersQuery = (id: WorkspaceId) => {
  return useQuery({
    queryKey: queryKeys.workspaces.members(id),
    queryFn: () => workspaceApi.getMembers(id),
    enabled: !!id,
  });
};

// Get workspace by id

export const useWorkspacePendingInvitesQuery = (id: WorkspaceId) => {
  return useQuery({
    queryKey: queryKeys.workspaces.invites(id),
    queryFn: () => workspaceApi.getPendingInvites(id),
    enabled: !!id,
  });
};
