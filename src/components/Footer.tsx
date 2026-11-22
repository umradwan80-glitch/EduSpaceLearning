import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import { useI18n } from '@/i18n';
import type { Page } from '@/router';

export default function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const { t } = useI18n();
  const links: { page: Page; labelKey: string }[] = [
    { page: 'home', labelKey: 'nav.home' },
    { page: 'courses', labelKey: 'nav.courses' },
    { page: 'dashboard', labelKey: 'nav.dashboard' },
    { page: 'about', labelKey: 'nav.about' },
    { page: 'contact', labelKey: 'nav.contact' },
  ];

  return (
    <footer className="border-t border-beige-200 bg-ivory-50 transition-colors dark:border-charcoal-800 dark:bg-charcoal-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-olive-600 text-ivory-50">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="font-bold text-charcoal-800 dark:text-ivory-100">EduSpace Learning</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-500 dark:text-beige-100/70">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal-700 dark:text-olive-300">
              {t('footer.quickLinks')}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {links.map(({ page, labelKey }) => (
                <li key={page}>
                  <button
                    type="button"
                    onClick={() => onNavigate(page)}
                    className="text-sm text-charcoal-600 transition-colors hover:text-olive-600 dark:text-beige-100/80 dark:hover:text-olive-300"
                  >
                    {t(labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal-700 dark:text-olive-300">
              {t('footer.contactTitle')}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-charcoal-600 dark:text-beige-100/80">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-olive-600 dark:text-olive-300" />
                hello@eduspacelearning.com
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-olive-600 dark:text-olive-300" />
                +1 (555) 012-3456
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-olive-600 dark:text-olive-300" />
                {t('contact.addressValue')}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-beige-200 pt-6 text-center text-sm text-charcoal-500 dark:border-charcoal-800 dark:text-beige-100/60">
          © {new Date().getFullYear()} EduSpace Learning. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
