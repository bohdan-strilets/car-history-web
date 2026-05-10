import { Box } from '@shared/ui';
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos laboriosam maxime
        tempore distinctio. Aperiam reprehenderit magni asperiores unde ut repellat autem illum
        rerum voluptas? Inventore enim molestias est qui?
      </Box>
    </>
  );
};
