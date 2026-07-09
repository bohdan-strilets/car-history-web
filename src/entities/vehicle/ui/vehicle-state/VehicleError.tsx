import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@shared/config';
import { StateView } from '@shared/ui';

import type { VehicleErrorProps } from './vehicle-state.types';

export const VehicleError = ({ workspaceId }: VehicleErrorProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <StateView
      icon="alertCircle"
      variant="error"
      title={t('common.error.title')}
      description={t('common.error.description')}
      actionLabel={t('common.actions.back')}
      onAction={() => navigate(ROUTES.WORKSPACES.DETAIL(workspaceId))}
    />
  );
};
