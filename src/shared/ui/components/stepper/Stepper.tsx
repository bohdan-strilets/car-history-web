import { Stack, Text } from '@shared/ui/primitives';
import { useTranslation } from 'react-i18next';

import { segment, segmentFill, segments } from './stepper.css';
import type { StepperProps } from './stepper.types';

export const Stepper = ({ currentStep, totalSteps }: StepperProps) => {
  const { t } = useTranslation();

  return (
    <Stack gap="sm">
      <div className={segments}>
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isActive = index < currentStep;
          const isCurrent = index === currentStep - 1;

          return (
            <div key={index} className={segment}>
              <div className={segmentFill({ active: isActive, current: isCurrent })} />
            </div>
          );
        })}
      </div>

      <Text as="span" size="sm" color="secondary" weight="semibold">
        {t('common.step', { current: currentStep, total: totalSteps })}
      </Text>
    </Stack>
  );
};
