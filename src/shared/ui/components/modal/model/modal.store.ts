import { nanoid } from 'nanoid';
import { create } from 'zustand';

import type { ModalStore } from './modal.types';

export const useModalStore = create<ModalStore>((set, get) => ({
  stack: [],

  open: (content, options = {}) => {
    const id = options.id ?? nanoid();

    set((state) => ({
      stack: [
        ...state.stack,
        {
          id,
          title: options.title,
          variant: options.variant ?? 'standard',
          closable: options.closable ?? true,
          onClose: options.onClose,
          content,
        },
      ],
    }));

    return id;
  },

  close: (id) => {
    const item = get().stack.find((m) => m.id === id);
    item?.onClose?.();
    set((state) => ({ stack: state.stack.filter((m) => m.id !== id) }));
  },

  closeLast: () => {
    const { stack, close } = get();
    const last = stack[stack.length - 1];
    if (last) close(last.id);
  },

  closeAll: () => {
    get().stack.forEach((m) => m.onClose?.());
    set({ stack: [] });
  },
}));
