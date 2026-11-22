import { useCallback, useEffect, useState } from 'react';
import { I18nProvider } from '@/i18n';
import { ThemeProvider } from '@/hooks/useTheme';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CoursesPage from '@/pages/CoursesPage';
import CourseDetailsPage from '@/pages/CourseDetailsPage';
import DashboardPage from '@/pages/DashboardPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import { hashToPage } from '@/router';
import type { Page } from '@/router';
import type { Course } from '@/data/courses';

const ENROLLED_KEY = 'eduspace-enrolled';

function loadEnrolled(): string[] {
  try {
    const raw = localStorage.getItem(ENROLLED_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function AppShell() {
  const [page, setPage] = useState<Page>(() => hashToPage(window.location.hash));
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrolledIds, setEnrolledIds] = useState<string[]>(loadEnrolled);

  useEffect(() => {
    const onHashChange = () => {
      setPage(hashToPage(window.location.hash));
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((next: Page) => {
    window.location.hash = `#/${next}`;
    setPage(next);
    window.scrollTo({ top: 0 });
  }, []);

  const openCourse = useCallback((course: Course) => {
    setSelectedCourse(course);
    navigate('courses');
  }, [navigate]);

  const enroll = useCallback((course: Course) => {
    setEnrolledIds((ids) => {
      if (ids.includes(course.id)) return ids;
      const next = [...ids, course.id];
      localStorage.setItem(ENROLLED_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const backToCourses = useCallback(() => {
    setSelectedCourse(null);
    navigate('courses');
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col bg-ivory-100 transition-colors duration-300 dark:bg-charcoal-950">
      <Navbar current={page} onNavigate={navigate} />
      <main className="flex-1">
        {page === 'home' && <HomePage onNavigate={navigate} onOpenCourse={openCourse} />}
        {page === 'courses' &&
          (selectedCourse ? (
            <CourseDetailsPage
              course={selectedCourse}
              enrolled={enrolledIds.includes(selectedCourse.id)}
              onEnroll={enroll}
              onBack={backToCourses}
              onNavigate={navigate}
            />
          ) : (
            <CoursesPage onOpenCourse={openCourse} />
          ))}
        {page === 'dashboard' && (
          <DashboardPage enrolledIds={enrolledIds} onNavigate={navigate} onOpenCourse={openCourse} />
        )}
        {page === 'about' && <AboutPage />}
        {page === 'contact' && <ContactPage />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <AppShell />
      </ThemeProvider>
    </I18nProvider>
  );
}
