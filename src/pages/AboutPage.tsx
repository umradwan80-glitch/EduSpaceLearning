import { Award, Compass, Globe2, HeartHandshake, Target, Users } from 'lucide-react';
import { useI18n } from '@/i18n';

export default function AboutPage() {
  const { t } = useI18n();

  const goals = ['about.goal1', 'about.goal2', 'about.goal3', 'about.goal4'];
  const values = [1, 2, 3].map((n) => ({ title: t(`about.values.${n}`), desc: t(`about.values.${n}d`) }));
  const stats = [
    { value: '12,000+', labelKey: 'about.stats.learners' },
    { value: '450+', labelKey: 'about.stats.courses' },
    { value: '60+', labelKey: 'about.stats.instructors' },
    { value: '2', labelKey: 'about.stats.langs' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      {/* Intro */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-olive-200 bg-olive-50 px-3 py-1 text-xs font-semibold text-olive-700 dark:border-olive-800 dark:bg-olive-900/40 dark:text-olive-200">
          <Globe2 className="h-3.5 w-3.5" />
          {t('about.badge')}
        </span>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-charcoal-800 sm:text-5xl dark:text-ivory-100">
          {t('about.title')}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal-600 dark:text-beige-100/80">{t('about.p1')}</p>
        <p className="mt-4 text-lg leading-relaxed text-charcoal-600 dark:text-beige-100/80">{t('about.p2')}</p>
      </div>

      {/* Stats */}
      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map(({ value, labelKey }) => (
          <div
            key={labelKey}
            className="rounded-2xl border border-beige-200 bg-ivory-50 p-6 text-center transition-colors dark:border-charcoal-800 dark:bg-charcoal-900"
          >
            <p className="text-3xl font-extrabold text-olive-600 dark:text-olive-300">{value}</p>
            <p className="mt-1 text-sm text-charcoal-500 dark:text-beige-100/60">{t(labelKey)}</p>
          </div>
        ))}
      </div>

      {/* Mission */}
      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-olive-700 p-8 sm:p-10">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive-600 text-ivory-100">
            <Target className="h-6 w-6" />
          </span>
          <h2 className="mt-5 text-2xl font-bold text-ivory-100">{t('about.mission.title')}</h2>
          <p className="mt-4 leading-relaxed text-olive-100/90">{t('about.mission.desc')}</p>
        </div>
        <div className="rounded-3xl border border-beige-200 bg-ivory-50 p-8 sm:p-10 dark:border-charcoal-800 dark:bg-charcoal-900">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive-100 text-olive-700 dark:bg-olive-900/50 dark:text-olive-200">
            <Compass className="h-6 w-6" />
          </span>
          <h2 className="mt-5 text-2xl font-bold text-charcoal-800 dark:text-ivory-100">{t('about.goals.title')}</h2>
          <ul className="mt-5 space-y-3">
            {goals.map((key) => (
              <li key={key} className="flex items-start gap-2.5 text-sm leading-relaxed text-charcoal-700 dark:text-beige-100/85">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-olive-600 dark:text-olive-300" />
                {t(key)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Values */}
      <div className="mt-16">
        <h2 className="text-center text-3xl font-bold tracking-tight text-charcoal-800 sm:text-4xl dark:text-ivory-100">
          {t('about.values.title')}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="rounded-2xl border border-beige-200 bg-ivory-50 p-8 text-center transition-colors dark:border-charcoal-800 dark:bg-charcoal-900"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-olive-100 text-olive-700 dark:bg-olive-900/50 dark:text-olive-200">
                {i === 0 && <HeartHandshake className="h-6 w-6" />}
                {i === 1 && <Award className="h-6 w-6" />}
                {i === 2 && <Users className="h-6 w-6" />}
              </span>
              <h3 className="mt-4 text-lg font-bold text-charcoal-800 dark:text-ivory-100">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-600 dark:text-beige-100/70">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
