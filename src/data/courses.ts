import type { LucideIcon } from 'lucide-react';
import {
  Briefcase,
  Code2,
  Languages,
  LineChart,
  Megaphone,
  Palette,
} from 'lucide-react';

export type Category = 'Design' | 'Development' | 'Business' | 'Data' | 'Marketing' | 'Language';
export type Level = 'Beginner' | 'Intermediate' | 'Advanced' | 'All levels';

export interface Lesson {
  en: string;
  ar: string;
  minutes: number;
}

export interface Course {
  id: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  overview: { en: string; ar: string };
  objectives: { en: string[]; ar: string[] };
  lessons: Lesson[];
  instructor: { en: string; ar: string };
  category: Category;
  level: Level;
  hours: number;
  rating: number;
  gradient: string;
  icon: LucideIcon;
}

export const CATEGORIES: Category[] = ['Design', 'Development', 'Business', 'Data', 'Marketing', 'Language'];

export const CATEGORY_ICONS: Record<Category, LucideIcon> = {
  Design: Palette,
  Development: Code2,
  Business: Briefcase,
  Data: LineChart,
  Marketing: Megaphone,
  Language: Languages,
};

export const COURSES: Course[] = [
  {
    id: 'design-fundamentals',
    title: { en: 'Design Fundamentals', ar: 'أساسيات التصميم' },
    description: {
      en: 'Master color, typography, and layout to craft beautiful, user-friendly interfaces from day one.',
      ar: 'أتقن الألوان والخطوط والتخطيط لصنع واجهات جميلة وسهلة الاستخدام من اليوم الأول.',
    },
    overview: {
      en: 'This course takes you from zero to a solid grounding in visual design. You will study the principles behind great interfaces, practice them in guided exercises, and finish by designing a complete landing page of your own.',
      ar: 'تنقلك هذه الدورة من الصفر إلى أساس متين في التصميم البصري. ستدرس المبادئ الكامنة وراء الواجهات الرائعة، وتطبقها في تمارين موجّهة، وتختم بتصميم صفحة هبوط كاملة من إبداعك.',
    },
    objectives: {
      en: [
        'Apply color theory to build balanced palettes',
        'Choose and pair fonts with confidence',
        'Design clear layouts using visual hierarchy',
        'Critique and refine your own designs',
      ],
      ar: [
        'تطبيق نظرية الألوان لبناء لوحات متوازنة',
        'اختيار الخطوط ودمجها بثقة',
        'تصميم تخطيطات واضحة باستخدام التسلسل البصري',
        'نقد تصميماتك وتحسينها بنفسك',
      ],
    },
    lessons: [
      { en: 'What makes design good?', ar: 'ما الذي يجعل التصميم جيدًا؟', minutes: 12 },
      { en: 'Color theory in practice', ar: 'نظرية الألوان في التطبيق', minutes: 24 },
      { en: 'Typography essentials', ar: 'أساسيات الخطوط', minutes: 20 },
      { en: 'Layout and visual hierarchy', ar: 'التخطيط والتسلسل البصري', minutes: 28 },
      { en: 'Project: design a landing page', ar: 'مشروع: صمّم صفحة هبوط', minutes: 45 },
    ],
    instructor: { en: 'Layla Haddad', ar: 'ليلى حداد' },
    category: 'Design',
    level: 'Beginner',
    hours: 12,
    rating: 4.9,
    gradient: 'from-olive-400 to-olive-600',
    icon: Palette,
  },
  {
    id: 'web-dev-bootcamp',
    title: { en: 'Web Development Bootcamp', ar: 'معسكر تطوير الويب' },
    description: {
      en: 'Build modern, responsive websites and web apps with hands-on projects from the very first lesson.',
      ar: 'ابنِ مواقع وتطبيقات ويب عصرية ومتجاوبة مع مشاريع عملية منذ الدرس الأول.',
    },
    overview: {
      en: 'A complete journey into modern web development. You will learn how the web works, build real pages and applications, and finish with a portfolio-ready project that showcases everything you have learned.',
      ar: 'رحلة كاملة في تطوير الويب الحديث. ستتعلم كيف يعمل الويب، وتبني صفحات وتطبيقات حقيقية، وتختم بمشروع جاهز لمعرض أعمالك يعرض كل ما تعلمته.',
    },
    objectives: {
      en: [
        'Structure pages with semantic HTML',
        'Style layouts confidently with modern CSS',
        'Add interactivity with JavaScript',
        'Deploy a complete project online',
      ],
      ar: [
        'هيكلة الصفحات بـ HTML الدلالي',
        'تنسيق التخطيطات بثقة باستخدام CSS الحديث',
        'إضافة التفاعلية باستخدام جافاسكربت',
        'نشر مشروع كامل على الإنترنت',
      ],
    },
    lessons: [
      { en: 'How the web works', ar: 'كيف يعمل الويب', minutes: 15 },
      { en: 'HTML: structuring content', ar: 'HTML: هيكلة المحتوى', minutes: 30 },
      { en: 'CSS: styling with confidence', ar: 'CSS: التنسيق بثقة', minutes: 40 },
      { en: 'JavaScript fundamentals', ar: 'أساسيات جافاسكربت', minutes: 50 },
      { en: 'Project: build and deploy your site', ar: 'مشروع: ابنِ وانشر موقعك', minutes: 60 },
    ],
    instructor: { en: 'Omar Khalil', ar: 'عمر خليل' },
    category: 'Development',
    level: 'Intermediate',
    hours: 30,
    rating: 4.8,
    gradient: 'from-charcoal-500 to-charcoal-800',
    icon: Code2,
  },
  {
    id: 'data-analytics',
    title: { en: 'Data Analytics Essentials', ar: 'أساسيات تحليل البيانات' },
    description: {
      en: 'Turn raw numbers into clear stories with charts, dashboards, and practical analysis techniques.',
      ar: 'حوّل الأرقام الخام إلى قصص واضحة باستخدام الرسوم البيانية ولوحات المتابعة وتقنيات التحليل العملية.',
    },
    overview: {
      en: 'Data is only valuable when it can be understood. This course teaches you to clean, explore, and visualize data, then communicate findings that drive real decisions.',
      ar: 'البيانات لا قيمة لها إن لم تُفهم. تعلّمك هذه الدورة كيفية تنظيف البيانات واستكشافها وتصورها، ثم توصيل النتائج التي تقود قرارات حقيقية.',
    },
    objectives: {
      en: [
        'Clean and prepare messy datasets',
        'Choose the right chart for every question',
        'Build interactive dashboards',
        'Present insights that persuade',
      ],
      ar: [
        'تنظيف بيانات غير مرتبة وتجهيزها',
        'اختيار الرسم المناسب لكل سؤال',
        'بناء لوحات متابعة تفاعلية',
        'عرض النتائج بطريقة مقنعة',
      ],
    },
    lessons: [
      { en: 'Thinking in data', ar: 'التفكير بالبيانات', minutes: 14 },
      { en: 'Cleaning messy data', ar: 'تنظيف البيانات غير المرتبة', minutes: 26 },
      { en: 'Chart choice and design', ar: 'اختيار الرسوم وتصميمها', minutes: 30 },
      { en: 'Building your first dashboard', ar: 'بناء أول لوحة متابعة', minutes: 38 },
      { en: 'Project: analyze a real dataset', ar: 'مشروع: حلّل بيانات حقيقية', minutes: 50 },
    ],
    instructor: { en: 'Sara Mansour', ar: 'سارة منصور' },
    category: 'Data',
    level: 'Beginner',
    hours: 20,
    rating: 4.7,
    gradient: 'from-olive-500 to-beige-300',
    icon: LineChart,
  },
  {
    id: 'ml-basics',
    title: { en: 'Machine Learning Basics', ar: 'أساسيات تعلم الآلة' },
    description: {
      en: 'Understand how models learn from data and build your first intelligent predictors step by step.',
      ar: 'افهم كيف تتعلم النماذج من البيانات وابنِ أول نماذج تنبؤية ذكية خطوة بخطوة.',
    },
    overview: {
      en: 'Demystify machine learning without drowning in math. You will learn the core ideas, train simple models on real data, and learn how to judge whether they actually work.',
      ar: 'بسّط تعلم الآلة دون الغرق في الرياضيات. ستتعلم الأفكار الأساسية، وتدرّب نماذج بسيطة على بيانات حقيقية، وتتعلم كيف تحكم على فعاليتها فعلًا.',
    },
    objectives: {
      en: [
        'Understand how models learn patterns',
        'Train and evaluate simple predictors',
        'Avoid common pitfalls like overfitting',
        'Complete an end-to-end mini project',
      ],
      ar: [
        'فهم كيف تتعلم النماذج الأنماط',
        'تدريب نماذج تنبؤية بسيطة وتقييمها',
        'تجنب الأخطاء الشائعة مثل فرط التخصيص',
        'إتمام مشروع مصغّر من البداية للنهاية',
      ],
    },
    lessons: [
      { en: 'What is machine learning?', ar: 'ما هو تعلم الآلة؟', minutes: 16 },
      { en: 'Your first model', ar: 'أول نموذج لك', minutes: 32 },
      { en: 'Measuring success honestly', ar: 'قياس النجاح بموضوعية', minutes: 28 },
      { en: 'Avoiding overfitting', ar: 'تجنب فرط التخصيص', minutes: 24 },
      { en: 'Project: predict house prices', ar: 'مشروع: توقع أسعار المنازل', minutes: 55 },
    ],
    instructor: { en: 'Dr. Yusuf Amin', ar: 'د. يوسف أمين' },
    category: 'Data',
    level: 'Advanced',
    hours: 26,
    rating: 4.9,
    gradient: 'from-olive-700 to-charcoal-800',
    icon: LineChart,
  },
  {
    id: 'business-communication',
    title: { en: 'Business Communication', ar: 'التواصل في الأعمال' },
    description: {
      en: 'Write clearly, present confidently, and collaborate smoothly across any team or time zone.',
      ar: 'اكتب بوضوح، وقدّم بثقة، وتعاون بسلاسة عبر أي فريق أو منطقة زمنية.',
    },
    overview: {
      en: 'Strong communication multiplies the value of every other skill. This course covers professional writing, persuasive presentations, and the habits of effective collaborators.',
      ar: 'التواصل الفعّال يضاعف قيمة كل مهارة أخرى. تغطي هذه الدورة الكتابة المهنية والعروض المقنعة وعادات المتعاونين الفعّالين.',
    },
    objectives: {
      en: [
        'Write clear, professional emails and reports',
        'Structure presentations that hold attention',
        'Give and receive constructive feedback',
        'Run effective meetings',
      ],
      ar: [
        'كتابة رسائل وتقارير مهنية واضحة',
        'بناء عروض تقديمية تلفت الانتباه',
        'تقديم الملاحظات البنّاءة واستقبالها',
        'إدارة اجتماعات فعّالة',
      ],
    },
    lessons: [
      { en: 'The art of clear writing', ar: 'فن الكتابة الواضحة', minutes: 18 },
      { en: 'Emails that get read', ar: 'رسائل تُقرأ فعلًا', minutes: 22 },
      { en: 'Presenting with confidence', ar: 'التقديم بثقة', minutes: 26 },
      { en: 'Feedback that helps', ar: 'ملاحظات تصنع الفرق', minutes: 20 },
      { en: 'Project: pitch an idea', ar: 'مشروع: اعرض فكرة', minutes: 35 },
    ],
    instructor: { en: 'Nadia Fares', ar: 'نادية فارس' },
    category: 'Business',
    level: 'All levels',
    hours: 8,
    rating: 4.6,
    gradient: 'from-beige-300 to-olive-300',
    icon: Briefcase,
  },
  {
    id: 'digital-marketing',
    title: { en: 'Digital Marketing Strategy', ar: 'استراتيجية التسويق الرقمي' },
    description: {
      en: 'Plan campaigns that reach the right people and measure what actually matters.',
      ar: 'خطط لحملات تصل إلى الأشخاص المناسبين وقِس ما يهم فعلًا.',
    },
    overview: {
      en: 'From audience research to launch and measurement, this course walks through building a complete digital marketing campaign that respects both budget and brand.',
      ar: 'من دراسة الجمهور إلى الإطلاق والقياس، تستعرض هذه الدورة بناء حملة تسويق رقمي كاملة تراعي الميزانية والعلامة معًا.',
    },
    objectives: {
      en: [
        'Define and research target audiences',
        'Plan a multi-channel campaign',
        'Write copy that converts',
        'Measure results and iterate',
      ],
      ar: [
        'تحديد الجمهور المستهدف ودراسته',
        'تخطيط حملة عبر قنوات متعددة',
        'كتابة نصوص إعلانية تحقق النتائج',
        'قياس النتائج والتحسين المستمر',
      ],
    },
    lessons: [
      { en: 'Knowing your audience', ar: 'اعرف جمهورك', minutes: 20 },
      { en: 'Choosing your channels', ar: 'اختر قنواتك', minutes: 24 },
      { en: 'Copywriting essentials', ar: 'أساسيات كتابة المحتوى الإعلاني', minutes: 30 },
      { en: 'Analytics without the noise', ar: 'التحليلات بلا ضجيج', minutes: 26 },
      { en: 'Project: launch a campaign plan', ar: 'مشروع: خطّط حملة كاملة', minutes: 45 },
    ],
    instructor: { en: 'Karim Nasser', ar: 'كريم ناصر' },
    category: 'Marketing',
    level: 'Intermediate',
    hours: 14,
    rating: 4.7,
    gradient: 'from-olive-300 to-olive-500',
    icon: Megaphone,
  },
  {
    id: 'ux-research',
    title: { en: 'UX Research Methods', ar: 'أساليب أبحاث تجربة المستخدم' },
    description: {
      en: 'Discover what users really need through interviews, testing, and thoughtful observation.',
      ar: 'اكتشف ما يحتاجه المستخدمون فعلًا من خلال المقابلات والاختبار والملاحظة المدروسة.',
    },
    overview: {
      en: 'Great products start with understanding people. Learn the research methods professionals use to uncover real user needs and turn them into design decisions.',
      ar: 'المنتجات الرائعة تبدأ بفهم الناس. تعلّم أساليب البحث التي يستخدمها المحترفون لاكتشاف احتياجات المستخدمين الحقيقية وتحويلها إلى قرارات تصميمية.',
    },
    objectives: {
      en: [
        'Plan and run user interviews',
        'Design effective usability tests',
        'Synthesize findings into insights',
        'Present research to stakeholders',
      ],
      ar: [
        'تخطيط وإجراء مقابلات المستخدمين',
        'تصميم اختبارات استخدام فعّالة',
        'تلخيص النتائج في رؤى واضحة',
        'عرض نتائج البحث على أصحاب القرار',
      ],
    },
    lessons: [
      { en: 'Why research matters', ar: 'لماذا يهم البحث', minutes: 14 },
      { en: 'Interviewing users', ar: 'مقابلات المستخدمين', minutes: 28 },
      { en: 'Usability testing in practice', ar: 'اختبار الاستخدام في الميدان', minutes: 32 },
      { en: 'From notes to insights', ar: 'من الملاحظات إلى الرؤى', minutes: 25 },
      { en: 'Project: run a mini study', ar: 'مشروع: أجرِ دراسة مصغّرة', minutes: 48 },
    ],
    instructor: { en: 'Layla Haddad', ar: 'ليلى حداد' },
    category: 'Design',
    level: 'Intermediate',
    hours: 18,
    rating: 4.8,
    gradient: 'from-charcoal-700 to-olive-600',
    icon: Palette,
  },
  {
    id: 'english-for-professionals',
    title: { en: 'English for Professionals', ar: 'الإنجليزية للمحترفين' },
    description: {
      en: 'Strengthen your workplace English for meetings, emails, and interviews with practical, focused practice.',
      ar: 'قوِّ إنجليزيتك في بيئة العمل للاجتماعات والرسائل والمقابلات مع تدريب عملي ومركّز.',
    },
    overview: {
      en: 'Designed for Arabic-speaking professionals, this course builds the vocabulary, phrasing, and confidence needed to communicate naturally in international workplaces.',
      ar: 'مصممة للمحترفين الناطقين بالعربية، تبني هذه الدورة المفردات والصياغات والثقة اللازمة للتواصل الطبيعي في بيئات العمل الدولية.',
    },
    objectives: {
      en: [
        'Participate confidently in meetings',
        'Write polished professional emails',
        'Handle interviews in English',
        'Master common workplace idioms',
      ],
      ar: [
        'المشاركة بثقة في الاجتماعات',
        'كتابة رسائل مهنية مصقولة',
        'إدارة المقابلات بالإنجليزية',
        'إتقان التعبيرات الشائعة في بيئة العمل',
      ],
    },
    lessons: [
      { en: 'Small talk and introductions', ar: 'الدردشة والتعارف', minutes: 16 },
      { en: 'Meetings, live', ar: 'الاجتماعات مباشرة', minutes: 24 },
      { en: 'Emails and follow-ups', ar: 'الرسائل والمتابعات', minutes: 22 },
      { en: 'Interview practice', ar: 'تدريب على المقابلات', minutes: 30 },
      { en: 'Project: mock interview', ar: 'مشروع: مقابلة تجريبية', minutes: 40 },
    ],
    instructor: { en: 'Emma Collins', ar: 'إيما كولينز' },
    category: 'Language',
    level: 'Beginner',
    hours: 16,
    rating: 4.7,
    gradient: 'from-olive-400 to-charcoal-500',
    icon: Languages,
  },
];

export const INSTRUCTOR_ROLE = {
  en: 'Senior Instructor',
  ar: 'مدرّب أول',
};
