import type { TimelineEvent, TimelineListItem } from '@entities/timeline';

export type EventListProps = {
  items: TimelineListItem[];
  onEventClick?: (event: TimelineEvent) => void;
};
