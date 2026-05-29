import type {
  Currency,
  DateFormat,
  DistanceUnit,
  FuelUnit,
  WorkspaceInviteStatus,
  WorkspaceRole,
  WorkspaceType,
} from './workspace.constants';

// Workspace types

export interface Workspace {
  id: string;
  ownerId: string;
  name: string;
  type: WorkspaceType;
  role: WorkspaceRole;
  membersCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface WorkspaceWithOwner extends Workspace {
  owner: WorkspaceUser;
}

export interface WorkspaceId {
  id: string;
}

// Workspace settings

export interface WorkspaceSettings {
  currency: Currency;
  timezone: string;
  distanceUnit: DistanceUnit;
  fuelUnit: FuelUnit;
  dateFormat: DateFormat;
}

// Workspace members

export interface WorkspaceUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string | null;
}

export interface WorkspaceInfo {
  id: string;
  name: string;
  type: WorkspaceType;
}

export interface WorkspaceMember {
  id: string;
  workspaceId: string;
  userId: string;
  role: WorkspaceRole;
  createdAt: string;
  updatedAt: string;
  user: WorkspaceUser;
}

// Workspace invites

export interface WorkspaceInvite {
  id: string;
  workspaceId: string;
  invitedById: string;
  email: string;
  role: WorkspaceRole;
  status: WorkspaceInviteStatus;
  workspace: WorkspaceInfo;
  expiresAt: string;
  createdAt: string;
}

// Store

export interface WorkspaceStore {
  activeWorkspace: Workspace | null;
  activeWorkspaceId: string | null;
  setActiveWorkspace: (workspace: Workspace) => void;
  setActiveWorkspaceId: (workspaceId: string) => void;
  clearActiveWorkspace: () => void;
  clearActiveWorkspaceId: () => void;
}

// Props

export interface WorkspaceSettingsInfoProps {
  workspace: Workspace;
  settings: WorkspaceSettings | null;
  onEditWorkspace?: () => void;
  onEditSettings?: () => void;
}
