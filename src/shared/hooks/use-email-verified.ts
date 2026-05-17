import { useAuth } from '@shared/store/auth';

export const useEmailVerified = () => {
  const { user } = useAuth();

  const isVerified = user?.emailVerified ?? false;
  const showBanner = !!user && !isVerified;

  return { isVerified, showBanner };
};
