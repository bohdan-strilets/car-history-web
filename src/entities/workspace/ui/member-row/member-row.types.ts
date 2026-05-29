import type { WorkspaceMember, WorkspaceRole } from '@entities/workspace/model';

export interface MemberRowProps {
  member: WorkspaceMember;
  currentUserRole: WorkspaceRole;
  isCurrentUser: boolean;
  onEdit: (member: WorkspaceMember) => void;
  onRemove: (member: WorkspaceMember) => void;
}
