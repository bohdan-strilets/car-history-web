import { useMeQuery } from '@features/auth/api';
import { Spinner, Stack } from '@shared/ui';

interface InitProviderProps {
  children: React.ReactNode;
}

export const InitProvider = ({ children }: InitProviderProps) => {
  const { isLoading } = useMeQuery();

  if (isLoading) {
    return (
      <Stack align="center" justify="center" style={{ height: '100vh' }}>
        <Spinner size="xl" color="accent" />
      </Stack>
    );
  }

  return <>{children}</>;
};
