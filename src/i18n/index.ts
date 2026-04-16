import de from './de.json';
import en from './en.json';

export type Locale = 'de' | 'en';

export const defaultLocale: Locale = 'de';
export const locales: Locale[] = ['de', 'en'];

const translations = { de, en } as const;

export type TranslationKey = keyof typeof de;

export function getLocaleFromUrl(url: URL): Locale {
  const [, firstSegment] = url.pathname.split('/');
  if (firstSegment === 'en') return 'en';
  return 'de';
}

export function getLocalizedUrl(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return cleanPath;
  return `/en${cleanPath}`;
}

/** Returns Astro getStaticPaths-compatible locale params */
export function generateStaticLocalePaths() {
  return locales.map((locale) => ({ params: { locale } }));
}

export function t(locale: Locale): typeof de {
  return translations[locale] ?? translations[defaultLocale];
}

export function getLangAttribute(locale: Locale): string {
  return locale === 'de' ? 'de' : 'en';
}
