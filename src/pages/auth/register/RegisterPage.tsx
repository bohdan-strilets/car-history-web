import { useTranslation } from 'react-i18next';

import { RegisterForm, useGoogleAuth } from '@features/auth';
import { ROUTES } from '@shared/config';
import { Button, Divider, Stack, Text, TextLink } from '@shared/ui';
import { AuthHeader } from '@widgets/auth-header';

export const RegisterPage = () => {
  const { t } = useTranslation();
  const { redirectToGoogle } = useGoogleAuth();

  return (
    <Stack gap="2xl">
      <AuthHeader title={t('auth.register.title')} subtitle={t('auth.register.subtitle')} />

      <RegisterForm />

      <Stack direction="row" gap="xs" align="center" justify="center">
        <Text size="sm" color="tertiary">
          {t('auth.register.form.hasAccount')}
        </Text>
        <TextLink to={ROUTES.AUTH.LOGIN} label={t('auth.register.form.login')} />
      </Stack>

      <Divider label={t('auth.common.orContinueWith')} />

      <Button
        variant="solid"
        color="blue"
        size="lg"
        fullWidth
        leftIcon="globe"
        onClick={redirectToGoogle}
      >
        {t('auth.common.googleButton')}
      </Button>
    </Stack>
  );
};
