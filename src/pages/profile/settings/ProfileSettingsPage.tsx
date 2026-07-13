import { useTranslation } from 'react-i18next';

import type { Language, Theme } from '@entities/user';
import { LANGUAGE_CONFIG, THEME_CONFIG, useMeQuery } from '@entities/user';
import { NotificationsSettings, useUpdateUserSettingsMutation } from '@features/user';
import { useLanguage } from '@shared/i18n';
import { useAdaptiveModal } from '@shared/lib/modal';
import { useTheme } from '@shared/styles/model';
import { CardSelect, InfoRow, Stack } from '@shared/ui';
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
    </Stack>
  );
};
