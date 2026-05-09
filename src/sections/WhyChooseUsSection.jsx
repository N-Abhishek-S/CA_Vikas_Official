import { trustDrivers } from '../constants/site.js';
import { useGsapReveal } from '../hooks/useGsapReveal.js';
import MetricCounter from '../components/ui/MetricCounter.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';

export default function WhyChooseUsSection() {
  const scope = useGsapReveal();

  return (
    <section id="proof" ref={scope} className="section-pad bg-ivory text-ink">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Why choose us"
            title="Governance, speed, and discretion without the corporate fog."
            copy="Clients get the discipline of a larger firm with the responsiveness of a senior-led advisory office."
          />

          <div className="grid gap-px overflow-hidden rounded-[8px] border border-sand bg-sand/80 shadow-[0_24px_80px_rgba(11,27,47,0.08)] sm:grid-cols-2">
            {trustDrivers.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.label} className="group bg-cream/78 p-6 transition duration-500 hover:bg-soft" data-reveal>
                  <div className="flex items-start justify-between gap-5">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-gold transition duration-500 group-hover:bg-royal group-hover:text-ivory">
                      <Icon size={21} />
                    </span>
                    <MetricCounter value={item.value} suffix={item.suffix} label={item.label} className="text-right" />
                  </div>
                  <p className="mt-8 text-sm leading-7 text-charcoal/72">{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
