import type {
  Currency,
  DateFormat,
  DistanceUnit,
  FuelUnit,
  WorkspaceInviteStatus,
  WorkspaceRole,
  WorkspaceType,
} from './workspace.constants';
import type { User, UserId } from '@entities/user';

// Types

export type WorkspaceId = string;
export type WorkspaceSettingsId = string;
export type MemberId = string;
export type InviteId = string;
export type InviteToken = string;

// Workspace

export interface Workspace {
  id: WorkspaceId;
  ownerId: UserId;
  name: string;
  type: WorkspaceType;
  role: WorkspaceRole;
  membersCount: number;
  vehiclesCount: number;
  createdAt: string;
  updatedAt: string;
}

export type WorkspaceOwner = Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'avatarUrl'>;

export interface WorkspaceWithOwner extends Workspace {
  owner: WorkspaceOwner;
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

export interface WorkspaceMember {
  id: MemberId;
  workspaceId: WorkspaceId;
  userId: UserId;
  role: WorkspaceRole;
  user: WorkspaceOwner;
  createdAt: string;
  updatedAt: string;
}

export type WorkspaceInfo = Pick<Workspace, 'id' | 'name' | 'type'>;

export interface WorkspaceInvite {
  id: InviteId;
  workspaceId: WorkspaceId;
  invitedById: UserId;
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
  activeWorkspaceId: WorkspaceId | null;
  setActiveWorkspace: (workspace: Workspace) => void;
  setActiveWorkspaceId: (workspaceId: WorkspaceId) => void;
  clearActiveWorkspace: () => void;
  clearActiveWorkspaceId: () => void;
}
