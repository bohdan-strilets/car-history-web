import { useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import { useInitQuery } from '@features/auth';
import { ROUTES } from '@shared/config';
import { authService } from '@shared/store';
import { Spinner, Stack } from '@shared/ui';

export const GoogleCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { refetch } = useInitQuery();

  useEffect(() => {
    const handle = async () => {
      const accessToken = searchParams.get('accessToken');

      if (accessToken) {
        authService.setAccessToken(accessToken);
        await refetch();
        navigate(ROUTES.DASHBOARD, { replace: true });
      } else {
        navigate(ROUTES.AUTH.LOGIN, { replace: true });
      }
    };

    handle();
  }, [navigate, refetch, searchParams]);

  return (
    <Stack align="center" justify="center" style={{ height: '100vh' }}>
      <Spinner size="xl" color="accent" />
    </Stack>
  );
};
