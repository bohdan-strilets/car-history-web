import { ROUTES } from '@shared/config/routes';
import { useAuth } from '@shared/store/auth';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.AUTH.LOGIN} replace />;
  }

  return <Outlet />;
};
