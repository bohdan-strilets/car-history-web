import { Outlet } from 'react-router-dom';

import { Box, Logo, Stack } from '@shared/ui';

import { container, logoWrapper, wrapper } from './form-side.css';

export const FormSide = () => {
  return (
    <Box p={{ mobile: '3xl', tablet: '5xl' }} height="screen" overflow="y-auto">
      <Stack align="center" className={container}>
        <div className={wrapper}>
          <div className={logoWrapper}>
            <Logo size="xl" variant="icon" />
          </div>
          <Outlet />
        </div>
      </Stack>
    </Box>
  );
};
