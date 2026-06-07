import type { LoginDto } from '@features/auth/model';
import { ROUTES } from '@shared/config/routes';
import { authService } from '@shared/store/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

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
      navigate(ROUTES.DASHBOARD);
    },
  });
};
