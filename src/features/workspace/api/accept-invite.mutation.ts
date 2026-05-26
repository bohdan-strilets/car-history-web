import { queryKeys } from '@shared/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { workspaceApi } from './workspace.api';

export const useAcceptInviteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (token: string) => workspaceApi.acceptInvite(token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.workspaces.all() });
    },
  });
};
