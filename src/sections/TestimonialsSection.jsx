import { testimonials } from '../constants/site.js';
import { useGsapReveal } from '../hooks/useGsapReveal.js';
import SectionHeader from '../components/ui/SectionHeader.jsx';

export default function TestimonialsSection() {
  const scope = useGsapReveal();
  const rail = [...testimonials, ...testimonials];

  return (
    <section ref={scope} className="overflow-hidden bg-mist py-24 text-ink sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Client voice"
          title="Trusted by businesses that need clean financial judgment."
          copy="A senior-led relationship model means every recommendation is grounded in context, risk, and execution reality."
        />
      </div>

      <div className="mt-14 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" data-reveal>
        <div className="testimonial-rail flex min-w-max gap-4 pr-4">
          {rail.map((item, index) => (
            <article key={`${item.name}-${index}`} className="w-[340px] shrink-0 rounded-[8px] border border-sand/80 bg-ivory/95 p-6 shadow-[0_18px_70px_rgba(11,27,47,0.09)] sm:w-[430px]">
              <p className="font-display text-2xl leading-tight text-ink">"{item.quote}"</p>
              <div className="mt-8 flex items-center gap-3 border-t border-sand/80 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                  {item.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </span>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-charcoal/65">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
