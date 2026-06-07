import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { ROUTES } from '@shared/config';
import { authService } from '@shared/store';

import { authApi } from '../auth.api';

import type { RegisterDto } from '@features/auth';

export const useRegisterMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (dto: RegisterDto) => {
      return authApi.register(dto);
    },

    onSuccess: (response) => {
      authService.setUser(response.data.user);
      authService.setAccessToken(response.data.accessToken);
      navigate(ROUTES.ONBOARDING);
    },
  });
};
