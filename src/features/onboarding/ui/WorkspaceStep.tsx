import { useWorkspace, type Workspace } from '@entities/workspace';
import { useWorkspaceForm, WorkspaceForm } from '@features/workspace';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { WorkspaceStepProps } from '../model';

import { StepSuccess } from './StepSuccess';

export const WorkspaceStep = ({ onNext }: WorkspaceStepProps) => {
  const { t } = useTranslation();
  const { setActiveWorkspaceId, setActiveWorkspace } = useWorkspace();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccess = (workspace: Workspace) => {
    setActiveWorkspaceId(workspace.id);
    setActiveWorkspace(workspace);
    setIsSuccess(true);
  };

  const { control, handleSubmit, isPending, errorMessage } = useWorkspaceForm({
    onSuccess: handleSuccess,
  });

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
