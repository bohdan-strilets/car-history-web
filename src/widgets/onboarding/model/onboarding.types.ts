// Types

export type OnboardingStep = 'welcome' | 'workspace' | 'vehicle' | 'settings' | 'timeline';

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

// Props

export interface WelcomeStepProps {
  onNext: () => void;
}

export interface WorkspaceStepProps {
  onNext: () => void;
  onSkip: () => void;
}

export interface VehicleStepProps {
  onNext: () => void;
  onSkip: () => void;
}

export interface SettingsStepProps {
  onNext: () => void;
  onSkip: () => void;
}

export interface TimelineStepProps {
  onNext: () => void;
  onSkip: () => void;
}

export interface StepSuccessProps {
  title: string;
  description?: string;
  onDone: () => void;
  delay?: number;
}
