import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { ROUTES } from '@shared/config';
import { authService, useAuth } from '@shared/store';

import { authApi } from '../auth.api';

import type { ConfirmEmailDto } from '@features/auth';

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
