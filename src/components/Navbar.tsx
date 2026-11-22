import { useState } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useI18n } from '@/i18n';
import type { Page } from '@/router';

export const NAV_ITEMS: { page: Page; labelKey: string }[] = [
  { page: 'home', labelKey: 'nav.home' },
  { page: 'courses', labelKey: 'nav.courses' },
  { page: 'dashboard', labelKey: 'nav.dashboard' },
  { page: 'about', labelKey: 'nav.about' },
  { page: 'contact', labelKey: 'nav.contact' },
];

interface NavbarProps {
  current: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ current, onNavigate }: NavbarProps) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const go = (page: Page) => {
    onNavigate(page);
    setOpen(false);
  };

  const linkClass = (active: boolean) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      active
        ? 'bg-olive-100 text-olive-800 dark:bg-olive-900/40 dark:text-olive-200'
        : 'text-charcoal-700 hover:bg-olive-50 hover:text-olive-700 dark:text-beige-100 dark:hover:bg-charcoal-800 dark:hover:text-olive-200'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-beige-200 bg-ivory-50/90 backdrop-blur transition-colors dark:border-charcoal-800 dark:bg-charcoal-950/90">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <button type="button" onClick={() => go('home')} className="flex items-center gap-2.5" aria-label={t('brand.name')}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-olive-600 text-ivory-50 shadow-sm">
            <GraduationCap className="h-6 w-6" />
          </span>
          <span className="text-lg font-bold leading-tight tracking-tight text-charcoal-800 dark:text-ivory-100">
            EduSpace <span className="text-olive-600 dark:text-olive-300">Learning</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map(({ page, labelKey }) => (
            <button key={page} type="button" onClick={() => go(page)} className={linkClass(current === page)}>
              {t(labelKey)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => go('courses')}
            className="hidden rounded-xl bg-olive-600 px-4 py-2.5 text-sm font-semibold text-ivory-50 shadow-sm transition-all hover:bg-olive-500 hover:shadow-md md:inline-block"
          >
            {t('nav.getStarted')}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={t('nav.menu')}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-charcoal-700 transition-colors hover:bg-olive-50 dark:text-beige-100 dark:hover:bg-charcoal-800 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-beige-200 bg-ivory-50 px-4 pb-4 pt-2 dark:border-charcoal-800 dark:bg-charcoal-950 lg:hidden">
          {NAV_ITEMS.map(({ page, labelKey }) => (
            <button
              key={page}
              type="button"
              onClick={() => go(page)}
              className={`block w-full px-3 py-3 text-start text-sm font-medium ${linkClass(current === page)}`}
            >
              {t(labelKey)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
