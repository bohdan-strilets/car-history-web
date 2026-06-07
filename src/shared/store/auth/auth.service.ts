import { useAuthStore } from './auth.store';

import type { User } from '@entities/user';

export const authService = {
  getUser: () => useAuthStore.getState().user,
  setUser: (user: User) => useAuthStore.getState().setUser(user),
  clearAuth: () => useAuthStore.getState().clearAuth(),

  isAuthenticated: () => useAuthStore.getState().isAuthenticated,

  setLoading: (loading: boolean) => useAuthStore.getState().setLoading(loading),

  getAccessToken: () => useAuthStore.getState().accessToken,
  setAccessToken: (token: string) => useAuthStore.getState().setAccessToken(token),

  updateUser: (partial: Partial<User>) => useAuthStore.getState().updateUser(partial),
};
