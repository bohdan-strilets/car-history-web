import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { PlaceDetails, PlaceSuggestion } from '../model';

export const placesApi = {
  autocomplete: (query: string, sessionToken: string) => {
    return apiClient.get<PlaceSuggestion[]>(ENDPOINTS.SERVICE_STATIONS.PLACES_AUTOCOMPLETE, {
      params: { query, sessionToken },
    });
  },

  getDetails: (placeId: string, sessionToken: string) => {
    return apiClient.get<PlaceDetails>(ENDPOINTS.SERVICE_STATIONS.PLACES_DETAILS, {
      params: { placeId, sessionToken },
    });
  },
};
