import { Heading, Stack, SuccessState, Text } from '@shared/ui/primitives';
import { useEffect } from 'react';

import type { StepSuccessProps } from '../model';

export const StepSuccess = ({ title, description, onDone, delay = 1500 }: StepSuccessProps) => {
  useEffect(() => {
    const timer = setTimeout(onDone, delay);
    return () => clearTimeout(timer);
  }, [delay, onDone]);

  return (
    <Stack align="center" justify="center" gap="lg">
      <SuccessState />
      <Stack align="center" gap="xs">
        <Heading as="h3" size="lg" align="center">
          {title}
        </Heading>
        {description && (
          <Text color="secondary" align="center">
            {description}
          </Text>
        )}
      </Stack>
    </Stack>
  );
};
