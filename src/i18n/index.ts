import { DEFAULT_LANGUAGE, SupportedLang } from '../config/seo';
import { de } from './locales/de';
import { en } from './locales/en';
import { es } from './locales/es';
import { fr } from './locales/fr';
import { pt } from './locales/pt';
import { TranslationDictionary } from './types';

export type { TranslationDictionary } from './types';

const TRANSLATIONS: Record<SupportedLang, TranslationDictionary> = {
  en,
  es,
  fr,
  de,
  pt,
};

export function getTranslations(lang: SupportedLang): TranslationDictionary {
  return TRANSLATIONS[lang] ?? TRANSLATIONS[DEFAULT_LANGUAGE];
}
