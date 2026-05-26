import { useEffect, type RefObject } from 'react';

interface DismissParams {
  enabled: boolean;
  onDismiss: () => void;
  ref: RefObject<HTMLElement | null>;
  portalRef?: RefObject<HTMLElement | null>;
}

export const useDismiss = ({ enabled, onDismiss, ref, portalRef }: DismissParams) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideRoot = ref.current?.contains(target);
      const insidePortal = portalRef?.current?.contains(target);

      if (!insideRoot && !insidePortal) {
        onDismiss();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [enabled, onDismiss, ref, portalRef]);
};
