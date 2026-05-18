// Constants

export const BodyType = {
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

export type BodyType = (typeof BodyType)[keyof typeof BodyType];

export const FuelType = {
  PETROL: 'PETROL',
  DIESEL: 'DIESEL',
  HYBRID: 'HYBRID',
  ELECTRIC: 'ELECTRIC',
  LPG: 'LPG',
} as const;

export type FuelType = (typeof FuelType)[keyof typeof FuelType];

export const Transmission = {
  MANUAL: 'MANUAL',
  AUTOMATIC: 'AUTOMATIC',
  ROBOTIC: 'ROBOTIC',
} as const;

export type Transmission = (typeof Transmission)[keyof typeof Transmission];

export const DriveType = {
  FWD: 'FWD',
  RWD: 'RWD',
  AWD: 'AWD',
} as const;

export type DriveType = (typeof DriveType)[keyof typeof DriveType];

export const VehicleStatus = {
  ACTIVE: 'ACTIVE',
  ARCHIVE: 'ARCHIVE',
  DELETED: 'DELETED',
} as const;

export type VehicleStatus = (typeof VehicleStatus)[keyof typeof VehicleStatus];

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
