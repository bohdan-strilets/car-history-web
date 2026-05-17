export const queryKeys = {
  auth: {
    me: () => ['auth', 'me'] as const,
  },

  workspaces: {
    all: () => ['workspaces'] as const,
    detail: (id: string) => ['workspaces', id] as const,
    members: (id: string) => ['workspaces', id, 'members'] as const,
    settings: (id: string) => ['workspaces', id, 'settings'] as const,
  },

  vehicles: {
    all: (workspaceId: string) => ['vehicles', workspaceId] as const,
    detail: (id: string) => ['vehicles', id] as const,
    timeline: (id: string) => ['vehicles', id, 'timeline'] as const,
    reminders: (id: string) => ['vehicles', id, 'reminders'] as const,
    maintenance: (id: string) => ['vehicles', id, 'maintenance'] as const,
    tires: (id: string) => ['vehicles', id, 'tires'] as const,
    stats: (id: string) => ['vehicles', id, 'stats'] as const,
    gallery: (id: string) => ['vehicles', id, 'gallery'] as const,
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
