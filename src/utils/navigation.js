/**
 * Navigation and URL routing helpers for Mugil Foods website.
 * Supports clean URLs, GitHub Pages base prefix, client-side transitions,
 * and backward-compatible hash redirects.
 */

export function getBaseUrl() {
  const base = import.meta.env?.BASE_URL || '/';
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

export function toAppPath(path = '/') {
  const base = getBaseUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

export function stripBase(pathname = '/') {
  const base = getBaseUrl();
  let normalized = pathname;
  if (base && normalized.startsWith(base)) {
    normalized = normalized.slice(base.length);
  }
  if (!normalized.startsWith('/')) {
    normalized = `/${normalized}`;
  }
  return normalized;
}

/**
 * Maps product aliases to canonical product IDs
 */
export const PRODUCT_ALIASES = {
  'round-tamarind': 'round-seedless-tamarind',
  'tamarind-slabs': 'seedless-tamarind-slab-without-white-layer',
  'karipuli-tamarind': 'karipuli-tamarind-cake',
  'loose-karipuli': 'loose-karipuli-30kg',
  'seedless-tamarind-slabs': 'seedless-tamarind-slab-without-white-layer',
};

/**
 * Parses current location into a structured route object
 */
export function parseRoute(customPathname, customHash) {
  const pathname = customPathname !== undefined ? customPathname : (typeof window !== 'undefined' ? window.location.pathname : '/');
  const hash = customHash !== undefined ? customHash : (typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '');

  // 1. Check backward-compatible hash navigation
  if (hash) {
    if (hash.startsWith('product-')) {
      const prodId = hash.replace('product-', '');
      const canonicalId = PRODUCT_ALIASES[prodId] || prodId;
      return {
        page: 'product-detail',
        param: canonicalId,
        canonicalPath: `/products/${canonicalId}/`
      };
    }
    if (hash === 'products') return { page: 'products', canonicalPath: '/products/' };
    if (hash === 'services') return { page: 'services', canonicalPath: '/services/' };
    if (hash === 'about') return { page: 'about', canonicalPath: '/about/' };
    if (hash === 'enquiry' || hash.includes('enquiry')) return { page: 'enquiry', canonicalPath: '/enquiry/' };
    if (hash === 'resources') return { page: 'resources', canonicalPath: '/resources/' };
    if (hash === 'privacy-policy') return { page: 'privacy-policy', canonicalPath: '/privacy-policy/' };
  }

  const clean = stripBase(pathname).toLowerCase().replace(/\/+$/, '') || '/';

  if (clean === '/' || clean === '') {
    return { page: 'home', canonicalPath: '/' };
  }

  if (clean === '/about') {
    return { page: 'about', canonicalPath: '/about/' };
  }

  if (clean === '/products') {
    return { page: 'products', canonicalPath: '/products/' };
  }

  if (clean.startsWith('/products/')) {
    const rawId = clean.replace('/products/', '').replace(/\/$/, '');
    const canonicalId = PRODUCT_ALIASES[rawId] || rawId;
    return {
      page: 'product-detail',
      param: canonicalId,
      canonicalPath: `/products/${canonicalId}/`
    };
  }

  if (clean === '/services') {
    return { page: 'services', canonicalPath: '/services/' };
  }

  if (clean === '/wholesale-tamarind-supply' || clean === '/services/wholesale-tamarind-supply') {
    return { page: 'services', param: 'wholesale', canonicalPath: '/wholesale-tamarind-supply/' };
  }

  if (clean === '/retail-distribution' || clean === '/services/retail-distribution') {
    return { page: 'services', param: 'retail', canonicalPath: '/retail-distribution/' };
  }

  if (clean === '/custom-packaging' || clean === '/services/custom-packaging-private-label' || clean === '/services/custom-packaging') {
    return { page: 'services', param: 'custom-label', canonicalPath: '/custom-packaging/' };
  }

  if (clean === '/contact' || clean === '/enquiry') {
    return { page: 'enquiry', canonicalPath: '/contact/' };
  }

  if (clean === '/resources') {
    return { page: 'resources', canonicalPath: '/resources/' };
  }

  if (clean.startsWith('/resources/')) {
    const slug = clean.replace('/resources/', '').replace(/\/$/, '');
    return {
      page: 'resource-detail',
      param: slug,
      canonicalPath: `/resources/${slug}/`
    };
  }

  if (clean === '/privacy-policy') {
    return { page: 'privacy-policy', canonicalPath: '/privacy-policy/' };
  }

  return { page: '404', canonicalPath: '/404.html' };
}

/**
 * Dispatches navigation event and pushes browser state
 */
export function navigateTo(path, { replace = false, state = {} } = {}) {
  if (typeof window === 'undefined') return;

  const targetAppPath = toAppPath(path);

  if (replace) {
    window.history.replaceState(state, '', targetAppPath);
  } else {
    window.history.pushState(state, '', targetAppPath);
  }

  window.dispatchEvent(new CustomEvent('app-navigate', { detail: { path } }));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Click handler for standard anchor tags to enable seamless SPA transitions
 */
export function handleLinkClick(e, path) {
  if (
    e.defaultPrevented ||
    e.button !== 0 ||
    e.metaKey ||
    e.altKey ||
    e.ctrlKey ||
    e.shiftKey
  ) {
    return;
  }
  e.preventDefault();
  navigateTo(path);
}

