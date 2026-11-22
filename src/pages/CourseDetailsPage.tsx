import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  GraduationCap,
  Star,
  User,
} from 'lucide-react';
import { useI18n } from '@/i18n';
import { INSTRUCTOR_ROLE } from '@/data/courses';
import type { Course } from '@/data/courses';
import type { Page } from '@/router';

interface CourseDetailsPageProps {
  course: Course | null;
  enrolled: boolean;
  onEnroll: (course: Course) => void;
  onBack: () => void;
  onNavigate: (page: Page) => void;
}

export default function CourseDetailsPage({ course, enrolled, onEnroll, onBack, onNavigate }: CourseDetailsPageProps) {
  const { t, lang } = useI18n();

  if (!course) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6">
        <p className="text-lg text-charcoal-600 dark:text-beige-100/80">{t('course.notFound')}</p>
      </section>
    );
  }

  const Icon = course.icon;
  const totalMinutes = course.lessons.reduce((sum, l) => sum + l.minutes, 0);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-olive-700 transition-colors hover:text-olive-500 dark:text-olive-300"
      >
        <ArrowRight className="h-4 w-4 flip-rtl rotate-180" />
        {t('courses.backToCourses')}
      </button>

      {enrolled && (
        <div
          role="status"
          className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-olive-300 bg-olive-50 p-6 sm:flex-row sm:items-center dark:border-olive-700 dark:bg-olive-900/30"
        >
          <CheckCircle className="h-8 w-8 shrink-0 text-olive-600 dark:text-olive-300" />
          <div className="flex-1">
            <p className="font-bold text-charcoal-800 dark:text-ivory-100">{t('courses.enrolled')}</p>
            <p className="mt-1 text-sm text-charcoal-600 dark:text-beige-100/80">{t('courses.enrolledDesc')}</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('dashboard')}
            className="shrink-0 rounded-xl bg-olive-600 px-5 py-2.5 text-sm font-semibold text-ivory-50 transition-colors hover:bg-olive-500"
          >
            {t('courses.goToDashboard')}
          </button>
        </div>
      )}

      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          {/* Header */}
          <div>
            <div className={`flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br ${course.gradient}`}>
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ivory-50/90 text-olive-700 dark:bg-charcoal-950/80 dark:text-olive-300">
                <Icon className="h-8 w-8" role="img" aria-label={t(`categories.${course.category}`)} />
              </span>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full bg-olive-100 px-3 py-1 font-semibold text-olive-700 dark:bg-olive-900/50 dark:text-olive-200">
                {t(`categories.${course.category}`)}
              </span>
              <span className="rounded-full bg-beige-100 px-3 py-1 font-semibold text-charcoal-700 dark:bg-charcoal-800 dark:text-beige-100">
                {t(`levels.${course.level}`)}
              </span>
              <span className="inline-flex items-center gap-1 text-charcoal-500 dark:text-beige-100/60">
                <Star className="h-3.5 w-3.5 text-amber-500" /> {course.rating}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-charcoal-800 sm:text-4xl dark:text-ivory-100">
              {course.title[lang]}
            </h1>
          </div>

          {/* Overview */}
          <div>
            <h2 className="text-xl font-bold text-charcoal-800 dark:text-ivory-100">{t('course.overview')}</h2>
            <p className="mt-3 leading-relaxed text-charcoal-600 dark:text-beige-100/80">
              {course.overview[lang]}
            </p>
            <p className="mt-3 leading-relaxed text-charcoal-600 dark:text-beige-100/80">
              {course.description[lang]}
            </p>
          </div>

          {/* Objectives */}
          <div>
            <h2 className="text-xl font-bold text-charcoal-800 dark:text-ivory-100">{t('course.objectives')}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {course.objectives[lang].map((obj) => (
                <li
                  key={obj}
                  className="flex items-start gap-2.5 rounded-xl border border-beige-200 bg-ivory-50 p-4 text-sm text-charcoal-700 dark:border-charcoal-800 dark:bg-charcoal-900 dark:text-beige-100/90"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-olive-600 dark:text-olive-300" />
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculum */}
          <div>
            <h2 className="text-xl font-bold text-charcoal-800 dark:text-ivory-100">{t('course.curriculum')}</h2>
            <ol className="mt-4 space-y-3">
              {course.lessons.map((lesson, i) => (
                <li
                  key={lesson.en}
                  className="flex items-center gap-4 rounded-xl border border-beige-200 bg-ivory-50 p-4 dark:border-charcoal-800 dark:bg-charcoal-900"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-olive-100 text-sm font-bold text-olive-700 dark:bg-olive-900/50 dark:text-olive-200">
                    {i + 1}
                  </span>
                  <span className="flex-1 text-sm font-medium text-charcoal-800 dark:text-ivory-100">
                    {lesson[lang]}
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 text-xs text-charcoal-500 dark:text-beige-100/60">
                    <Clock className="h-3.5 w-3.5" /> {lesson.minutes} min
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-charcoal-500 dark:text-beige-100/60">
              {course.lessons.length} {t('courses.lessons')} · {Math.round(totalMinutes / 60 * 10) / 10}
              {t('courses.hours')}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-2xl border border-beige-200 bg-ivory-50 p-6 shadow-sm dark:border-charcoal-800 dark:bg-charcoal-900">
            <ul className="space-y-4 text-sm">
              <li className="flex items-center justify-between">
                <span className="text-charcoal-500 dark:text-beige-100/60">{t('course.duration')}</span>
                <span className="font-semibold text-charcoal-800 dark:text-ivory-100">{course.hours}{t('courses.hours')}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-charcoal-500 dark:text-beige-100/60">{t('course.level')}</span>
                <span className="font-semibold text-charcoal-800 dark:text-ivory-100">{t(`levels.${course.level}`)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-charcoal-500 dark:text-beige-100/60">{t('course.category')}</span>
                <span className="font-semibold text-charcoal-800 dark:text-ivory-100">{t(`categories.${course.category}`)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-charcoal-500 dark:text-beige-100/60">{t('course.lessonsCount')}</span>
                <span className="font-semibold text-charcoal-800 dark:text-ivory-100">{course.lessons.length}</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => onEnroll(course)}
              disabled={enrolled}
              className="mt-6 w-full rounded-xl bg-olive-600 px-5 py-3 font-semibold text-ivory-50 shadow-sm transition-all hover:bg-olive-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {enrolled ? t('courses.enrolled') : t('courses.enrollNow')}
            </button>
          </div>

          <div className="rounded-2xl border border-beige-200 bg-ivory-50 p-6 dark:border-charcoal-800 dark:bg-charcoal-900">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal-500 dark:text-beige-100/60">
              {t('course.instructor')}
            </h3>
            <div className="mt-4 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-olive-100 text-olive-700 dark:bg-olive-900/50 dark:text-olive-200">
                <User className="h-6 w-6" />
              </span>
              <div>
                <p className="font-bold text-charcoal-800 dark:text-ivory-100">{course.instructor[lang]}</p>
                <p className="inline-flex items-center gap-1 text-xs text-charcoal-500 dark:text-beige-100/60">
                  <GraduationCap className="h-3.5 w-3.5 text-olive-600 dark:text-olive-300" />
                  {INSTRUCTOR_ROLE[lang]}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-600 dark:text-beige-100/70">
              {t('course.instructorBio')}
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-beige-200 bg-ivory-100 p-5 text-sm text-charcoal-600 dark:border-charcoal-800 dark:bg-charcoal-950 dark:text-beige-100/70">
            <BookOpen className="h-5 w-5 shrink-0 text-olive-600 dark:text-olive-300" />
            {t('why.3.desc')}
          </div>
        </aside>
      </div>
    </section>
  );
}
