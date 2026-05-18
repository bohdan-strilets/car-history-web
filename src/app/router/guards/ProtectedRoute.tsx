import { ROUTES } from '@shared/config/routes';
import { useAuth } from '@shared/store/auth';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { isAuthenticated, user } = useAuth();
  const onboardingCompleted = user?.onboardingCompleted;

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.AUTH.LOGIN} replace />;
  }

  if (user && !onboardingCompleted && location.pathname !== ROUTES.ONBOARDING) {
    return <Navigate to={ROUTES.ONBOARDING} replace />;
  }

  return <Outlet />;
};
