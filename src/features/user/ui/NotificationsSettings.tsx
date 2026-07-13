import { useTranslation } from 'react-i18next';

import type { UserSettingsSummary } from '@entities/user';
import { Checkbox, Stack } from '@shared/ui';
import { InfoSection } from '@widgets/info-section';

import { useUpdateUserSettingsMutation } from '../api';

interface NotificationsSettingsProps {
  settings: UserSettingsSummary;
}

export const NotificationsSettings = ({ settings }: NotificationsSettingsProps) => {
  const { t } = useTranslation();
  const { mutate: updateSettings } = useUpdateUserSettingsMutation();

  return (
    <InfoSection title={t('user.settings.notifications.title')}>
      <Stack gap="md">
        <Checkbox
          checked={settings.notificationsEmail}
          onChange={(e) => updateSettings({ notificationsEmail: e.target.checked })}
          label={t('user.settings.notifications.email')}
        />
        <Checkbox
          checked={settings.notificationsPush}
          onChange={(e) => updateSettings({ notificationsPush: e.target.checked })}
          label={t('user.settings.notifications.push')}
        />
      </Stack>
    </InfoSection>
  );
};
