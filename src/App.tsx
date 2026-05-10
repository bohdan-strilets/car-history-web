import { Box, Center, Divider, Grid, Stack, Surface } from '@shared/ui';
import { LanguageToggle } from '@widgets/language-toggle';
import { ThemeToggle } from '@widgets/theme-toggle';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const { t } = useTranslation();

  return (
    <Stack gap="xl">
      <p>{t('welcome')}</p>
      <ThemeToggle />
      <LanguageToggle />

      <Box p="md">
        <Stack gap="3xl">
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

          <Divider color="accent" />

          <Surface color="amber" colorVariant="soft">
            <Box p="lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem
              consequatur vero ratione numquam, dolores, aperiam dolorem, tempore eveniet explicabo
              iusto ab enim labore rerum iure impedit at illo minima!
            </Box>
          </Surface>
          <Surface gradient="palette-indigo">
            <Box p="lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem
              consequatur vero ratione numquam, dolores, aperiam dolorem, tempore eveniet explicabo
              iusto ab enim labore rerum iure impedit at illo minima!
            </Box>
          </Surface>
          <Surface variant="neu-raised" radius="md">
            <Box p="lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem
              consequatur vero ratione numquam, dolores, aperiam dolorem, tempore eveniet explicabo
              iusto ab enim labore rerum iure impedit at illo minima!
            </Box>
          </Surface>
        </Stack>
      </Box>
    </Stack>
  );
};
