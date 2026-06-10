import type { TimelineEventType } from '@entities/timeline';

export type EventTypeGridProps = {
  onSelect: (type: TimelineEventType) => void;
};
