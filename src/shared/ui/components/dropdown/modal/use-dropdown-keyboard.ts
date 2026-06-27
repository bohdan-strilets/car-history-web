import { useCallback, useRef } from 'react';

import type { DropdownKeyboardParams } from './dropdown.types';

export const useDropdownKeyboard = ({ open, onClose }: DropdownKeyboardParams) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const getFocusableItems = (): HTMLElement[] => {
    if (!menuRef.current) return [];
    return Array.from(
      menuRef.current.querySelectorAll<HTMLElement>(
        '[role="menuitem"]:not([disabled]):not([aria-disabled="true"])',
      ),
    );
  };

  const focusItem = (index: number) => {
    const items = getFocusableItems();
    items[index]?.focus();
  };

  const focusFirst = () => focusItem(0);
  const focusLast = () => {
    const items = getFocusableItems();
    focusItem(items.length - 1);
  };

  const handleMenuKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const items = getFocusableItems();
      const current = document.activeElement as HTMLElement;
      const currentIndex = items.indexOf(current);

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          const next = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
          focusItem(next);
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          const prev = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
          focusItem(prev);
          break;
        }
        case 'Home': {
          e.preventDefault();
          focusFirst();
          break;
        }
        case 'End': {
          e.preventDefault();
          focusLast();
          break;
        }
        case 'Tab': {
          onClose();
          break;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [open, onClose],
  );

  return { menuRef, handleMenuKeyDown };
};
