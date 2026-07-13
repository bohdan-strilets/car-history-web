import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

export const ROUTES = {
  ROOT: '/',

  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    GOOGLE_CALLBACK: '/auth/google/callback',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    CONFIRM_EMAIL: '/auth/confirm-email',
  },

  DASHBOARD: '/dashboard',
  ONBOARDING: '/onboarding',

  WORKSPACES: {
    ROOT: '/workspaces',
    NEW: '/workspaces/new',
    DETAIL: (workspaceId: WorkspaceId) => `/workspace/${workspaceId}`,
    MEMBERS: (workspaceId: WorkspaceId) => `/workspace/${workspaceId}/members`,
    SETTINGS: (workspaceId: WorkspaceId) => `/workspace/${workspaceId}/settings`,
    VEHICLES: {
      ROOT: (workspaceId: WorkspaceId) => `/workspace/${workspaceId}/vehicles`,
      NEW: (workspaceId: WorkspaceId) => `/workspace/${workspaceId}/vehicles/new`,
      DETAIL: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
        `/workspace/${workspaceId}/vehicles/${vehicleId}`,
      EDIT: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
        `/workspace/${workspaceId}/vehicles/${vehicleId}/edit`,
      EDIT_SPECS: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
        `/workspace/${workspaceId}/vehicles/${vehicleId}/specs/edit`,
    },
  },

  SERVICE_STATIONS: {
    ROOT: '/service-stations',
    NEW: '/service-stations/new',
    DETAIL: (id: string) => `/service-stations/${id}`,
    EDIT: (id: string) => `/service-stations/${id}/edit`,
  },

  AI: {
    ROOT: '/ai',
    NEW: '/ai/new',
    DETAIL: (id: string) => `/ai/${id}`,
  },

  PROFILE: {
    ROOT: '/profile',
    SETTINGS: '/profile/settings',
    CONFIRM_EMAIL_CHANGE: '/profile/confirm-email-change',
  },

  INVITE: (token: string) => `/invite/${token}`,
} as const;
