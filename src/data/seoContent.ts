import { CANONICAL_ORIGIN, getCanonicalUrl } from '../config/seo';
import { getTranslations } from '../i18n';
import { AppState, SeoContext } from '../types/calculator';

export function getDynamicSeoContext(state: AppState): SeoContext {
  const { activeModule, percentages, distribution, ruleOfThree, lang } = state;
  const t = getTranslations(lang);

  if (activeModule === 'percentages') {
    return t.seoByMode.percentages[percentages.subMode];
  }

  if (activeModule === 'distribution') {
    return distribution.mode === 'weight'
      ? t.seoByMode.distribution.weight
      : t.seoByMode.distribution.percentage;
  }

  return ruleOfThree.type === 'inverse'
    ? t.seoByMode.ruleOfThree.inverse
    : t.seoByMode.ruleOfThree.direct;
}

export function buildStructuredDataJson(state: AppState): string {
  const t = getTranslations(state.lang);
  const canonicalUrl = getCanonicalUrl(state.lang);

  const payload = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': `${CANONICAL_ORIGIN}/#app`,
        url: canonicalUrl,
        name: t.meta.siteName,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        inLanguage: state.lang,
        description: t.meta.appDescription,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${CANONICAL_ORIGIN}/#howto`,
        inLanguage: state.lang,
        name: t.meta.howToName,
        description: t.meta.howToDescription,
        step: t.meta.howToSteps.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${CANONICAL_ORIGIN}/#faq`,
        inLanguage: state.lang,
        mainEntity: t.seoSection.faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return JSON.stringify(payload);
}
