import clsx from 'clsx';

export default function SectionHeader({ eyebrow, title, copy, align = 'left', light = false }) {
  return (
    <div className={clsx('max-w-3xl', align === 'center' && 'mx-auto text-center')} data-reveal>
      <p className={clsx('eyebrow', light ? 'text-orange' : 'text-green')}>{eyebrow}</p>
      <h2
        className={clsx(
          'mt-4 font-display text-[clamp(2.15rem,4.7vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em]',
          light ? 'text-white' : 'text-deep',
        )}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={clsx(
            'mt-5 max-w-2xl text-base leading-8 sm:text-lg',
            align === 'center' && 'mx-auto',
            light ? 'text-white/72' : 'text-slate/76',
          )}
        >
          {copy}
        </p>
      )}
    </div>
  );
}
