import type { Workspace, WorkspaceSettings } from '@entities/workspace';
import { apiClient, ENDPOINTS } from '@shared/api';

export const workspaceApi = {
  getAll: () => {
    return apiClient.get<Workspace[]>(ENDPOINTS.WORKSPACES.LIST);
  },
  getById: (id: string) => {
    return apiClient.get<Workspace>(ENDPOINTS.WORKSPACES.DETAIL(id));
  },
  getSettings: (id: string) => {
    return apiClient.get<WorkspaceSettings>(ENDPOINTS.WORKSPACES.SETTINGS(id));
  },
};
