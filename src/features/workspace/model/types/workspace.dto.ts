import type { WorkspaceRole, WorkspaceType } from '@entities/workspace';

// Workspace

export interface CreateWorkspaceDto {
  name: string;
  type: WorkspaceType;
}

export interface UpdateWorkspaceDto {
  name?: string;
  type?: WorkspaceType;
}

// Workspace Settings

export interface UpdateWorkspaceSettingsDto {
  currency?: string;
  timezone?: string;
  distanceUnit?: string;
  fuelUnit?: string;
  dateFormat?: string;
}

// Workspace Member

export interface UpdateMemberRoleDto {
  role: WorkspaceRole;
}

export interface CreateInviteDto {
  email: string;
  role?: WorkspaceRole;
}
