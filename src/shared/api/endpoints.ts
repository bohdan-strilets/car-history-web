export const ENDPOINTS = {
  AUTH: {
    ME: '/auth/me',
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    GOOGLE: '/auth/google',
    GOOGLE_CALLBACK: '/auth/google/callback',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    CONFIRM_EMAIL: '/auth/confirm-email',
    RESEND_CONFIRMATION: '/auth/resend-confirmation',
  },

  USERS: {
    ME: '/users/me',
    ME_PASSWORD: '/users/me/password',
    ME_CHANGE_EMAIL: '/users/me/change-email',
    ME_SETTINGS: '/users/me/settings',
    ME_ONBOARDING: '/users/me/onboarding',
  },

  WORKSPACES: {
    LIST: '/workspaces',
    CREATE: '/workspaces',
    DETAIL: (id: string) => `/workspaces/${id}`,
    UPDATE: (id: string) => `/workspaces/${id}`,
    DELETE: (id: string) => `/workspaces/${id}`,
    LEAVE: (id: string) => `/workspaces/${id}/members/me`,
    MEMBERS: (id: string) => `/workspaces/${id}/members`,
    MEMBER: (id: string, memberId: string) => `/workspaces/${id}/members/${memberId}`,
    INVITES: (id: string) => `/workspaces/${id}/invites`,
    SETTINGS: (id: string) => `/workspaces/${id}/settings`,
    PENDING_INVITES: (id: string) => `/workspaces/${id}/invites`,
    CANCEL_INVITE: (id: string, inviteId: string) => `/workspaces/${id}/invites/${inviteId}`,
  },

  INVITES: {
    DETAIL: (token: string) => `/invites/${token}`,
    ACCEPT: (token: string) => `/invites/${token}/accept`,
    REJECT: (token: string) => `/invites/${token}/reject`,
  },

  VEHICLES: {
    LIST: (workspaceId: string) => `/workspaces/${workspaceId}/vehicles`,
    CREATE: (workspaceId: string) => `/workspaces/${workspaceId}/vehicles`,
    DETAIL: (id: string) => `/vehicles/${id}`,
    UPDATE: (id: string) => `/vehicles/${id}`,
    DELETE: (id: string) => `/vehicles/${id}`,
    STATS: (id: string) => `/vehicles/${id}/stats`,
    GALLERY: (id: string) => `/vehicles/${id}/gallery`,
    TIMELINE: (id: string) => `/vehicles/${id}/timeline`,
    REMINDERS: (id: string) => `/vehicles/${id}/reminders`,
    MAINTENANCE: (id: string) => `/vehicles/${id}/maintenance`,
    TIRES: (id: string) => `/vehicles/${id}/tires`,
  },

  TIMELINE: {
    DETAIL: (eventId: string) => `/timeline/${eventId}`,
    UPDATE: (eventId: string) => `/timeline/${eventId}`,
    DELETE: (eventId: string) => `/timeline/${eventId}`,
    REFUEL: (eventId: string) => `/timeline/${eventId}/refuel`,
    CHARGE: (eventId: string) => `/timeline/${eventId}/charge`,
    SERVICE: (eventId: string) => `/timeline/${eventId}/service`,
    DOCUMENT: (eventId: string) => `/timeline/${eventId}/document`,
    EXPENSE: (eventId: string) => `/timeline/${eventId}/expense`,
    TIRE_CHANGE: (eventId: string) => `/timeline/${eventId}/tire-change`,
    TRIP: (eventId: string) => `/timeline/${eventId}/trip`,
    PURCHASE: (eventId: string) => `/timeline/${eventId}/purchase`,
    SALE: (eventId: string) => `/timeline/${eventId}/sale`,
  },

  REMINDERS: {
    DETAIL: (id: string) => `/reminders/${id}`,
    UPDATE: (id: string) => `/reminders/${id}`,
    DELETE: (id: string) => `/reminders/${id}`,
  },

  MAINTENANCE: {
    DETAIL: (id: string) => `/maintenance/${id}`,
    UPDATE: (id: string) => `/maintenance/${id}`,
    DELETE: (id: string) => `/maintenance/${id}`,
  },

  TIRES: {
    DETAIL: (id: string) => `/tires/${id}`,
    UPDATE: (id: string) => `/tires/${id}`,
    DELETE: (id: string) => `/tires/${id}`,
  },

  SERVICE_STATIONS: {
    LIST: '/service-stations',
    CREATE: '/service-stations',
    DETAIL: (id: string) => `/service-stations/${id}`,
    UPDATE: (id: string) => `/service-stations/${id}`,
    DELETE: (id: string) => `/service-stations/${id}`,
  },

  MEDIA: {
    UPLOAD: '/media/upload',
    DETAIL: (id: string) => `/media/${id}`,
    USAGE: (id: string) => `/media/${id}/usage`,
  },

  AI: {
    CONVERSATIONS: '/ai/conversations',
    CONVERSATION: (id: string) => `/ai/conversations/${id}`,
    MESSAGES: (id: string) => `/ai/conversations/${id}/messages`,
  },

  DASHBOARD: '/dashboard',
} as const;
