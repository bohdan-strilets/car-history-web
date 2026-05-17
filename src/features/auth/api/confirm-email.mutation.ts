import { useMutation } from '@tanstack/react-query';

import { authApi } from '../api';
import type { ConfirmEmailDto } from '../model';

export const useConfirmEmailMutation = () => {
  return useMutation({
    mutationFn: (dto: ConfirmEmailDto) => authApi.confirmEmail(dto),
  });
};
