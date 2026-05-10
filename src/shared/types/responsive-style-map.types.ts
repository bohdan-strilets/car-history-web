import type { Breakpoint } from '@shared/styles';

export type ResponsiveStyleMap = Partial<Record<Breakpoint, Record<string | number, string>>>;
