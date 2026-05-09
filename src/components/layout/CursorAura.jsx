import { useEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapSetup.js';

export default function CursorAura() {
  const auraRef = useRef(null);

  useEffect(() => {
    const aura = auraRef.current;
    if (!aura || window.matchMedia('(pointer: coarse)').matches) return undefined;

    const xTo = gsap.quickTo(aura, 'x', { duration: 0.45, ease: 'power3.out' });
    const yTo = gsap.quickTo(aura, 'y', { duration: 0.45, ease: 'power3.out' });

    const move = (event) => {
      xTo(event.clientX - 140);
      yTo(event.clientY - 140);
    };

    const down = () => gsap.to(aura, { scale: 0.82, duration: 0.18 });
    const up = () => gsap.to(aura, { scale: 1, duration: 0.28 });

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
    };
  }, []);

  return <div ref={auraRef} className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-[280px] w-[280px] rounded-full bg-cyan/12 blur-3xl lg:block" />;
}
