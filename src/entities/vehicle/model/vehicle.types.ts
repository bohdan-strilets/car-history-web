import type {
  BodyType,
  DriveType,
  FuelType,
  Transmission,
  VehicleStatus,
} from './vehicle.constants';

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
  // Engine
  engineCode?: string;
  enginePowerHp?: number;
  enginePowerKw?: number;
  torqueNm?: number;
  cylindersCount?: number;
  engineLayout?: string;
  turbo?: boolean;

  // Transmission
  gearsCount?: number;

  // Consumption
  fuelTankCapacity?: number;
  cityConsumption?: number;
  highwayConsumption?: number;
  combinedConsumption?: number;

  // Electric / Hybrid
  batteryCapacityKwh?: number;
  electricRangeKm?: number;

  // Performance
  accelerationSec?: number;
  topSpeedKmh?: number;

  // Dimensions
  lengthMm?: number;
  widthMm?: number;
  heightMm?: number;
  weightKg?: number;
  wheelbaseMm?: number;
  groundClearanceMm?: number;
  trunkVolumeLiters?: number;

  // Interior
  numberOfDoors?: number;
  numberOfSeats?: number;
  airbagsCount?: number;

  // Safety & Eco
  euroStandard?: string;
  ncapRating?: number;
  co2EmissionGKm?: number;

  // Tires
  tireSizeFront?: string;
  tireSizeRear?: string;

  // Registration
  firstRegistrationDate?: string;
}

export interface VehicleOwner {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
}

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
  activeVehicleId: string | null;
  setActiveVehicleId: (id: string) => void;
  clearActiveVehicleId: () => void;
}
