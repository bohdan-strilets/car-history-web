import { body, modal, root } from '../modal.css';

import { ModalHeader } from './ModalHeader';

import type { BaseModalProps } from '../model';

export const BaseModal = ({
  title,
  closable = true,
  hasBack = false,
  onClose,
  onBack,
  children,
  zIndex,
}: BaseModalProps) => {
  return (
    <div className={root({ centered: true })} style={{ zIndex }}>
      <div className={modal({ centered: true })} role="dialog" aria-modal="true" aria-label={title}>
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
