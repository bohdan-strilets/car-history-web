import type { WorkspaceRole } from '@entities/workspace';

export const canEditVehicle = (
  role: WorkspaceRole,
  vehicleOwnerId: string,
  userId: string,
): boolean => {
  if (role === 'OWNER') return true;
  return vehicleOwnerId === userId;
};

export const canDeleteVehicle = (
  role: WorkspaceRole,
  vehicleOwnerId: string,
  userId: string,
): boolean => {
  if (role === 'OWNER') return true;
  return vehicleOwnerId === userId;
};

export const canAddTimelineEvent = (
  role: WorkspaceRole,
  vehicleOwnerId: string,
  userId: string,
): boolean => {
  if (role === 'OWNER' || role === 'ADMIN') return true;
  return vehicleOwnerId === userId;
};
