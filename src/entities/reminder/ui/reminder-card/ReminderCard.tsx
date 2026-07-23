import { useTranslation } from 'react-i18next';

import {
  getDaysLeftDisplay,
  getReminderUrgency,
  REMINDER_STATUS_CONFIG,
  REMINDER_TYPE_CONFIG,
  REMINDER_URGENCY_CONFIG,
} from '@entities/reminder';
import { useFormatDate } from '@entities/workspace';
import { useMediaQuery } from '@shared/hooks';
import { Badge, Icon, IconBox, Panel, Stack, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';

import type { ReminderCardProps } from './reminder-card.types';

export const ReminderCard = ({ reminder, onClick }: ReminderCardProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();
  const isTabletUp = useMediaQuery('tablet', 'up');

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
    <Panel
      direction={isTabletUp ? 'row' : 'column'}
      align="start"
      justify="between"
      p="2xl"
      onClick={onClick}
      hoverable={!!onClick}
    >
      <Stack direction="row" align="start" gap="xl">
        <IconBox
          name={typeConfig?.icon ?? 'circleQuestionMark'}
          soft={isInactive ? 'gray' : typeConfig?.color}
          weight="bold"
          size={isTabletUp ? '2xl' : 'xl'}
        />
        <Stack gap="md">
          <Text weight="bold" size="lg" align="left">
            {reminder.title}
          </Text>
          <Text color="tertiary" size="sm" align="left">
            {reminder.description}
          </Text>

          <Stack direction="row" align="center" gap="2xl">
            {reminder.dueDate && (
              <Stack direction="row" align="center" gap="sm">
                <Icon name="calendar" size="sm" weight="bold" />
                <Text weight="bold" size={isTabletUp ? 'md' : 'sm'}>
                  {formatDate(reminder.dueDate)}
                </Text>
              </Stack>
            )}
            {reminder.dueMileage && (
              <Stack direction="row" align="center" gap="sm">
                <Icon name="road" size="sm" weight="bold" />
                <Text weight="bold" size={isTabletUp ? 'md' : 'sm'}>
                  {reminder.dueMileage.toLocaleString()} {t('units.km')}
                </Text>
              </Stack>
            )}
            <Badge soft={urgencyConfig?.color}>
              <Icon name="timer" size="sm" weight="bold" color="inherit" />
              <Text color="inherit">{daysLeftDisplay}</Text>
            </Badge>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction="row" align="center" gap="sm">
        <Badge size="md" soft={statusConfig?.color}>
          {t(`enums.reminderStatus.${reminder.status}`)}
        </Badge>
        <Icon name={statusConfig?.icon ?? 'circleQuestionMark'} color={statusConfig?.color} />
      </Stack>
    </Panel>
  );
};
