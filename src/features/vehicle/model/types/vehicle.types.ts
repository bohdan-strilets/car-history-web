import type { Control, UseFormSetValue } from 'react-hook-form';

import type { Vehicle, VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

import type { VehicleFormValues, VehicleSpecsValues } from '../schemes';
import type { CreateVehicleDto, UpdateVehicleDto } from './vehicle.dto';

// Params

export interface CreateVehicleParams {
  workspaceId: WorkspaceId;
  dto: CreateVehicleDto;
}

export interface UpdateVehicleParams {
  vehicleId: VehicleId;
  workspaceId: WorkspaceId;
  dto: UpdateVehicleDto;
}

export interface VehicleFormParams {
  workspaceId: WorkspaceId;
  onSuccess: (vehicle: Vehicle) => void;
}

export interface EditVehicleFormParams {
  vehicle: Vehicle;
  workspaceId: WorkspaceId;
  onSuccess?: () => void;
}

export interface DeleteVehicleParams {
  vehicleId: VehicleId;
  workspaceId: WorkspaceId;
}

export interface EditVehicleDescriptionParams {
  vehicle: Vehicle;
  onSuccess: () => void;
}

export interface FillSpecsAiParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
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

export interface GenerationYearRangeParams {
  startYear: number | null;
  endYear: number | null;
}

// Props

export interface VehicleBasicInfoStepProps {
  control: Control<VehicleFormValues>;
  setValue: UseFormSetValue<VehicleFormValues>;
}

export interface VehicleStepProps {
  control: Control<VehicleFormValues>;
}

export interface VehicleFormProps {
  workspaceId: WorkspaceId;
  onSuccess: (vehicle: Vehicle) => void;
  onSkip?: () => void;
}

export interface VehicleEditFormProps {
  vehicle: Vehicle;
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
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
