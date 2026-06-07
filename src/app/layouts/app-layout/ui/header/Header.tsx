import { Logo, Stack } from '@shared/ui';
import { HeaderBar } from '@widgets/header-bar';

import { root } from './header.css';

export const Header = () => {
  return (
    <Stack as="header" direction="row" align="center" justify="between" gap="xl" className={root}>
      <Logo variant="icon" size="xl" />
      <HeaderBar />
    </Stack>
  );
};
