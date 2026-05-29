import { WORKSPACE_ROLE, type WorkspaceRole } from '../model';

export const canEditMember = (
  currentUserRole: WorkspaceRole,
  memberRole: WorkspaceRole,
  isCurrentUser: boolean,
): boolean => {
  if (isCurrentUser) return false;
  if (memberRole === WORKSPACE_ROLE.OWNER) return false;
  return (
    currentUserRole === WORKSPACE_ROLE.OWNER ||
    (currentUserRole === WORKSPACE_ROLE.ADMIN && memberRole === WORKSPACE_ROLE.MEMBER)
  );
};

export const canEditWorkspace = (role: WorkspaceRole): boolean => {
  return role === WORKSPACE_ROLE.OWNER || role === WORKSPACE_ROLE.ADMIN;
};

export const canDeleteWorkspace = (role: WorkspaceRole): boolean => {
  return role === WORKSPACE_ROLE.OWNER;
};
