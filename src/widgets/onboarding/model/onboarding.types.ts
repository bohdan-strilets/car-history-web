// Types

export type OnboardingStep = 'workspace' | 'vehicle' | 'settings' | 'timeline';

// State

export interface OnboardingState {
  currentStep: OnboardingStep;
  workspaceId: string | null;
  completedSteps: OnboardingStep[];
}

// Store

export interface OnboardingStore extends OnboardingState {
  goNext: () => void;
  skip: () => void;
  setWorkspaceId: (id: string) => void;
  canGoNext: () => boolean;
}
