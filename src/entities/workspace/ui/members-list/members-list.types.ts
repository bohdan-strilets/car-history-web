import type { UserId } from '@entities/user';
import type { WorkspaceInvite, WorkspaceMember, WorkspaceRole } from '@entities/workspace/model';

export interface MembersListProps {
  members: WorkspaceMember[];
  invites: WorkspaceInvite[];
  currentUserId: UserId;
  currentUserRole: WorkspaceRole;
  onEdit: (member: WorkspaceMember) => void;
  onRemove: (member: WorkspaceMember) => void;
  onCancelInvite: (invite: WorkspaceInvite) => void;
}
