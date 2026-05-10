export const breakpoints = {
  mobile: 420,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  wideDesktop: 1440,
} as const;

export type Breakpoint = keyof typeof breakpoints;
