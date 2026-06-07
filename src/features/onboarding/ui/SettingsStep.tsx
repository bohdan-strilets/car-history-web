import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useWorkspace } from '@entities/workspace';
import { useWorkspaceSettingsForm, WorkspaceSettingsForm } from '@features/workspace';

import { StepSuccess } from './StepSuccess';

import type { SettingsStepProps } from '../model';
import type { WorkspaceSettings } from '@entities/workspace';

export const SettingsStep = ({ onNext, onSkip }: SettingsStepProps) => {
  const { t } = useTranslation();
  const { activeWorkspaceId } = useWorkspace();
  const [isSuccess, setIsSuccess] = useState(false);

  if (!activeWorkspaceId) throw new Error('Active workspace ID is required');

  const handleSuccess = (_settings: WorkspaceSettings) => {
    setIsSuccess(true);
  };

  const form = useWorkspaceSettingsForm({
    workspaceId: activeWorkspaceId,
    onSuccess: handleSuccess,
  });
  const { control, handleSubmit, isPending, errorMessage } = form;

  if (isSuccess) {
    return (
      <StepSuccess
        title={t('onboarding.steps.settings.success.title')}
        description={t('onboarding.steps.settings.success.description')}
        onDone={onNext}
      />
    );
  }

  return (
    <WorkspaceSettingsForm
      control={control}
      handleSubmit={handleSubmit}
      isPending={isPending}
      errorMessage={errorMessage}
      submitLabel={t('common.actions.next')}
      onSkip={onSkip}
    />
  );
};
