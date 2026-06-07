import { useState } from 'react';

import { ConfirmModal } from '@shared/ui';

import type { ConfirmModalProps } from './modal.types';

export const ConfirmModalContainer = ({ options, onConfirm, onCancel }: ConfirmModalProps) => {
  const [isPending, setIsPending] = useState(false);

  const handleConfirm = () => {
    setIsPending(true);
    onConfirm(() => setIsPending(false));
  };

  return (
    <ConfirmModal
      {...options}
      isLoading={isPending}
      onConfirm={handleConfirm}
      onCancel={isPending ? undefined : onCancel}
    />
  );
};
