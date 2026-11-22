import { useMemo } from 'react';
import { Award, BookOpen, CalendarDays, Flame, Target, TrendingUp } from 'lucide-react';
import { useI18n } from '@/i18n';
import { COURSES } from '@/data/courses';
import type { Course } from '@/data/courses';
import type { Page } from '@/router';

interface DashboardPageProps {
  enrolledIds: string[];
  onNavigate: (page: Page) => void;
  onOpenCourse: (course: Course) => void;
}

const WEEKLY_ACTIVITY = [
  { day: 'S', value: 3 },
  { day: 'M', value: 5 },
  { day: 'T', value: 2 },
  { day: 'W', value: 6 },
  { day: 'T', value: 4 },
  { day: 'F', value: 1 },
  { day: 'S', value: 3 },
];

const SESSIONS = [
  { day: 'Mon', dayAr: 'الاثنين', topic: { en: 'Typography deep-dive', ar: 'غوص في علم الخطوط' }, time: '10:00' },
  { day: 'Wed', dayAr: 'الأربعاء', topic: { en: 'React components lab', ar: 'مختبر مكونات React' }, time: '14:00' },
  { day: 'Fri', dayAr: 'الجمعة', topic: { en: 'Charting workshop', ar: 'ورشة الرسوم البيانية' }, time: '09:30' },
];

export default function DashboardPage({ enrolledIds, onNavigate, onOpenCourse }: DashboardPageProps) {
  const { t, lang } = useI18n();

  const enrolled = useMemo(
    () => COURSES.filter((c) => enrolledIds.includes(c.id)),
    [enrolledIds],
  );

  const lessonsDone = enrolled.reduce((sum, c) => sum + Math.round((c.lessons.length * 45) / 100), 0) || 12;
  const maxActivity = Math.max(...WEEKLY_ACTIVITY.map((w) => w.value));

  const dayNames = lang === 'ar'
    ? ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س']
    : ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-charcoal-800 sm:text-4xl dark:text-ivory-100">
        {t('dashboard.title')}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-charcoal-600 dark:text-beige-100/80">
        {t('dashboard.subtitle')}
      </p>

      {/* Summary stats */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: t('dashboard.dayStreak'), value: '12', icon: Flame, tone: 'text-orange-500' },
          { label: t('dashboard.hoursLearned'), value: '34', icon: BookOpen, tone: 'text-sky-600' },
          { label: t('dashboard.certificates'), value: '3', icon: Award, tone: 'text-amber-500' },
          { label: t('dashboard.weekGoal'), value: '78%', icon: Target, tone: 'text-olive-600 dark:text-olive-300' },
        ].map(({ label, value, icon: Icon, tone }) => (
          <div
            key={label}
            className="rounded-2xl border border-beige-200 bg-ivory-50 p-5 transition-colors dark:border-charcoal-800 dark:bg-charcoal-900"
          >
            <Icon className={`h-5 w-5 ${tone}`} />
            <p className="mt-3 text-2xl font-bold text-charcoal-800 dark:text-ivory-100">{value}</p>
            <p className="text-xs text-charcoal-500 dark:text-beige-100/60">{label}</p>
          </div>
        ))}
      </div>

      {enrolled.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-beige-200 bg-ivory-50 p-12 text-center dark:border-charcoal-800 dark:bg-charcoal-900">
          <BookOpen className="mx-auto h-10 w-10 text-olive-500" />
          <p className="mt-4 text-lg text-charcoal-600 dark:text-beige-100/80">{t('dashboard.notEnrolled')}</p>
          <button
            type="button"
            onClick={() => onNavigate('courses')}
            className="mt-6 rounded-xl bg-olive-600 px-6 py-3 font-semibold text-ivory-50 transition-colors hover:bg-olive-500"
          >
            {t('dashboard.browse')}
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {/* Enrolled courses with progress */}
            <div className="rounded-2xl border border-beige-200 bg-ivory-50 p-6 transition-colors dark:border-charcoal-800 dark:bg-charcoal-900">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-charcoal-800 dark:text-ivory-100">{t('dashboard.enrolledCourses')}</h2>
                <TrendingUp className="h-4 w-4 text-olive-600 dark:text-olive-300" />
              </div>
              <ul className="mt-6 space-y-6">
                {enrolled.map((course) => {
                  const progress = course.id === 'data-analytics' ? 88 : course.id === 'design-fundamentals' ? 72 : 45;
                  const done = Math.round((course.lessons.length * progress) / 100);
                  return (
                    <li key={course.id}>
                      <button
                        type="button"
                        onClick={() => onOpenCourse(course)}
                        className="flex w-full items-center justify-between text-sm font-medium text-charcoal-800 transition-colors hover:text-olive-600 dark:text-ivory-100 dark:hover:text-olive-300"
                      >
                        <span>{course.title[lang]}</span>
                        <span className="text-charcoal-500 dark:text-beige-100/60">
                          {progress}% {t('dashboard.completion')}
                        </span>
                      </button>
                      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-beige-100 dark:bg-charcoal-800">
                        <div
                          className="h-full rounded-full bg-olive-500 transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <p className="mt-1.5 text-xs text-charcoal-500 dark:text-beige-100/60">
                        {done} {t('dashboard.completed')} · {course.lessons.length - done} {t('dashboard.remaining')} ·{' '}
                        {course.lessons.length} {t('courses.lessons')}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Weekly activity */}
            <div className="rounded-2xl border border-beige-200 bg-ivory-50 p-6 transition-colors dark:border-charcoal-800 dark:bg-charcoal-900">
              <h2 className="font-bold text-charcoal-800 dark:text-ivory-100">{t('dashboard.activity')}</h2>
              <p className="mt-1 text-sm text-charcoal-500 dark:text-beige-100/60">
                {t('dashboard.activitySub')} — {lessonsDone}
              </p>
              <div className="mt-6 flex h-36 items-end gap-3" role="img" aria-label={t('dashboard.activity')}>
                {WEEKLY_ACTIVITY.map((w, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-2">
                    <div className="flex h-24 w-full items-end">
                      <div
                        className="w-full rounded-t-lg bg-olive-400 transition-all duration-500 dark:bg-olive-500"
                        style={{ height: `${(w.value / maxActivity) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-charcoal-500 dark:text-beige-100/60">{dayNames[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming sessions */}
          <div className="rounded-2xl border border-beige-200 bg-ivory-50 p-6 transition-colors dark:border-charcoal-800 dark:bg-charcoal-900">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-olive-600 dark:text-olive-300" />
              <h2 className="font-bold text-charcoal-800 dark:text-ivory-100">{t('dashboard.upcoming')}</h2>
            </div>
            <ul className="mt-5 space-y-4">
              {SESSIONS.map((s) => (
                <li
                  key={s.day}
                  className="rounded-xl border border-beige-200 bg-ivory-100 p-4 dark:border-charcoal-800 dark:bg-charcoal-950"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-charcoal-800 dark:text-ivory-100">
                      {lang === 'ar' ? s.dayAr : s.day}
                    </span>
                    <span className="text-xs text-charcoal-500 dark:text-beige-100/60">{s.time}</span>
                  </div>
                  <p className="mt-1 text-sm text-charcoal-600 dark:text-beige-100/70">{s.topic[lang]}</p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-6 w-full rounded-xl bg-olive-600 px-4 py-2.5 text-sm font-semibold text-ivory-50 transition-colors hover:bg-olive-500"
            >
              {t('dashboard.join')}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
