import type {
  InviteId,
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

import type {
  CreateInviteDto,
  CreateWorkspaceDto,
  UpdateMemberRoleDto,
  UpdateWorkspaceDto,
  UpdateWorkspaceSettingsDto,
} from '../model';

export const workspaceApi = {
  create: (dto: CreateWorkspaceDto) => {
    const path = ENDPOINTS.WORKSPACES.CREATE;
    return apiClient.post<Workspace>(path, dto);
  },

  update: (workspaceId: WorkspaceId, dto: UpdateWorkspaceDto) => {
    const path = ENDPOINTS.WORKSPACES.UPDATE(workspaceId);
    return apiClient.patch<Workspace>(path, dto);
  },

  updateSettings: (workspaceId: WorkspaceId, dto: UpdateWorkspaceSettingsDto) => {
    const path = ENDPOINTS.WORKSPACES.SETTINGS(workspaceId);
    return apiClient.patch<WorkspaceSettings>(path, dto);
  },

  updateMemberRole: (workspaceId: WorkspaceId, memberId: MemberId, dto: UpdateMemberRoleDto) => {
    const path = ENDPOINTS.WORKSPACES.MEMBER(workspaceId, memberId);
    return apiClient.patch<WorkspaceMember>(path, dto);
  },

  createInvite: (workspaceId: WorkspaceId, dto: CreateInviteDto) => {
    const path = ENDPOINTS.WORKSPACES.INVITES(workspaceId);
    return apiClient.post<WorkspaceInvite>(path, dto);
  },

  acceptInvite: (token: InviteToken) => {
    const path = ENDPOINTS.INVITES.ACCEPT(token);
    return apiClient.post<Workspace>(path);
  },

  rejectInvite: (token: InviteToken) => {
    const path = ENDPOINTS.INVITES.REJECT(token);
    return apiClient.post<void>(path);
  },

  delete: (workspaceId: WorkspaceId) => {
    const path = ENDPOINTS.WORKSPACES.DELETE(workspaceId);
    return apiClient.delete<void>(path);
  },

  removeMember: (workspaceId: WorkspaceId, memberId: MemberId) => {
    const path = ENDPOINTS.WORKSPACES.MEMBER(workspaceId, memberId);
    return apiClient.delete<void>(path);
  },

  leave: (workspaceId: WorkspaceId) => {
    const path = ENDPOINTS.WORKSPACES.LEAVE(workspaceId);
    return apiClient.delete<void>(path);
  },

  cancelInvite: (workspaceId: WorkspaceId, inviteId: InviteId) => {
    const path = ENDPOINTS.WORKSPACES.CANCEL_INVITE(workspaceId, inviteId);
    return apiClient.delete<void>(path);
  },
};
