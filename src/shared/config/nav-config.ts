import type { NavConfig } from '@shared/types';

import { ROUTES } from './routes';

export const NAV_ITEMS: NavConfig[] = [
  {
    icon: 'home',
    labelKey: 'nav.items.home',
    to: ROUTES.DASHBOARD,
  },
  {
    icon: 'car',
    labelKey: 'nav.items.garage',
    to: ROUTES.WORKSPACES.ROOT,
  },
  {
    icon: 'mapPin',
    labelKey: 'nav.items.stations',
    to: ROUTES.SERVICE_STATIONS.ROOT,
  },
  {
    icon: 'bot',
    labelKey: 'nav.items.ai',
    to: ROUTES.AI.ROOT,
  },
  {
    icon: 'settings',
    labelKey: 'nav.items.profile',
    to: ROUTES.PROFILE.ROOT,
  },
];
