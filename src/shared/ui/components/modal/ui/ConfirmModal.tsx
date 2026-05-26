import { Button, Stack, Text } from '@shared/ui/primitives';
import { useTranslation } from 'react-i18next';

import type { ConfirmModalProps } from '../model';

export const ConfirmModal = ({
  description,
  confirmLabel,
  cancelLabel,
  danger = false,
  isLoading = false,
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  const { t } = useTranslation();

  return (
    <Stack gap="xl">
      {description && <Text color="secondary">{description}</Text>}

      <Stack direction="row" justify="end" gap="sm">
        <Button variant="ghost" onClick={onCancel} color="gray">
          {cancelLabel ?? t('common.cancel')}
        </Button>
        <Button
          variant="solid"
          color={danger ? 'danger' : 'gray'}
          onClick={onConfirm}
          loading={isLoading}
        >
          {confirmLabel ?? t('common.confirm')}
        </Button>
      </Stack>
    </Stack>
  );
};
