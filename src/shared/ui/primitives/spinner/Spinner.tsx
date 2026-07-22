import { useTranslation } from 'react-i18next';

import { clsx } from 'clsx';

import { baseToken, resolveResponsive } from '@shared/lib';

import { innerRing, outerRing, responsiveStyles, root } from './spinner.css';

import type { SpinnerProps } from './spinner.types';

export const Spinner = ({ size, color = 'accent', className }: SpinnerProps) => {
  const { t } = useTranslation();
  const baseSize = baseToken(size);

  const responsiveClasses = resolveResponsive(responsiveStyles.size, size);

  return (
    <span
      className={clsx(root({ size: baseSize }), ...responsiveClasses, className)}
      role="status"
      aria-label={t('common.state.loading')}
    >
      <span className={outerRing({ color })} />
      <span className={innerRing({ color })} />
    </span>
  );
};

Spinner.displayName = 'Spinner';
