import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from '@shared/config';
import { useAuth } from '@shared/store';

export const ProtectedRoute = () => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  const isOnboardingCompleted = user?.onboardingCompleted;
  const isOnboardingRoute = location.pathname === ROUTES.ONBOARDING;

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.AUTH.LOGIN} replace />;
  }

  if (user && !isOnboardingCompleted && !isOnboardingRoute) {
    return <Navigate to={ROUTES.ONBOARDING} replace />;
  }

  if (user && isOnboardingCompleted && isOnboardingRoute) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <Outlet />;
};
