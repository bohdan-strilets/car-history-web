import type { Vehicle } from '@entities/vehicle';
import type {
  Workspace,
  WorkspaceInvite,
  WorkspaceMember,
  WorkspaceRole,
  WorkspaceSettings,
} from '@entities/workspace';

export interface VehiclesTabProps {
  workspaceId: string;
  vehicles: Vehicle[];
  isPending: boolean;
}

export interface MembersTabProps {
  workspaceId: string;
  members: WorkspaceMember[];
  invites: WorkspaceInvite[];
  currentUserId: string;
  currentUserRole: WorkspaceRole;
  isPending: boolean;
}

export interface SettingsTabProps {
  workspace: Workspace;
  settings: WorkspaceSettings | null;
  canEdit: boolean;
  canDelete: boolean;
  canLeave: boolean;
  isPending: boolean;
  onBeforeNavigate?: () => void;
}
