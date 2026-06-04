import type { IconName } from '@shared/icons';

export interface VehicleEmptySectionProps {
  icon: IconName;
  title: string;
  description: string;
  actionLabel: string;
  onAction?: () => void;
}
