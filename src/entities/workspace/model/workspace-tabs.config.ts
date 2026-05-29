import type { SegmentControlOption } from '@shared/ui';

// Workspace tabs configuration

export const WORKSPACE_TABS: SegmentControlOption<WorkspaceTab>[] = [
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
];

// Default tab

export const DEFAULT_WORKSPACE_TAB: WorkspaceTab = 'vehicles';

// Types

export type WorkspaceTab = 'vehicles' | 'members' | 'settings';
