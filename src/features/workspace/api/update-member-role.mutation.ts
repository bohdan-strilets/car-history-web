import { queryKeys } from '@shared/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { UpdateMemberRoleDto } from '../model';

import { workspaceApi } from './workspace.api';

export const useUpdateMemberRoleMutation = (workspaceId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ memberId, dto }: { memberId: string; dto: UpdateMemberRoleDto }) =>
      workspaceApi.updateMemberRole(workspaceId, memberId, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.workspaces.members(workspaceId) });
    },
  });
};
