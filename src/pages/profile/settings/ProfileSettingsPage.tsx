import { useTranslation } from 'react-i18next';

import { SessionsList, SessionsListSkeleton, useSessionsQuery } from '@entities/session';
import type { Language, Theme } from '@entities/user';
import { LANGUAGE_CONFIG, THEME_CONFIG, useMeQuery } from '@entities/user';
import { useRevokeAllSessions, useRevokeSession } from '@features/session';
import { NotificationsSettings, useUpdateUserSettingsMutation } from '@features/user';
import { useLanguage } from '@shared/i18n';
import { useAdaptiveModal } from '@shared/lib/modal';
import { useTheme } from '@shared/styles/model';
import { Button, CardSelect, InfoRow, Stack, Text } from '@shared/ui';
import { getConfigOption, translateCardSelectOptions } from '@shared/utils';
import { InfoSection } from '@widgets/info-section';
import { PageHeader } from '@widgets/page-header';

export const ProfileSettingsPage = () => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();

  const { data } = useMeQuery();
  const settings = data?.data.settings;

  const { setLanguage } = useLanguage();
  const { setTheme } = useTheme();
  const { mutate: updateSettings } = useUpdateUserSettingsMutation();

  const { data: sessionsData, isLoading: isSessionsLoading } = useSessionsQuery();
  const sessions = sessionsData?.data ?? [];
  const { handleRevokeSession } = useRevokeSession();
  const { handleRevokeAllSessions } = useRevokeAllSessions();
  const hasOtherSessions = sessions.some((session) => !session.isCurrent);

  if (!settings) return null;

  const languageConfig = getConfigOption(t, LANGUAGE_CONFIG, settings.language);
  const themeConfig = getConfigOption(t, THEME_CONFIG, settings.theme);

  const handleLanguage = () => {
    modal.open(
      <CardSelect
        options={translateCardSelectOptions(t, LANGUAGE_CONFIG)}
        value={[settings.language]}
        onChange={(values) => {
          const language = values[0] as Language;
          if (!language) return;
          setLanguage(language);
          updateSettings({ language });
          modal.closeAll();
        }}
        maxSelect={1}
      />,
      { title: t('user.settings.language') },
    );
  };

  const handleTheme = () => {
    modal.open(
      <CardSelect
        options={translateCardSelectOptions(t, THEME_CONFIG)}
        value={[settings.theme]}
        onChange={(values) => {
          const theme = values[0] as Theme;
          if (!theme) return;
          setTheme(theme);
          updateSettings({ theme });
          modal.closeAll();
        }}
        maxSelect={1}
      />,
      { title: t('user.settings.theme') },
    );
  };

  return (
    <Stack gap="2xl">
      <PageHeader title={t('user.settings.title')} />

      <InfoSection title={t('user.settings.title')}>
        <InfoRow
          label={t('user.settings.language')}
          value={languageConfig?.label}
          onClick={handleLanguage}
          icon="globe"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('user.settings.theme')}
          value={themeConfig?.label}
          onClick={handleTheme}
          icon={themeConfig?.icon ?? 'monitor'}
          iconColor={themeConfig?.color ?? 'gray'}
        />
      </InfoSection>

      <NotificationsSettings settings={settings} />

      <Stack gap="md">
        <Stack direction="row" align="center" justify="between">
          <Text weight="semibold" size="lg">
            {t('user.sessions.title')}
          </Text>
          {hasOtherSessions && (
            <Button variant="ghost" color="danger" size="sm" onClick={handleRevokeAllSessions}>
              {t('user.sessions.revokeAll')}
            </Button>
          )}
        </Stack>

        {isSessionsLoading ? (
          <SessionsListSkeleton />
        ) : (
          <SessionsList sessions={sessions} onRevoke={handleRevokeSession} />
        )}
      </Stack>
    </Stack>
  );
};
