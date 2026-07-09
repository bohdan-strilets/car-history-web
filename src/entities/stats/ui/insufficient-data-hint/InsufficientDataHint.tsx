import { useTranslation } from 'react-i18next';

import { Hint, Stack, Text } from '@shared/ui';

export const InsufficientDataHint = () => {
  const { t } = useTranslation();

  return (
    <Stack gap="md">
      <Hint variant="info" message={t('stats.insufficientData.title')} />
      <Text color="tertiary" align="center" size="sm">
        {t('stats.insufficientData.description')}
      </Text>
    </Stack>
  );
};
