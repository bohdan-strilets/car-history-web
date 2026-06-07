import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { ROUTES } from '@shared/config';
import { authService } from '@shared/store';

import { authApi } from '../auth.api';

import type { LoginDto } from '@features/auth';

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (dto: LoginDto) => {
      return authApi.login(dto);
    },

    onSuccess: (response) => {
      authService.setUser(response.data.user);
      authService.setAccessToken(response.data.accessToken);
      navigate(ROUTES.DASHBOARD);
    },
  });
};
