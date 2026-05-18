import { useEffect, type RefObject } from 'react';

interface DismissParams {
  enabled: boolean;
  onDismiss: () => void;
  ref: RefObject<HTMLElement | null>;
}

export const useDismiss = ({ enabled, onDismiss, ref }: DismissParams) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onDismiss();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [enabled, onDismiss, ref]);
};
