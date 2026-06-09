import type { EventId } from '@entities/timeline';
import type { VehicleId } from '@entities/vehicle';
import type { InviteId, InviteToken, WorkspaceId } from '@entities/workspace';

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
    DETAIL: (workspaceId: WorkspaceId) => `/workspaces/${workspaceId}`,
    UPDATE: (workspaceId: WorkspaceId) => `/workspaces/${workspaceId}`,
    DELETE: (workspaceId: WorkspaceId) => `/workspaces/${workspaceId}`,
    LEAVE: (workspaceId: WorkspaceId) => `/workspaces/${workspaceId}/members/me`,
    MEMBERS: (workspaceId: WorkspaceId) => `/workspaces/${workspaceId}/members`,
    MEMBER: (workspaceId: WorkspaceId, memberId: string) =>
      `/workspaces/${workspaceId}/members/${memberId}`,
    INVITES: (workspaceId: WorkspaceId) => `/workspaces/${workspaceId}/invites`,
    SETTINGS: (workspaceId: WorkspaceId) => `/workspaces/${workspaceId}/settings`,
    PENDING_INVITES: (workspaceId: WorkspaceId) => `/workspaces/${workspaceId}/invites`,
    CANCEL_INVITE: (workspaceId: WorkspaceId, inviteId: InviteId) =>
      `/workspaces/${workspaceId}/invites/${inviteId}`,
  },

  INVITES: {
    DETAIL: (token: InviteToken) => `/invites/${token}`,
    ACCEPT: (token: InviteToken) => `/invites/${token}/accept`,
    REJECT: (token: InviteToken) => `/invites/${token}/reject`,
  },

  VEHICLES: {
    LIST: (workspaceId: WorkspaceId) => `/workspaces/${workspaceId}/vehicles`,
    CREATE: (workspaceId: WorkspaceId) => `/workspaces/${workspaceId}/vehicles`,
    DETAIL: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}`,
    UPDATE: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}`,
    DELETE: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}`,
    STATS: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/stats`,
    GALLERY: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/gallery`,
    TIMELINE: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/timeline`,
    REMINDERS: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/reminders`,
    MAINTENANCE: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/maintenance`,
    TIRES: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/tires`,
    FILL_SPECS_AI: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/specs/ai`,
    UPDATE_SPECS: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/specs`,
  },

  TIMELINE: {
    LIST: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/timeline`,
    CREATE: (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/timeline`,
    DETAIL: (workspaceId: WorkspaceId, vehicleId: VehicleId, eventId: EventId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/timeline/${eventId}`,
    UPDATE: (workspaceId: WorkspaceId, vehicleId: VehicleId, eventId: EventId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/timeline/${eventId}`,
    DELETE: (workspaceId: WorkspaceId, vehicleId: VehicleId, eventId: EventId) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/timeline/${eventId}`,
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
