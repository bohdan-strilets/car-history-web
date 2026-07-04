import type { MediaCategory } from '@entities/media';
import type { StatsPeriod } from '@entities/stats';
import type { EventId, TimelineQuery } from '@entities/timeline';
import type { VehicleId } from '@entities/vehicle';
import type { InviteToken, WorkspaceId } from '@entities/workspace';

export const queryKeys = {
  auth: {
    me: () => ['auth', 'me'] as const,
  },

  workspaces: {
    all: () => ['workspaces'] as const,
    detail: (workspaceId: WorkspaceId) => ['workspaces', workspaceId] as const,
    members: (workspaceId: WorkspaceId) => ['workspaces', workspaceId, 'members'] as const,
    invites: (workspaceId: WorkspaceId) => ['workspaces', workspaceId, 'invites'] as const,
    settings: (workspaceId: WorkspaceId) => ['workspaces', workspaceId, 'settings'] as const,
  },

  invites: {
    detail: (token: InviteToken) => ['invites', token] as const,
  },

  vehicles: {
    all: (workspaceId: WorkspaceId) => ['vehicles', workspaceId] as const,
    detail: (vehicleId: VehicleId) => ['vehicles', vehicleId] as const,
    timeline: (vehicleId: VehicleId, query?: TimelineQuery) =>
      ['vehicles', vehicleId, 'timeline', query ?? {}] as const,
    timelineRoot: (vehicleId: VehicleId) => ['vehicles', vehicleId, 'timeline'] as const,
    timelineEvent: (vehicleId: VehicleId, eventId: EventId) =>
      ['vehicles', vehicleId, 'timeline', eventId] as const,
    reminders: (vehicleId: VehicleId) => ['vehicles', vehicleId, 'reminders'] as const,
    maintenance: (vehicleId: VehicleId) => ['vehicles', vehicleId, 'maintenance'] as const,
    tires: (vehicleId: VehicleId) => ['vehicles', vehicleId, 'tires'] as const,
    stats: (vehicleId: VehicleId, period: StatsPeriod, date?: string) =>
      ['vehicles', vehicleId, 'stats', period, date ?? null] as const,
    gallery: (vehicleId: VehicleId, category?: MediaCategory) =>
      ['vehicles', vehicleId, 'gallery', category ?? null] as const,
    milestones: (vehicleId: VehicleId) => ['vehicles', vehicleId, 'milestones'] as const,
  },

  serviceStations: {
    all: () => ['service-stations'] as const,
    detail: (id: string) => ['service-stations', id] as const,
  },

  ai: {
    conversations: () => ['ai', 'conversations'] as const,
    conversation: (id: string) => ['ai', 'conversations', id] as const,
  },
} as const;
