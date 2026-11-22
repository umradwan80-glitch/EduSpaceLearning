import { Globe } from 'lucide-react';
import { useI18n } from '@/i18n';

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();
  const next: 'ar' | 'en' = lang === 'en' ? 'ar' : 'en';

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
      title={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
      className="inline-flex h-10 items-center gap-1.5 rounded-full border border-olive-200 bg-ivory-50 px-3 text-sm font-semibold text-olive-700 transition-all hover:bg-olive-50 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-500 dark:border-olive-800 dark:bg-charcoal-900 dark:text-olive-200 dark:hover:bg-charcoal-800"
    >
      <Globe className="h-4 w-4" />
      {t('nav.lang')}
    </button>
  );
}
