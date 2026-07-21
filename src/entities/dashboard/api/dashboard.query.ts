import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { dashboardApi } from './dashboard.api';

export const useDashboardQuery = (workspaceId: string) => {
  return useQuery({
    queryKey: queryKeys.dashboard.detail(workspaceId),
    queryFn: () => dashboardApi.get(workspaceId),
    enabled: !!workspaceId,
  });
};
