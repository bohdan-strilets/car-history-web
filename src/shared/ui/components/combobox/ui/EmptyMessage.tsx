import { useTranslation } from 'react-i18next';

import { Panel, Text } from '@shared/ui';

import type { EmptyMessageProps } from '../model';

export const EmptyMessage = ({ emptyMessage }: EmptyMessageProps) => {
  const { t } = useTranslation();

  return (
    <Panel variant="elevated">
      <Text size="md" color="tertiary" align="center">
        {emptyMessage ?? t('common.labels.noOptions')}
      </Text>
    </Panel>
  );
};
