import type { MutableRefObject, RefCallback } from 'react';

type Ref<T> = RefCallback<T> | MutableRefObject<T | null> | null;

export const mergeRefs =
  <T>(...refs: Ref<T>[]): RefCallback<T> =>
  (el) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') ref(el);
      else if (ref) ref.current = el;
    });
  };
