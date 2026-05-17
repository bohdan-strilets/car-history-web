import { useMeQuery } from '@features/auth/api';
import { ROUTES } from '@shared/config/routes';
import { authService } from '@shared/store/auth';
import { Spinner, Stack } from '@shared/ui';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const GoogleCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { refetch } = useMeQuery();

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
  }, []);

  return (
    <Stack align="center" justify="center" style={{ height: '100vh' }}>
      <Spinner size="xl" color="accent" />
    </Stack>
  );
};
