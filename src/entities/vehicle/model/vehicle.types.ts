// Constants

export const BODY_TYPE = {
  SEDAN: 'SEDAN',
  HATCHBACK: 'HATCHBACK',
  WAGON: 'WAGON',
  SUV: 'SUV',
  CROSSOVER: 'CROSSOVER',
  COUPE: 'COUPE',
  CONVERTIBLE: 'CONVERTIBLE',
  MINIVAN: 'MINIVAN',
  PICKUP: 'PICKUP',
  VAN: 'VAN',
  OTHER: 'OTHER',
} as const;

export type BodyType = (typeof BODY_TYPE)[keyof typeof BODY_TYPE];

export const FUEL_TYPE = {
  PETROL: 'PETROL',
  DIESEL: 'DIESEL',
  HYBRID: 'HYBRID',
  ELECTRIC: 'ELECTRIC',
  LPG: 'LPG',
} as const;

export type FuelType = (typeof FUEL_TYPE)[keyof typeof FUEL_TYPE];

export const TRANSMISSION = {
  MANUAL: 'MANUAL',
  AUTOMATIC: 'AUTOMATIC',
  ROBOTIC: 'ROBOTIC',
} as const;

export type Transmission = (typeof TRANSMISSION)[keyof typeof TRANSMISSION];

export const DRIVE_TYPE = {
  FWD: 'FWD',
  RWD: 'RWD',
  AWD: 'AWD',
} as const;

export type DriveType = (typeof DRIVE_TYPE)[keyof typeof DRIVE_TYPE];

export const VEHICLE_STATUS = {
  ACTIVE: 'ACTIVE',
  ARCHIVE: 'ARCHIVE',
  DELETED: 'DELETED',
} as const;

export type VehicleStatus = (typeof VEHICLE_STATUS)[keyof typeof VEHICLE_STATUS];

// Types

export interface Vehicle {
  id: string;
  ownerId: string;
  workspaceId: string;
  brand: string;
  model: string;
  year: number;
  generation: string | null;
  nickname: string | null;
  vin: string | null;
  plateNumber: string;
  engineDisplacementCc: number;
  bodyType: BodyType;
  fuelType: FuelType;
  transmission: Transmission;
  driveType: DriveType;
  color: string;
  currentMileage: number;
  description: string | null;
  countryOfOrigin: string | null;
  status: VehicleStatus;
  createdAt: Date;
}
