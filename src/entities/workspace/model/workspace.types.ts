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
  createdAt: Date;
}

// Store

export interface WorkspaceStore {
  activeWorkspace: Workspace | null;
  setActiveWorkspace: (workspace: Workspace) => void;
  clearActiveWorkspace: () => void;
}
