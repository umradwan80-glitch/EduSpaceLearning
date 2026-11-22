import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { useI18n } from '@/i18n';
import { CATEGORIES, CATEGORY_ICONS, COURSES } from '@/data/courses';
import CourseCard from '@/components/CourseCard';
import type { Course, Category } from '@/data/courses';

interface CoursesPageProps {
  onOpenCourse: (course: Course) => void;
}

export default function CoursesPage({ onOpenCourse }: CoursesPageProps) {
  const { t, lang } = useI18n();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category | 'all'>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COURSES.filter((c) => {
      const matchesCategory = category === 'all' || c.category === category;
      const haystack = `${c.title.en} ${c.title.ar} ${c.instructor.en} ${c.instructor.ar}`.toLowerCase();
      return matchesCategory && (q === '' || haystack.includes(q));
    });
  }, [query, category]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-charcoal-800 sm:text-4xl dark:text-ivory-100">
        {t('courses.title')}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-charcoal-600 dark:text-beige-100/80">
        {t('courses.subtitle')}
      </p>

      {/* Search + filters */}
      <div className="mt-8 space-y-4">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-500 dark:text-beige-100/50" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('courses.searchPlaceholder')}
            aria-label={t('courses.searchPlaceholder')}
            className="w-full rounded-xl border border-beige-300 bg-ivory-50 py-2.5 pe-4 ps-10 text-charcoal-800 placeholder-charcoal-500/60 transition-colors focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-500/30 dark:border-charcoal-700 dark:bg-charcoal-900 dark:text-ivory-100 dark:placeholder-beige-100/40"
          />
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label={t('categories.title')}>
          <button
            type="button"
            onClick={() => setCategory('all')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              category === 'all'
                ? 'bg-olive-600 text-ivory-50'
                : 'border border-beige-300 bg-ivory-50 text-charcoal-700 hover:bg-olive-50 dark:border-charcoal-700 dark:bg-charcoal-900 dark:text-beige-100 dark:hover:bg-charcoal-800'
            }`}
          >
            {t('courses.all')}
          </button>
          {CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat];
            const active = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(active ? 'all' : cat)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-olive-600 text-ivory-50'
                    : 'border border-beige-300 bg-ivory-50 text-charcoal-700 hover:bg-olive-50 dark:border-charcoal-700 dark:bg-charcoal-900 dark:text-beige-100 dark:hover:bg-charcoal-800'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {t(`categories.${cat}`)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} onOpen={onOpenCourse} />
          ))}
        </div>
      ) : (
        <p className="mt-14 text-center text-lg text-charcoal-500 dark:text-beige-100/60">
          {t('courses.none')}
        </p>
      )}

      <p className="mt-8 text-sm text-charcoal-500 dark:text-beige-100/50" aria-live="polite">
        {filtered.length} {lang === 'en' ? (filtered.length === 1 ? 'course' : 'courses') : 'دورة'}
      </p>
    </section>
  );
}
