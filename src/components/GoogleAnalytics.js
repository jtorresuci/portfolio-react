import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const GoogleAnalytics = ({ trackingId }) => {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize(trackingId);

    // Send pageview event on route change
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };
    window.addEventListener('routeChangeComplete', handleRouteChange);
    return () => {
      window.removeEventListener('routeChangeComplete', handleRouteChange);
    };
  }, [trackingId]);

  useEffect(() => {
    // Track user information on mount
    ReactGA.set({ 
      dimension1: navigator.language, // User's language
      dimension2: new Date().getTimezoneOffset(), // User's timezone offset in minutes
      dimension3: window.screen.width, // User's screen width
      dimension4: window.screen.height, // User's screen height
      dimension5: window.navigator.userAgent, // User's user agent string
    });
  }, []);

  return null;
};

export default GoogleAnalytics;
