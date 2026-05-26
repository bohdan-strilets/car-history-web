import type {
  Workspace,
  WorkspaceInvite,
  WorkspaceMember,
  WorkspaceSettings,
} from '@entities/workspace';
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
  getMembers: (id: string) => {
    return apiClient.get<WorkspaceMember[]>(ENDPOINTS.WORKSPACES.MEMBERS(id));
  },
  delete: (id: string) => {
    return apiClient.delete<void>(ENDPOINTS.WORKSPACES.DELETE(id));
  },
  removeMember: (workspaceId: string, memberId: string) => {
    return apiClient.delete<void>(ENDPOINTS.WORKSPACES.MEMBER(workspaceId, memberId));
  },
  getInvite: (token: string) => {
    return apiClient.get<WorkspaceInvite>(ENDPOINTS.INVITES.DETAIL(token));
  },
};
