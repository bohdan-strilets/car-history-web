import type { StateViewVariant } from './state-view.types';

export const resolvedVariant = (variant: StateViewVariant) => {
  switch (variant) {
    case 'success':
      return 'success';
    case 'error':
      return 'danger';
    default:
      return 'accent';
  }
};

export const resolvedIcon = (variant: StateViewVariant) => {
  switch (variant) {
    case 'success':
      return 'arrowLeft';
    case 'error':
      return 'refresh';
    default:
      return 'plus';
  }
};
