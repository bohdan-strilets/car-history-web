import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { workspaceApi } from './workspace.api';

import type { WorkspaceId, WorkspaceSettingsId } from '../model';

// Get all workspaces for current user

export const useWorkspacesQuery = (enabled = true) => {
  return useQuery({
    queryKey: queryKeys.workspaces.all(),
    queryFn: () => workspaceApi.getAll(),
    enabled,
  });
};

// Get workspace by id

export const useWorkspaceQuery = (id: WorkspaceId) => {
  return useQuery({
    queryKey: queryKeys.workspaces.detail(id),
    queryFn: () => workspaceApi.getById(id),
    enabled: !!id,
  });
};

// Get workspace settings by workspace id

export const useWorkspaceSettingsQuery = (id: WorkspaceSettingsId) => {
  return useQuery({
    queryKey: queryKeys.workspaces.settings(id),
    queryFn: () => workspaceApi.getSettings(id),
    enabled: !!id,
  });
};
