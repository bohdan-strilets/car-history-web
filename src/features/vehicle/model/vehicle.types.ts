import type { Vehicle } from '@entities/vehicle';
import type { Control } from 'react-hook-form';

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

// Params

export interface CreateVehicleParams {
  workspaceId: string;
  dto: CreateVehicleDto;
}

export interface VehicleFormParams {
  workspaceId: string;
  onSuccess: (vehicle: Vehicle) => void;
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
