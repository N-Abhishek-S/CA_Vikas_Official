import Button from './Button.jsx';

export default function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <article
      className="group dark-luxe-surface relative min-h-[330px] overflow-hidden rounded-[8px] p-6 transition duration-500 hover:-translate-y-2 hover:border-gold/45 hover:bg-ivory/[0.105] hover:shadow-[0_36px_110px_rgba(4,15,27,0.4)]"
      data-reveal
      style={{ transitionDelay: `${index * 25}ms` }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan/12 blur-3xl transition duration-700 group-hover:bg-gold/14" />
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="grid h-12 w-12 place-items-center rounded-full border border-ivory/14 bg-ivory/[0.08] text-gold shadow-[inset_0_1px_0_rgba(246,242,234,0.08)] transition duration-500 group-hover:border-gold/45 group-hover:bg-gold group-hover:text-ink">
            <Icon size={21} />
          </div>
          <p className="mt-12 text-xs font-extrabold uppercase tracking-[0.24em] text-gold/62">0{index + 1}</p>
          <h3 className="mt-4 font-display text-2xl font-semibold text-ivory">{service.title}</h3>
          <p className="mt-4 text-sm leading-7 text-ivory/68">{service.description}</p>
        </div>
        <Button href="#contact" variant="linkDark" size="sm" className="mt-8 justify-start text-sm">
          Discuss service
        </Button>
      </div>
    </article>
  );
}
