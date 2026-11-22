import { BookOpen, Clock, Star } from 'lucide-react';
import { useI18n } from '@/i18n';
import { CATEGORY_ICONS } from '@/data/courses';
import type { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
  onOpen: (course: Course) => void;
}

export default function CourseCard({ course, onOpen }: CourseCardProps) {
  const { t, lang } = useI18n();
  const Icon = course.icon;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-beige-200 bg-ivory-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-charcoal-800 dark:bg-charcoal-900">
      <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${course.gradient}`}>
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ivory-50/90 text-olive-700 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:bg-charcoal-950/80 dark:text-olive-300">
          <Icon className="h-7 w-7" role="img" aria-label={t(`categories.${course.category}`)} />
        </span>
        <span className="absolute top-3 end-3 rounded-full bg-ivory-50/90 px-3 py-1 text-xs font-semibold text-charcoal-800 dark:bg-charcoal-950/80 dark:text-beige-100">
          {t(`levels.${course.level}`)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-olive-600 dark:text-olive-300">
          {t(`categories.${course.category}`)}
        </span>
        <h3 className="mt-1.5 text-lg font-bold text-charcoal-800 dark:text-ivory-100">
          {course.title[lang]}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-charcoal-600 dark:text-beige-100/70">
          {course.description[lang]}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-charcoal-500 dark:text-beige-100/60">
          <span>{course.instructor[lang]}</span>
          <span className="inline-flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" /> {course.lessons.length} {t('courses.lessons')}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {course.hours}{t('courses.hours')}
          </span>
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-amber-500" /> {course.rating}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onOpen(course)}
          className="mt-5 w-full rounded-xl border border-olive-300 px-4 py-2.5 text-sm font-semibold text-olive-700 transition-colors hover:bg-olive-600 hover:text-ivory-50 dark:border-olive-700 dark:text-olive-200 dark:hover:bg-olive-600 dark:hover:text-ivory-50"
        >
          {t('courses.details')}
        </button>
      </div>
    </article>
  );
}
