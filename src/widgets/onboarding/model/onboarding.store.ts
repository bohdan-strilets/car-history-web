import { create } from 'zustand';

import { ONBOARDING_STEPS } from './onboarding.config';
import type { OnboardingStore } from './onboarding.types';

export const useOnboardingStore = create<OnboardingStore>((set, get) => ({
  currentStep: 'welcome',
  workspaceId: null,
  completedSteps: [],

  setWorkspaceId: (id) => set({ workspaceId: id }),

  canGoNext: () => {
    const { currentStep, workspaceId } = get();
    if (currentStep === 'workspace') return false;
    if (currentStep === 'vehicle' && !workspaceId) return false;
    return true;
  },

  goNext: () => {
    const { currentStep, completedSteps } = get();
    const currentIndex = ONBOARDING_STEPS.indexOf(currentStep);
    if (currentIndex < ONBOARDING_STEPS.length - 1) {
      set({
        currentStep: ONBOARDING_STEPS[currentIndex + 1],
        completedSteps: [...completedSteps, currentStep],
      });
    }
  },

  skip: () => {
    get().goNext();
  },
}));
