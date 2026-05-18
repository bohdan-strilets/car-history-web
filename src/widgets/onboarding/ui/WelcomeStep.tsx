import { Button, Heading, Logo, Stack, Text } from '@shared/ui/primitives';
import { useTranslation } from 'react-i18next';

import type { WelcomeStepProps } from '../model';

export const WelcomeStep = ({ onNext }: WelcomeStepProps) => {
  const { t } = useTranslation();

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

      <Button size="lg" onClick={onNext}>
        {t('onboarding.welcome.start')}
      </Button>
    </Stack>
  );
};
