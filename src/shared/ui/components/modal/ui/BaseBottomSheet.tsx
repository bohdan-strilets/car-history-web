import { body, handle, handleBar, modal, root } from '../modal.css';

import { ModalHeader } from './ModalHeader';

import type { BaseModalProps } from '../model';

export const BaseBottomSheet = ({
  title,
  closable = true,
  hasBack = false,
  onClose,
  onBack,
  children,
  zIndex,
}: BaseModalProps) => {
  return (
    <div className={root({ bottom: true })} style={{ zIndex }}>
      <div className={modal({ bottom: true })} role="dialog" aria-modal="true" aria-label={title}>
        <div className={handle}>
          <div className={handleBar} />
        </div>

        <ModalHeader
          title={title}
          closable={closable}
          hasBack={hasBack}
          onClose={onClose}
          onBack={onBack}
        />

        <div className={body}>{children}</div>
      </div>
    </div>
  );
};
