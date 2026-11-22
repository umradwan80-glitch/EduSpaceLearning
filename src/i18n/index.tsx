import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface I18nContextValue {
  lang: Lang;
  dir: Direction;
  isRTL: boolean;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'eduspace-lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === 'ar' ? 'ar' : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    const dir: Direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const t = useCallback(
    (key: string) => {
      const dict = lang === 'ar' ? translations.ar : translations.en;
      return dict[key] ?? translations.en[key] ?? key;
    },
    [lang],
  );

  return (
    <I18nContext.Provider
      value={{ lang, dir: lang === 'ar' ? 'rtl' : 'ltr', isRTL: lang === 'ar', setLang, t }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

const en: Record<string, string> = {
  'brand.name': 'EduSpace Learning',
  'nav.home': 'Home',
  'nav.courses': 'Courses',
  'nav.dashboard': 'Dashboard',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.theme.light': 'Switch to light mode',
  'nav.theme.dark': 'Switch to dark mode',
  'nav.lang': 'العربية',
  'nav.getStarted': 'Get Started',
  'nav.menu': 'Toggle navigation menu',

  'hero.badge': 'Learn anytime, anywhere',
  'hero.title1': 'Learn More.',
  'hero.title2': 'Grow Further.',
  'hero.subtitle':
    'EduSpace Learning is a modern bilingual platform where ambitious learners master design, technology, business, and more — at their own pace, in their own language.',
  'hero.exploreCourses': 'Explore Courses',
  'hero.viewDashboard': 'View Dashboard',
  'hero.feature1': 'Self-paced lessons',
  'hero.feature2': 'Interactive quizzes',
  'hero.feature3': 'Progress tracking',
  'hero.cardTitle': 'Continue learning',
  'hero.cardCourse': 'Design Fundamentals',
  'hero.stat1': 'Active learners',
  'hero.stat2': 'Courses available',
  'hero.stat3': 'Satisfaction rate',
  'hero.stat4': 'Expert instructors',
  'hero.liveNow': '2,340 learners are studying right now',

  'categories.title': 'Popular Learning Categories',
  'categories.subtitle': 'Find the field that fits your ambitions and start building real skills today.',
  'categories.Design': 'Design',
  'categories.Development': 'Development',
  'categories.Business': 'Business',
  'categories.Data': 'Data Science',
  'categories.Marketing': 'Marketing',
  'categories.Language': 'Languages',

  'why.title': 'Why Choose EduSpace Learning?',
  'why.subtitle': 'Everything you need to learn effectively, stay motivated, and reach your goals.',
  'why.1.title': 'Learn at Your Own Pace',
  'why.1.desc': 'Lifetime access to every course means you can study around your schedule, not the other way around.',
  'why.2.title': 'Expert Instructors',
  'why.2.desc': 'Learn from experienced professionals who teach real-world skills, not just theory.',
  'why.3.title': 'Certificates of Completion',
  'why.3.desc': 'Earn a certificate for every course you finish and showcase your new skills with pride.',
  'why.4.title': 'Bilingual Experience',
  'why.4.desc': 'A fully bilingual platform in English and Arabic, designed to feel natural in both.',

  'cta.title': 'Ready to start learning?',
  'cta.subtitle': 'Join thousands of learners growing their skills on EduSpace Learning today.',
  'cta.button': 'Browse All Courses',

  'courses.title': 'Our Courses',
  'courses.subtitle': 'Every course includes hands-on projects, quizzes, and a certificate when you finish.',
  'courses.searchPlaceholder': 'Search courses by title or instructor…',
  'courses.all': 'All',
  'courses.none': 'No courses match your search. Try a different keyword or category.',
  'courses.details': 'Course Details',
  'courses.lessons': 'lessons',
  'courses.hours': 'h',
  'courses.backToCourses': 'Back to Courses',
  'courses.enrolled': 'You are enrolled in this course',
  'courses.enrolledDesc': 'Great choice! The course now appears on your dashboard. Head there to start your first lesson.',
  'courses.enrollNow': 'Enroll Now',
  'courses.goToDashboard': 'Go to Dashboard',

  'course.overview': 'Course Overview',
  'course.objectives': 'What You Will Learn',
  'course.curriculum': 'Course Content',
  'course.instructor': 'Instructor',
  'course.instructorBio': 'Senior instructor and practitioner with over a decade of industry experience, passionate about helping students build job-ready skills.',
  'course.duration': 'Duration',
  'course.level': 'Level',
  'course.category': 'Category',
  'course.lessonsCount': 'Lessons',
  'course.notFound': 'Course not found.',

  'levels.Beginner': 'Beginner',
  'levels.Intermediate': 'Intermediate',
  'levels.Advanced': 'Advanced',
  'levels.All levels': 'All levels',

  'dashboard.title': 'Student Dashboard',
  'dashboard.subtitle': 'Track your progress, keep your streak alive, and see what is coming up this week.',
  'dashboard.enrolledCourses': 'My Enrolled Courses',
  'dashboard.completed': 'completed',
  'dashboard.remaining': 'remaining',
  'dashboard.activity': 'Learning Activity',
  'dashboard.activitySub': 'Lessons completed this week',
  'dashboard.activityEmpty': 'Enroll in a course to start tracking your activity.',
  'dashboard.upcoming': 'Upcoming Sessions',
  'dashboard.join': 'Join Session',
  'dashboard.notEnrolled': 'You have not enrolled in any courses yet.',
  'dashboard.browse': 'Browse Courses',
  'dashboard.dayStreak': 'Day streak',
  'dashboard.hoursLearned': 'Hours learned',
  'dashboard.certificates': 'Certificates',
  'dashboard.weekGoal': 'Weekly goal',
  'dashboard.completion': 'completion',

  'about.badge': 'About Us',
  'about.title': 'Education Without Boundaries',
  'about.p1': 'EduSpace Learning was founded on a simple belief: everyone deserves a world-class education, in the language they think in. We built a bilingual platform that brings expert-led courses in design, technology, business, and data to learners across the world.',
  'about.p2': 'Our courses combine short, focused video lessons with hands-on projects and quizzes, so you learn by doing — not just watching. Whether you are starting a new career or sharpening existing skills, EduSpace Learning grows with you.',
  'about.mission.title': 'Our Mission',
  'about.mission.desc': 'To make practical, high-quality education accessible to every learner, in both English and Arabic, at a pace that fits real life.',
  'about.goals.title': 'Our Educational Goals',
  'about.goal1': 'Deliver job-ready skills through project-based learning.',
  'about.goal2': 'Support bilingual learners with a truly localized experience.',
  'about.goal3': 'Keep learners motivated with clear progress and real milestones.',
  'about.goal4': 'Partner with industry experts who teach what they practice.',
  'about.values.title': 'Our Values',
  'about.values.1': 'Accessibility',
  'about.values.1d': 'Education that fits every schedule and every level.',
  'about.values.2': 'Quality',
  'about.values.2d': 'Every course is reviewed and refined by experts.',
  'about.values.3': 'Community',
  'about.values.3d': 'Learning is better together — thousands of peers, one goal.',
  'about.stats.learners': 'Active learners',
  'about.stats.courses': 'Courses',
  'about.stats.instructors': 'Instructors',
  'about.stats.langs': 'Languages',

  'contact.title': 'Get in Touch',
  'contact.subtitle': 'Questions about courses, pricing, or partnerships? Our team replies within one business day.',
  'contact.name': 'Name',
  'contact.email': 'Email',
  'contact.subject': 'Subject',
  'contact.message': 'Message',
  'contact.namePlaceholder': 'Your name',
  'contact.emailPlaceholder': 'you@example.com',
  'contact.subjectPlaceholder': 'How can we help?',
  'contact.messagePlaceholder': 'Write your message here…',
  'contact.send': 'Send Message',
  'contact.sending': 'Sending…',
  'contact.successTitle': 'Message sent!',
  'contact.successDesc': 'Thank you for reaching out. We will get back to you within one business day.',
  'contact.sendAnother': 'Send another message',
  'contact.required': 'This field is required.',
  'contact.invalidEmail': 'Please enter a valid email address.',
  'contact.emailInfo': 'Email',
  'contact.phoneInfo': 'Phone',
  'contact.addressInfo': 'Address',
  'contact.addressValue': '200 Learning Ave, Suite 40, Portland, OR',
  'contact.hoursInfo': 'Office Hours',
  'contact.hoursValue': 'Sunday – Thursday, 9:00 AM – 5:00 PM',

  'footer.tagline': 'Learn more. Grow further. A modern bilingual platform for ambitious learners.',
  'footer.quickLinks': 'Quick Links',
  'footer.contactTitle': 'Contact',
  'footer.rights': 'All rights reserved.',
};

const ar: Record<string, string> = {
  'brand.name': 'إديو سبيس للتعليم',
  'nav.home': 'الرئيسية',
  'nav.courses': 'الدورات',
  'nav.dashboard': 'لوحة الطالب',
  'nav.about': 'من نحن',
  'nav.contact': 'اتصل بنا',
  'nav.theme.light': 'التبديل إلى الوضع الفاتح',
  'nav.theme.dark': 'التبديل إلى الوضع الداكن',
  'nav.lang': 'English',
  'nav.getStarted': 'ابدأ الآن',
  'nav.menu': 'فتح قائمة التنقل',

  'hero.badge': 'تعلّم في أي وقت ومن أي مكان',
  'hero.title1': 'تعلّم أكثر.',
  'hero.title2': 'انمِ أكثر.',
  'hero.subtitle':
    'إديو سبيس للتعليم منصة عصرية ثنائية اللغة تتيح للمتعلمين الطموح إتقان التصميم والتقنية وإدارة الأعمال والمزيد — وبالسرعة التي تناسبهم وباللغة التي يفكرون بها.',
  'hero.exploreCourses': 'استكشف الدورات',
  'hero.viewDashboard': 'لوحة الطالب',
  'hero.feature1': 'دروس بسرعتك الخاصة',
  'hero.feature2': 'اختبارات تفاعلية',
  'hero.feature3': 'متابعة التقدم',
  'hero.cardTitle': 'أكمل التعلم',
  'hero.cardCourse': 'أساسيات التصميم',
  'hero.stat1': 'متعلم نشط',
  'hero.stat2': 'دورة تدريبية',
  'hero.stat3': 'نسبة الرضا',
  'hero.stat4': 'مدرب خبير',
  'hero.liveNow': '2,340 متعلمًا يدرسون الآن',

  'categories.title': 'الفئات التعليمية الأكثر رواجًا',
  'categories.subtitle': 'اعثر على المجال الذي يناسب طموحك وابدأ ببناء مهارات حقيقية اليوم.',
  'categories.Design': 'التصميم',
  'categories.Development': 'البرمجة',
  'categories.Business': 'الأعمال',
  'categories.Data': 'علوم البيانات',
  'categories.Marketing': 'التسويق',
  'categories.Language': 'اللغات',

  'why.title': 'لماذا تختار إديو سبيس؟',
  'why.subtitle': 'كل ما تحتاجه لتتعلم بفعالية، وتبقى متحمسًا، وتحقق أهدافك.',
  'why.1.title': 'تعلّم بسرعتك الخاصة',
  'why.1.desc': 'وصول دائم لكل دورة يعني أنك تدرس حسب جدولك، وليس العكس.',
  'why.2.title': 'مدربون خبراء',
  'why.2.desc': 'تعلّم من محترفين ذوي خبرة يعلّمون مهارات واقعية، لا نظرية فقط.',
  'why.3.title': 'شهادات إتمام',
  'why.3.desc': 'احصل على شهادة عن كل دورة تكملها وأبرز مهاراتك الجديدة بفخر.',
  'why.4.title': 'تجربة ثنائية اللغة',
  'why.4.desc': 'منصة ثنائية اللغة بالكامل بالعربية والإنجليزية، مصممة لتكون طبيعية في كلتا اللغتين.',

  'cta.title': 'هل أنت مستعد لبدء التعلم؟',
  'cta.subtitle': 'انضم إلى آلاف المتعلمين الذين يطورون مهاراتهم على إديو سبيس اليوم.',
  'cta.button': 'تصفح جميع الدورات',

  'courses.title': 'دوراتنا',
  'courses.subtitle': 'كل دورة تتضمن مشاريع عملية واختبارات وشهادة عند الإتمام.',
  'courses.searchPlaceholder': 'ابحث عن دورة أو مدرّب…',
  'courses.all': 'الكل',
  'courses.none': 'لا توجد دورات تطابق بحثك. جرّب كلمة أخرى أو فئة مختلفة.',
  'courses.details': 'تفاصيل الدورة',
  'courses.lessons': 'دروس',
  'courses.hours': 'س',
  'courses.backToCourses': 'العودة إلى الدورات',
  'courses.enrolled': 'تم تسجيلك في الدورة',
  'courses.enrolledDesc': 'اختيار موفق! ظهرت الدورة الآن في لوحتك. انتقل إليها لبدء أول درس.',
  'courses.enrollNow': 'سجّل الآن',
  'courses.goToDashboard': 'الانتقال إلى لوحة الطالب',

  'course.overview': 'نظرة عامة على الدورة',
  'course.objectives': 'ماذا ستتعلم',
  'course.curriculum': 'محتوى الدورة',
  'course.instructor': 'المدرّب',
  'course.instructorBio': 'مدرّب أول وممارس بخبرة تفوق عشر سنوات في المجال، شغف بمساعدة الطلاب على بناء مهارات جاهزة لسوق العمل.',
  'course.duration': 'المدة',
  'course.level': 'المستوى',
  'course.category': 'الفئة',
  'course.lessonsCount': 'الدروس',
  'course.notFound': 'لم يتم العثور على الدورة.',

  'levels.Beginner': 'مبتدئ',
  'levels.Intermediate': 'متوسط',
  'levels.Advanced': 'متقدم',
  'levels.All levels': 'جميع المستويات',

  'dashboard.title': 'لوحة الطالب',
  'dashboard.subtitle': 'تابع تقدمك، وحافظ على سلسلة نشاطك، وشاهد ما ينتظرك هذا الأسبوع.',
  'dashboard.enrolledCourses': 'دوراتي المسجلة',
  'dashboard.completed': 'مكتمل',
  'dashboard.remaining': 'متبقٍ',
  'dashboard.activity': 'نشاط التعلم',
  'dashboard.activitySub': 'الدروس المكتملة هذا الأسبوع',
  'dashboard.activityEmpty': 'سجّل في دورة لبدء تتبع نشاطك.',
  'dashboard.upcoming': 'الجلسات القادمة',
  'dashboard.join': 'انضم للجلسة',
  'dashboard.notEnrolled': 'لم تسجل في أي دورة بعد.',
  'dashboard.browse': 'تصفح الدورات',
  'dashboard.dayStreak': 'يوم متواصل',
  'dashboard.hoursLearned': 'ساعات تعلم',
  'dashboard.certificates': 'شهادات',
  'dashboard.weekGoal': 'هدف الأسبوع',
  'dashboard.completion': 'إتمام',

  'about.badge': 'من نحن',
  'about.title': 'تعليم بلا حدود',
  'about.p1': 'تأسست إديو سبيس للتعليم على قناعة بسيطة: الجميع يستحق تعليمًا عالمي المستوى، وباللغة التي يفكرون بها. بنينا منصة ثنائية اللغة تقدم دورات بقيادة خبراء في التصميم والتقنية والأعمال والبيانات لمتعلمين حول العالم.',
  'about.p2': 'تجمع دوراتنا بين دروس فيديو قصيرة ومركزة ومشاريع عملية واختبارات، لتتعلم بالممارسة — لا بالمشاهدة فقط. سواء كنت تبدأ مسارًا مهنيًا جديدًا أو تصقل مهاراتك، تنمو إديو سبيس معك.',
  'about.mission.title': 'مهمتنا',
  'about.mission.desc': 'أن نجعل التعليم العملي عالي الجودة في متناول كل متعلم، بالعربية والإنجليزية، وبالسرعة التي تناسب الحياة الواقعية.',
  'about.goals.title': 'أهدافنا التعليمية',
  'about.goal1': 'تقديم مهارات جاهزة لسوق العمل من خلال التعلم القائم على المشاريع.',
  'about.goal2': 'دعم المتعلمين ثنائيي اللغة بتجربة مترجمة حقيقية.',
  'about.goal3': 'الحفاظ على حماس المتعلمين بتقدم واضح وإنجازات ملموسة.',
  'about.goal4': 'التعاون مع خبراء يعلّمون ما يمارسونه فعلًا.',
  'about.values.title': 'قيمنا',
  'about.values.1': 'إتاحة الوصول',
  'about.values.1d': 'تعليم يناسب كل جدول وكل مستوى.',
  'about.values.2': 'الجودة',
  'about.values.2d': 'كل دورة تُراجع ويُحسَّن محتواها بواسطة خبراء.',
  'about.values.3': 'المجتمع',
  'about.values.3d': 'التعلم أفضل معًا — آلاف من الزملاء وهدف واحد.',
  'about.stats.learners': 'متعلم نشط',
  'about.stats.courses': 'دورة',
  'about.stats.instructors': 'مدرّب',
  'about.stats.langs': 'لغتان',

  'contact.title': 'تواصل معنا',
  'contact.subtitle': 'أسئلة عن الدورات أو الأسعار أو الشراكات؟ يرد فريقنا خلال يوم عمل واحد.',
  'contact.name': 'الاسم',
  'contact.email': 'البريد الإلكتروني',
  'contact.subject': 'الموضوع',
  'contact.message': 'الرسالة',
  'contact.namePlaceholder': 'اسمك',
  'contact.emailPlaceholder': 'you@example.com',
  'contact.subjectPlaceholder': 'كيف يمكننا مساعدتك؟',
  'contact.messagePlaceholder': 'اكتب رسالتك هنا…',
  'contact.send': 'إرسال الرسالة',
  'contact.sending': 'جارٍ الإرسال…',
  'contact.successTitle': 'تم إرسال الرسالة!',
  'contact.successDesc': 'شكرًا لتواصلك معنا. سنرد عليك خلال يوم عمل واحد.',
  'contact.sendAnother': 'إرسال رسالة أخرى',
  'contact.required': 'هذا الحقل مطلوب.',
  'contact.invalidEmail': 'يرجى إدخال بريد إلكتروني صحيح.',
  'contact.emailInfo': 'البريد الإلكتروني',
  'contact.phoneInfo': 'الهاتف',
  'contact.addressInfo': 'العنوان',
  'contact.addressValue': '200 شارع التعليم، مكتب 40، بورتلاند، أوريغون',
  'contact.hoursInfo': 'ساعات العمل',
  'contact.hoursValue': 'الأحد – الخميس، 9:00 صباحًا – 5:00 مساءً',

  'footer.tagline': 'تعلّم أكثر. انمِ أكثر. منصة عصرية ثنائية اللغة للمتعلمين الطموحين.',
  'footer.quickLinks': 'روابط سريعة',
  'footer.contactTitle': 'التواصل',
  'footer.rights': 'جميع الحقوق محفوظة.',
};

const translations: Record<Lang, Record<string, string>> = { en, ar };
