export interface ScrollViewProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  className?: string;
  children: React.ReactNode;
}
