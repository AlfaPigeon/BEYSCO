import { ui, defaultLang, type Lang, type UIKey } from './ui';

export { languages, defaultLang } from './ui';
export type { Lang };

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

export function getLocalePath(lang: Lang, path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${normalizedPath}`;
}
