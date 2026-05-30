import { queryKeys } from '@shared/config';
import { useQuery } from '@tanstack/react-query';

import { workspaceApi } from './workspace.api';

export const useWorkspacesQuery = (enabled = true) => {
  return useQuery({
    queryKey: queryKeys.workspaces.all(),
    queryFn: () => workspaceApi.getAll(),
    enabled,
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
