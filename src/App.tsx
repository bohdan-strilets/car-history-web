import { Box, Center, Divider, Grid, Stack, Surface, Text } from '@shared/ui';
import { LanguageToggle } from '@widgets/language-toggle';
import { ThemeToggle } from '@widgets/theme-toggle';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const { t } = useTranslation();

  return (
    <Stack gap="xl">
      <Text>{t('welcome')}</Text>
      <ThemeToggle />
      <LanguageToggle />

      <Box p="md">
        <Stack gap="3xl">
          <Center>
            <Stack direction={{ mobile: 'column', tablet: 'row' }} justify="around">
              <Text>Box1</Text>
              <Text>Box2</Text>
            </Stack>
          </Center>

          <Grid columns={{ mobile: 2, tablet: 3, desktop: 4 }} gap="md">
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
            <Text>5</Text>
            <Text>6</Text>
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
              <Text color="accent" weight="medium" letterSpacing="wide" transform="uppercase">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem
                consequatur vero ratione numquam, dolores, aperiam dolorem, tempore eveniet
                explicabo iusto ab enim labore rerum iure impedit at illo minima!
              </Text>
            </Box>
          </Surface>
        </Stack>
      </Box>
    </Stack>
  );
};
