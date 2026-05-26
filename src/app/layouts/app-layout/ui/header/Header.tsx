import { IconBox, Logo, Stack } from '@shared/ui';
import { WorkspaceSwitcher } from '@widgets/workspace-switcher';

import { expandedSwitcher, root } from './header.css';

export const Header = () => {
  return (
    <Stack as="header" direction="row" align="center" gap="xl" className={root}>
      <Logo variant="icon" size="xl" />
      <WorkspaceSwitcher className={expandedSwitcher} />
      <IconBox name="user" />
    </Stack>
  );
};
