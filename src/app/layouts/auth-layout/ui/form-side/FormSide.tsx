import { Box, Logo, Stack } from '@shared/ui';
import { Outlet } from 'react-router-dom';

import { container, logoWrapper, wrapper } from './form-side.css';

export const FormSide = () => {
  return (
    <Box p={{ mobile: '3xl', tablet: '5xl' }} height="screen">
      <Stack align="center" justify="center" className={container}>
        <div className={wrapper}>
          <div className={logoWrapper}>
            <Logo size="xl" />
          </div>
          <Outlet />
        </div>
      </Stack>
    </Box>
  );
};
