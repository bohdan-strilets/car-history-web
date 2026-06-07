import type { WorkspaceId, WorkspaceRole, WorkspaceType } from '@entities/workspace';

export interface WorkspaceCardProps {
  id: WorkspaceId;
  name: string;
  type: WorkspaceType;
  role: WorkspaceRole;
  isCurrent: boolean;
  countMembers: number;
  countCars: number;
  createdAt: string;
}
