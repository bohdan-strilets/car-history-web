import { MilestonesCard } from '@entities/milestone';
import { Stack } from '@shared/ui';

import { EventCard } from '../event-card';

import type { EventListProps } from './event-list.types';

export const EventList = ({ items, onEventClick }: EventListProps) => {
  return (
    <Stack gap="3xl">
      {items.map((item) => {
        if (item.itemType === 'milestone') {
          return <MilestonesCard key={item.id} milestone={item} />;
        }

        return (
          <EventCard
            key={item.id}
            event={item}
            onClick={onEventClick ? () => onEventClick(item) : undefined}
          />
        );
      })}
    </Stack>
  );
};
