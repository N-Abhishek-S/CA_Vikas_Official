import { whyChooseUs } from '../constants/site.js';
import { useGsapReveal } from '../hooks/useGsapReveal.js';
import SectionHeader from '../components/ui/SectionHeader.jsx';

export default function WhyChooseUsSection() {
  const scope = useGsapReveal({ start: 'top 84%' });

  return (
    <section ref={scope} className="section-pad bg-deep text-white">
      <div className="mx-auto max-w-370 px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,8fr)_minmax(0,12fr)] lg:items-start">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Professional confidence for decisions that cannot drift."
            copy="The firm’s work is anchored in integrity, confidentiality, timely compliance and practical financial guidance."
            light
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  data-reveal
                  className="group rounded-[1.4rem] border border-white/10 bg-white/[0.065] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-green/40 hover:bg-white/[0.09]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/8 text-orange transition duration-300 group-hover:bg-green/14 group-hover:text-green">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
