import { useTranslation } from 'react-i18next';

import type { Language, Theme } from '@entities/user';
import { useInitQuery, useResendConfirmationMutation } from '@features/auth';
import { useUpdateUserSettingsMutation } from '@features/user';
import { APP_CONSTANTS } from '@shared/config';
import { useCooldown, useVisibilityRefetch } from '@shared/hooks';
import { useLanguage } from '@shared/i18n';
import { showToast } from '@shared/lib';
import { useAuth } from '@shared/store';
import { useTheme } from '@shared/styles/model';
import { Button, CardSelect, Divider, Heading, Icon, Logo, Spinner, Stack, Text } from '@shared/ui';
import { translateCardSelectOptions } from '@shared/utils';

import { LANGUAGE_CONFIG, THEME_CONFIG, type WelcomeStepProps } from '../model';

export const WelcomeStep = ({ onNext }: WelcomeStepProps) => {
  const { t } = useTranslation();

  const { user } = useAuth();
  const isEmailVerified = user?.emailVerified;

  const coldown = APP_CONSTANTS.RESEND_COOLDOWN;
  const { cooldown, start, isActive } = useCooldown(coldown);

  const mutation = useResendConfirmationMutation({ onSuccess: start });
  const { mutate: resend, isPending } = mutation;

  const { refetch } = useInitQuery();
  useVisibilityRefetch(refetch);

  const { setLanguage, currentLanguage } = useLanguage();
  const { setTheme, theme } = useTheme();

  const { mutate: updateSettingsLanguage, isPending: isUpdatingLanguage } =
    useUpdateUserSettingsMutation();
  const { mutate: updateSettingsTheme, isPending: isUpdatingTheme } =
    useUpdateUserSettingsMutation();

  const handleSettingsError = () => {
    showToast.error(t('errors.UNKNOWN_ERROR'));
  };

  const handleLanguage = (values: (string | number)[]) => {
    const language = values[0] as Language;
    if (!language) return;
    setLanguage(language);
    updateSettingsLanguage({ language }, { onError: handleSettingsError });
  };

  const handleTheme = (values: (string | number)[]) => {
    const theme = values[0] as Theme;
    if (!theme) return;
    setTheme(theme);
    updateSettingsTheme({ theme }, { onError: handleSettingsError });
  };

  return (
    <Stack gap="3xl" align="center">
      <Logo size="2xl" />

      <Stack gap="md" align="center">
        <Heading as="h2" size="xl" style={{ textAlign: 'center' }}>
          {t('onboarding.steps.welcome.subtitle')}
        </Heading>
        <Text color="secondary" style={{ textAlign: 'center' }}>
          {t('onboarding.steps.welcome.description')}
        </Text>
      </Stack>

      <Divider />

      {isEmailVerified && (
        <>
          <Stack gap="md" style={{ width: '100%' }}>
            <Stack direction="row" align="center" gap="sm">
              <Text size="sm" color="secondary">
                {t('onboarding.steps.welcome.language')}
              </Text>
              {isUpdatingLanguage && <Spinner size="xs" />}
            </Stack>
            <CardSelect
              options={LANGUAGE_CONFIG}
              value={[currentLanguage]}
              onChange={handleLanguage}
              maxSelect={1}
            />
          </Stack>

          <Stack gap="md" style={{ width: '100%' }}>
            <Stack direction="row" align="center" gap="sm">
              <Text size="sm" color="secondary">
                {t('onboarding.steps.welcome.theme')}
              </Text>
              {isUpdatingTheme && <Spinner size="xs" />}
            </Stack>

            <CardSelect
              options={translateCardSelectOptions(t, THEME_CONFIG)}
              value={[theme]}
              onChange={handleTheme}
              maxSelect={1}
            />
          </Stack>
        </>
      )}

      {!isEmailVerified && (
        <Stack gap="md" align="center">
          <Stack direction="row" align="center" gap="sm">
            <Icon name="mail" size="sm" color="secondary" />
            <Text size="sm" color="secondary" style={{ textAlign: 'center' }}>
              {t('onboarding.steps.welcome.emailNotVerified', { email: user?.email })}
            </Text>
          </Stack>

          <Button
            variant="outline"
            size="md"
            onClick={() => resend()}
            disabled={isPending || isActive}
            loading={isPending}
          >
            {isActive
              ? t('common.actions.resendIn', { seconds: cooldown })
              : t('common.actions.resend')}
          </Button>
        </Stack>
      )}

      <Button size="xl" onClick={onNext} disabled={!isEmailVerified} rightIcon="chevronRight">
        {t('onboarding.steps.welcome.start')}
      </Button>
    </Stack>
  );
};
