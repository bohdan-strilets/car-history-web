import { useTranslation } from 'react-i18next';

import { TIMELINE_EVENT_TYPE_CONFIG } from '@entities/timeline';
import { useFormatDate } from '@shared/hooks';
import { Icon, IconBox, Panel, Stack, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';

import { getEventDetailsLabel } from './event-card.utils';

import type { EventCardProps } from './event-card.types';

export const EventCard = ({ event }: EventCardProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();

  const config = getConfigOption(t, TIMELINE_EVENT_TYPE_CONFIG, event.type);
  const details = getEventDetailsLabel(event, t);

  return (
    <Panel direction="row" align="center" justify="between" p="2xl">
      <Stack direction="row" align="start" gap="xl">
        <IconBox
          name={config?.icon ?? 'circleQuestionMark'}
          soft={config?.color ?? 'gray'}
          strokeWidth="medium"
          size="2xl"
        />
        <Stack gap="md">
          <Stack gap="none">
            <Text weight="bold" size="xl">
              {config?.label}
            </Text>
            <Text color="tertiary" size="sm">
              {event.title}
            </Text>
            {event.description && (
              <Text color="tertiary" size="sm">
                {event.description}
              </Text>
            )}
          </Stack>

          {details && <Text size="md">{details}</Text>}

          <Stack direction="row" align="center" gap="2xl">
            <Stack direction="row" align="center" gap="sm">
              <Icon name="calendar" size="sm" strokeWidth="medium" />
              <Text weight="bold">{formatDate(event.eventDate)}</Text>
            </Stack>
            <Stack direction="row" align="center" gap="sm">
              <Icon name="road" size="sm" strokeWidth="medium" />
              <Text weight="bold">
                {event.mileage.toLocaleString()} {t('units.km')}
              </Text>
            </Stack>
            {event.serviceStation && (
              <Stack direction="row" align="center" gap="sm">
                <Icon name="mapPin" size="sm" strokeWidth="medium" />
                <Text weight="bold">{event.serviceStation.name}</Text>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>

      {event.cost && (
        <Stack align="end" gap="xs">
          <Text weight="extraBold" size="2xl" family="heading">
            {event.cost} {t('enums.currencyShort.PLN')}
          </Text>
        </Stack>
      )}
    </Panel>
  );
};
