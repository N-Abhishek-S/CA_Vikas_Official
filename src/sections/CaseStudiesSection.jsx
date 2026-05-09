import { caseStudies } from '../constants/site.js';
import { useGsapReveal } from '../hooks/useGsapReveal.js';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import CaseChart from '../components/ui/CaseChart.jsx';

export default function CaseStudiesSection() {
  const scope = useGsapReveal();

  return (
    <section ref={scope} className="section-pad relative overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(129,155,172,0.18),transparent_30%),linear-gradient(120deg,rgba(184,148,77,0.12),transparent_32%)]" />
      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeader
            eyebrow="Success stories"
            title="Practical financial outcomes, not vague advisory theatre."
            copy="Representative engagements showing how structured finance work creates measurable operating value."
            light
          />
          <p className="text-sm leading-7 text-ivory/75" data-reveal>
            Case data is presented in a real-world style for confidentiality. The operating principles remain the same: diagnose clearly, document properly, and execute with discipline.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {caseStudies.map((study) => (
            <article key={study.title} className="group rounded-[8px] border border-ivory/12 bg-ivory/[0.065] p-6 transition duration-500 hover:-translate-y-2 hover:border-gold/45 hover:bg-ivory/[0.09]" data-reveal>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-5xl font-semibold text-ivory">{study.metric}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-gold">{study.label}</p>
                </div>
              </div>
              <div className="mt-10">
                <CaseChart points={study.chart} />
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold">{study.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory/72">{study.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
