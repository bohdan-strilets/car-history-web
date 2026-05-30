// Workspace type

export const WORKSPACE_TYPE = {
  PERSONAL: 'PERSONAL',
  FAMILY: 'FAMILY',
  BUSINESS: 'BUSINESS',
} as const;

export type WorkspaceType = (typeof WORKSPACE_TYPE)[keyof typeof WORKSPACE_TYPE];

// Workspace role

export const WORKSPACE_ROLE = {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
} as const;

export type WorkspaceRole = (typeof WORKSPACE_ROLE)[keyof typeof WORKSPACE_ROLE];

export const WORKSPACE_MEMBER_ROLE = {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
} as const;

export type WorkspaceMemberRole =
  (typeof WORKSPACE_MEMBER_ROLE)[keyof typeof WORKSPACE_MEMBER_ROLE];

// Workspace settings, currency

export const CURRENCY = {
  PLN: 'PLN',
  UAH: 'UAH',
  USD: 'USD',
  EUR: 'EUR',
} as const;

export type Currency = (typeof CURRENCY)[keyof typeof CURRENCY];

// Distance unit

export const DISTANCE_UNIT = {
  KM: 'KM',
  MI: 'MI',
} as const;

export type DistanceUnit = (typeof DISTANCE_UNIT)[keyof typeof DISTANCE_UNIT];

// Fuel unit

export const FUEL_UNIT = {
  L: 'L',
  GAL: 'GAL',
} as const;

export type FuelUnit = (typeof FUEL_UNIT)[keyof typeof FUEL_UNIT];

// Date format

export const DATE_FORMAT = {
  DD_MM_YYYY: 'DD_MM_YYYY',
  YYYY_MM_DD: 'YYYY_MM_DD',
  DD_MONTH_YYYY: 'DD_MONTH_YYYY',
} as const;

export type DateFormat = (typeof DATE_FORMAT)[keyof typeof DATE_FORMAT];

// Workspace invite status

export const WORKSPACE_INVITE_STATUS = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  EXPIRED: 'EXPIRED',
} as const;

export type WorkspaceInviteStatus =
  (typeof WORKSPACE_INVITE_STATUS)[keyof typeof WORKSPACE_INVITE_STATUS];
