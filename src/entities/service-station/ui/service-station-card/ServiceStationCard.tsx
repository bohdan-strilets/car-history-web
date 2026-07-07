import { useTranslation } from 'react-i18next';

import { SERVICE_STATION_TYPE_CONFIG } from '@entities/service-station';
import { Badge, Button, Heading, Icon, IconBox, Panel, Stack, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';

import * as styles from './service-station-card.css';

import type { ServiceStationCardProps } from './service-station-card.types';

export const ServiceStationCard = ({
  station,
  onClick,
  onToggleFavorite,
}: ServiceStationCardProps) => {
  const { t } = useTranslation();

  const typeConfig = getConfigOption(t, SERVICE_STATION_TYPE_CONFIG, station.type);

  return (
    <div
      className={styles.clickableWrapper}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <Panel gap="xl">
        <Stack direction="row" align="center" justify="between">
          <Badge soft={typeConfig?.color} startIcon={typeConfig?.icon}>
            {typeConfig?.label}
          </Badge>

          {onToggleFavorite && (
            <Button
              type="button"
              size="sm"
              variant="ghost"
              iconOnly
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite();
              }}
              aria-label={t('serviceStation.actions.toggleFavorite')}
            >
              <Icon name="star" size="md" color={station.isFavorite ? 'accent' : 'tertiary'} />
            </Button>
          )}
        </Stack>

        <Stack gap="md" align="center">
          <IconBox name={typeConfig?.icon ?? 'wrench'} size="2xl" soft={typeConfig?.color} />
          <Stack gap="xs" align="center">
            <Heading size="2xl">{station.name}</Heading>
            <Text size="sm" color="tertiary">
              {station.address.street} {station.address.number}, {station.address.city}
            </Text>
          </Stack>
        </Stack>

        <Stack direction="row" align="center" justify="between">
          {station.googleRating && (
            <Stack direction="row" align="center" gap="sm">
              <Icon name="star" size="sm" color="accent" />
              <Text color="tertiary" size="sm">
                {Number(station.googleRating).toFixed(1)}
              </Text>
            </Stack>
          )}

          {station.visitCount > 0 && (
            <Stack direction="row" align="center" gap="sm">
              <Icon name="mapPin" size="sm" />
              <Text color="tertiary" size="sm">
                {t('serviceStation.counts.visits', { count: station.visitCount })}
              </Text>
            </Stack>
          )}
        </Stack>
      </Panel>
    </div>
  );
};
