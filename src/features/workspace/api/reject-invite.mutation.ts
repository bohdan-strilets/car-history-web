import { useMutation } from '@tanstack/react-query';

import { workspaceApi } from './workspace.api';

export const useRejectInviteMutation = () => {
  return useMutation({
    mutationFn: (token: string) => workspaceApi.rejectInvite(token),
  });
};
