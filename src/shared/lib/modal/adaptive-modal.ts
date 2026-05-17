import { useMediaQuery } from '@shared/hooks';
import { useModalStore, type AdaptiveModalOptions } from '@shared/ui';

export const useAdaptiveModal = () => {
  const { open, close, closeLast, closeAll } = useModalStore();
  const isLaptop = useMediaQuery('laptop', 'up');

  return {
    open: (content: React.ReactNode, options?: AdaptiveModalOptions) =>
      open(content, {
        ...options,
        variant: isLaptop ? 'standard' : 'bottom-sheet',
      }),
    close,
    closeLast,
    closeAll,
  };
};
