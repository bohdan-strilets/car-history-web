import { ROUTES } from '@shared/config';
import { Stepper } from '@shared/ui/components/stepper';
import { Heading, Stack, Text } from '@shared/ui/primitives';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  ONBOARDING_STEP_INDEX,
  ONBOARDING_STEP_SUBTITLE_KEYS,
  ONBOARDING_STEP_TITLE_KEYS,
  TOTAL_STEPS,
  useOnboardingStore,
} from '../model';

import { SettingsStep } from './SettingsStep';
import { TimelineStep } from './TimelineStep';
import { VehicleStep } from './VehicleStep';
import { WelcomeStep } from './WelcomeStep';
import { WorkspaceStep } from './WorkspaceStep';

export const OnboardingStepper = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentStep, goNext, skip } = useOnboardingStore();

  const handleFinish = () => {
    navigate(ROUTES.DASHBOARD);
  };

  const stepIndex = ONBOARDING_STEP_INDEX[currentStep];
  const stepTitle = t(ONBOARDING_STEP_TITLE_KEYS[currentStep]);
  const stepSubtitle = t(ONBOARDING_STEP_SUBTITLE_KEYS[currentStep]);

  const isWelcomeStep = currentStep === 'welcome';

  const renderStep = () => {
    switch (currentStep) {
      case 'welcome':
        return <WelcomeStep onNext={goNext} />;

      case 'workspace':
        return <WorkspaceStep onNext={goNext} />;

      case 'vehicle':
        return <VehicleStep onNext={goNext} onSkip={skip} />;

      case 'settings':
        return <SettingsStep onNext={goNext} onSkip={skip} />;

      case 'timeline':
        return <TimelineStep onNext={handleFinish} />;
    }
  };

  return (
    <Stack gap="3xl">
      <Stack gap="3xl">
        <Stepper currentStep={stepIndex} totalSteps={TOTAL_STEPS} size="md" />
        <Stack gap="xs">
          <Heading as="h1" size="2xl">
            {stepTitle}
          </Heading>
          {!isWelcomeStep && <Text color="secondary">{stepSubtitle}</Text>}
        </Stack>
      </Stack>

      {renderStep()}
    </Stack>
  );
};
