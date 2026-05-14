import { create } from 'zustand';

import type { AuthState } from './auth.types';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  isAuthenticated: false,
  isLoading: false,

  setUser: (user) => set({ user, isAuthenticated: true }),
  setAccessToken: (token) => set({ accessToken: token }),
  setLoading: (isLoading) => set({ isLoading }),
  clearAuth: () => set({ user: null, accessToken: null, isAuthenticated: false }),
}));
