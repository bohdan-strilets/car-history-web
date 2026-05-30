import { useTheme } from '@shared/styles';
import { Toaster } from 'sonner';

export const ToastProvider = () => {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme.toLowerCase() as 'light' | 'dark';

  return (
    <Toaster
      position="top-center"
      richColors
      closeButton
      duration={4000}
      theme={theme}
      expand={false}
      visibleToasts={3}
    />
  );
};
