import { useMutation } from '@tanstack/react-query';

import { userApi } from './user.api';

export const useCompleteOnboardingMutation = () =>
  useMutation({ mutationFn: userApi.completeOnboarding });
