import type { SegmentControlOption } from '@shared/ui/primitives';

export interface TabsProps<T extends string> {
  tabs: SegmentControlOption<T>[];
  activeTab: T;
  onChange: (id: T) => void;
  className?: string;
}
