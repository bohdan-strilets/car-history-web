import { useMutation } from '@tanstack/react-query';

import { userApi } from './user.api';

import type { ConfirmEmailChangeDto } from '../model';

export const useConfirmEmailChangeMutation = () => {
  return useMutation({
    mutationFn: (dto: ConfirmEmailChangeDto) => userApi.confirmEmailChange(dto),
  });
};
