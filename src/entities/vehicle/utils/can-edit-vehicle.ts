import type { WorkspaceRole } from '@entities/workspace';

export const canEditVehicle = (role: WorkspaceRole): boolean => {
  return role === 'OWNER' || role === 'ADMIN';
};

export const canDeleteVehicle = (role: WorkspaceRole): boolean => {
  return role === 'OWNER' || role === 'ADMIN';
};

export const canAddTimelineEvent = (
  role: WorkspaceRole,
  vehicleOwnerId: string,
  userId: string,
): boolean => {
  if (role === 'OWNER' || role === 'ADMIN') return true;
  return vehicleOwnerId === userId;
};
