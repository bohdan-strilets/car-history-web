import { breakpoints } from '../contract';

export const media = {
  mobile: `screen and (min-width: ${breakpoints.mobile}px)`,
  tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
  laptop: `screen and (min-width: ${breakpoints.laptop}px)`,
  desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
  wideDesktop: `screen and (min-width: ${breakpoints.wideDesktop}px)`,
} as const;
