import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@shared/api';
import { ENDPOINTS, queryKeys } from '@shared/config';

import type { TireHistory } from '../model';

export const useTireHistoryQuery = (tireId: string, enabled = true) =>
  useQuery({
    queryKey: queryKeys.tires.history(tireId),
    queryFn: () => apiClient.get<TireHistory>(ENDPOINTS.TIRES.HISTORY(tireId)),
    enabled: enabled && !!tireId,
  });
