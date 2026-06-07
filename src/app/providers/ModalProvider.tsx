import { useEffect, type PropsWithChildren } from 'react';

import { useMediaQuery } from '@shared/hooks';
import { BaseBottomSheet, BaseModal, ModalPortal, Overlay, useModalStore } from '@shared/ui';

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const { stack, closeLast, close } = useModalStore();
  const isDesktop = useMediaQuery('laptop', 'up');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLast();
    };

    if (stack.length > 0) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [stack.length, closeLast]);

  return (
    <>
      {children}

      {stack.length > 0 && (
        <ModalPortal>
          <Overlay onClick={closeLast} />
          {stack.map((modal, index) => {
            const isTop = index === stack.length - 1;
            const hasBack = stack.length > 1 && isTop;

            const props = {
              title: modal.title,
              closable: modal.closable,
              hasBack,
              isTop,
              onClose: () => close(modal.id),
              onBack: closeLast,
              children: modal.content,
            };

            if (!isDesktop) {
              return <BaseBottomSheet key={modal.id} {...props} />;
            }

            return <BaseModal key={modal.id} {...props} />;
          })}
        </ModalPortal>
      )}
    </>
  );
};
