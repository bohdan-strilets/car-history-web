import { Fragment, useEffect, type PropsWithChildren } from 'react';

import { useMediaQuery } from '@shared/hooks';
import { BaseBottomSheet, BaseModal, ModalPortal, Overlay, useModalStore } from '@shared/ui';

const BASE_Z = 5000;
const STEP = 10;

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
          {stack.map((modal, index) => {
            const z = BASE_Z + index * STEP;
            const isTop = index === stack.length - 1;
            const hasBack = stack.length > 1 && isTop;

            const props = {
              title: modal.title,
              closable: modal.closable,
              hasBack,
              isTop,
              zIndex: z + 1,
              onClose: () => close(modal.id),
              onBack: closeLast,
              children: modal.content,
            };

            return (
              <Fragment key={modal.id}>
                <Overlay style={{ zIndex: z }} onClick={isTop ? closeLast : undefined} />
                {isDesktop ? <BaseModal {...props} /> : <BaseBottomSheet {...props} />}
              </Fragment>
            );
          })}
        </ModalPortal>
      )}
    </>
  );
};
