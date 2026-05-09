import { credentials, timeline } from '../constants/site.js';
import { useGsapReveal } from '../hooks/useGsapReveal.js';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import caPrincipal from '../assets/gallery/ca-principal.png';
import officeBoardroom from '../assets/gallery/office-boardroom.svg';

export default function AboutSection() {
  const scope = useGsapReveal();

  return (
    <section id="about" ref={scope} className="section-pad section-texture relative overflow-hidden bg-ivory text-ink">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_10%,rgba(199,163,107,0.13),transparent_28%),linear-gradient(180deg,#f6f2ea,#efe7da_120%)]" />
      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="About the practice"
              title="A finance partner for decisions that cannot afford ambiguity."
              copy="CA Person combines rigorous compliance execution with strategic advisory for ambitious individuals, founders, and operating companies."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {credentials.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="luxe-surface rounded-[8px] p-5" data-reveal>
                    <div className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-gold shadow-[0_14px_34px_rgba(17,32,51,0.18)]">
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-charcoal/72">{item.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div>
            <div className="grid gap-5 md:grid-cols-[0.92fr_1.08fr]">
              <figure className="relative overflow-hidden rounded-[8px] border border-sand/80 bg-ivory shadow-[0_30px_90px_rgba(17,32,51,0.12)]" data-reveal>
                <img src={caPrincipal} alt="CA principal advisory profile" className="editorial-photo h-full min-h-[390px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/34 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-5 bottom-5 rounded-[8px] bg-ivory/[0.9] p-4 text-sm font-semibold text-ink shadow-[0_18px_50px_rgba(17,32,51,0.16)] backdrop-blur-md">
                  Senior-led finance advisory for taxation, audit, and compliance.
                </figcaption>
              </figure>

              <div className="relative overflow-hidden rounded-[8px] bg-navy p-8 text-ivory shadow-[0_36px_110px_rgba(17,32,51,0.22)] sm:p-10" data-reveal>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_0%,rgba(93,139,139,0.18),transparent_32%),linear-gradient(145deg,rgba(199,163,107,0.13),transparent_42%)]" />
                <div className="relative">
                  <div>
                    <p className="eyebrow text-gold">Mission</p>
                    <p className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                      Make finance clearer, safer, and more strategic for every client relationship.
                    </p>
                  </div>
                  <div className="mt-8 space-y-5 text-sm leading-7 text-ivory/76 sm:text-base sm:leading-8">
                    <p>
                      The office is built for clients who value careful thinking as much as fast execution. Every engagement begins with a practical understanding of risk, documentation, and the commercial decision behind the numbers.
                    </p>
                    <p>
                      From tax filings and audit readiness to entity setup and virtual CFO guidance, the goal is to create financial systems that leaders can trust under pressure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <figure className="mt-5 overflow-hidden rounded-[8px] border border-sand/80 bg-ivory shadow-[0_24px_80px_rgba(17,32,51,0.1)]" data-reveal>
              <img src={officeBoardroom} alt="CA firm office boardroom" className="editorial-photo h-72 w-full object-cover" />
            </figure>

            <div className="mt-10" data-reveal>
              <p className="eyebrow text-royal">Career timeline</p>
              <div className="mt-7 border-l border-sand">
                {timeline.map((item) => (
                  <article key={item.year} className="relative pb-10 pl-8 last:pb-0">
                    <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-soft bg-gold shadow-[0_0_0_6px_rgba(184,148,77,0.16)]" />
                    <p className="text-sm font-semibold text-royal">{item.year}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-charcoal/72">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
