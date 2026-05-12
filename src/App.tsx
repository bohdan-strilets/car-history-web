import {
  Box,
  Button,
  Center,
  Divider,
  Grid,
  Heading,
  Icon,
  IconBox,
  Input,
  Stack,
  Surface,
  Text,
} from '@shared/ui';
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

      <Box p="2xl" width="full">
        <Stack gap="2xl">
          {/* Header */}
          <Stack direction="row" align="center" justify="between">
            <Heading as="h1" size="3xl">
              Arvino
            </Heading>
            <Stack direction="row" gap="sm" align="center">
              <ThemeToggle />
              <LanguageToggle />
            </Stack>
          </Stack>

          <Divider />

          {/* Welcome */}
          <Center>
            <Stack gap="sm" align="center">
              <IconBox name="car" size="xl" soft="orange" radius="xl" />
              <Heading as="h2" size="2xl">
                {t('welcome')}
              </Heading>
              <Text color="secondary">Twój cyfrowy paszport pojazdu</Text>
            </Stack>
          </Center>

          <Divider />

          {/* Stats grid */}
          <Grid columns="3" gap="md">
            <Surface variant="neuRaised" radius="lg">
              <Box p="lg">
                <Stack gap="xs">
                  <Text size="sm" color="tertiary">
                    Przebieg
                  </Text>
                  <Heading size="2xl">85 420 km</Heading>
                </Stack>
              </Box>
            </Surface>

            <Surface variant="neuRaised" radius="lg">
              <Box p="lg">
                <Stack gap="xs">
                  <Text size="sm" color="tertiary">
                    Wydatki
                  </Text>
                  <Heading size="2xl">12 340 zł</Heading>
                </Stack>
              </Box>
            </Surface>

            <Surface soft="danger" radius="lg">
              <Box p="lg">
                <Stack gap="xs">
                  <Text size="sm" color="tertiary">
                    OC wygasa
                  </Text>
                  <Heading size="2xl" color="danger">
                    14 dni
                  </Heading>
                </Stack>
              </Box>
            </Surface>
          </Grid>

          {/* Actions */}
          <Stack direction="row" gap="sm">
            <Button variant="solid" color="accent" leftIcon="plus" size="lg">
              Dodaj pojazd
            </Button>
            <Button variant="soft" color="accent" leftIcon="car">
              Garage
            </Button>
            <Button variant="outline" color="gray" iconOnly>
              <Icon name="settings" />
            </Button>
          </Stack>
        </Stack>

        <form>
          <Input placeholder="Enter email" size="lg" leftIcon="calendar" />
        </form>
      </Box>
    </Stack>
  );
};
