import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={() => i18n.changeLanguage('pl')}
          style={{ opacity: i18n.language === 'pl' ? 1 : 0.4 }}
        >
          🇵🇱 PL
        </button>
        <button
          onClick={() => i18n.changeLanguage('uk')}
          style={{ opacity: i18n.language === 'uk' ? 1 : 0.4 }}
        >
          🇺🇦 UK
        </button>
        <button
          onClick={() => i18n.changeLanguage('en')}
          style={{ opacity: i18n.language === 'en' ? 1 : 0.4 }}
        >
          🇬🇧 EN
        </button>
      </div>
    </div>
  );
};
