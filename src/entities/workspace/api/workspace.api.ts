import type {
  InviteToken,
  MemberId,
  Workspace,
  WorkspaceId,
  WorkspaceInvite,
  WorkspaceMember,
  WorkspaceSettings,
} from '@entities/workspace';
import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

export const workspaceApi = {
  getAll: () => {
    const path = ENDPOINTS.WORKSPACES.LIST;
    return apiClient.get<Workspace[]>(path);
  },

  getById: (workspaceId: WorkspaceId) => {
    const path = ENDPOINTS.WORKSPACES.DETAIL(workspaceId);
    return apiClient.get<Workspace>(path);
  },

  getSettings: (workspaceId: WorkspaceId) => {
    const path = ENDPOINTS.WORKSPACES.SETTINGS(workspaceId);
    return apiClient.get<WorkspaceSettings>(path);
  },

  getMembers: (workspaceId: WorkspaceId) => {
    const path = ENDPOINTS.WORKSPACES.MEMBERS(workspaceId);
    return apiClient.get<WorkspaceMember[]>(path);
  },

  delete: (workspaceId: WorkspaceId) => {
    const path = ENDPOINTS.WORKSPACES.DELETE(workspaceId);
    return apiClient.delete<void>(path);
  },

  removeMember: (workspaceId: WorkspaceId, memberId: MemberId) => {
    const path = ENDPOINTS.WORKSPACES.MEMBER(workspaceId, memberId);
    return apiClient.delete<void>(path);
  },

  getInvite: (token: InviteToken) => {
    const path = ENDPOINTS.INVITES.DETAIL(token);
    return apiClient.get<WorkspaceInvite>(path);
  },

  getPendingInvites: (workspaceId: WorkspaceId) => {
    const path = ENDPOINTS.WORKSPACES.PENDING_INVITES(workspaceId);
    return apiClient.get<WorkspaceInvite[]>(path);
  },
};
