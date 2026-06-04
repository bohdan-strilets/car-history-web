import { useActiveVehicle } from '@entities/vehicle';
import { useAuth } from '@shared/store/auth';
import { Badge, Button, Heading, IconBox, Panel, Stack, Text } from '@shared/ui';

export const DashboardPage = () => {
  const { user } = useAuth();
  const { activeVehicle, isLoading } = useActiveVehicle();

  if (isLoading || !activeVehicle) return null;

  return (
    <Stack gap="3xl">
      <Stack direction="row" justify="between" align="center">
        <Stack gap="md">
          <Heading size={'4xl'}>Dzień dobry, {user?.firstName} 👋</Heading>
          <Text color="tertiary" size="lg">
            {new Date().toLocaleDateString('pl-PL', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </Text>
        </Stack>

        <Button size="lg" leftIcon="plus">
          Dodaj zdarzenie
        </Button>
      </Stack>

      <Panel gap="2xl" p="2xl">
        <Stack direction="row" gap="4xl" align="center" justify="between">
          <Stack direction="row" gap="lg" align="center">
            <IconBox name="car" size="3xl" gradient="accentSolid" />
            <Stack gap="md">
              <Heading size="2xl">
                {activeVehicle.brand} {activeVehicle.model}
              </Heading>
              <Text color="tertiary" size="md">
                {activeVehicle.year} · {activeVehicle.plateNumber}
              </Text>
            </Stack>
          </Stack>

          <Stack gap="md">
            <Stack direction="row" gap="md" align="center" justify="between">
              <Text transform="uppercase" weight="semibold" letterSpacing="widest" size="sm">
                Zakupiony
              </Text>
              <Text>12.01.2023</Text>
            </Stack>
            <Stack direction="row" gap="md" align="center" justify="between">
              <Text transform="uppercase" weight="semibold" letterSpacing="widest" size="sm">
                W wlasnosci
              </Text>
              <Text>3 lata</Text>
            </Stack>
            <Stack direction="row" gap="md" align="center" justify="between">
              <Text transform="uppercase" weight="semibold" letterSpacing="widest" size="sm">
                Kraj pochodzenia
              </Text>
              <Text>Niemcy 🇩🇪</Text>
            </Stack>
          </Stack>

          <Stack direction="row" gap="2xl" justify="start" align="center">
            <Stack>
              <Text
                color="tertiary"
                transform="uppercase"
                letterSpacing="widest"
                size="md"
                weight="semibold"
              >
                Przebieg
              </Text>
              <Stack>
                <Text size="5xl" weight="extraBold">
                  {activeVehicle.currentMileage.toLocaleString('pl-PL')}
                </Text>
                <Text color="secondary" size="md">
                  km
                </Text>
              </Stack>
            </Stack>
            <Stack>
              <Text
                color="tertiary"
                transform="uppercase"
                letterSpacing="widest"
                size="md"
                weight="semibold"
              >
                Ten miesiąc
              </Text>
              <Stack>
                <Text size="5xl" weight="extraBold">
                  1 200
                </Text>
                <Text color="secondary" size="md">
                  zl
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="row" gap="lg" align="center" justify="between">
          <Stack direction="row" gap="md">
            <Badge soft="blue" startIcon="fuel" size="md">
              Benzyna
            </Badge>
            <Badge soft="cyan" startIcon="car" size="md">
              Sedan
            </Badge>
            <Badge soft="purple" startIcon="battery" size="md">
              Automatyczna
            </Badge>
          </Stack>

          <Button variant="ghost" rightIcon="chevronRight">
            Zobacz profil
          </Button>
        </Stack>
      </Panel>

      <Stack direction="row" justify="between" gap="2xl">
        <Panel width="full">
          <Text
            color="tertiary"
            transform="uppercase"
            letterSpacing="widest"
            size="md"
            weight="semibold"
          >
            Przypomnienia
          </Text>

          <Panel soft="orange" direction="row" gap="lg" align="center" justify="between">
            <Stack direction="row" gap="md" align="center">
              <IconBox name="mailWarning" size="2xl" soft="orange" />
              <Stack gap="sm">
                <Text weight="semibold">OC wygasa za 12 dni</Text>
                <Text color="secondary" size="sm">
                  31.05.2026 · PZU
                </Text>
              </Stack>
            </Stack>
            <Button variant="ghost" rightIcon="chevronRight" iconOnly color="gray" />
          </Panel>
          <Panel soft="yellow" direction="row" gap="lg" align="center" justify="between">
            <Stack direction="row" gap="md" align="center">
              <IconBox name="wrench" size="2xl" soft="yellow" />
              <Stack gap="sm">
                <Text weight="semibold">Wymiana oleju za 2 000 km</Text>
                <Text color="secondary" size="sm">
                  89 000 km · sierpień 2026
                </Text>
              </Stack>
            </Stack>
            <Button variant="ghost" rightIcon="chevronRight" iconOnly color="gray" />
          </Panel>
        </Panel>

        <Panel width="full">
          <Text
            color="tertiary"
            transform="uppercase"
            letterSpacing="widest"
            size="md"
            weight="semibold"
          >
            Ostatnie zdarzenia
          </Text>

          <Panel variant="glass" direction="row" gap="lg" align="center" justify="between">
            <Stack direction="row" gap="md" align="center">
              <IconBox name="fuel" size="2xl" soft="green" />
              <Stack gap="sm">
                <Text weight="semibold">Tankowanie · 52 l</Text>
                <Text color="secondary" size="sm">
                  22.05 · 87 000 km
                </Text>
              </Stack>
            </Stack>
            <Text weight="bold" color="secondary">
              −312 zł
            </Text>
          </Panel>

          <Panel variant="glass" direction="row" gap="lg" align="center" justify="between">
            <Stack direction="row" gap="md" align="center">
              <IconBox name="wrench" size="2xl" soft="blue" />
              <Stack gap="sm">
                <Text weight="semibold">Serwis · Wymiana filtrów</Text>
                <Text color="secondary" size="sm">
                  10.05 · 86 400 km
                </Text>
              </Stack>
            </Stack>
            <Text weight="bold" color="secondary">
              −312 zł
            </Text>
          </Panel>

          <Panel variant="glass" direction="row" gap="lg" align="center" justify="between">
            <Stack direction="row" gap="md" align="center">
              <IconBox name="list" size="2xl" soft="purple" />
              <Stack gap="sm">
                <Text weight="semibold">Dokument · OC</Text>
                <Text color="secondary" size="sm">
                  01.05 · 86 000 km
                </Text>
              </Stack>
            </Stack>
            <Text weight="bold" color="secondary">
              −312 zł
            </Text>
          </Panel>
        </Panel>
      </Stack>
    </Stack>
  );
};
