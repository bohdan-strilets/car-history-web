import type { WorkspaceId } from '@entities/workspace';
import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { Dashboard } from '../model';

export const dashboardApi = {
  get: (workspaceId: WorkspaceId) => {
    const path = ENDPOINTS.DASHBOARD(workspaceId);
    return apiClient.get<Dashboard>(path);
  },
};
