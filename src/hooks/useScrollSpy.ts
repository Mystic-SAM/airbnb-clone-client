import { useState, useEffect } from 'react';

/**
 * Hook to track whether page has scrolled past a specific vertical threshold
 * @param threshold Scroll Y offset in pixels
 */
export function useScrollSpy(threshold: number = 600): boolean {
  const [isScrolledPast, setIsScrolledPast] = useState<boolean>(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolledPast(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolledPast;
}
