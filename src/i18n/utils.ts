export function getLocale(url: URL): 'es' | 'en' {
  return url.pathname.startsWith('/en') ? 'en' : 'es';
}

export function getOtherLocale(url: URL): 'es' | 'en' {
  return getLocale(url) === 'es' ? 'en' : 'es';
}

export function getOtherUrl(url: URL): string {
  const locale = getLocale(url);
  const path = url.pathname;
  if (locale === 'es') {
    return path === '/' ? '/en' : `/en${path}`;
  }
  return path.replace(/^\/en/, '') || '/';
}

export type { Locale } from './ui';
