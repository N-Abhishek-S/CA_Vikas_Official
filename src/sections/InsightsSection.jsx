import { insights } from '../constants/site.js';
import { useGsapReveal } from '../hooks/useGsapReveal.js';
import Button from '../components/ui/Button.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';

export default function InsightsSection() {
  const scope = useGsapReveal();

  return (
    <section id="insights" ref={scope} className="section-pad bg-cream text-ink">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Insights"
            title="Financial clarity for the decisions leaders keep revisiting."
            copy="Concise updates and practical guidance across tax, GST, startup finance, and business law."
          />
          <Button href="#contact" variant="link" size="sm" className="text-sm" data-reveal>
            Request a custom advisory note
          </Button>
        </div>

        <div className="mt-14 divide-y divide-sand border-y border-sand">
          {insights.map((item, index) => (
            <article key={item.title} className="group grid gap-5 py-7 transition duration-300 hover:bg-soft md:grid-cols-[0.35fr_1fr_0.25fr] md:px-5" data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-royal">{item.category}</p>
              <h3 className="font-display text-2xl font-semibold leading-tight transition duration-300 group-hover:text-royal sm:text-3xl">
                {item.title}
              </h3>
              <div className="flex items-center justify-between gap-4 md:justify-end">
                <p className="text-sm text-charcoal/65">{item.readTime}</p>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sm text-gold transition duration-300 group-hover:bg-gold group-hover:text-ink">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
