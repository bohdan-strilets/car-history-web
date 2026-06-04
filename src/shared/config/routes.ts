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
    DETAIL: (id: string) => `/workspace/${id}`,
    MEMBERS: (id: string) => `/workspace/${id}/members`,
    SETTINGS: (id: string) => `/workspace/${id}/settings`,
    VEHICLES: {
      ROOT: (workspaceId: string) => `/workspace/${workspaceId}/vehicles`,
      NEW: (workspaceId: string) => `/workspace/${workspaceId}/vehicles/new`,
      DETAIL: (workspaceId: string, vehicleId: string) =>
        `/workspace/${workspaceId}/vehicles/${vehicleId}`,
      EDIT: (workspaceId: string, vehicleId: string) =>
        `/workspace/${workspaceId}/vehicles/${vehicleId}/edit`,
      EDIT_SPECS: (workspaceId: string, vehicleId: string) =>
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
  },

  INVITE: (token: string) => `/invite/${token}`,
} as const;
