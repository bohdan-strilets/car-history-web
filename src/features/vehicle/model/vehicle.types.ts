import type { Vehicle } from '@entities/vehicle';
import type { Control } from 'react-hook-form';

import type { VehicleSpecsValues } from './vehicle-specs.schema';
import type { VehicleFormValues } from './vehicle.schema';

// DTOs

export interface CreateVehicleDto {
  brand: string;
  model: string;
  year: number;
  generation?: string;
  nickname?: string;
  vin?: string;
  plateNumber: string;
  engineDisplacementCc: number;
  bodyType: string;
  fuelType: string[];
  transmission: string;
  driveType: string;
  color: string;
  currentMileage?: number;
  description?: string;
  countryOfOrigin?: string;
}

export type UpdateVehicleDto = Partial<CreateVehicleDto>;

// Params

export interface CreateVehicleParams {
  workspaceId: string;
  dto: CreateVehicleDto;
}

export interface UpdateVehicleParams {
  id: string;
  workspaceId: string;
  dto: UpdateVehicleDto;
}

export interface VehicleFormParams {
  workspaceId: string;
  onSuccess: (vehicle: Vehicle) => void;
}

export interface EditVehicleFormParams {
  vehicle: Vehicle;
  workspaceId: string;
  onSuccess?: () => void;
}

export interface DeleteVehicleParams {
  id: string;
  workspaceId: string;
}

export interface EditVehicleDescriptionParams {
  vehicle: Vehicle;
  onSuccess: () => void;
}

export interface FillSpecsAiParams {
  workspaceId: string;
  vehicleId: string;
}

export interface UpdateVehicleSpecsParams {
  vehicleId: string;
  workspaceId: string;
  dto: VehicleSpecsValues;
}

export interface EditVehicleSpecsFormParams {
  vehicle: Vehicle;
  onSuccess?: () => void;
}

// Props

export interface VehicleStepProps {
  control: Control<VehicleFormValues>;
}

export interface VehicleFormProps {
  workspaceId: string;
  onSuccess: (vehicle: Vehicle) => void;
  onSkip?: () => void;
}

export interface VehicleEditFormProps {
  vehicle: Vehicle;
  workspaceId: string;
  vehicleId: string;
}

export interface EditVehicleDescriptionModalProps {
  vehicle: Vehicle;
  onSuccess: () => void;
}

export interface VehicleSpecsFormProps {
  control: Control<VehicleSpecsValues>;
  handleSubmit: () => void;
  isPending: boolean;
  errorMessage?: string;
}
