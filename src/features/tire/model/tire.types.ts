import type { Tire, TireId } from '@entities/tire';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

export interface CreateTireFormParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  onSuccess?: () => void;
}

export interface UpdateTireFormParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  tireId: TireId;
  tire: Tire;
  onSuccess?: () => void;
}

export interface OpenCreateTireParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
}

export interface OpenEditTireParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
}

export interface TireDetailModalProps {
  tire: Tire;
  vehicleId: VehicleId;
  workspaceId: WorkspaceId;
}

export interface OpenTireDetailParams {
  vehicleId: VehicleId;
  workspaceId: WorkspaceId;
}
