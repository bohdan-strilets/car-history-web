import { useTheme } from '@shared/styles';
import { Toaster } from 'sonner';

export const ToastProvider = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      position="top-center"
      richColors
      closeButton
      duration={4000}
      theme={resolvedTheme}
      expand={false}
      visibleToasts={3}
    />
  );
};
