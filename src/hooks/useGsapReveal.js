import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../animations/gsapSetup.js';

export function useGsapReveal(options = {}) {
  const scope = useRef(null);

  useLayoutEffect(() => {
    if (!scope.current) return undefined;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('[data-reveal]');
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            autoAlpha: 0,
            y: options.y ?? 34,
            filter: 'blur(10px)',
          },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: options.duration ?? 0.95,
            delay: Math.min(index * 0.08, 0.32),
            scrollTrigger: {
              trigger: item,
              start: options.start ?? 'top 82%',
              once: true,
            },
          },
        );
      });
    }, scope);

    return () => ctx.revert();
  }, [options.duration, options.start, options.y]);

  return scope;
}
