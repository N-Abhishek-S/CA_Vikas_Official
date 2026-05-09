export function formatMetric(value, suffix = '') {
  return `${value.toLocaleString('en-IN')}${suffix}`;
}
