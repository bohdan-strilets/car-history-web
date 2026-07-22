import { useTranslation } from 'react-i18next';

import {
  getMaintenanceUrgency,
  MAINTENANCE_TYPE_CONFIG,
  MAINTENANCE_URGENCY_CONFIG,
} from '@entities/maintenance';
import { useFormatDate } from '@entities/workspace';
import { useMediaQuery } from '@shared/hooks';
import { Badge, Button, Icon, IconBox, Panel, Stack, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';

import type { MaintenanceCardProps } from './maintenance-card.types';

export const MaintenanceCard = ({
  interval,
  currentMileage,
  onMarkDone,
  onClick,
}: MaintenanceCardProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();
  const isTabletUp = useMediaQuery('tablet', 'up');

  const urgency = getMaintenanceUrgency(interval, currentMileage);
  const isInactive = interval.status === 'DISABLED';

  const typeConfig = getConfigOption(t, MAINTENANCE_TYPE_CONFIG, interval.type);
  const urgencyConfig = getConfigOption(t, MAINTENANCE_URGENCY_CONFIG, urgency);

  return (
    <Panel
      direction={isTabletUp ? 'row' : 'column'}
      align={isTabletUp ? 'center' : 'start'}
      justify="between"
      p="2xl"
      onClick={onClick}
      hoverable={!!onClick}
      style={{ opacity: isInactive ? 0.6 : 1 }}
    >
      <Stack direction="row" align="start" gap="xl">
        <IconBox
          name={typeConfig?.icon ?? 'wrench'}
          soft={isInactive ? 'gray' : (typeConfig?.color ?? 'gray')}
          strokeWidth="medium"
          size={isTabletUp ? '2xl' : 'xl'}
        />
        <Stack gap="md">
          <Stack gap="xs">
            <Text weight="bold" size="lg" align="left">
              {interval.title}
            </Text>
            <Text color="tertiary" size="sm" align="left">
              {t(`enums.maintenanceType.${interval.type}`)}
            </Text>
          </Stack>

          <Stack direction="row" align="center" gap="xl">
            {interval.nextServiceMileage != null && (
              <Stack direction="row" align="center" gap="sm">
                <Icon name="road" size="sm" strokeWidth="medium" />
                <Text weight="bold" size={isTabletUp ? 'md' : 'sm'}>
                  {interval.nextServiceMileage.toLocaleString()} {t('units.km')}
                </Text>
              </Stack>
            )}
            {interval.nextServiceDate && (
              <Stack direction="row" align="center" gap="sm">
                <Icon name="calendar" size="sm" strokeWidth="medium" />
                <Text weight="bold" size={isTabletUp ? 'md' : 'sm'}>
                  {formatDate(interval.nextServiceDate)}
                </Text>
              </Stack>
            )}
            {interval.lastServiceMileage != null && (
              <Stack direction="row" align="center" gap="sm">
                <Icon name="list" size="sm" strokeWidth="medium" />
                <Text color="tertiary" size="sm">
                  {interval.lastServiceMileage.toLocaleString()} {t('units.km')}
                </Text>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>

      <Stack direction={isTabletUp ? 'row' : 'column'} align="center" gap="md">
        {!isInactive ? (
          <Badge soft={urgencyConfig?.color ?? 'gray'} size="sm">
            {urgencyConfig?.label}
          </Badge>
        ) : (
          <Badge soft="gray" size="sm">
            {t('maintenance.status.disabled')}
          </Badge>
        )}

        {onMarkDone && (
          <Button
            type="button"
            size="sm"
            variant="soft"
            color="success"
            leftIcon="checkCircle"
            onClick={(e) => {
              e.stopPropagation();
              onMarkDone();
            }}
          >
            {t('maintenance.actions.markDone')}
          </Button>
        )}
      </Stack>
    </Panel>
  );
};
