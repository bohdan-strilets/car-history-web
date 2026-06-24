import { useEffect, useRef, useState } from 'react';

import { clsx } from 'clsx';

import { useDismiss } from '@shared/hooks';
import { Box, Portal } from '@shared/ui';

import { content, root, triggerButton } from './dropdown.css';
import { useDropdown } from './use-dropdown';

import type { DropdownProps } from './dropdown.types';

export const Dropdown = ({
  trigger,
  children,
  align = 'start',
  direction = 'bottom',
  disabled,
  fullWidth,
  open: controlledOpen,
  onOpenChange,
  minWidth = '200px',
  maxHeight = '300px',
  className,
}: DropdownProps) => {
  const [internalOpen, setInternalOpen] = useState(false);

  const portalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = (val: boolean) => {
    if (!isControlled) setInternalOpen(val);
    onOpenChange?.(val);
  };

  const prevOpenRef = useRef<boolean | undefined>(undefined);

  useEffect(() => {
    if (prevOpenRef.current === undefined) {
      prevOpenRef.current = open;
      return;
    }
    const wasOpen = prevOpenRef.current;
    prevOpenRef.current = open;

    if (open && !wasOpen) {
      portalRef.current?.focus();
    } else if (!open && wasOpen) {
      triggerRef.current?.focus();
    }
  }, [open]);

  const { rootRef, getPortalStyle } = useDropdown({
    open,
    align,
    direction,
    fullWidth,
  });

  useDismiss({
    enabled: open,
    onDismiss: () => setOpen(false),
    ref: rootRef,
    portalRef,
  });

  const handleTriggerClick = () => {
    if (!disabled) setOpen(!open);
  };

  return (
    <div className={clsx(root({ fullWidth }), className)} ref={rootRef}>
      <Box
        as="button"
        ref={triggerRef}
        type="button"
        onClick={handleTriggerClick}
        disabled={disabled}
        aria-expanded={open}
        aria-haspopup="menu"
        width={fullWidth ? 'full' : 'auto'}
        className={triggerButton}
      >
        {trigger}
      </Box>

      {open && (
        <Portal>
          <div
            ref={portalRef}
            tabIndex={-1}
            style={{ ...getPortalStyle(), minWidth, maxHeight }}
            className={content({ fullWidth: fullWidth && direction === 'bottom' })}
            role="menu"
          >
            {children}
          </div>
        </Portal>
      )}
    </div>
  );
};
