import { useMutation } from '@tanstack/react-query';

import type { CreateInviteDto } from '../model';

import { workspaceApi } from './workspace.api';

export const useCreateInviteMutation = (workspaceId: string) => {
  return useMutation({
    mutationFn: (dto: CreateInviteDto) => workspaceApi.createInvite(workspaceId, dto),
  });
};
