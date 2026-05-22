import { useCompleteOnboardingMutation } from '@entities/user';
import { ROUTES } from '@shared/config';
import { authService } from '@shared/store/auth';
import { Stepper } from '@shared/ui/components/stepper';
import { Heading, Stack, Text } from '@shared/ui/primitives';
import { useState } from 'react';
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
import { StepSuccess } from './StepSuccess';
import { TimelineStep } from './TimelineStep';
import { VehicleStep } from './VehicleStep';
import { WelcomeStep } from './WelcomeStep';
import { WorkspaceStep } from './WorkspaceStep';

export const OnboardingStepper = () => {
  const [isFinished, setIsFinished] = useState(false);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentStep, goNext, skip, resetStore } = useOnboardingStore();
  const { mutate: completeOnboarding } = useCompleteOnboardingMutation();

  const toDashboard = () => {
    authService.updateUser({ onboardingCompleted: true });
    resetStore();
    navigate(ROUTES.DASHBOARD);
  };

  const handleFinish = () => {
    completeOnboarding(undefined, {
      onSuccess: () => setIsFinished(true),
    });
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

  if (isFinished) {
    return (
      <StepSuccess
        title={t('onboarding.success.title')}
        description={t('onboarding.success.description')}
        onDone={toDashboard}
        delay={2000}
      />
    );
  }

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
