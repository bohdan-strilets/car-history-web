import type { ConfirmOptions } from '@shared/ui';

export interface ConfirmCallbacks {
  onConfirm: (close: () => void) => void;
  onCancel?: () => void;
}

export interface ConfirmModalProps {
  options: ConfirmOptions;
  onConfirm: (done: () => void) => void;
  onCancel?: () => void;
}
