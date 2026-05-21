import { create } from 'zustand';

import { ONBOARDING_STEPS } from './onboarding.config';
import type { OnboardingStore } from './onboarding.types';

export const useOnboardingStore = create<OnboardingStore>((set, get) => ({
  currentStep: 'welcome',
  completedSteps: [],

  canGoNext: () => {
    const { currentStep } = get();
    if (currentStep === 'workspace') return false;
    if (currentStep === 'vehicle') return false;
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

  goBack: () => {
    const { currentStep } = get();
    const currentIndex = ONBOARDING_STEPS.indexOf(currentStep);
    if (currentIndex > 0) {
      set({ currentStep: ONBOARDING_STEPS[currentIndex - 1] });
    }
  },

  skip: () => {
    get().goNext();
  },
}));
