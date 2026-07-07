import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { CreateServiceStationValues } from '../model';

export const serviceStationMutationApi = {
  create: (dto: CreateServiceStationValues) => {
    return apiClient.post(ENDPOINTS.SERVICE_STATIONS.CREATE, dto);
  },

  update: (id: string, dto: Partial<CreateServiceStationValues>) => {
    return apiClient.patch(ENDPOINTS.SERVICE_STATIONS.UPDATE(id), dto);
  },

  toggleFavorite: (id: string) => {
    return apiClient.patch(ENDPOINTS.SERVICE_STATIONS.FAVORITE(id));
  },

  delete: (id: string) => {
    return apiClient.delete(ENDPOINTS.SERVICE_STATIONS.DELETE(id));
  },
};
