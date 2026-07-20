import { WORKSPACE_ROLE, type WorkspaceRole } from '@entities/workspace';

export const canDeleteReminder = (
  role: WorkspaceRole,
  createdBy: string | null,
  userId: string,
): boolean => {
  if (role === WORKSPACE_ROLE.OWNER || role === WORKSPACE_ROLE.ADMIN) {
    return true;
  }

  return createdBy === userId;
};
