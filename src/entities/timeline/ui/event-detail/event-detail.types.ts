import type { TimelineEvent } from '@entities/timeline';

export interface EventDetailProps {
  event: TimelineEvent;
  onEdit?: () => void;
  onDelete?: () => void;
}
