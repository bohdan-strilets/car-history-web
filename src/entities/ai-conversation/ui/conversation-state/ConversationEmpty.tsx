import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@shared/config';
import { StateView } from '@shared/ui';

export const ConversationEmpty = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <StateView
      icon="bot"
      variant="default"
      title={t('ai.list.empty.title')}
      description={t('ai.list.empty.description')}
      actionLabel={t('ai.list.create')}
      onAction={() => navigate(ROUTES.AI.NEW)}
    />
  );
};
