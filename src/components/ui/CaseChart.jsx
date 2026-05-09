export default function CaseChart({ points }) {
  const max = Math.max(...points);

  return (
    <div className="flex h-24 items-end gap-2" aria-hidden="true">
      {points.map((point, index) => (
        <span
          key={`${point}-${index}`}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-royal to-cyan/70 opacity-85 transition duration-500 group-hover:from-gold group-hover:to-ivory"
          style={{ height: `${Math.max((point / max) * 100, 18)}%` }}
        />
      ))}
    </div>
  );
}
