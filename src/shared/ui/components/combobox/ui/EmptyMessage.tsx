import { Text } from '@shared/ui/primitives';
import { useTranslation } from 'react-i18next';

import type { EmptyMessageProps } from '../model';

export const EmptyMessage = ({ emptyMessage }: EmptyMessageProps) => {
  const { t } = useTranslation();

  return (
    <Text size="sm" color="tertiary" align="center">
      {emptyMessage ?? t('common.noOptions')}
    </Text>
  );
};
