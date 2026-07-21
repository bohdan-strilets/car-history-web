import { useTranslation } from 'react-i18next';

import { useDashboardQuery } from '@entities/dashboard';
import { useActiveWorkspace, useWorkspaceSettingsQuery } from '@entities/workspace';
import { useAuth } from '@shared/store';
import { Heading, Stack, Text } from '@shared/ui';
import { DashboardOverview, DashboardOverviewSkeleton } from '@widgets/dashboard-overview';

export const DashboardPage = () => {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const { activeWorkspaceId } = useActiveWorkspace();

  const { data, isLoading } = useDashboardQuery(activeWorkspaceId ?? '');
  const { data: settingsData } = useWorkspaceSettingsQuery(activeWorkspaceId ?? '');

  const dashboard = data?.data;
  const currency = settingsData?.data?.currency ?? 'PLN';

  if (!activeWorkspaceId || isLoading || !dashboard) return <DashboardOverviewSkeleton />;

  return (
    <Stack gap="3xl">
      <Stack gap="md">
        <Heading size={{ mobile: 'xl', tablet: '2xl', desktop: '4xl' }}>
          {t('dashboard.greeting', { name: user?.firstName })}
        </Heading>
        <Text color="tertiary" size="lg">
          {new Date().toLocaleDateString(i18n.language, {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </Text>
      </Stack>

      <DashboardOverview
        dashboard={dashboard}
        workspaceId={activeWorkspaceId}
        currency={currency}
      />
    </Stack>
  );
};
