import { queryKeys } from '@shared/config';
import { useQuery } from '@tanstack/react-query';

import { workspaceApi } from './workspace.api';

export const useWorkspaceMembersQuery = (id: string) => {
  return useQuery({
    queryKey: queryKeys.workspaces.members(id),
    queryFn: () => workspaceApi.getMembers(id),
    enabled: !!id,
  });
};
