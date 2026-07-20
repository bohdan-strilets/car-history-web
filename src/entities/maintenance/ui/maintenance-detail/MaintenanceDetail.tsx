import { useTranslation } from 'react-i18next';

import {
  getMaintenanceUrgency,
  MAINTENANCE_TYPE_CONFIG,
  MAINTENANCE_URGENCY_CONFIG,
} from '@entities/maintenance';
import { useFormatDate } from '@shared/hooks';
import { Button, Heading, IconBox, InfoRow, Stack, Tooltip } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section';

import type { MaintenanceDetailProps } from './maintenance-detail.types';

export const MaintenanceDetail = ({
  interval,
  currentMileage,
  onMarkDone,
  onEdit,
  onDisable,
  onEnable,
  onDelete,
  canDelete = true,
}: MaintenanceDetailProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();

  const urgency = getMaintenanceUrgency(interval, currentMileage);

  const typeConfig = getConfigOption(t, MAINTENANCE_TYPE_CONFIG, interval.type);
  const urgencyConfig = getConfigOption(t, MAINTENANCE_URGENCY_CONFIG, urgency);

  const isDisabled = interval.status === 'DISABLED';

  return (
    <Stack gap="3xl">
      <Stack direction="row" align="center" gap="xl">
        <IconBox
          name={typeConfig?.icon ?? 'wrench'}
          soft={typeConfig?.color ?? 'gray'}
          strokeWidth="medium"
          size="2xl"
        />
        <Stack gap="xs">
          <Heading size="xl">{interval.title}</Heading>
          <Heading size="sm" color="tertiary">
            {t(`enums.maintenanceType.${interval.type}`)}
          </Heading>
        </Stack>
      </Stack>

      <InfoSection title={t('maintenance.list.title')}>
        <InfoRow
          label={t('fields.status')}
          icon="activity"
          iconColor={isDisabled ? 'gray' : (urgencyConfig?.color ?? 'gray')}
          value={isDisabled ? t('maintenance.status.disabled') : urgencyConfig?.label}
          bottomDivider={
            !!(
              interval.nextServiceMileage ||
              interval.nextServiceDate ||
              interval.lastServiceMileage ||
              interval.lastServiceDate ||
              interval.intervalKm ||
              interval.intervalMonths
            )
          }
        />
        {interval.nextServiceMileage != null && (
          <InfoRow
            label={t('maintenance.fields.nextServiceMileage')}
            icon="road"
            iconColor="blue"
            value={`${interval.nextServiceMileage.toLocaleString()} ${t('units.km')}`}
            bottomDivider={
              !!(
                interval.nextServiceDate ||
                interval.lastServiceMileage ||
                interval.lastServiceDate ||
                interval.intervalKm ||
                interval.intervalMonths
              )
            }
          />
        )}
        {interval.nextServiceDate && (
          <InfoRow
            label={t('maintenance.fields.nextServiceDate')}
            icon="calendar"
            iconColor="blue"
            value={formatDate(interval.nextServiceDate)}
            bottomDivider={
              !!(
                interval.lastServiceMileage ||
                interval.lastServiceDate ||
                interval.intervalKm ||
                interval.intervalMonths
              )
            }
          />
        )}
        {interval.lastServiceMileage != null && (
          <InfoRow
            label={t('maintenance.fields.lastServiceMileage')}
            icon="list"
            iconColor="blue"
            value={`${interval.lastServiceMileage.toLocaleString()} ${t('units.km')}`}
            bottomDivider={
              !!(interval.lastServiceDate || interval.intervalKm || interval.intervalMonths)
            }
          />
        )}
        {interval.lastServiceDate && (
          <InfoRow
            label={t('maintenance.fields.lastServiceDate')}
            icon="calendarCheck"
            iconColor="blue"
            value={formatDate(interval.lastServiceDate)}
            bottomDivider={!!(interval.intervalKm || interval.intervalMonths)}
          />
        )}
        {interval.intervalKm != null && (
          <InfoRow
            label={t('maintenance.fields.intervalKm')}
            icon="gauge"
            iconColor="blue"
            value={`${interval.intervalKm.toLocaleString()} ${t('units.km')}`}
            bottomDivider={!!interval.intervalMonths}
          />
        )}
        {interval.intervalMonths != null && (
          <InfoRow
            label={t('maintenance.fields.intervalMonths')}
            icon="calendarClock"
            iconColor="blue"
            value={`${interval.intervalMonths.toLocaleString()} ${t('units.months', { count: interval.intervalMonths })}`}
          />
        )}
      </InfoSection>

      {!isDisabled && (
        <Stack gap="md">
          {onMarkDone && (
            <Button
              type="button"
              leftIcon="checkCircle"
              size="md"
              variant="soft"
              color="green"
              fullWidth
              onClick={onMarkDone}
            >
              {t('maintenance.actions.markDone')}
            </Button>
          )}
          {onEdit && (
            <Button
              type="button"
              leftIcon="edit"
              size="md"
              variant="soft"
              color="gray"
              fullWidth
              onClick={onEdit}
            >
              {t('maintenance.actions.edit')}
            </Button>
          )}
          {onDisable && (
            <Button
              type="button"
              leftIcon="pauseCircle"
              size="md"
              variant="soft"
              color="warning"
              fullWidth
              onClick={onDisable}
            >
              {t('maintenance.actions.disable')}
            </Button>
          )}
        </Stack>
      )}

      {isDisabled && onEnable && (
        <Button
          type="button"
          leftIcon="playCircle"
          size="md"
          variant="soft"
          color="green"
          fullWidth
          onClick={onEnable}
        >
          {t('maintenance.actions.enable')}
        </Button>
      )}

      {onDelete && (
        <Tooltip
          label={t('maintenance.actions.noDeletePermissions')}
          placement="top"
          disabled={canDelete}
        >
          <Button
            type="button"
            leftIcon="trash"
            size="sm"
            variant="soft"
            color="danger"
            onClick={onDelete}
            disabled={!canDelete}
            fullWidth
          >
            {t('maintenance.actions.delete')}
          </Button>
        </Tooltip>
      )}
    </Stack>
  );
};
