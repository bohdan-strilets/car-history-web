import { Heading, Logo, Stack, Text } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { FeatureList, type Feature } from '../feature-list';

import { container, content, glow } from './decorative-panel.css';

export const DecorativePanel = () => {
  const { t } = useTranslation();

  const features = t('auth.panel.features', { returnObjects: true }) as Array<Feature>;

  return (
    <div className={container}>
      <div className={glow} />
      <div className={content}>
        <div />
        <Stack align="center" gap="3xl">
          <Logo size="4xl" />
          <Stack gap="sm">
            <Heading as="h2" size="4xl" align="center" weight="extraBold">
              {t('auth.panel.title')}
            </Heading>
            <Text align="center" weight="medium" color="tertiary">
              {t('auth.panel.subtitle')}
            </Text>
          </Stack>
          <FeatureList features={features} />
        </Stack>
        <Stack>
          <Text align="center" weight="medium" color="tertiary" size="sm">
            © 2026 all rights reserved
          </Text>
          <Text align="center" weight="medium" color="tertiary" size="xs">
            Arvino version 1.0.0
          </Text>
        </Stack>
      </div>
    </div>
  );
};
