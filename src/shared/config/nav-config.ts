import type { NavConfig } from '@shared/types';

import { ROUTES } from './routes';

export const NAV_ITEMS: NavConfig[] = [
  {
    icon: 'home',
    labelKey: 'nav.home',
    to: ROUTES.DASHBOARD,
  },
  {
    icon: 'car',
    labelKey: 'nav.garage',
    to: ROUTES.WORKSPACES.ROOT,
  },
  {
    icon: 'mapPin',
    labelKey: 'nav.stations',
    to: ROUTES.SERVICE_STATIONS.ROOT,
  },
  {
    icon: 'bot',
    labelKey: 'nav.ai',
    to: ROUTES.AI.ROOT,
  },
  {
    icon: 'slidersVertical',
    labelKey: 'nav.profile',
    to: ROUTES.PROFILE.ROOT,
  },
];
