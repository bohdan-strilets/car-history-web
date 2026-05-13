import { AuthLayout } from '@app/layouts';
import {
  ConfirmEmailPage,
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
} from '@pages/auth';
import { DashboardPage } from '@pages/dashboard';
import { ROUTES } from '@shared/config';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Navigate to={ROUTES.AUTH.LOGIN} replace />,
  },
  {
    element: <AuthLayout />,
    children: [
      { path: ROUTES.AUTH.LOGIN, element: <LoginPage /> },
      { path: ROUTES.AUTH.REGISTER, element: <RegisterPage /> },
      { path: ROUTES.AUTH.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
      { path: ROUTES.AUTH.RESET_PASSWORD, element: <ResetPasswordPage /> },
      { path: ROUTES.AUTH.CONFIRM_EMAIL, element: <ConfirmEmailPage /> },
    ],
  },
  { path: ROUTES.DASHBOARD, element: <DashboardPage /> },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
