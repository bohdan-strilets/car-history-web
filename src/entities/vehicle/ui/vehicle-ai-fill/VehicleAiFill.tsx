import { useTranslation } from 'react-i18next';

import { useFillSpecsAiMutation } from '@features/vehicle';
import { Button, Heading, IconBox, Panel, Stack, Text } from '@shared/ui';

import { pulseButton } from './vehicle-ai-fill.css';

import type { VehicleAiFillProps } from './vehicle-ai-fill.types';

export const VehicleAiFill = ({ vehicleId, workspaceId, onFill }: VehicleAiFillProps) => {
  const { t } = useTranslation();
  const { mutate: fillSpecs, isPending } = useFillSpecsAiMutation();

  const handleFill = () => {
    fillSpecs(
      { vehicleId, workspaceId },
      {
        onSuccess: () => {
          onFill?.();
        },
      },
    );
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
          loading={isPending}
          leftIcon="sparkles"
          size="lg"
          color="accent"
          className={isPending ? undefined : pulseButton}
        >
          {isPending ? t('vehicle.ai.loading') : t('vehicle.ai.action')}
        </Button>
      </Stack>
    </Panel>
  );
};
