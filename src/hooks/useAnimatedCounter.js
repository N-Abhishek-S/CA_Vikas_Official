import { useEffect, useRef, useState } from 'react';

export function useAnimatedCounter(target, active, duration = 1500) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!active) return undefined;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [active, duration, target]);

  return value;
}
