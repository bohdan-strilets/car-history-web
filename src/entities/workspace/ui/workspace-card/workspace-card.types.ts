import type { WorkspaceRole, WorkspaceType } from '@entities/workspace/model';

export interface WorkspaceCardProps {
  id: string;
  name: string;
  type: WorkspaceType;
  role: WorkspaceRole;
  isCurrent: boolean;
  countMembers: number;
  countCars: number;
  createdAt: string;
}
