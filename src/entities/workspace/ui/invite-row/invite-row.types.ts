import type { WorkspaceInvite } from '@entities/workspace';

export interface InviteRowProps {
  invite: WorkspaceInvite;
  onCancel: (invite: WorkspaceInvite) => void;
}
