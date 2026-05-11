import { CheckCircle2 } from 'lucide-react';
import { brand, companyIntro, media, visionMission } from '../constants/site.js';
import { useGsapReveal } from '../hooks/useGsapReveal.js';
import SectionHeader from '../components/ui/SectionHeader.jsx';

const evolutionPoints = [
  'GST implementation',
  'Faceless income tax assessments',
  'Digital compliance systems',
  'Updated corporate laws',
  'Changing taxation frameworks',
];

export default function AboutSection() {
  const scope = useGsapReveal({ start: 'top 84%' });

  return (
    <section id="about" ref={scope} className="section-pad bg-paper text-deep">
      <div className="mx-auto max-w-370 px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,9fr)_minmax(0,11fr)] lg:items-start">
          <div className="relative" data-reveal>
            <div className="sticky top-28">
              <SectionHeader
                eyebrow="About The Firm"
                title="A disciplined CA practice built for modern compliance."
                copy={`${brand.name} combines professional expertise with a proactive approach for clients navigating financial, tax and regulatory obligations.`}
              />

              <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-blue/10 bg-white p-3 shadow-[0_28px_90px_rgba(24,66,95,0.12)]">
                <img
                  src={media.office}
                  alt="VOK & Associates office and team workspace"
                  className="h-[24rem] w-full rounded-[1.25rem] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[1.75rem] border border-blue/10 bg-white p-7 shadow-[0_22px_70px_rgba(24,66,95,0.08)] sm:p-9" data-reveal>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-orange">Established {brand.established}</p>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate sm:text-lg">
                {companyIntro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-blue/10 bg-[linear-gradient(145deg,#ffffff,#f4fbf8)] p-6 shadow-[0_18px_52px_rgba(24,66,95,0.08)]" data-reveal>
                <p className="font-display text-2xl font-semibold text-blue">Vision</p>
                <p className="mt-4 text-sm leading-7 text-slate">{visionMission.vision}</p>
              </div>
              <div className="rounded-[1.5rem] border border-blue/10 bg-[linear-gradient(145deg,#ffffff,#fff7ef)] p-6 shadow-[0_18px_52px_rgba(24,66,95,0.08)]" data-reveal>
                <p className="font-display text-2xl font-semibold text-blue">Mission</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate">
                  {visionMission.mission.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-blue/10 bg-deep p-7 text-white shadow-[0_28px_90px_rgba(24,66,95,0.2)] sm:p-9" data-reveal>
              <p className="eyebrow text-orange">Regulatory Evolution</p>
              <h3 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Guided clients through major reforms in India’s financial landscape.
              </h3>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {evolutionPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white/84">
                    <span className="h-2 w-2 rounded-full bg-green" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
