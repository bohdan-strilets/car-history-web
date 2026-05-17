import type { ReactNode } from 'react';

import { useModalStore } from '../model/modal.store';
import type { ModalOptions } from '../model/modal.types';

export const useModal = () => {
  const { open, close, closeLast, closeAll, stack } = useModalStore();

  return {
    open: (content: ReactNode, options?: ModalOptions) => open(content, options),
    close,
    closeLast,
    closeAll,
    hasMultiple: stack.length > 1,
    isEmpty: stack.length === 0,
  };
};
