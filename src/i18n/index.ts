import { ui, defaultLang, type Lang, type UIKey } from './ui';

export { languages, defaultLang } from './ui';
export type { Lang };

export function getLangFromUrl(url: URL): Lang {
  // Strip the base path before inspecting segments
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const pathname = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname;
  const [, lang] = pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

export function getLocalePath(lang: Lang, path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${lang}${path}`;
}
