import type {
  BodyType,
  DriveType,
  FuelType,
  Transmission,
  VehicleStatus,
} from './vehicle.constants';

// Vehicle entity

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
  createdAt: Date;
}

// Store

export interface VehicleStore {
  activeVehicleId: string | null;
  setActiveVehicleId: (id: string) => void;
  clearActiveVehicleId: () => void;
}
