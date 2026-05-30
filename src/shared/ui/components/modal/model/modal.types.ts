import type { ReactNode } from 'react';

// Types

export type ModalVariant = 'standard' | 'bottom-sheet';

export type AdaptiveModalOptions = Omit<ModalOptions, 'variant'>;

// Model

export interface ModalOptions {
  id?: string;
  title?: string;
  variant?: ModalVariant;
  closable?: boolean;
  onClose?: () => void;
}

export interface ModalItem {
  id: string;
  title?: string;
  closable: boolean;
  onClose?: () => void;
  content: ReactNode;
}

export interface ConfirmOptions {
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
  isLoading?: boolean;
}

// Store

export interface ModalStore {
  stack: ModalItem[];
  open: (content: React.ReactNode, options?: ModalOptions) => string;
  close: (id: string) => void;
  closeLast: () => void;
  closeAll: () => void;
}

// Props

export interface ModalPortalProps {
  children: React.ReactNode;
}

export interface BaseModalProps {
  title?: string;
  closable?: boolean;
  hasBack?: boolean;
  isTop?: boolean;
  onClose: () => void;
  onBack?: () => void;
  children: React.ReactNode;
}

export interface BaseBottomSheetProps {
  title?: string;
  closable?: boolean;
  hasBack?: boolean;
  isTop?: boolean;
  onClose: () => void;
  onBack?: () => void;
  children: React.ReactNode;
}

export interface ConfirmModalProps extends ConfirmOptions {
  onConfirm: () => void;
  onCancel?: () => void;
}
