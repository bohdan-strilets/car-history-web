import type { TimelineEventType } from '@entities/timeline';

export type TimelineFilterProps = {
  value: TimelineEventType[];
  onChange: (value: TimelineEventType[]) => void;
};
