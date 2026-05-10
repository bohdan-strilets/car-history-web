import type { Breakpoint } from '@shared/styles';

export type ResponsiveValue<T extends string | number> = T | Partial<Record<Breakpoint, T>>;
