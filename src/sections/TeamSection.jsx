import { teamMembers } from '../constants/site.js';
import { useGsapReveal } from '../hooks/useGsapReveal.js';
import SectionHeader from '../components/ui/SectionHeader.jsx';

export default function TeamSection() {
  const scope = useGsapReveal({ start: 'top 84%' });

  return (
    <section id="team" ref={scope} className="section-pad bg-[#f5efe4] text-ink">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Team"
            title="Senior attention with a disciplined support desk."
            copy="A premium CA firm experience depends on both expert judgment and reliable execution. The team structure supports advisory quality, documentation, and deadline control."
          />
          <div className="max-w-sm border-l border-sand pl-5 text-sm leading-7 text-charcoal/72" data-reveal>
            Every engagement is reviewed through a senior-led workflow so clients receive clear communication, careful records, and practical financial direction.
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <article key={member.name} className="team-card group" data-reveal style={{ transitionDelay: `${index * 45}ms` }}>
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <img src={member.image} alt={member.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                  <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-ivory/92 text-ink shadow-[0_16px_40px_rgba(11,27,47,0.12)]">
                    <Icon size={20} />
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-royal">{member.role}</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-ink">{member.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-charcoal/72">{member.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {member.expertise.map((item) => (
                      <span key={item} className="rounded-full border border-sand/80 bg-soft px-3 py-1.5 text-xs font-semibold text-charcoal/80">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
