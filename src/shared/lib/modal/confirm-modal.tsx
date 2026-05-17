import { ConfirmModal, type ConfirmOptions } from '@shared/ui';

import { useAdaptiveModal } from './adaptive-modal';

export const useConfirmModal = () => {
  const { open, close } = useAdaptiveModal();

  const confirm = (options: ConfirmOptions): Promise<boolean> => {
    return new Promise((resolve) => {
      const id = open(
        <ConfirmModal
          {...options}
          onConfirm={() => {
            close(id);
            resolve(true);
          }}
          onCancel={() => {
            close(id);
            resolve(false);
          }}
        />,
        { title: options.title },
      );
    });
  };

  return { confirm };
};
