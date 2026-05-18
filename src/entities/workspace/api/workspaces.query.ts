import { queryKeys } from '@shared/config';
import { useQuery } from '@tanstack/react-query';

import { workspaceApi } from './workspace.api';

// Get all workspaces

export const useWorkspacesQuery = () => {
  return useQuery({
    queryKey: queryKeys.workspaces.all(),
    queryFn: () => workspaceApi.getAll(),
  });
};

// Get workspace by id

export const useWorkspaceQuery = (id: string) => {
  return useQuery({
    queryKey: queryKeys.workspaces.detail(id),
    queryFn: () => workspaceApi.getById(id),
    enabled: !!id,
  });
};

// Get workspace settings by id

export const useWorkspaceSettingsQuery = (id: string) => {
  return useQuery({
    queryKey: queryKeys.workspaces.settings(id),
    queryFn: () => workspaceApi.getSettings(id),
    enabled: !!id,
  });
};
