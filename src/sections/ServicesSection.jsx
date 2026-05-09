import { services } from '../constants/site.js';
import { useGsapReveal } from '../hooks/useGsapReveal.js';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import ServiceCard from '../components/ui/ServiceCard.jsx';

export default function ServicesSection() {
  const scope = useGsapReveal({ start: 'top 86%' });

  return (
    <section id="services" ref={scope} className="section-pad section-texture relative overflow-hidden bg-slateblue text-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(199,163,107,0.18),transparent_28%),radial-gradient(circle_at_92%_8%,rgba(93,139,139,0.15),transparent_30%),linear-gradient(180deg,#10263d,#0b1f33)]" />

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Services"
            title="Specialized advisory across the full financial operating cycle."
            copy="Each service is designed to reduce uncertainty, strengthen compliance, and help leadership make cleaner financial decisions."
            light
          />
          <p className="max-w-sm border-l border-gold/30 pl-5 text-sm leading-7 text-ivory/68" data-reveal>
            Engagements can be scoped as one-time advisory, recurring compliance retainers, audit support, or strategic finance office mandates.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
