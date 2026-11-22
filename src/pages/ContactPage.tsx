import { useState } from 'react';
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useI18n } from '@/i18n';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

export default function ContactPage() {
  const { t } = useI18n();
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = t('contact.required');
    if (!form.email.trim()) next.email = t('contact.required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t('contact.invalidEmail');
    if (!form.subject.trim()) next.subject = t('contact.required');
    if (!form.message.trim()) next.message = t('contact.required');
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const field = (invalid: boolean) =>
    `w-full rounded-xl border bg-ivory-50 px-4 py-2.5 text-charcoal-800 placeholder-charcoal-500/50 transition-colors focus:outline-none focus:ring-2 dark:bg-charcoal-950 dark:text-ivory-100 dark:placeholder-beige-100/40 ${
      invalid
        ? 'border-red-400 focus:border-red-500 focus:ring-red-500/30 dark:border-red-600'
        : 'border-beige-300 focus:border-olive-500 focus:ring-olive-500/30 dark:border-charcoal-700'
    }`;

  const infoItems = [
    { icon: Mail, label: t('contact.emailInfo'), value: 'hello@eduspacelearning.com' },
    { icon: Phone, label: t('contact.phoneInfo'), value: '+1 (555) 012-3456' },
    { icon: MapPin, label: t('contact.addressInfo'), value: t('contact.addressValue') },
    { icon: Clock, label: t('contact.hoursInfo'), value: t('contact.hoursValue') },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-charcoal-800 sm:text-4xl dark:text-ivory-100">
        {t('contact.title')}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-charcoal-600 dark:text-beige-100/80">
        {t('contact.subtitle')}
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* Contact info */}
        <div>
          <ul className="space-y-5">
            {infoItems.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-olive-100 text-olive-700 dark:bg-olive-900/50 dark:text-olive-200">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-charcoal-700 dark:text-olive-300">{label}</p>
                  <p className="mt-0.5 text-charcoal-600 dark:text-beige-100/80">{value}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-3xl bg-olive-700 p-8">
            <p className="text-xl font-bold text-ivory-100">{t('brand.name')}</p>
            <p className="mt-2 text-sm leading-relaxed text-olive-100/90">{t('footer.tagline')}</p>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-beige-200 bg-ivory-50 p-8 shadow-sm transition-colors dark:border-charcoal-800 dark:bg-charcoal-900">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
              <CheckCircle className="h-12 w-12 text-olive-500" />
              <h2 className="text-xl font-bold text-charcoal-800 dark:text-ivory-100">{t('contact.successTitle')}</h2>
              <p className="max-w-sm text-charcoal-600 dark:text-beige-100/75">{t('contact.successDesc')}</p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setForm({ name: '', email: '', subject: '', message: '' });
                  setErrors({});
                }}
                className="mt-2 rounded-xl border border-beige-300 px-5 py-2.5 text-sm font-semibold text-charcoal-700 transition-colors hover:bg-beige-100 dark:border-charcoal-700 dark:text-beige-100 dark:hover:bg-charcoal-800"
              >
                {t('contact.sendAnother')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal-700 dark:text-beige-100">
                  {t('contact.name')} <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t('contact.namePlaceholder')}
                  aria-invalid={!!errors.name}
                  className={field(!!errors.name)}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal-700 dark:text-beige-100">
                  {t('contact.email')} <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t('contact.emailPlaceholder')}
                  aria-invalid={!!errors.email}
                  className={field(!!errors.email)}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-charcoal-700 dark:text-beige-100">
                  {t('contact.subject')} <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder={t('contact.subjectPlaceholder')}
                  aria-invalid={!!errors.subject}
                  className={field(!!errors.subject)}
                />
                {errors.subject && <p className="mt-1.5 text-xs text-red-500">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal-700 dark:text-beige-100">
                  {t('contact.message')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t('contact.messagePlaceholder')}
                  aria-invalid={!!errors.message}
                  className={`${field(!!errors.message)} resize-none`}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-olive-600 px-5 py-3 font-semibold text-ivory-50 shadow-sm transition-colors hover:bg-olive-500"
              >
                <Send className="h-4 w-4 flip-rtl" />
                {t('contact.send')}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
