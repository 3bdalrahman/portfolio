// ReactGA Analytics Tracking Utility
import ReactGA from 'react-ga4';

// Initialize ReactGA
export const initGA = () => {
  if (typeof window !== 'undefined') {
    try {
      ReactGA.initialize('G-FF8HB6J7Q7', {
        debug: true, // Enable debug mode to see more info
        gaOptions: {
          siteSpeedSampleRate: 100
        }
      });
      console.log('ReactGA initialized successfully');
      
      // Send initial pageview
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      
      // Send a test event to verify ReactGA is working
      setTimeout(() => {
        ReactGA.event({
          category: 'Test',
          action: 'App Loaded',
          label: 'Portfolio Loaded Successfully'
        });
        console.log('Test event sent to verify ReactGA');
      }, 2000);
    } catch (error) {
      console.error('ReactGA initialization failed:', error);
    }
  }
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined') {
    try {
      ReactGA.event({
        category: 'Portfolio Interaction',
        action: eventName,
        label: parameters.label || parameters.event_label,
        value: parameters.value || 1,
        nonInteraction: false,
        transport: 'beacon'
      });
      console.log('ReactGA Event tracked:', eventName, parameters);
    } catch (error) {
      console.error('ReactGA Event failed:', error);
    }
  }
};

// Track CV view/download
export const trackCVView = (action = 'view') => {
  trackEvent('cv_interaction', {
    label: `CV ${action}`,
    value: 1
  });
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  trackEvent('social_click', {
    label: platform,
    value: 1
  });
};

// Track project interactions
export const trackProjectInteraction = (projectName, action, linkType) => {
  trackEvent('project_interaction', {
    label: `${projectName} - ${action}`,
    custom_parameter_1: projectName,
    custom_parameter_2: action,
    custom_parameter_3: linkType,
    value: 1
  });
};

// Track certificate verification
export const trackCertificateVerification = (certificateName) => {
  trackEvent('certificate_verification', {
    label: certificateName,
    value: 1
  });
};

// Track contact form submission
export const trackContactSubmission = (status = 'success') => {
  trackEvent('contact_submission', {
    label: status,
    value: 1
  });
};

// Track section views
export const trackSectionView = (sectionName) => {
  trackEvent('section_view', {
    label: sectionName,
    value: 1
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  trackEvent('button_click', {
    label: buttonName,
    custom_parameter_1: location,
    value: 1
  });
};

// Track page views
export const trackPageView = (pageName) => {
  if (typeof window !== 'undefined') {
    try {
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: pageName
      });
      console.log('ReactGA Pageview tracked:', pageName);
    } catch (error) {
      console.error('ReactGA Pageview failed:', error);
    }
  }
}; 