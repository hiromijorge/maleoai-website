// Analytics utility for tracking events
// Supports both Google Analytics 4 and custom event tracking

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return;
  
  if (!GA_TRACKING_ID) {
    console.warn('Google Analytics ID not configured');
    return;
  }

  // Check if gtag is already loaded
  if (window.gtag) return;

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true,
  });
};

// Track page views
export const pageview = (url) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
  });
};

// Track custom events
export const trackEvent = (action, params = {}) => {
  if (typeof window === 'undefined') return;
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Analytics Event:', { action, ...params });
  }

  // Send to Google Analytics if available
  if (window.gtag) {
    window.gtag('event', action, {
      ...params,
      event_category: params.category || 'engagement',
      event_label: params.label || action,
      value: params.value,
    });
  }

  // Also store in localStorage for backup/retrieval
  try {
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    events.push({
      action,
      ...params,
      timestamp: new Date().toISOString(),
      url: window.location.href,
    });
    // Keep only last 100 events
    if (events.length > 100) events.shift();
    localStorage.setItem('analytics_events', JSON.stringify(events));
  } catch (e) {
    // Ignore localStorage errors
  }
};

// Track form interactions
export const trackFormInteraction = (formName, interaction, data = {}) => {
  trackEvent(`form_${interaction}`, {
    form_name: formName,
    ...data,
  });
};

// Track CTA clicks
export const trackCTA = (ctaName, location, destination = '') => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    location: location,
    destination: destination,
  });
};

// Track service interest
export const trackServiceInterest = (serviceName) => {
  trackEvent('service_interest', {
    service: serviceName,
  });
};

// Scroll tracking for engagement
let scrollDepths = new Set();
export const trackScrollDepth = () => {
  if (typeof window === 'undefined') return;
  
  const scrollPercent = Math.round(
    (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
  );
  
  const milestones = [25, 50, 75, 90];
  milestones.forEach(milestone => {
    if (scrollPercent >= milestone && !scrollDepths.has(milestone)) {
      scrollDepths.add(milestone);
      trackEvent('scroll_depth', {
        depth: `${milestone}%`,
        page: window.location.pathname,
      });
    }
  });
};

// Time on page tracking
let startTime = Date.now();
export const trackTimeOnPage = () => {
  const timeSpent = Math.round((Date.now() - startTime) / 1000);
  trackEvent('time_on_page', {
    seconds: timeSpent,
    page: window.location.pathname,
  });
};

// Set up scroll and time tracking
export const setupEngagementTracking = () => {
  if (typeof window === 'undefined') return;
  
  // Reset scroll depths on page load
  scrollDepths = new Set();
  startTime = Date.now();
  
  // Track scroll depth
  window.addEventListener('scroll', () => {
    // Throttle scroll events
    if (window.scrollTimeout) clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(trackScrollDepth, 100);
  });
  
  // Track time on page when leaving
  window.addEventListener('beforeunload', trackTimeOnPage);
};
