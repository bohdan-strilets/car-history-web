// Constants

export const WORKSPACE_TYPE = {
  PERSONAL: 'PERSONAL',
  FAMILY: 'FAMILY',
  BUSINESS: 'BUSINESS',
} as const;

export type WorkspaceType = (typeof WORKSPACE_TYPE)[keyof typeof WORKSPACE_TYPE];

export const CURRENCY = {
  PLN: 'PLN',
  UAH: 'UAH',
  USD: 'USD',
  EUR: 'EUR',
} as const;

export type Currency = (typeof CURRENCY)[keyof typeof CURRENCY];

export const DISTANCE_UNIT = {
  KM: 'KM',
  MI: 'MI',
} as const;

export type DistanceUnit = (typeof DISTANCE_UNIT)[keyof typeof DISTANCE_UNIT];

export const FUEL_UNIT = {
  L: 'L',
  GAL: 'GAL',
} as const;

export type FuelUnit = (typeof FUEL_UNIT)[keyof typeof FUEL_UNIT];

export const DATE_FORMAT = {
  DD_MM_YYYY: 'DD_MM_YYYY',
  YYYY_MM_DD: 'YYYY_MM_DD',
  DD_MONTH_YYYY: 'DD_MONTH_YYYY',
} as const;

export type DateFormat = (typeof DATE_FORMAT)[keyof typeof DATE_FORMAT];

export const WORKSPACE_ROLE = {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
} as const;

export type WorkspaceRole = (typeof WORKSPACE_ROLE)[keyof typeof WORKSPACE_ROLE];

export const WORKSPACE_INVITE_STATUS = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  EXPIRED: 'EXPIRED',
} as const;

export type WorkspaceInviteStatus =
  (typeof WORKSPACE_INVITE_STATUS)[keyof typeof WORKSPACE_INVITE_STATUS];

// Types

export interface WorkspaceSettings {
  currency: Currency;
  timezone: string;
  distanceUnit: DistanceUnit;
  fuelUnit: FuelUnit;
  dateFormat: DateFormat;
}

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

export interface WorkspaceMember {
  id: string;
  workspaceId: string;
  userId: string;
  role: WorkspaceRole;
  createdAt: string;
  updatedAt: string;
}

export interface WorkspaceInvite {
  id: string;
  workspaceId: string;
  invitedById: string;
  email: string;
  role: WorkspaceRole;
  status: WorkspaceInviteStatus;
  expiresAt: string;
  createdAt: string;
}

export interface WorkspaceOwner {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string | null;
}

export interface WorkspaceWithOwner extends Workspace {
  owner: WorkspaceOwner;
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
