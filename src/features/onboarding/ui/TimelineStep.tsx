import { Button, Heading, IconBox, Stack, Text } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import type { TimelineStepProps } from '../model';

export const TimelineStep = ({ onNext }: TimelineStepProps) => {
  const { t } = useTranslation();

  return (
    <Stack gap="3xl" align="center">
      <IconBox name="calendar" size="4xl" soft="accent" radius="lg" />

      <Stack gap="md" align="center">
        <Heading as="h3" size="xl" style={{ textAlign: 'center' }}>
          {t('onboarding.timeline.placeholder.title')}
        </Heading>
        <Text color="secondary" style={{ textAlign: 'center' }}>
          {t('onboarding.timeline.placeholder.description')}
        </Text>
      </Stack>

      <Stack gap="sm" align="center" style={{ width: '100%' }}>
        <Button size="xl" onClick={onNext} fullWidth>
          {t('onboarding.timeline.placeholder.add')}
        </Button>
      </Stack>
    </Stack>
  );
};
