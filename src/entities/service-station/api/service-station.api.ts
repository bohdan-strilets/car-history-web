import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { ServiceStation } from '../model';

export const serviceStationApi = {
  getAll: () => {
    return apiClient.get<ServiceStation[]>(ENDPOINTS.SERVICE_STATIONS.LIST);
  },

  getById: (id: string) => {
    return apiClient.get<ServiceStation>(ENDPOINTS.SERVICE_STATIONS.DETAIL(id));
  },
};
