import { cloneElement, isValidElement, useEffect, useRef, useState } from 'react';

import { clsx } from 'clsx';

import { useDismiss } from '@shared/hooks';
import { Portal } from '@shared/ui';

import { content, root } from './dropdown.css';
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

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = (val: boolean) => {
    if (!isControlled) setInternalOpen(val);
    onOpenChange?.(val);
  };

  const prevOpenRef = useRef<boolean | undefined>(undefined);

  const { rootRef, getPortalStyle } = useDropdown({
    open,
    align,
    direction,
    fullWidth,
  });

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
      (
        rootRef.current?.querySelector(
          'button, [role="button"], [tabindex="0"]',
        ) as HTMLElement | null
      )?.focus();
    }
  }, [open, rootRef]);

  useDismiss({
    enabled: open,
    onDismiss: () => setOpen(false),
    ref: rootRef,
    portalRef,
  });

  const handleTriggerClick = () => {
    if (!disabled) setOpen(!open);
  };

  const clonedTrigger = isValidElement(trigger)
    ? cloneElement(trigger as React.ReactElement<Record<string, unknown>>, {
        onClick: handleTriggerClick,
        disabled,
        'aria-expanded': open,
        'aria-haspopup': 'menu',
        style: { width: fullWidth ? '100%' : undefined },
      })
    : trigger;

  return (
    <div
      className={clsx(root({ fullWidth }), className)}
      ref={rootRef}
      style={{ width: fullWidth ? '100%' : 'auto' }}
    >
      {clonedTrigger}

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
