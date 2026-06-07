import { clsx } from 'clsx';

import logoSrc from '@shared/assets/arvino-logo.png';
import { baseToken, resolveResponsive } from '@shared/lib';

import { icon, responsiveStyles, root, text } from './logo.css';

import type { LogoProps } from './logo.types';

export const Logo = ({ variant = 'full', size, className }: LogoProps) => {
  const baseSize = baseToken(size);

  const responsiveClasses = [
    ...resolveResponsive(responsiveStyles.iconSize, size),
    ...resolveResponsive(responsiveStyles.fontSize, size),
    ...resolveResponsive(responsiveStyles.gap, size),
  ];

  return (
    <div className={clsx(root({ size: baseSize }), ...responsiveClasses, className)}>
      {variant !== 'text' && (
        <img
          src={logoSrc}
          alt="Arvino"
          className={clsx(
            icon({ size: baseSize }),
            ...resolveResponsive(responsiveStyles.iconSize, size),
          )}
        />
      )}

      {variant !== 'icon' && (
        <span
          className={clsx(
            text({ size: baseSize }),
            ...resolveResponsive(responsiveStyles.fontSize, size),
          )}
        >
          Arvino
        </span>
      )}
    </div>
  );
};
