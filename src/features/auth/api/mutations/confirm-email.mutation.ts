import type { ConfirmEmailDto } from '@features/auth/model';
import { ROUTES } from '@shared/config';
import { authService, useAuth } from '@shared/store/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { authApi } from '../auth.api';

export const useConfirmEmailMutation = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return useMutation({
    mutationFn: (dto: ConfirmEmailDto) => {
      return authApi.confirmEmail(dto);
    },

    onSuccess: () => {
      authService.updateUser({ emailVerified: true });

      if (isAuthenticated) {
        navigate(ROUTES.ONBOARDING);
      } else {
        navigate(ROUTES.AUTH.LOGIN);
      }
    },
  });
};
