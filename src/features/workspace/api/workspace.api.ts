import type {
  Workspace,
  WorkspaceInvite,
  WorkspaceMember,
  WorkspaceSettings,
} from '@entities/workspace';
import { apiClient, ENDPOINTS } from '@shared/api';

import type {
  CreateInviteDto,
  CreateWorkspaceDto,
  UpdateMemberRoleDto,
  UpdateWorkspaceDto,
  UpdateWorkspaceSettingsDto,
} from '../model';

export const workspaceApi = {
  create: (dto: CreateWorkspaceDto) => {
    return apiClient.post<Workspace>(ENDPOINTS.WORKSPACES.CREATE, dto);
  },

  update: (id: string, dto: UpdateWorkspaceDto) => {
    return apiClient.patch<Workspace>(ENDPOINTS.WORKSPACES.UPDATE(id), dto);
  },

  updateSettings: (id: string, dto: UpdateWorkspaceSettingsDto) => {
    return apiClient.patch<WorkspaceSettings>(ENDPOINTS.WORKSPACES.SETTINGS(id), dto);
  },

  updateMemberRole: (workspaceId: string, memberId: string, dto: UpdateMemberRoleDto) => {
    return apiClient.patch<WorkspaceMember>(
      ENDPOINTS.WORKSPACES.MEMBER(workspaceId, memberId),
      dto,
    );
  },

  createInvite: (workspaceId: string, dto: CreateInviteDto) => {
    return apiClient.post<WorkspaceInvite>(ENDPOINTS.WORKSPACES.INVITES(workspaceId), dto);
  },

  acceptInvite: (token: string) => {
    return apiClient.post<Workspace>(ENDPOINTS.INVITES.ACCEPT(token));
  },

  rejectInvite: (token: string) => {
    return apiClient.post<void>(ENDPOINTS.INVITES.REJECT(token));
  },

  delete: (id: string) => {
    return apiClient.delete<void>(ENDPOINTS.WORKSPACES.DELETE(id));
  },

  removeMember: (workspaceId: string, memberId: string) => {
    return apiClient.delete<void>(ENDPOINTS.WORKSPACES.MEMBER(workspaceId, memberId));
  },

  leave: (workspaceId: string) => {
    return apiClient.delete<void>(ENDPOINTS.WORKSPACES.LEAVE(workspaceId));
  },

  cancelInvite: (workspaceId: string, inviteId: string) => {
    return apiClient.delete<void>(ENDPOINTS.WORKSPACES.CANCEL_INVITE(workspaceId, inviteId));
  },
};
