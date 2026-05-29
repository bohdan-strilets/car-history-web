import type { WorkspaceMember, WorkspaceRole } from '@entities/workspace/model';

export interface MembersListProps {
  members: WorkspaceMember[];
  currentUserId: string;
  currentUserRole: WorkspaceRole;
  onEdit: (member: WorkspaceMember) => void;
  onRemove: (member: WorkspaceMember) => void;
}
