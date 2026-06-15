import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useWorkspace, type Workspace } from '@entities/workspace';
import { useWorkspaceForm, WorkspaceForm } from '@features/workspace';

import { StepSuccess } from './StepSuccess';

import type { WorkspaceStepProps } from '../model';

export const WorkspaceStep = ({ onNext }: WorkspaceStepProps) => {
  const { t } = useTranslation();
  const { setActiveWorkspaceId } = useWorkspace();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccess = (workspace: Workspace) => {
    setActiveWorkspaceId(workspace.id);
    setIsSuccess(true);
  };

  const form = useWorkspaceForm({ onSuccess: handleSuccess });
  const { control, handleSubmit, isPending, errorMessage } = form;

  if (isSuccess) {
    return (
      <StepSuccess
        title={t('onboarding.steps.workspace.success.title')}
        description={t('onboarding.steps.workspace.success.description')}
        onDone={onNext}
      />
    );
  }

  return (
    <WorkspaceForm
      control={control}
      handleSubmit={handleSubmit}
      isPending={isPending}
      errorMessage={errorMessage}
      submitLabel={t('common.actions.next')}
    />
  );
};
