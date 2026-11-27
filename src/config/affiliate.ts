export const AMAZON_AFFILIATE_TAG = 'bastelar-21';
export const AMAZON_ES_HOSTNAME = 'www.amazon.es';
export const AMAZON_ES_ORIGIN = `https://${AMAZON_ES_HOSTNAME}`;

export const AMAZON_LINK_TARGET = '_blank' as const;
export const AMAZON_LINK_REL = 'sponsored nofollow noopener' as const;

/**
 * Forces any Amazon URL or relative Amazon path to use https://www.amazon.es
 * and appends/overwrites the affiliate parameter tag=bastelar-21.
 */
export function enforceAmazonEsAffiliateUrl(rawUrlOrPath: string): string {
  const trimmed = rawUrlOrPath.trim();
  if (!trimmed) {
    const rootUrl = new URL('/', AMAZON_ES_ORIGIN);
    rootUrl.searchParams.set('tag', AMAZON_AFFILIATE_TAG);
    return rootUrl.toString();
  }

  let parsed: URL;
  if (/^https?:\/\//i.test(trimmed)) {
    parsed = new URL(trimmed);
  } else if (trimmed.startsWith('//')) {
    parsed = new URL(`https:${trimmed}`);
  } else if (trimmed.startsWith('/')) {
    parsed = new URL(trimmed, AMAZON_ES_ORIGIN);
  } else if (/^[a-z0-9.-]+\.[a-z]{2,}(\/|$)/i.test(trimmed)) {
    parsed = new URL(`https://${trimmed}`);
  } else {
    return buildAmazonEsSearchUrl(trimmed);
  }

  parsed.protocol = 'https:';
  parsed.hostname = AMAZON_ES_HOSTNAME;
  parsed.port = '';
  parsed.searchParams.set('tag', AMAZON_AFFILIATE_TAG);

  return parsed.toString();
}

/**
 * Builds a canonical Amazon Spain search URL with tag=bastelar-21.
 */
export function buildAmazonEsSearchUrl(searchTerms: string): string {
  const url = new URL('/s', AMAZON_ES_ORIGIN);
  const normalized = searchTerms.trim();
  if (normalized) {
    url.searchParams.set('k', normalized);
  }
  url.searchParams.set('tag', AMAZON_AFFILIATE_TAG);
  return enforceAmazonEsAffiliateUrl(url.toString());
}
