import type { Workspace, WorkspaceSettings } from '@entities/workspace';
import { apiClient, ENDPOINTS } from '@shared/api';

import type { CreateWorkspaceDto, UpdateWorkspaceSettingsDto } from '../model';

export const workspaceApi = {
  create: (dto: CreateWorkspaceDto) => {
    return apiClient.post<Workspace>(ENDPOINTS.WORKSPACES.CREATE, dto);
  },

  updateSettings: (id: string, dto: UpdateWorkspaceSettingsDto) => {
    return apiClient.patch<WorkspaceSettings>(ENDPOINTS.WORKSPACES.SETTINGS(id), dto);
  },
};
