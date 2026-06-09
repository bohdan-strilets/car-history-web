import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { GetManyParams, GetOneParams, TimelineEvent } from '../model';

export const timelineApi = {
  getMany: ({ workspaceId, vehicleId, query }: GetManyParams) => {
    const path = ENDPOINTS.TIMELINE.LIST(workspaceId, vehicleId);
    const params = { ...query, type: query?.type?.join(',') };

    return apiClient.getPaginated<TimelineEvent>(path, { params });
  },

  getOne: ({ workspaceId, vehicleId, eventId }: GetOneParams) => {
    const path = ENDPOINTS.TIMELINE.DETAIL(workspaceId, vehicleId, eventId);
    return apiClient.get<TimelineEvent>(path);
  },
};
