import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import * as Sentry from '@sentry/react';

import { AppLayout, AuthLayout, OnboardingLayout } from '@app/layouts';
import { AiConversationPage } from '@pages/ai/conversation';
import { AiListPage } from '@pages/ai/list';
import { AiNewPage } from '@pages/ai/new';
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
import { ConfirmEmailChangePage } from '@pages/profile/confirm-email-change';
import { ProfilePage } from '@pages/profile/detail';
import { ProfileSettingsPage } from '@pages/profile/settings';
import { ServiceStationDetailPage, ServiceStationsPage } from '@pages/service-stations/detail';
import { ServiceStationEditPage } from '@pages/service-stations/edit';
import { ServiceStationNewPage } from '@pages/service-stations/new';
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
import { ErrorFallback } from '@shared/ui';

import { GuestRoute, ProtectedRoute } from './guards';

const sentryCreateBrowserRouter = Sentry.wrapCreateBrowserRouter(createBrowserRouter);

const router = sentryCreateBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Navigate to={ROUTES.AUTH.LOGIN} replace />,
    errorElement: <ErrorFallback />,
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorFallback />,
    children: [
      { path: ROUTES.AUTH.CONFIRM_EMAIL, element: <ConfirmEmailPage /> },
      { path: ROUTES.PROFILE.CONFIRM_EMAIL_CHANGE, element: <ConfirmEmailChangePage /> },
    ],
  },
  {
    element: <GuestRoute />,
    errorElement: <ErrorFallback />,
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
    errorElement: <ErrorFallback />,
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
          { path: ROUTES.SERVICE_STATIONS.ROOT, element: <ServiceStationsPage /> },
          { path: ROUTES.SERVICE_STATIONS.NEW, element: <ServiceStationNewPage /> },
          { path: ROUTES.SERVICE_STATIONS.DETAIL(':id'), element: <ServiceStationDetailPage /> },
          { path: ROUTES.SERVICE_STATIONS.EDIT(':id'), element: <ServiceStationEditPage /> },
          { path: ROUTES.AI.ROOT, element: <AiListPage /> },
          { path: ROUTES.AI.NEW, element: <AiNewPage /> },
          { path: ROUTES.AI.DETAIL(':conversationId'), element: <AiConversationPage /> },
          { path: ROUTES.PROFILE.ROOT, element: <ProfilePage /> },
          { path: ROUTES.PROFILE.SETTINGS, element: <ProfileSettingsPage /> },
        ],
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
