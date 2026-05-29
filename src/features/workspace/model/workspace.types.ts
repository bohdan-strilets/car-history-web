import type {
  Workspace,
  WorkspaceRole,
  WorkspaceSettings,
  WorkspaceType,
} from '@entities/workspace';
import type { Control } from 'react-hook-form';

import type { WorkspaceSettingsValues } from './workspace-settings.schema';
import type { WorkspaceValues } from './workspace.schema';

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
  role: WorkspaceRole;
}

export interface CreateInviteDto {
  email: string;
  role?: WorkspaceRole;
}

// Params

export interface UpdateWorkspaceSettingsParams {
  id: string;
  dto: UpdateWorkspaceSettingsDto;
}

export interface WorkspaceFormParams {
  onSuccess: (workspace: Workspace) => void;
}

export interface EditWorkspaceFormParams {
  workspace: Workspace;
  onSuccess: () => void;
}

export interface WorkspaceSettingsFormParams {
  workspaceId: string;
  settings?: WorkspaceSettings | null;
  onSuccess: (settings: WorkspaceSettings) => void;
}

export interface InviteFormParams {
  workspaceId: string;
  onSuccess: () => void;
}

// Props

export interface WorkspaceFormProps {
  control: Control<WorkspaceValues>;
  handleSubmit: () => void;
  isPending: boolean;
  errorMessage?: string;
  submitLabel: string;
}

export interface WorkspaceSettingsFormProps {
  control: Control<WorkspaceSettingsValues>;
  handleSubmit: () => void;
  isPending: boolean;
  errorMessage?: string;
  submitLabel: string;
  onSkip?: () => void;
}

export interface EditWorkspaceModalProps {
  workspace: Workspace;
  onSuccess: () => void;
}
