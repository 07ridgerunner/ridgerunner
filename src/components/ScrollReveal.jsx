'use client';

import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Elements that fade/slide in as they scroll into view.
const SELECTOR = [
  'main section .mx-auto > *:not(.grid)',
  'main section .grid > *',
  'main section ol > li',
  'footer .grid > *',
].join(',');

export function ScrollReveal() {
  const pathname = usePathname();

  useIsoLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const timers = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add('rv-in');
          io.unobserve(el);
          // Clean up afterwards so hover effects on the element are not slowed down.
          timers.push(
            setTimeout(() => {
              el.classList.remove('rv', 'rv-in');
              el.style.removeProperty('--rv-delay');
            }, 1500),
          );
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
    );

    const els = Array.from(new Set(document.querySelectorAll(SELECTOR))).filter(
      // the first section (hero) is animated by CSS on load
      (el) => !el.closest('main > section:first-of-type'),
    );

    els.forEach((el) => {
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      const index = Math.max(0, siblings.indexOf(el));
      el.style.setProperty('--rv-delay', `${Math.min(index, 6) * 90}ms`);
      el.classList.add('rv');
      io.observe(el);
    });

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}

export default ScrollReveal;
