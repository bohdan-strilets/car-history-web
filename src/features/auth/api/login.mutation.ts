import { ROUTES } from '@shared/config/routes';
import { authService } from '@shared/store/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { authApi } from '../api';
import type { LoginDto } from '../model';

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (dto: LoginDto) => authApi.login(dto),

    onSuccess: (response) => {
      authService.setUser(response.data.user);
      navigate(ROUTES.DASHBOARD);
    },
  });
};
