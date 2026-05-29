import { WORKSPACE_ROLE, type WorkspaceRole } from '../model';

export const canManageWorkspace = (role: WorkspaceRole): boolean => {
  return role === WORKSPACE_ROLE.OWNER;
};
