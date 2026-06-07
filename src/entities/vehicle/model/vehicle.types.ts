import type {
  BodyType,
  DriveType,
  FuelType,
  Transmission,
  VehicleStatus,
} from './vehicle.constants';
import type { User, UserId } from '@entities/user';
import type { WorkspaceId } from '@entities/workspace';

// Types

export type VehicleId = string;

// Vehicle entity

export interface VehiclePurchaseInfo {
  date?: string;
  price?: number;
  mileage?: number;
}

export interface VehicleSaleInfo {
  date?: string;
  price?: number;
  mileage?: number;
}

export interface VehicleSpecs {
  engineCode?: string;
  enginePowerHp?: number;
  enginePowerKw?: number;
  torqueNm?: number;
  cylindersCount?: number;
  engineLayout?: string;
  turbo?: boolean;
  gearsCount?: number;
  fuelTankCapacity?: number;
  cityConsumption?: number;
  highwayConsumption?: number;
  combinedConsumption?: number;
  batteryCapacityKwh?: number;
  electricRangeKm?: number;
  accelerationSec?: number;
  topSpeedKmh?: number;
  lengthMm?: number;
  widthMm?: number;
  heightMm?: number;
  weightKg?: number;
  wheelbaseMm?: number;
  groundClearanceMm?: number;
  trunkVolumeLiters?: number;
  numberOfDoors?: number;
  numberOfSeats?: number;
  airbagsCount?: number;
  euroStandard?: string;
  ncapRating?: number;
  co2EmissionGKm?: number;
  tireSizeFront?: string;
  tireSizeRear?: string;
  firstRegistrationDate?: string;
}

export type VehicleOwner = Pick<User, 'id' | 'firstName' | 'lastName' | 'avatarUrl'>;

export interface Vehicle {
  id: VehicleId;
  ownerId: UserId;
  workspaceId: WorkspaceId;
  brand: string;
  model: string;
  year: number;
  generation: string | null;
  nickname: string | null;
  vin: string | null;
  plateNumber: string;
  engineDisplacementCc: number;
  bodyType: BodyType;
  fuelType: FuelType[];
  transmission: Transmission;
  driveType: DriveType;
  color: string;
  currentMileage: number;
  description: string | null;
  countryOfOrigin: string | null;
  status: VehicleStatus;
  owner: VehicleOwner;
  purchaseInfo?: VehiclePurchaseInfo | null;
  saleInfo?: VehicleSaleInfo | null;
  specs?: VehicleSpecs | null;
  createdAt: Date;
}

// Store

export interface VehicleStore {
  activeVehicleId: VehicleId | null;
  setActiveVehicleId: (id: VehicleId) => void;
  clearActiveVehicleId: () => void;
}
