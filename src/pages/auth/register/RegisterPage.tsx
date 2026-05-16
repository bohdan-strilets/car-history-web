import { RegisterForm } from '@features/auth';
import { ROUTES } from '@shared/config/routes';
import { Button } from '@shared/ui/primitives/button';
import { Divider } from '@shared/ui/primitives/divider';
import { Heading } from '@shared/ui/primitives/heading';
import { Stack } from '@shared/ui/primitives/stack';
import { Text } from '@shared/ui/primitives/text';
import { TextLink } from '@shared/ui/primitives/text-link';
import { useTranslation } from 'react-i18next';

export const RegisterPage = () => {
  const { t } = useTranslation();

  return (
    <Stack gap="2xl">
      <Stack gap="xs">
        <Heading as="h1" size="3xl" weight="extraBold">
          {t('auth.register.title')}
        </Heading>
        <Text color="tertiary">{t('auth.register.subtitle')}</Text>
      </Stack>

      <RegisterForm />

      <Stack direction="row" gap="xs" align="center" justify="center">
        <Text size="sm" color="tertiary">
          {t('auth.register.form.hasAccount')}
        </Text>
        <TextLink to={ROUTES.AUTH.LOGIN} label={t('auth.register.form.login')} />
      </Stack>

      <Divider label={t('auth.common.orContinueWith')} />

      <Button variant="solid" color="blue" size="lg" fullWidth leftIcon="globe">
        {t('auth.common.googleButton')}
      </Button>
    </Stack>
  );
};
