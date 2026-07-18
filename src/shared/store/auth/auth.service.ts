import type { User } from '@entities/user';
import { storage, STORAGE_KEYS } from '@shared/lib';

import { useAuthStore } from './auth.store';

export const authService = {
  getUser: () => useAuthStore.getState().user,
  setUser: (user: User) => useAuthStore.getState().setUser(user),
  clearAuth: () => {
    storage.remove(STORAGE_KEYS.SESSION_HINT_KEY);
    storage.remove(STORAGE_KEYS.CSRF_TOKEN_KEY);
    storage.remove(STORAGE_KEYS.WORKSPACE_STORAGE_KEY);
    useAuthStore.getState().clearAuth();
  },
  isAuthenticated: () => useAuthStore.getState().isAuthenticated,
  setLoading: (loading: boolean) => useAuthStore.getState().setLoading(loading),
  getAccessToken: () => useAuthStore.getState().accessToken,
  setAccessToken: (token: string) => {
    storage.set(STORAGE_KEYS.SESSION_HINT_KEY, '1');
    useAuthStore.getState().setAccessToken(token);
  },
  getCsrfToken: () => useAuthStore.getState().csrfToken ?? storage.get(STORAGE_KEYS.CSRF_TOKEN_KEY),
  setCsrfToken: (token: string) => {
    storage.set(STORAGE_KEYS.CSRF_TOKEN_KEY, token);
    useAuthStore.getState().setCsrfToken(token);
  },
  updateUser: (partial: Partial<User>) => useAuthStore.getState().updateUser(partial),
  hasSessionHint: () => storage.get(STORAGE_KEYS.SESSION_HINT_KEY) === '1',
};
