import { useTranslation } from 'react-i18next';

import { TIMELINE_EVENT_TYPE_CONFIG } from '@entities/timeline';
import { useFormatDate, useMediaQuery } from '@shared/hooks';
import { Box, Icon, IconBox, Panel, Stack, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';

import { getEventDetailsLabel } from './event-card.utils';

import type { EventCardProps } from './event-card.types';

export const EventCard = ({ event }: EventCardProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();
  const isTabletUp = useMediaQuery('tablet', 'up');

  const config = getConfigOption(t, TIMELINE_EVENT_TYPE_CONFIG, event.type);
  const details = getEventDetailsLabel(event, t);

  return (
    <Panel
      direction={isTabletUp ? 'row' : 'column'}
      align={isTabletUp ? 'center' : 'start'}
      justify="between"
      p="2xl"
    >
      <Stack direction="row" align="start" gap="xl">
        <IconBox
          name={config?.icon ?? 'circleQuestionMark'}
          soft={config?.color ?? 'gray'}
          strokeWidth="medium"
          size={isTabletUp ? '2xl' : 'xl'}
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
              <Text weight="bold" size={isTabletUp ? 'md' : 'sm'}>
                {formatDate(event.eventDate)}
              </Text>
            </Stack>
            <Stack direction="row" align="center" gap="sm">
              <Icon name="road" size="sm" strokeWidth="medium" />
              <Text weight="bold" size={isTabletUp ? 'md' : 'sm'}>
                {event.mileage.toLocaleString()} {t('units.km')}
              </Text>
            </Stack>
            {event.serviceStation && (
              <Stack direction="row" align="center" gap="sm">
                <Icon name="mapPin" size="sm" strokeWidth="medium" />
                <Text weight="bold" size={isTabletUp ? 'md' : 'sm'}>
                  {event.serviceStation.name}
                </Text>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>

      {event.cost && (
        <Box width={isTabletUp ? 'auto' : 'full'}>
          <Text
            family="heading"
            weight="extraBold"
            size={isTabletUp ? '2xl' : 'xl'}
            align={isTabletUp ? 'center' : 'right'}
          >
            {event.cost} {t('enums.currencyShort.PLN')}
          </Text>
        </Box>
      )}
    </Panel>
  );
};
