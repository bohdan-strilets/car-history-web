import { Box, Center, Grid, Stack } from '@shared/ui';
import { LanguageToggle } from '@widgets/language-toggle';
import { ThemeToggle } from '@widgets/theme-toggle';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('welcome')}</p>
      <ThemeToggle />
      <LanguageToggle />

      <Box p="md">
        <Center>
          <Stack direction={{ mobile: 'column', tablet: 'row' }} justify="around">
            <p>Box1</p>
            <p>Box2</p>
          </Stack>
        </Center>

        <Grid columns={{ mobile: 2, tablet: 3, desktop: 4 }} gap="md">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
        </Grid>
      </Box>
    </>
  );
};
