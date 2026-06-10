import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { CreateTimelineEventParams, EventParams, UpdateTimelineEventParams } from '../model';

export const timelineApi = {
  create: ({ workspaceId, vehicleId, dto }: CreateTimelineEventParams) => {
    const path = ENDPOINTS.TIMELINE.CREATE(workspaceId, vehicleId);
    return apiClient.post<void>(path, dto);
  },

  update: ({ workspaceId, vehicleId, eventId, dto }: UpdateTimelineEventParams) => {
    const path = ENDPOINTS.TIMELINE.UPDATE(workspaceId, vehicleId, eventId);
    return apiClient.patch<void>(path, dto);
  },

  delete: ({ workspaceId, vehicleId, eventId }: EventParams) => {
    const path = ENDPOINTS.TIMELINE.DELETE(workspaceId, vehicleId, eventId);
    return apiClient.delete<void>(path);
  },
};
