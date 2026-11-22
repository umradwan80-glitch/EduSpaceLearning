import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useI18n } from '@/i18n';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? t('nav.theme.light') : t('nav.theme.dark')}
      title={isDark ? t('nav.theme.light') : t('nav.theme.dark')}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-olive-200 bg-ivory-50 text-charcoal-700 transition-all duration-300 hover:bg-olive-50 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-500 dark:border-olive-800 dark:bg-charcoal-900 dark:text-amber-300 dark:hover:bg-charcoal-800"
    >
      <Sun
        className={`absolute h-5 w-5 transition-all duration-300 ${
          isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-300 ${
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`}
      />
    </button>
  );
}
