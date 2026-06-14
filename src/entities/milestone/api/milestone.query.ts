import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { milestoneApi } from './milestone.api';

import type { MilestonesParams } from '../model';

export const useMilestones = ({ workspaceId, vehicleId }: MilestonesParams) => {
  return useQuery({
    queryKey: queryKeys.vehicles.milestones(vehicleId),
    queryFn: () => milestoneApi.getMany(workspaceId, vehicleId),
  });
};
