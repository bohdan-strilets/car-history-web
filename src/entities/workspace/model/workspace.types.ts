// Constants

export const WorkspaceType = {
  PERSONAL: 'PERSONAL',
  FAMILY: 'FAMILY',
  BUSINESS: 'BUSINESS',
} as const;

export type WorkspaceType = (typeof WorkspaceType)[keyof typeof WorkspaceType];

export const Currency = {
  PLN: 'PLN',
  UAH: 'UAH',
  USD: 'USD',
  EUR: 'EUR',
} as const;

export type Currency = (typeof Currency)[keyof typeof Currency];

export const DistanceUnit = {
  KM: 'KM',
  MI: 'MI',
} as const;

export type DistanceUnit = (typeof DistanceUnit)[keyof typeof DistanceUnit];

export const FuelUnit = {
  L: 'L',
  GAL: 'GAL',
} as const;

export type FuelUnit = (typeof FuelUnit)[keyof typeof FuelUnit];

export const DateFormat = {
  DD_MM_YYYY: 'DD_MM_YYYY',
  YYYY_MM_DD: 'YYYY_MM_DD',
  DD_MONTH_YYYY: 'DD_MONTH_YYYY',
} as const;

export type DateFormat = (typeof DateFormat)[keyof typeof DateFormat];

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
