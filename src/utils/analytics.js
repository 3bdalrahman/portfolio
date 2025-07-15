// GA4 Analytics Tracking Utility

// Initialize GA4 if not already available
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag = window.gtag || function() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  };
}

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'Portfolio Interaction',
      ...parameters
    });
    console.log('GA4 Event tracked:', eventName, parameters);
  }
};

// Track CV view/download
export const trackCVView = (action = 'view') => {
  trackEvent('cv_interaction', {
    event_label: `CV ${action}`,
    value: 1
  });
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  trackEvent('social_click', {
    event_label: platform,
    value: 1
  });
};

// Track project interactions
export const trackProjectInteraction = (projectName, action, linkType) => {
  trackEvent('project_interaction', {
    event_label: `${projectName} - ${action}`,
    custom_parameter_1: projectName,
    custom_parameter_2: action,
    custom_parameter_3: linkType,
    value: 1
  });
};

// Track certificate verification
export const trackCertificateVerification = (certificateName) => {
  trackEvent('certificate_verification', {
    event_label: certificateName,
    value: 1
  });
};

// Track contact form submission
export const trackContactSubmission = (status = 'success') => {
  trackEvent('contact_submission', {
    event_label: status,
    value: 1
  });
};

// Track section views
export const trackSectionView = (sectionName) => {
  trackEvent('section_view', {
    event_label: sectionName,
    value: 1
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  trackEvent('button_click', {
    event_label: buttonName,
    custom_parameter_1: location,
    value: 1
  });
};

// Track page views
export const trackPageView = (pageName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-FF8HB6J7Q7', {
      page_title: pageName,
      page_location: window.location.href
    });
  }
}; 