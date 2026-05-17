import { Stack } from '@shared/ui';

import { root } from './header.css';

export const Header = () => {
  return (
    <Stack as="header" direction="row" align="center" justify="end" gap="lg" className={root}>
      {/* <WorkspaceMenu /> */}
      <p>Workspace menu</p>
      {/* <UserMenu /> */}
      <p>User menu</p>
    </Stack>
  );
};
