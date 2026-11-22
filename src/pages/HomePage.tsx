import { ArrowRight, Award, CheckCircle, Clock, GraduationCap, PlayCircle, Sparkles, Users } from 'lucide-react';
import { useI18n } from '@/i18n';
import { CATEGORY_ICONS, COURSES } from '@/data/courses';
import CourseCard from '@/components/CourseCard';
import type { Course } from '@/data/courses';
import type { Page } from '@/router';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenCourse: (course: Course) => void;
}

export default function HomePage({ onNavigate, onOpenCourse }: HomePageProps) {
  const { t, lang } = useI18n();
  const featured = COURSES.slice(0, 3);
  const stats = [
    { value: '12,000+', labelKey: 'hero.stat1' },
    { value: '450+', labelKey: 'hero.stat2' },
    { value: '98%', labelKey: 'hero.stat3' },
    { value: '60+', labelKey: 'hero.stat4' },
  ];
  const whyItems = [1, 2, 3, 4].map((n) => ({
    title: t(`why.${n}.title`),
    desc: t(`why.${n}.desc`),
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-olive-50 via-transparent to-transparent dark:from-olive-900/20 dark:via-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-olive-200 bg-olive-50 px-3 py-1 text-xs font-semibold text-olive-700 dark:border-olive-800 dark:bg-olive-900/40 dark:text-olive-200">
                <Sparkles className="h-3.5 w-3.5" />
                {t('hero.badge')}
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-charcoal-800 sm:text-5xl lg:text-6xl dark:text-ivory-100">
                {t('hero.title1')}
                <br />
                <span className="text-olive-600 dark:text-olive-300">{t('hero.title2')}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-600 dark:text-beige-100/80">
                {t('hero.subtitle')}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('courses')}
                  className="inline-flex items-center gap-2 rounded-xl bg-olive-600 px-6 py-3 font-semibold text-ivory-50 shadow-sm transition-all hover:bg-olive-500 hover:shadow-md"
                >
                  {t('hero.exploreCourses')}
                  <ArrowRight className="h-4 w-4 flip-rtl" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('dashboard')}
                  className="inline-flex items-center gap-2 rounded-xl border border-beige-300 bg-ivory-50 px-6 py-3 font-semibold text-charcoal-700 transition-colors hover:bg-beige-100 dark:border-charcoal-700 dark:bg-charcoal-900 dark:text-beige-100 dark:hover:bg-charcoal-800"
                >
                  <PlayCircle className="h-4 w-4" />
                  {t('hero.viewDashboard')}
                </button>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-charcoal-600 dark:text-beige-100/80">
                {['hero.feature1', 'hero.feature2', 'hero.feature3'].map((key) => (
                  <li key={key} className="inline-flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-olive-600 dark:text-olive-300" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-beige-200 bg-ivory-50 p-8 shadow-xl transition-colors dark:border-charcoal-800 dark:bg-charcoal-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-olive-100 text-olive-700 dark:bg-olive-900/50 dark:text-olive-200">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-charcoal-800 dark:text-ivory-100">{t('hero.cardTitle')}</p>
                    <p className="text-sm text-charcoal-500 dark:text-beige-100/60">{t('hero.cardCourse')}</p>
                  </div>
                </div>
                <span className="rounded-full bg-olive-100 px-3 py-1 text-xs font-semibold text-olive-700 dark:bg-olive-900/50 dark:text-olive-200">
                  72%
                </span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-beige-100 dark:bg-charcoal-800">
                <div className="h-full w-[72%] rounded-full bg-olive-500" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {stats.map(({ value, labelKey }) => (
                  <div key={labelKey} className="rounded-xl border border-beige-200 bg-ivory-100 p-4 dark:border-charcoal-800 dark:bg-charcoal-950">
                    <p className="text-xl font-bold text-charcoal-800 dark:text-ivory-100">{value}</p>
                    <p className="text-xs text-charcoal-500 dark:text-beige-100/60">{t(labelKey)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-charcoal-500 dark:text-beige-100/60">
                <Users className="h-4 w-4 text-olive-600 dark:text-olive-300" />
                {t('hero.liveNow')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-beige-200 py-16 transition-colors dark:border-charcoal-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal-800 sm:text-4xl dark:text-ivory-100">
            {t('categories.title')}
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-charcoal-600 dark:text-beige-100/80">
            {t('categories.subtitle')}
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {(['Design', 'Development', 'Business', 'Data', 'Marketing', 'Language'] as const).map((cat) => {
              const Icon = CATEGORY_ICONS[cat];
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onNavigate('courses')}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-beige-200 bg-ivory-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-olive-300 hover:shadow-md dark:border-charcoal-800 dark:bg-charcoal-900 dark:hover:border-olive-700"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive-100 text-olive-700 transition-colors group-hover:bg-olive-600 group-hover:text-ivory-50 dark:bg-olive-900/50 dark:text-olive-200 dark:group-hover:bg-olive-600 dark:group-hover:text-ivory-50">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold text-charcoal-800 dark:text-ivory-100">
                    {t(`categories.${cat}`)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured courses */}
      <section className="border-t border-beige-200 bg-ivory-100/60 py-16 transition-colors dark:border-charcoal-800 dark:bg-charcoal-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal-800 sm:text-4xl dark:text-ivory-100">
              {t('courses.title')}
            </h2>
            <button
              type="button"
              onClick={() => onNavigate('courses')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-olive-700 transition-colors hover:text-olive-500 dark:text-olive-300"
            >
              {t('cta.button')}
              <ArrowRight className="h-4 w-4 flip-rtl" />
            </button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((course) => (
              <CourseCard key={course.id} course={course} onOpen={onOpenCourse} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-t border-beige-200 py-16 transition-colors dark:border-charcoal-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-charcoal-800 sm:text-4xl dark:text-ivory-100">
            {t('why.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-charcoal-600 dark:text-beige-100/80">
            {t('why.subtitle')}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-beige-200 bg-ivory-50 p-6 transition-colors dark:border-charcoal-800 dark:bg-charcoal-900"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-olive-100 text-olive-700 dark:bg-olive-900/50 dark:text-olive-200">
                  {i === 0 && <Clock className="h-5 w-5" />}
                  {i === 1 && <GraduationCap className="h-5 w-5" />}
                  {i === 2 && <Award className="h-5 w-5" />}
                  {i === 3 && <Sparkles className="h-5 w-5" />}
                </span>
                <h3 className="mt-4 font-bold text-charcoal-800 dark:text-ivory-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600 dark:text-beige-100/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-beige-200 py-16 transition-colors dark:border-charcoal-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl bg-olive-700 px-8 py-14 text-center shadow-lg">
            <h2 className="text-3xl font-bold tracking-tight text-ivory-100 sm:text-4xl">{t('cta.title')}</h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-olive-100/90">{t('cta.subtitle')}</p>
            <button
              type="button"
              onClick={() => onNavigate('courses')}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-ivory-50 px-7 py-3 font-semibold text-olive-800 shadow-sm transition-all hover:bg-ivory-200 hover:shadow-md"
            >
              {t('cta.button')}
              <ArrowRight className="h-4 w-4 flip-rtl" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
