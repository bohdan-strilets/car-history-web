import { AuthLayout } from '@app/layouts';
import {
  ConfirmEmailPage,
  ForgotPasswordPage,
  GoogleCallbackPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
} from '@pages/auth';
import { DashboardPage } from '@pages/dashboard';
import { ROUTES } from '@shared/config';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { GuestRoute, ProtectedRoute } from './guards';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Navigate to={ROUTES.AUTH.LOGIN} replace />,
  },
  {
    element: <GuestRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: ROUTES.AUTH.LOGIN, element: <LoginPage /> },
          { path: ROUTES.AUTH.REGISTER, element: <RegisterPage /> },
          { path: ROUTES.AUTH.GOOGLE_CALLBACK, element: <GoogleCallbackPage /> },
          { path: ROUTES.AUTH.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
          { path: ROUTES.AUTH.RESET_PASSWORD, element: <ResetPasswordPage /> },
          { path: ROUTES.AUTH.CONFIRM_EMAIL, element: <ConfirmEmailPage /> },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [{ path: ROUTES.DASHBOARD, element: <DashboardPage /> }],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
