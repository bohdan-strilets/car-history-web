import { useTheme, type Theme } from '@shared/styles';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const opacity = (currentTheme: Theme) => (theme === currentTheme ? 1 : 0.4);

  return (
    <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999, display: 'flex', gap: 8 }}>
      <button onClick={() => setTheme('light')} style={{ opacity: opacity('light') }}>
        ☀️ Light
      </button>
      <button onClick={() => setTheme('dark')} style={{ opacity: opacity('dark') }}>
        🌑 Dark
      </button>
      <button onClick={() => setTheme('system')} style={{ opacity: opacity('system') }}>
        💻 System
      </button>
    </div>
  );
};
