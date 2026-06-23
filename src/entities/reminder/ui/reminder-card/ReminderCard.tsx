import { useTranslation } from 'react-i18next';

import { REMINDER_TYPE_CONFIG } from '@entities/reminder';
import { useFormatDate, useMediaQuery } from '@shared/hooks';
import { Badge, Icon, IconBox, Panel, Stack, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';

import {
  getDaysLeftLabel,
  getReminderUrgency,
  STATUS_COLOR,
  STATUS_ICON,
  URGENCY_COLOR,
} from './reminder-card.utils';

import type { ReminderCardProps } from './reminder-card.types';

export const ReminderCard = ({ reminder, onClick }: ReminderCardProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();
  const isTabletUp = useMediaQuery('tablet', 'up');

  const urgency = getReminderUrgency(reminder.dueDate, reminder.status);
  const daysLeft = getDaysLeftLabel(reminder.dueDate);
  const isInactive = reminder.status !== 'ACTIVE';

  const config = getConfigOption(t, REMINDER_TYPE_CONFIG, reminder.type);

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
          name={config?.icon ?? 'circleQuestionMark'}
          soft={isInactive ? 'gray' : config?.color}
          strokeWidth="medium"
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
                <Icon name="calendar" size="sm" strokeWidth="medium" />
                <Text weight="bold" size={isTabletUp ? 'md' : 'sm'}>
                  {formatDate(reminder.dueDate)}
                </Text>
              </Stack>
            )}
            {reminder.dueMileage && (
              <Stack direction="row" align="center" gap="sm">
                <Icon name="road" size="sm" strokeWidth="medium" />
                <Text weight="bold" size={isTabletUp ? 'md' : 'sm'}>
                  {reminder.dueMileage.toLocaleString()} {t('units.km')}
                </Text>
              </Stack>
            )}
            <Badge soft={URGENCY_COLOR[urgency]}>
              <Icon name="timer" size="sm" strokeWidth="medium" color="inherit" />
              <Text color="inherit">
                {daysLeft} {t('units.days', { count: parseInt(daysLeft ?? '0', 10) })}
              </Text>
            </Badge>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction="row" align="center" gap="sm">
        <Badge size="md" soft={STATUS_COLOR[reminder.status]}>
          {t(`enums.reminderStatus.${reminder.status}`)}
        </Badge>
        <Icon name={STATUS_ICON[reminder.status]} color={STATUS_COLOR[reminder.status]} />
      </Stack>
    </Panel>
  );
};
