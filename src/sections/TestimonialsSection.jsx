import { Quote } from 'lucide-react';
import { testimonials } from '../constants/site.js';
import { useGsapReveal } from '../hooks/useGsapReveal.js';
import SectionHeader from '../components/ui/SectionHeader.jsx';

export default function TestimonialsSection() {
  const scope = useGsapReveal({ start: 'top 84%' });
  const featured = testimonials.slice(0, 3);
  const rest = testimonials.slice(3);

  return (
    <section id="testimonials" ref={scope} className="section-pad overflow-hidden bg-paper text-deep">
      <div className="mx-auto max-w-370 px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Testimonials"
          title="Client words from businesses and professionals served by the firm."
          copy="The testimonials below are taken from the provided firm information."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featured.map((item) => (
            <article
              key={item.company}
              data-reveal
              className="rounded-[1.5rem] border border-blue/10 bg-white p-7 shadow-[0_22px_70px_rgba(24,66,95,0.09)]"
            >
              <Quote className="h-9 w-9 text-orange" />
              <p className="mt-7 text-base leading-8 text-slate">“{item.quote}”</p>
              <p className="mt-7 border-t border-blue/10 pt-5 font-display text-xl font-semibold text-blue">{item.company}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 overflow-hidden" data-reveal>
          <div className="testimonial-rail flex w-max gap-5">
            {[...rest, ...rest].map((item, index) => (
              <article
                key={`${item.company}-${index}`}
                className="w-[21rem] rounded-[1.25rem] border border-blue/10 bg-white/76 p-6 shadow-[0_16px_48px_rgba(24,66,95,0.08)] sm:w-[27rem]"
                aria-hidden={index >= rest.length}
              >
                <p className="text-sm leading-7 text-slate">“{item.quote}”</p>
                <p className="mt-5 font-display text-lg font-semibold text-blue">{item.company}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
