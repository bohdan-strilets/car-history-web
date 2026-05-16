import { LoginForm } from '@features/auth';
import { ROUTES } from '@shared/config/routes';
import { TextLink } from '@shared/ui';
import { Button } from '@shared/ui/primitives/button';
import { Divider } from '@shared/ui/primitives/divider';
import { Heading } from '@shared/ui/primitives/heading';
import { Stack } from '@shared/ui/primitives/stack';
import { Text } from '@shared/ui/primitives/text';
import { useTranslation } from 'react-i18next';

export const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Stack gap="2xl">
      <Stack gap="xs">
        <Heading as="h1" size="3xl" weight="extraBold">
          {t('auth.login.title')}
        </Heading>
        <Text color="tertiary">{t('auth.login.subtitle')}</Text>
      </Stack>

      <LoginForm />

      <Stack direction="row" align="center" justify="between">
        <TextLink
          to={ROUTES.AUTH.FORGOT_PASSWORD}
          label={t('auth.login.form.forgotPassword')}
          color="tertiary"
        />
        <Stack direction="row" gap="xs" align="center">
          <Text size="sm" color="tertiary">
            {t('auth.login.form.noAccount')}
          </Text>
          <TextLink to={ROUTES.AUTH.REGISTER} label={t('auth.login.form.register')} />
        </Stack>
      </Stack>

      <Divider label={t('auth.common.orContinueWith')} />

      <Button variant="solid" color="blue" size="lg" fullWidth leftIcon="globe">
        Google
      </Button>
    </Stack>
  );
};
