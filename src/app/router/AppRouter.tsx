import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { AppLayout, AuthLayout, OnboardingLayout } from '@app/layouts';
import {
  ConfirmEmailPage,
  ForgotPasswordPage,
  GoogleCallbackPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
} from '@pages/auth';
import { DashboardPage } from '@pages/dashboard';
import { OnboardingPage } from '@pages/onboarding';
import {
  NewVehiclePage,
  VehicleDetailPage,
  VehicleEditPage,
  VehicleEditSpecsPage,
} from '@pages/vehicles';
import {
  InvitePage,
  NewWorkspacePage,
  WorkspaceDetailPage,
  WorkspacesPage,
} from '@pages/workspaces';
import { ROUTES } from '@shared/config';

import { GuestRoute, ProtectedRoute } from './guards';

const router = createBrowserRouter([
  { path: ROUTES.ROOT, element: <Navigate to={ROUTES.AUTH.LOGIN} replace /> },

  {
    element: <AuthLayout />,
    children: [{ path: ROUTES.AUTH.CONFIRM_EMAIL, element: <ConfirmEmailPage /> }],
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
        ],
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <OnboardingLayout />,
        children: [{ path: ROUTES.ONBOARDING, element: <OnboardingPage /> }],
      },
      {
        element: <AppLayout />,
        children: [
          { path: ROUTES.DASHBOARD, element: <DashboardPage /> },
          { path: ROUTES.WORKSPACES.ROOT, element: <WorkspacesPage /> },
          { path: ROUTES.WORKSPACES.NEW, element: <NewWorkspacePage /> },
          { path: ROUTES.WORKSPACES.DETAIL(':workspaceId'), element: <WorkspaceDetailPage /> },
          { path: ROUTES.INVITE(':token'), element: <InvitePage /> },
          { path: ROUTES.WORKSPACES.VEHICLES.NEW(':workspaceId'), element: <NewVehiclePage /> },
          {
            path: ROUTES.WORKSPACES.VEHICLES.EDIT(':workspaceId', ':vehicleId'),
            element: <VehicleEditPage />,
          },
          {
            path: ROUTES.WORKSPACES.VEHICLES.EDIT_SPECS(':workspaceId', ':vehicleId'),
            element: <VehicleEditSpecsPage />,
          },
          {
            path: ROUTES.WORKSPACES.VEHICLES.DETAIL(':workspaceId', ':vehicleId'),
            element: <VehicleDetailPage />,
          },
          {
            path: ROUTES.WORKSPACES.VEHICLES.DETAIL(':workspaceId', ':vehicleId'),
            element: <div>Vehicle Detail</div>,
          },
          { path: ROUTES.SERVICE_STATIONS.ROOT, element: <div>Service Stations</div> },
          { path: ROUTES.AI.ROOT, element: <div>AI</div> },
          { path: ROUTES.PROFILE.ROOT, element: <div>Profile</div> },
        ],
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
