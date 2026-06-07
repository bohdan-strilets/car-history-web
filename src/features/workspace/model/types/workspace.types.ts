import type { WorkspaceSettingsValues, WorkspaceValues } from '../schemes';
import type { UpdateMemberRoleDto, UpdateWorkspaceSettingsDto } from './workspace.dto';
import type {
  MemberId,
  Workspace,
  WorkspaceId,
  WorkspaceMember,
  WorkspaceSettings,
} from '@entities/workspace';
import type { Control } from 'react-hook-form';

// Params

export interface UpdateWorkspaceSettingsParams {
  workspaceId: WorkspaceId;
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
  settings?: WorkspaceSettings;
  onSuccess: (settings: WorkspaceSettings) => void;
}

export interface InviteFormParams {
  workspaceId: string;
  onSuccess: () => void;
}

export interface EditMemberRoleFormParams {
  workspaceId: string;
  member: WorkspaceMember;
  onSuccess: () => void;
}

export interface UpdateMemberRoleParams {
  memberId: MemberId;
  dto: UpdateMemberRoleDto;
}

export interface DeleteWorkspaceParams {
  onBeforeNavigate?: () => void;
}

export interface LeaveWorkspaceParams {
  onBeforeNavigate?: () => void;
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

export interface EditMemberRoleModalProps {
  workspaceId: string;
  member: WorkspaceMember;
  onSuccess: () => void;
}

export interface EditWorkspaceSettingsModalProps {
  workspaceId: string;
  settings?: WorkspaceSettings;
  onSuccess: () => void;
}

export interface InviteFormProps {
  workspaceId: string;
  onSuccess: () => void;
}
