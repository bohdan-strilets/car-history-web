import { breakpoints, type Breakpoint } from '@shared/styles';
import { useEffect, useState } from 'react';

export const useMediaQuery = (breakpoint: Breakpoint, direction: 'up' | 'down'): boolean => {
  const value = breakpoints[breakpoint];
  const minRules = `(min-width: ${value}px)`;
  const maxRules = `(max-width: ${value - 1}px)`;

  const query = direction === 'up' ? minRules : maxRules;

  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};
