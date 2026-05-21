// DTOs

import type { WorkspaceSettings } from '@entities/workspace';

export interface CreateWorkspaceDto {
  name: string;
  type: string;
}

export interface UpdateWorkspaceSettingsDto {
  currency?: string;
  timezone?: string;
  distanceUnit?: string;
  fuelUnit?: string;
  dateFormat?: string;
}

// Params

export interface UpdateWorkspaceSettingsParams {
  id: string;
  dto: UpdateWorkspaceSettingsDto;
}

// Props

export interface WorkspaceSettingsFormProps {
  workspaceId: string;
  onSuccess: (settings: WorkspaceSettings) => void;
  onSkip?: () => void;
}
