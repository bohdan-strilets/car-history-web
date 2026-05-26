import type { Role, Workspace, WorkspaceSettings, WorkspaceType } from '@entities/workspace';

// DTOs
export interface CreateWorkspaceDto {
  name: string;
  type: WorkspaceType;
}

export interface UpdateWorkspaceDto {
  name?: string;
  type?: WorkspaceType;
}

export interface UpdateWorkspaceSettingsDto {
  currency?: string;
  timezone?: string;
  distanceUnit?: string;
  fuelUnit?: string;
  dateFormat?: string;
}

export interface UpdateMemberRoleDto {
  role: Role;
}

export interface CreateInviteDto {
  email: string;
  role?: Role;
}

// Params

export interface UpdateWorkspaceSettingsParams {
  id: string;
  dto: UpdateWorkspaceSettingsDto;
}

export interface WorkspaceFormParams {
  onSuccess: (workspace: Workspace) => void;
}

export type WorkspaceSettingsFormParams = Pick<
  WorkspaceSettingsFormProps,
  'onSuccess' | 'onSkip' | 'workspaceId'
>;

// Props

export interface WorkspaceSettingsFormProps {
  workspaceId: string;
  onSuccess: (settings: WorkspaceSettings) => void;
  onSkip?: () => void;
}
