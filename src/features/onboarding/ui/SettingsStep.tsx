import type { WorkspaceSettings } from '@entities/workspace';
import { useWorkspace } from '@entities/workspace';
import { WorkspaceSettingsForm } from '@features/workspace';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { SettingsStepProps } from '../model';

import { StepSuccess } from './StepSuccess';

export const SettingsStep = ({ onNext, onSkip }: SettingsStepProps) => {
  const { t } = useTranslation();
  const { activeWorkspaceId } = useWorkspace();
  const [isSuccess, setIsSuccess] = useState(false);

  if (!activeWorkspaceId) throw new Error('Active workspace ID is required');

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
    <WorkspaceSettingsForm
      workspaceId={activeWorkspaceId}
      onSuccess={handleSuccess}
      onSkip={onSkip}
    />
  );
};
