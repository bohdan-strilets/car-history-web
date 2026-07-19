import type { WorkspaceRole } from '@entities/workspace';

export const canDeleteTimelineEvent = (
  role: WorkspaceRole,
  createdBy: string | null,
  userId: string,
): boolean => {
  if (role === 'OWNER' || role === 'ADMIN') return true;
  return createdBy === userId;
};
