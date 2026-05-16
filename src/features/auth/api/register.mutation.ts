import { ROUTES } from '@shared/config/routes';
import { authService } from '@shared/store/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { authApi } from '../api';
import type { RegisterDto } from '../model';

export const useRegisterMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (dto: RegisterDto) => authApi.register(dto),

    onSuccess: (response) => {
      authService.setUser(response.data.user);
      authService.setAccessToken(response.data.accessToken);
      navigate(ROUTES.DASHBOARD);
    },
  });
};
