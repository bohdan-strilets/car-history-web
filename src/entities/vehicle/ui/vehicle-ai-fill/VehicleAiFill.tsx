import { Button, Heading, IconBox, Panel, Stack, Text } from '@shared/ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { pulseButton } from './vehicle-ai-fill.css';
import type { VehicleAiFillProps } from './vehicle-ai-fill.types';

export const VehicleAiFill = ({ onFill }: VehicleAiFillProps) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const handleFill = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
    onFill?.();
  };

  return (
    <Panel gradient="accentGlow" p="2xl" align="center" justify="center">
      <Stack gap="xl" align="center">
        <IconBox name="bot" gradient="accentSolid" size="2xl" />

        <Stack gap="xs" align="center">
          <Heading size="xl" align="center">
            {t('vehicle.ai.title')}
          </Heading>
          <Text color="secondary" align="center" size="sm">
            {t('vehicle.ai.description')}
          </Text>
        </Stack>

        <Button
          onClick={handleFill}
          loading={isLoading}
          leftIcon="sparkles"
          size="lg"
          color="accent"
          className={isLoading ? undefined : pulseButton}
        >
          {isLoading ? t('vehicle.ai.loading') : t('vehicle.ai.action')}
        </Button>
      </Stack>
    </Panel>
  );
};
