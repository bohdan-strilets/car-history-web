import { useTranslation } from 'react-i18next';

import { Button, Stack, Text } from '@shared/ui';

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
        {!isLoading && onCancel && (
          <Button variant="ghost" onClick={onCancel} color="gray">
            {cancelLabel ?? t('common.actions.cancel')}
          </Button>
        )}
        <Button
          variant="solid"
          color={danger ? 'danger' : 'gray'}
          onClick={onConfirm}
          loading={isLoading}
        >
          {confirmLabel ?? t('common.actions.confirm')}
        </Button>
      </Stack>
    </Stack>
  );
};
