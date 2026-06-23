import { useTranslation } from 'react-i18next';

import { Stack, Text } from '@shared/ui';

import { ReminderCard } from '../reminder-card';

import type { ReminderListProps } from './reminder-list.types';

export const ReminderList = ({ reminders, onReminderClick }: ReminderListProps) => {
  const { t } = useTranslation();

  const active = reminders.filter((r) => r.status === 'ACTIVE');
  const archived = reminders.filter((r) => r.status !== 'ACTIVE');

  return (
    <Stack gap="3xl">
      {active.length > 0 && (
        <Stack gap="xl">
          {active.map((reminder) => (
            <ReminderCard
              key={reminder.id}
              reminder={reminder}
              onClick={onReminderClick ? () => onReminderClick(reminder) : undefined}
            />
          ))}
        </Stack>
      )}

      {archived.length > 0 && (
        <Stack gap="xl">
          <Text color="tertiary" size="sm" weight="semibold">
            {t('reminder.list.archive')}
          </Text>
          <Stack gap="xl">
            {archived.map((reminder) => (
              <ReminderCard
                key={reminder.id}
                reminder={reminder}
                onClick={onReminderClick ? () => onReminderClick(reminder) : undefined}
              />
            ))}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
