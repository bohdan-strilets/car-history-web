import { create } from 'zustand';

import type { OnboardingStep, OnboardingStore } from './onboarding.types';

const STEPS: OnboardingStep[] = ['workspace', 'vehicle', 'settings', 'timeline'];

export const useOnboardingStore = create<OnboardingStore>((set, get) => ({
  currentStep: 'workspace',
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
    const currentIndex = STEPS.indexOf(currentStep);
    if (currentIndex < STEPS.length - 1) {
      set({
        currentStep: STEPS[currentIndex + 1],
        completedSteps: [...completedSteps, currentStep],
      });
    }
  },

  skip: () => {
    get().goNext();
  },
}));
