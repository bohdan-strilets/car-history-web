export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  label: string;
  children: React.ReactNode;
  placement?: TooltipPlacement;
  disabled?: boolean;
}
