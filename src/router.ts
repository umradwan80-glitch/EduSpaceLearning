import type { Page } from './Navbar';

export type { Page };

export function pageToHash(page: Page): string {
  return `#/${page}`;
}

export function hashToPage(hash: string): Page {
  const slug = hash.replace(/^#\/?/, '').split('?')[0];
  const valid: Page[] = ['home', 'courses', 'dashboard', 'about', 'contact'];
  return (valid as string[]).includes(slug) ? (slug as Page) : 'home';
}
