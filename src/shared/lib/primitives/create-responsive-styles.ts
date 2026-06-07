import { styleVariants } from '@vanilla-extract/css';

import { media, type Breakpoint } from '@shared/styles';

export const createResponsiveStyles = <T extends Record<string, string>>(
  values: T,
  mapFn: (v: string) => Record<string, unknown>,
): Record<Exclude<Breakpoint, 'mobile'>, Record<keyof T, string>> => ({
  tablet: styleVariants(values, (v) => ({
    '@media': { [media.tablet]: mapFn(v) },
  })),
  laptop: styleVariants(values, (v) => ({
    '@media': { [media.laptop]: mapFn(v) },
  })),
  desktop: styleVariants(values, (v) => ({
    '@media': { [media.desktop]: mapFn(v) },
  })),
  wideDesktop: styleVariants(values, (v) => ({
    '@media': { [media.wideDesktop]: mapFn(v) },
  })),
});
