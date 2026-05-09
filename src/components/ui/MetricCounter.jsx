import { useAnimatedCounter } from '../../hooks/useAnimatedCounter.js';
import { useInViewOnce } from '../../hooks/useInViewOnce.js';
import { formatMetric } from '../../utils/format.js';

export default function MetricCounter({ value, suffix = '', label, className = '', light = false }) {
  const [ref, active] = useInViewOnce();
  const current = useAnimatedCounter(value, active);

  return (
    <div ref={ref} className={className}>
      <div className={`font-display text-4xl font-semibold sm:text-5xl ${light ? 'text-ivory' : 'text-ink'}`}>
        {formatMetric(current, suffix)}
      </div>
      <p className={`mt-2 text-sm leading-6 ${light ? 'text-ivory/75' : 'text-charcoal/72'}`}>{label}</p>
    </div>
  );
}
