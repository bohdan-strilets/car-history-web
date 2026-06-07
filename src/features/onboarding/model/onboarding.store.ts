import { create } from 'zustand';

import { ONBOARDING_STEPS } from './onboarding.config';

import type { OnboardingStore } from './onboarding.types';

export const useOnboardingStore = create<OnboardingStore>((set, get) => ({
  currentStep: 'welcome',
  completedSteps: [],

  goNext: () => {
    const { currentStep, completedSteps } = get();
    const currentIndex = ONBOARDING_STEPS.indexOf(currentStep);
    const hasNextStep = currentIndex < ONBOARDING_STEPS.length - 1;

    if (hasNextStep) {
      set({
        currentStep: ONBOARDING_STEPS[currentIndex + 1],
        completedSteps: [...completedSteps, currentStep],
      });
    }
  },

  skip: () => {
    get().goNext();
  },

  resetStore: () => {
    set({
      currentStep: 'welcome',
      completedSteps: [],
    });
  },
}));
