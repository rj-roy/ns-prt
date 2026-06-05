'use client';
import { useEffect } from 'react';

export default function HideLeftAboutProvider({ children }) {
  useEffect(() => {
    const handleHeroVisibilityChange = () => {
      const heroVisible = document.body.getAttribute('data-hero-visible') === 'true';
      if (heroVisible) {
        document.documentElement.classList.add('hide-sidebar');
      } else {
        document.documentElement.classList.remove('hide-sidebar');
      }
    };

    // Check initial state
    handleHeroVisibilityChange();

    // Create a MutationObserver to watch for attribute changes
    const observer = new MutationObserver(handleHeroVisibilityChange);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-hero-visible'],
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
