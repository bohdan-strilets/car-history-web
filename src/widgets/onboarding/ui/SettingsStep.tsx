import type { WorkspaceSettings } from '@entities/workspace';
import { useWorkspace } from '@entities/workspace';
import { WorkspaceSettingsForm } from '@features/workspace';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { StepSuccess } from './StepSuccess';

interface SettingsStepProps {
  onNext: () => void;
  onSkip?: () => void;
}

export const SettingsStep = ({ onNext, onSkip }: SettingsStepProps) => {
  const { t } = useTranslation();
  const { activeWorkspace } = useWorkspace();
  const [isSuccess, setIsSuccess] = useState(false);

  const workspaceId = activeWorkspace?.id;

  if (!workspaceId) {
    throw new Error('Workspace ID is required to render SettingsStep component.');
  }

  const handleSuccess = (_settings: WorkspaceSettings) => {
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <StepSuccess
        title={t('onboarding.settings.success.title')}
        description={t('onboarding.settings.success.description')}
        onDone={onNext}
      />
    );
  }

  return (
    <WorkspaceSettingsForm workspaceId={workspaceId} onSuccess={handleSuccess} onSkip={onSkip} />
  );
};
