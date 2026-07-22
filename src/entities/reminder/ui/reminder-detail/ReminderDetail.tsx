import { useTranslation } from 'react-i18next';

import {
  getDaysLeftDisplay,
  getReminderUrgency,
  REMINDER_STATUS_CONFIG,
  REMINDER_TYPE_CONFIG,
  REMINDER_URGENCY_CONFIG,
} from '@entities/reminder';
import { useFormatDate } from '@entities/workspace';
import { Button, Heading, IconBox, InfoRow, Stack, Tooltip } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section';

import type { ReminderDetailProps } from './reminder-detail.types';

export const ReminderDetail = ({
  reminder,
  onComplete,
  onDismiss,
  onDelete,
  onEdit,
  canDelete = true,
}: ReminderDetailProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();

  const urgency = getReminderUrgency(reminder.dueDate, reminder.status);
  const isInactive = reminder.status !== 'ACTIVE';

  const urgencyConfig = getConfigOption(t, REMINDER_URGENCY_CONFIG, urgency);
  const typeConfig = getConfigOption(t, REMINDER_TYPE_CONFIG, reminder.type);
  const statusConfig = getConfigOption(t, REMINDER_STATUS_CONFIG, reminder.status);

  const daysLeftDisplay = getDaysLeftDisplay(reminder.dueDate, {
    overdue: (count) => t('reminder.status.overdue', { count }),
    today: t('reminder.status.today'),
    days: (count) => `${count} ${t('units.days', { count })}`,
  });

  return (
    <Stack gap="3xl">
      <Stack direction="row" align="center" gap="xl">
        <IconBox
          name={typeConfig?.icon ?? 'bell'}
          soft={typeConfig?.color ?? 'gray'}
          strokeWidth="medium"
          size="2xl"
        />
        <Stack gap="xs">
          <Heading size="xl">{reminder.title}</Heading>
          <Heading size="sm" color="tertiary">
            {t(`enums.reminderType.${reminder.type}`)}
          </Heading>
        </Stack>
      </Stack>

      <InfoSection title={t('reminder.list.title')}>
        <InfoRow
          label={t('fields.status')}
          icon={statusConfig?.icon ?? 'circleQuestionMark'}
          iconColor={statusConfig?.color}
          value={t(`enums.reminderStatus.${reminder.status}`)}
          bottomDivider={!!(reminder.dueDate || reminder.dueMileage || reminder.description)}
        />

        {reminder.completedAt && (
          <InfoRow
            label={t('reminder.fields.completedAt')}
            icon={statusConfig?.icon ?? 'circleQuestionMark'}
            iconColor={statusConfig?.color}
            value={formatDate(reminder.completedAt)}
            bottomDivider={!!(reminder.dueDate || reminder.dueMileage || reminder.description)}
          />
        )}

        {reminder.dueDate && (
          <>
            <InfoRow
              label={t('fields.dueDate')}
              icon="calendar"
              iconColor={urgencyConfig?.color}
              value={formatDate(reminder.dueDate)}
              bottomDivider
            />
            <InfoRow
              label={t('reminder.status.daysLeftLabel')}
              icon="timer"
              iconColor={urgencyConfig?.color}
              value={daysLeftDisplay ?? ''}
              bottomDivider={!!(reminder.dueMileage || reminder.description)}
            />
          </>
        )}
        {reminder.dueMileage != null && (
          <InfoRow
            label={t('fields.dueMileage')}
            icon="road"
            iconColor={urgencyConfig?.color}
            value={`${reminder.dueMileage.toLocaleString()} ${t('units.km')}`}
            bottomDivider={!!reminder.description}
          />
        )}
        {reminder.description && (
          <InfoRow
            label={t('fields.description')}
            icon="fileText"
            iconColor="gray"
            value={reminder.description}
          />
        )}
      </InfoSection>

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
          {t('common.actions.edit')}
        </Button>
      )}

      {!isInactive && (
        <Stack gap="md">
          {onComplete && (
            <Button
              type="button"
              leftIcon="checkCircle"
              size="md"
              variant="soft"
              color="success"
              fullWidth
              onClick={onComplete}
            >
              {t('reminder.actions.complete')}
            </Button>
          )}
          {onDismiss && (
            <Button
              type="button"
              leftIcon="xCircle"
              size="md"
              variant="soft"
              color="warning"
              fullWidth
              onClick={onDismiss}
            >
              {t('reminder.actions.dismiss')}
            </Button>
          )}
        </Stack>
      )}

      {onDelete && (
        <Tooltip
          label={t('reminder.actions.noDeletePermissions')}
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
            {t('reminder.actions.delete')}
          </Button>
        </Tooltip>
      )}
    </Stack>
  );
};
