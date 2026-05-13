import type { User } from '@entities/user';

import { useAuthStore } from './auth.store';

export const authService = {
  getUser: () => useAuthStore.getState().user,
  isAuthenticated: () => useAuthStore.getState().isAuthenticated,
  setUser: (user: User) => useAuthStore.getState().setUser(user),
  clearAuth: () => useAuthStore.getState().clearAuth(),
  setLoading: (loading: boolean) => useAuthStore.getState().setLoading(loading),
};
