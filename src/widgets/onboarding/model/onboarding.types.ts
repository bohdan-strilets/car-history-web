// Types

export type OnboardingStep = 'welcome' | 'workspace' | 'vehicle' | 'settings' | 'timeline';

// Store

export interface OnboardingStore {
  currentStep: OnboardingStep;
  completedSteps: OnboardingStep[];

  goNext: () => void;
  goBack: () => void;
  skip: () => void;
  canGoNext: () => boolean;
}

// Props

export interface WelcomeStepProps {
  onNext: () => void;
}

export interface WorkspaceStepProps {
  onNext: () => void;
}

export interface VehicleStepProps {
  onNext: () => void;
  onSkip?: () => void;
}

export interface SettingsStepProps {
  onNext: () => void;
  onSkip?: () => void;
}

export interface TimelineStepProps {
  onNext: () => void;
}

export interface StepSuccessProps {
  title: string;
  description?: string;
  onDone: () => void;
  delay?: number;
}
