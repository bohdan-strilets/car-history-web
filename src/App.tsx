import { Box, Center, Stack } from '@shared/ui';
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
      </Box>
    </>
  );
};
