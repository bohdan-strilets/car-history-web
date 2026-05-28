import type {
  BodyType,
  DriveType,
  FuelType,
  Transmission,
  VehicleStatus,
} from './vehicle.constants';

// Vehicle entity

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
  createdAt: Date;
}

// Store

export interface VehicleStore {
  activeVehicleId: string | null;
  setActiveVehicleId: (id: string) => void;
  clearActiveVehicleId: () => void;
}
