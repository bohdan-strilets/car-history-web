import { queryKeys } from '@shared/config';
import { useQuery } from '@tanstack/react-query';

import { workspaceApi } from './workspace.api';

export const useWorkspacesQuery = () => {
  return useQuery({
    queryKey: queryKeys.workspaces.all(),
    queryFn: () => workspaceApi.getAll(),
  });
};

export const useWorkspaceQuery = (id: string) => {
  return useQuery({
    queryKey: queryKeys.workspaces.detail(id),
    queryFn: () => workspaceApi.getById(id),
    enabled: !!id,
  });
};

export const useWorkspaceSettingsQuery = (id: string) => {
  return useQuery({
    queryKey: queryKeys.workspaces.settings(id),
    queryFn: () => workspaceApi.getSettings(id),
    enabled: !!id,
  });
};

export const useWorkspaceMembersQuery = (id: string) => {
  return useQuery({
    queryKey: queryKeys.workspaces.members(id),
    queryFn: () => workspaceApi.getMembers(id),
    enabled: !!id,
  });
};

export const useInviteQuery = (token: string) => {
  return useQuery({
    queryKey: queryKeys.invites.detail(token),
    queryFn: () => workspaceApi.getInvite(token),
    enabled: !!token,
  });
};
