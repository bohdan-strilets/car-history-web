import { useTranslation } from 'react-i18next';

import { Button, Heading, IconBox, Stack, Text } from '@shared/ui';

import type { TimelineStepProps } from '../model';

export const TimelineStep = ({ onNext }: TimelineStepProps) => {
  const { t } = useTranslation();

  return (
    <Stack gap="3xl" align="center">
      <IconBox name="calendar" size="4xl" soft="accent" radius="lg" />

      <Stack gap="md" align="center">
        <Heading as="h3" size="xl" style={{ textAlign: 'center' }}>
          {t('onboarding.steps.timeline.empty.title')}
        </Heading>
        <Text color="secondary" style={{ textAlign: 'center' }}>
          {t('onboarding.steps.timeline.empty.description')}
        </Text>
      </Stack>

      <Stack gap="sm" align="center" style={{ width: '100%' }}>
        <Button size="xl" onClick={onNext} fullWidth>
          {t('onboarding.steps.timeline.empty.action')}
        </Button>
      </Stack>
    </Stack>
  );
};
