import { useCallback, useEffect, useRef } from 'react';

import type { AutoResizeParams } from './textarea.types';

export const useAutoResize = ({ maxRows, value }: AutoResizeParams) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const adjust = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    el.style.height = 'auto';

    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const maxHeight = maxRows ? lineHeight * maxRows : Infinity;
    const nextHeight = Math.min(el.scrollHeight, maxHeight);

    el.style.height = `${nextHeight}px`;
    el.style.overflowY = el.scrollHeight > maxHeight ? 'auto' : 'hidden';
  }, [maxRows]);

  useEffect(() => {
    adjust();
  }, [adjust, value]);

  return { ref, adjust };
};
