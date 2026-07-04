import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

export interface UploadMediaFormProps {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  onSuccess?: () => void;
}
