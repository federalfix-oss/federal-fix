type EventParams = Record<string, string | number | boolean | undefined>;

type PixelFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: PixelFn & { callMethod?: PixelFn; queue?: unknown[]; loaded?: boolean; version?: string };
    _ffTrackingInit?: boolean;
  }
}

const gtmId = import.meta.env.VITE_GTM_ID?.trim();
const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const metaPixelId = import.meta.env.VITE_META_PIXEL_ID?.trim();
const googleSiteVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION?.trim();

const hasWindow = typeof window !== 'undefined';
let isTrackingReady = false;
const queuedPageViews: string[] = [];
const queuedLeads: Array<{ source: string; params?: EventParams }> = [];

const addScript = (id: string, src: string, inline?: string) => {
  if (!hasWindow || document.getElementById(id)) {
    return;
  }
  const script = document.createElement('script');
  script.id = id;
  if (src) {
    script.src = src;
    script.async = true;
  }
  if (inline) {
    script.text = inline;
  }
  document.head.appendChild(script);
};

const pushDataLayer = (event: Record<string, unknown>) => {
  if (!hasWindow) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
};

const setMetaContent = (name: string, value: string) => {
  if (!hasWindow || !value) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
};

const setupGoogleTagManager = () => {
  if (!gtmId || !hasWindow) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  addScript('ff-gtm', `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`);
};

const setupGoogleAnalytics = () => {
  if (!gaId || gtmId || !hasWindow) return;
  addScript('ff-ga-src', `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`);
  addScript(
    'ff-ga-inline',
    '',
    [
      'window.dataLayer = window.dataLayer || [];',
      'function gtag(){dataLayer.push(arguments);}',
      'window.gtag = window.gtag || gtag;',
      "gtag('js', new Date());",
      `gtag('config', '${gaId}', { send_page_view: false });`,
    ].join('\n')
  );
};

const setupMetaPixel = () => {
  if (!metaPixelId || !hasWindow) return;
  if (!window.fbq) {
    const fbq: Window['fbq'] = function (...args: unknown[]) {
      if (fbq?.callMethod) {
        fbq.callMethod(...args);
      } else {
        fbq?.queue?.push(args);
      }
    };
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = '2.0';
    window.fbq = fbq;
  }
  addScript('ff-meta-pixel', 'https://connect.facebook.net/en_US/fbevents.js');
  window.fbq?.('init', metaPixelId);
};

export const initTracking = () => {
  if (!hasWindow || window._ffTrackingInit) return;
  window._ffTrackingInit = true;
  if (googleSiteVerification) {
    setMetaContent('google-site-verification', googleSiteVerification);
  }
  setupGoogleTagManager();
  setupGoogleAnalytics();
  setupMetaPixel();
  isTrackingReady = true;

  queuedPageViews.splice(0).forEach((path) => {
    trackPageView(path);
  });
  queuedLeads.splice(0).forEach((event) => {
    trackLead(event.source, event.params);
  });
};

export const initTrackingDeferred = () => {
  if (!hasWindow || window._ffTrackingInit) return;

  let timer: number | undefined;
  const start = () => {
    if (window._ffTrackingInit) return;
    if (timer) {
      window.clearTimeout(timer);
    }
    cleanup();
    initTracking();
  };

  const cleanup = () => {
    window.removeEventListener('pointerdown', start);
    window.removeEventListener('keydown', start);
    window.removeEventListener('scroll', start);
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };

  const onVisibilityChange = () => {
    if (document.visibilityState === 'visible') start();
  };

  window.addEventListener('pointerdown', start, { once: true, passive: true });
  window.addEventListener('keydown', start, { once: true });
  window.addEventListener('scroll', start, { once: true, passive: true });
  document.addEventListener('visibilitychange', onVisibilityChange);
  timer = window.setTimeout(start, 4500);
};

export const trackPageView = (path?: string) => {
  if (!hasWindow) return;
  const pagePath = path || `${window.location.pathname}${window.location.search}`;
  if (!isTrackingReady) {
    queuedPageViews.push(pagePath);
    return;
  }
  const pageTitle = document.title;
  if (gtmId) {
    pushDataLayer({ event: 'page_view', page_path: pagePath, page_title: pageTitle });
  } else if (gaId && window.gtag) {
    window.gtag('event', 'page_view', { page_path: pagePath, page_title: pageTitle });
  }
  if (metaPixelId) {
    window.fbq?.('track', 'PageView');
  }
};

export const trackLead = (source: string, params?: EventParams) => {
  if (!hasWindow) return;
  if (!isTrackingReady) {
    queuedLeads.push({ source, params });
    return;
  }
  const payload = { source, ...params };
  if (gtmId) {
    pushDataLayer({ event: 'generate_lead', ...payload });
  } else if (gaId && window.gtag) {
    window.gtag('event', 'generate_lead', payload);
  }
  if (metaPixelId) {
    window.fbq?.('track', 'Lead', payload);
  }
};
