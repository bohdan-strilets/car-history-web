import { Heading, Panel, Stack } from '@shared/ui';

import type { InfoSectionProps } from './info-section.types';

export const InfoSection = ({ title, children }: InfoSectionProps) => {
  return (
    <Stack gap="xl">
      {title && <Heading size="xl">{title}</Heading>}
      <Panel gap="xs" p={{ mobile: 'sm', tablet: 'xl' }}>
        {children}
      </Panel>
    </Stack>
  );
};
