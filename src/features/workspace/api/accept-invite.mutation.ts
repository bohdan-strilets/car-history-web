import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { InviteToken } from '@entities/workspace';
import { queryKeys } from '@shared/config';
import { useErrorHandler } from '@shared/lib';

import { workspaceApi } from './workspace.api';

export const useAcceptInviteMutation = () => {
  const queryClient = useQueryClient();
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (token: InviteToken) => {
      return workspaceApi.acceptInvite(token);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.workspaces.all() });
    },

    onError: handleError,
  });
};
