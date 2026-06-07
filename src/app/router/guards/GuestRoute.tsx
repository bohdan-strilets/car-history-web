import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@shared/config';
import { useAuth } from '@shared/store';

export const GuestRoute = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <Outlet />;
};
