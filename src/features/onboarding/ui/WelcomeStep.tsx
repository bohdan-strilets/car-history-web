import { useMeQuery, useResendConfirmationMutation } from '@features/auth';
import { APP_CONSTANTS } from '@shared/config';
import { useCooldown, useVisibilityRefetch } from '@shared/hooks';
import { useAuth } from '@shared/store/auth';
import { Button, Heading, Icon, Logo, Stack, Text } from '@shared/ui/primitives';
import { useTranslation } from 'react-i18next';

import type { WelcomeStepProps } from '../model';

export const WelcomeStep = ({ onNext }: WelcomeStepProps) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const isEmailVerified = user?.emailVerified;
  const { cooldown, start, isActive } = useCooldown(APP_CONSTANTS.RESEND_COOLDOWN);

  const { mutate: resend, isPending } = useResendConfirmationMutation({
    onSuccess: start,
  });

  const { refetch } = useMeQuery();
  useVisibilityRefetch(refetch);

  return (
    <Stack gap="3xl" align="center">
      <Logo size="xl" />

      <Stack gap="md" align="center">
        <Heading as="h2" size="xl" style={{ textAlign: 'center' }}>
          {t('onboarding.welcome.subtitle')}
        </Heading>
        <Text color="secondary" style={{ textAlign: 'center' }}>
          {t('onboarding.welcome.description')}
        </Text>
      </Stack>

      {!isEmailVerified && (
        <Stack gap="md" align="center">
          <Stack direction="row" align="center" gap="sm">
            <Icon name="mail" size="sm" color="secondary" />
            <Text size="sm" color="secondary" style={{ textAlign: 'center' }}>
              {t('onboarding.welcome.emailNotVerified', { email: user?.email })}
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
              ? t('emailVerification.resendIn', { seconds: cooldown })
              : t('emailVerification.resend')}
          </Button>
        </Stack>
      )}

      <Button size="xl" onClick={onNext} disabled={!isEmailVerified} rightIcon="chevronRight">
        {t('onboarding.welcome.start')}
      </Button>
    </Stack>
  );
};
