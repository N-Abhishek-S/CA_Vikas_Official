export default function SectionHeader({ eyebrow, title, copy, align = 'left', light = false }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl`} data-reveal>
      <p className={`eyebrow ${light ? 'text-gold' : 'text-royal'}`}>{eyebrow}</p>
      <h2 className={`mt-5 font-display text-[clamp(2.35rem,5vw,5.55rem)] font-semibold leading-[1.02] ${light ? 'text-ivory' : 'text-ink'}`}>
        {title}
      </h2>
      {copy && <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${light ? 'text-ivory/74' : 'text-charcoal/72'}`}>{copy}</p>}
    </div>
  );
}
