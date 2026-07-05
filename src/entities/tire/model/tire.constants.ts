export const TIRE_TYPE = {
  ALL_SEASON: 'ALL_SEASON',
  SUMMER: 'SUMMER',
  WINTER: 'WINTER',
} as const;

export type TireType = (typeof TIRE_TYPE)[keyof typeof TIRE_TYPE];

export const TIRE_STATUS = {
  MOUNTED: 'MOUNTED',
  STORED: 'STORED',
  RETIRED: 'RETIRED',
} as const;

export type TireStatus = (typeof TIRE_STATUS)[keyof typeof TIRE_STATUS];
