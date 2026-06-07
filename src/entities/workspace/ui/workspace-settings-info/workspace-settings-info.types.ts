import type { Workspace, WorkspaceSettings } from '@entities/workspace';

export interface WorkspaceSettingsInfoProps {
  workspace: Workspace;
  settings: WorkspaceSettings | null;
  onEditWorkspace?: () => void;
  onEditSettings?: () => void;
}
