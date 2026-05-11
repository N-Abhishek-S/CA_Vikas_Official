import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { serviceCategories } from '../constants/site.js';
import { useGsapReveal } from '../hooks/useGsapReveal.js';
import SectionHeader from '../components/ui/SectionHeader.jsx';

export default function ServicesSection() {
  const scope = useGsapReveal({ start: 'top 84%' });
  const [expanded, setExpanded] = useState(serviceCategories[0].title);

  return (
    <section id="services" ref={scope} className="section-pad relative overflow-hidden bg-[linear-gradient(180deg,#f2f8fb_0%,#ffffff_52%,#f7fbf8_100%)] text-deep">
      <div className="absolute left-[-12rem] top-24 h-96 w-96 rounded-full bg-blue/8 blur-3xl" />
      <div className="absolute right-[-12rem] bottom-24 h-96 w-96 rounded-full bg-green/10 blur-3xl" />

      <div className="relative mx-auto max-w-370 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Services"
            title="Categorized advisory for compliance-heavy businesses."
            copy="Each service line is structured for accuracy, documentation discipline, and timely execution."
          />
          <p className="max-w-sm text-sm font-semibold uppercase leading-7 tracking-[0.18em] text-blue/70" data-reveal>
            MCA • ROC • Audit • Income Tax • GST • Loans • Subsidies
          </p>
        </div>

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-2">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            const isOpen = expanded === category.title;

            return (
              <article
                key={category.title}
                data-reveal
                className={clsx(
                  'group rounded-[1.5rem] border bg-white p-5 shadow-[0_18px_54px_rgba(24,66,95,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(24,66,95,0.13)] sm:p-6',
                  isOpen ? 'border-green/34 ring-4 ring-green/8' : 'border-blue/10 hover:border-blue/20',
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-start gap-4 text-left outline-none focus-visible:rounded-2xl focus-visible:ring-2 focus-visible:ring-orange/45"
                  onClick={() => setExpanded(isOpen ? '' : category.title)}
                  aria-expanded={isOpen}
                >
                  <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-blue/8 text-blue transition duration-300 group-hover:bg-green/12 group-hover:text-green">
                    <Icon size={24} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-2xl font-semibold text-deep">{category.title}</span>
                    <span className="mt-3 block text-sm leading-7 text-slate">{category.description}</span>
                  </span>
                  <span
                    className={clsx(
                      'mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-blue/10 bg-soft text-blue transition duration-300',
                      isOpen && 'rotate-180 border-green/24 bg-green/10 text-green',
                    )}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                <div
                  className={clsx(
                    'grid transition-[grid-template-rows,opacity] duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="mt-6 border-t border-blue/10 pt-5">
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {category.items.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-6 text-slate">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
