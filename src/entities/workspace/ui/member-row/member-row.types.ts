import type { WorkspaceMember, WorkspaceRole } from '@entities/workspace';

export interface MemberRowProps {
  member: WorkspaceMember;
  currentUserRole: WorkspaceRole;
  isCurrentUser: boolean;
  onEdit: (member: WorkspaceMember) => void;
  onRemove: (member: WorkspaceMember) => void;
}
