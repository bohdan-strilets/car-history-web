import { Box } from '@shared/ui/primitives';
import { OnboardingStepper } from '@widgets/onboarding';

export const OnboardingPage = () => {
  return (
    <Box p="3xl" width="full" height="full">
      <Box width="full" style={{ maxWidth: '640px', margin: '0 auto' }}>
        <OnboardingStepper />
      </Box>
    </Box>
  );
};
