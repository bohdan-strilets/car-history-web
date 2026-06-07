import type { SegmentControlOption } from '@shared/ui';

export const VEHICLE_TABS = [
  {
    label: 'vehicle.detail.tabs.overview',
    icon: 'carFront',
    value: 'overview',
  },
  {
    label: 'vehicle.detail.tabs.timeline',
    icon: 'clock',
    value: 'timeline',
  },
  {
    label: 'vehicle.detail.tabs.reminders',
    icon: 'bell',
    value: 'reminders',
  },
  {
    label: 'vehicle.detail.tabs.maintenance',
    icon: 'wrench',
    value: 'maintenance',
  },
  {
    label: 'vehicle.detail.tabs.stats',
    icon: 'barChart',
    value: 'stats',
  },
  {
    label: 'vehicle.detail.tabs.gallery',
    icon: 'image',
    value: 'gallery',
  },
  {
    label: 'vehicle.detail.tabs.tires',
    icon: 'circle',
    value: 'tires',
  },
] as const satisfies SegmentControlOption<string>[];

export type VehicleTab = (typeof VEHICLE_TABS)[number]['value'];

export const DEFAULT_VEHICLE_TAB: VehicleTab = 'overview';
