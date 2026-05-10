import type { Breakpoint } from '@shared/styles';

export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;
