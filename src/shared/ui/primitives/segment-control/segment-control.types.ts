import type { IconName } from '@shared/icons';

export type SegmentControlSize = 'sm' | 'md' | 'lg';

export interface SegmentControlOption<T extends string> {
  value: T;
  icon: IconName;
  label?: string;
}

export interface SegmentControlProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: SegmentControlOption<T>[];
  size?: SegmentControlSize;
  className?: string;
  withTooltip?: boolean;
}
