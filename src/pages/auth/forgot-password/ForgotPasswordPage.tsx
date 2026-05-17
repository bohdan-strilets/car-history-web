import { ForgotPasswordForm, useForgotPassword } from '@features/auth';
import { ROUTES } from '@shared/config/routes';
import { Button, Heading, Spinner, Stack, SuccessState, Text, TextLink } from '@shared/ui';
import { AuthHeader } from '@widgets/auth-header';
import { useTranslation } from 'react-i18next';

export const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  const { sentTo, cooldown, isPending, handleSuccess, handleResend } = useForgotPassword();

  if (sentTo) {
    return (
      <Stack gap="2xl">
        <Stack direction="row" justify="center">
          {isPending ? <Spinner size={'xl'} color="success" /> : <SuccessState />}
        </Stack>

        <Stack gap="xs">
          <Heading as="h1" size="3xl" weight="extraBold">
            {t('auth.forgotPassword.success.title')}
          </Heading>
          <Text color="tertiary">
            {t('auth.forgotPassword.success.subtitle', { email: sentTo })}
          </Text>
        </Stack>

        <Button
          variant="outline"
          color="gray"
          size="lg"
          fullWidth
          disabled={cooldown > 0}
          loading={isPending}
          onClick={handleResend}
        >
          {cooldown > 0
            ? t('auth.forgotPassword.success.resendIn', { seconds: cooldown })
            : t('auth.forgotPassword.success.resend')}
        </Button>

        <TextLink
          to={ROUTES.AUTH.LOGIN}
          label={t('auth.forgotPassword.backToLogin')}
          color="tertiary"
        />
      </Stack>
    );
  }

  return (
    <Stack gap="2xl">
      <AuthHeader
        title={t('auth.forgotPassword.title')}
        subtitle={t('auth.forgotPassword.subtitle')}
      />

      <ForgotPasswordForm onSuccess={handleSuccess} />

      <TextLink
        to={ROUTES.AUTH.LOGIN}
        label={t('auth.forgotPassword.backToLogin')}
        color="tertiary"
      />
    </Stack>
  );
};
