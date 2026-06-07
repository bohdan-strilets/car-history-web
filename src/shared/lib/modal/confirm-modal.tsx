import { type ConfirmOptions } from '@shared/ui';

import { useAdaptiveModal } from './adaptive-modal';
import { ConfirmModalContainer } from './confirm-modal-container';

import type { ConfirmCallbacks } from './modal.types';

export const useConfirmModal = () => {
  const { open, close } = useAdaptiveModal();

  const confirm = (options: ConfirmOptions, callbacks: ConfirmCallbacks): void => {
    const id = open(
      <ConfirmModalContainer
        options={options}
        onConfirm={(done) =>
          callbacks.onConfirm(() => {
            done();
            close(id);
          })
        }
        onCancel={() => {
          close(id);
          callbacks.onCancel?.();
        }}
      />,
      { title: options.title },
    );
  };

  return { confirm };
};
