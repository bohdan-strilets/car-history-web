import type { VehicleMilestone } from '@entities/milestone';

import type {
  TimelineEvent,
  TimelineListEvent,
  TimelineListItem,
  TimelineListMilestone,
} from '../model';

export const mergeTimeline = (
  events: TimelineEvent[],
  milestones: VehicleMilestone[],
): TimelineListItem[] => {
  const mappedEvents: TimelineListEvent[] = events.map((event) => ({
    ...event,
    itemType: 'event',
  }));

  const mappedMilestones: TimelineListMilestone[] = milestones.map((milestone) => ({
    ...milestone,
    itemType: 'milestone',
  }));

  return [...mappedEvents, ...mappedMilestones].sort((a, b) => {
    const mileageA = a.itemType === 'event' ? a.mileage : a.mileage;
    const mileageB = b.itemType === 'event' ? b.mileage : b.mileage;
    return mileageB - mileageA;
  });
};
