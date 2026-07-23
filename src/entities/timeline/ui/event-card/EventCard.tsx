import { useTranslation } from 'react-i18next';

import { TIMELINE_EVENT_TYPE_CONFIG } from '@entities/timeline';
import { useFormatDate } from '@entities/workspace';
import { useMediaQuery } from '@shared/hooks';
import { Box, Icon, IconBox, Panel, Stack, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';

import { getEventDetailsLabel } from './event-card.utils';

import type { EventCardProps } from './event-card.types';

export const EventCard = ({ event, onClick }: EventCardProps) => {
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
      onClick={onClick}
      hoverable={!!onClick}
    >
      <Stack direction="row" align="start" gap="xl">
        <IconBox
          name={config?.icon ?? 'circleQuestionMark'}
          soft={config?.color ?? 'gray'}
          weight="bold"
          size={isTabletUp ? '2xl' : 'xl'}
        />
        <Stack gap="md">
          <Stack gap="none" align="start">
            <Text weight="bold" size="xl" align="left">
              {config?.label}
            </Text>
            <Text color="tertiary" size="sm" align="left">
              {event.title}
            </Text>
            {event.description && (
              <Text color="tertiary" size="sm" align="left">
                {event.description}
              </Text>
            )}
          </Stack>

          {details && (
            <Text size="md" align="left">
              {details}
            </Text>
          )}

          <Stack direction="row" align="center" gap="2xl">
            <Stack direction="row" align="center" gap="sm">
              <Icon name="calendar" size="sm" weight="bold" />
              <Text weight="bold" size={isTabletUp ? 'md' : 'sm'}>
                {formatDate(event.eventDate)}
              </Text>
            </Stack>
            <Stack direction="row" align="center" gap="sm">
              <Icon name="road" size="sm" weight="bold" />
              <Text weight="bold" size={isTabletUp ? 'md' : 'sm'}>
                {event.mileage.toLocaleString()} {t('units.km')}
              </Text>
            </Stack>
            {event.serviceStation && (
              <Stack direction="row" align="center" gap="sm">
                <Icon name="mapPin" size="sm" weight="bold" />
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
