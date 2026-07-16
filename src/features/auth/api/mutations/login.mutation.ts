import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import type { LoginDto } from '@features/auth';
import { ROUTES } from '@shared/config';
import { authService } from '@shared/store';

import { authApi } from '../auth.api';

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (dto: LoginDto) => {
      return authApi.login(dto);
    },

    onSuccess: (response) => {
      authService.setUser(response.data.user);
      authService.setAccessToken(response.data.accessToken);
      authService.setCsrfToken(response.data.csrfToken);
      navigate(ROUTES.DASHBOARD);
    },
  });
};
