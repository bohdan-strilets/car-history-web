import { Box, Grid } from '@shared/ui';

import { DecorativePanel, FormSide } from './ui';

export const AuthLayout = () => {
  return (
    <Box height="screen">
      <Grid columns={{ mobile: '1', laptop: '2' }}>
        <DecorativePanel />
        <FormSide />
      </Grid>
    </Box>
  );
};
