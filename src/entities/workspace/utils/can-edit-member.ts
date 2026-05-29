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
