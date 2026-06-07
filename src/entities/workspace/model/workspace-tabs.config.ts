import type { SegmentControlOption } from '@shared/ui';

export const WORKSPACE_TABS = [
  {
    label: 'workspace.detail.vehicles',
    icon: 'car',
    value: 'vehicles',
  },
  {
    label: 'workspace.detail.members',
    icon: 'users',
    value: 'members',
  },
  {
    label: 'workspace.detail.settings',
    icon: 'settings',
    value: 'settings',
  },
] as const satisfies SegmentControlOption<string>[];

export type WorkspaceTab = (typeof WORKSPACE_TABS)[number]['value'];

export const DEFAULT_WORKSPACE_TAB: WorkspaceTab = 'vehicles';
