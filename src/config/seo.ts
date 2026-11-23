export const CANONICAL_ORIGIN = 'https://calculaproporcion.bastelar.com';

export const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'de', 'pt'] as const;
export type SupportedLang = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: SupportedLang = 'en';

export const LANGUAGE_LABELS: Record<SupportedLang, { code: string; name: string; nativeName: string }> = {
  en: { code: 'EN', name: 'English', nativeName: 'English' },
  es: { code: 'ES', name: 'Spanish', nativeName: 'Español' },
  fr: { code: 'FR', name: 'French', nativeName: 'Français' },
  de: { code: 'DE', name: 'German', nativeName: 'Deutsch' },
  pt: { code: 'PT', name: 'Portuguese', nativeName: 'Português' },
};

export function isSupportedLang(value: string | null | undefined): value is SupportedLang {
  if (!value) return false;
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

/**
 * Canonical URL policy:
 * - Default language ('en') -> clean root: https://calculaproporcion.bastelar.com/
 * - Other languages ('es', 'fr', 'de', 'pt') -> https://calculaproporcion.bastelar.com/?lang=xx
 */
export function getCanonicalUrl(lang: SupportedLang): string {
  if (lang === DEFAULT_LANGUAGE) {
    return `${CANONICAL_ORIGIN}/`;
  }
  return `${CANONICAL_ORIGIN}/?lang=${lang}`;
}

export function getAlternateLinks(): Array<{ hreflang: string; href: string }> {
  const alternates = SUPPORTED_LANGUAGES.map((lang) => ({
    hreflang: lang,
    href: getCanonicalUrl(lang),
  }));
  return [
    ...alternates,
    {
      hreflang: 'x-default',
      href: `${CANONICAL_ORIGIN}/`,
    },
  ];
}
