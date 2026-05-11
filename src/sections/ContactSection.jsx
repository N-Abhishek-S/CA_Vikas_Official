import { MapPin } from 'lucide-react';
import { contact, contactCards } from '../constants/site.js';
import { useGsapReveal } from '../hooks/useGsapReveal.js';
import Button from '../components/ui/Button.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';

export default function ContactSection() {
  const scope = useGsapReveal({ start: 'top 84%' });

  return (
    <section id="contact" ref={scope} className="section-pad bg-[linear-gradient(180deg,#f7fbf8_0%,#edf6fb_100%)] text-deep">
      <div className="mx-auto max-w-370 px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,9fr)_minmax(0,11fr)]">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Book a consultation with VOK & Associates."
              copy="Connect with the office for taxation, audit, accounting, compliance, financial advisory, project finance, and subsidy consultancy."
            />

            <div className="mt-10 grid gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.label}
                    data-reveal
                    className="flex gap-4 rounded-[1.25rem] border border-blue/10 bg-white/82 p-5 shadow-[0_18px_52px_rgba(24,66,95,0.08)] backdrop-blur-xl"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue/8 text-blue">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-green">{card.label}</p>
                      <p className="mt-2 text-sm leading-7 text-slate">{card.value}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-7 flex flex-wrap gap-3" data-reveal>
              {contact.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-blue/10 bg-white px-4 text-sm font-semibold text-blue shadow-[0_12px_32px_rgba(24,66,95,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-green/36 hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/45"
                  >
                    <Icon size={17} />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-blue/10 bg-white p-4 shadow-[0_34px_100px_rgba(24,66,95,0.14)]" data-reveal>
            <div className="grid gap-4 lg:grid-cols-[minmax(0,9fr)_minmax(0,11fr)]">
              <div className="relative min-h-[21rem] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#13537c,#4cb244)] p-6 text-white">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/14" />
                <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-orange/24" />
                <MapPin className="relative h-10 w-10 text-white" />
                <h3 className="relative mt-7 font-display text-3xl font-semibold leading-tight">Office in Bhandara, Maharashtra</h3>
                <p className="relative mt-4 text-sm leading-7 text-white/82">{contact.address}</p>
                <div className="relative mt-8 rounded-2xl border border-white/18 bg-white/12 p-4 text-sm leading-7 text-white/84 backdrop-blur-xl">
                  Phone: {contact.phones.join(' / ')}
                  <br />
                  Landline: {contact.landline}
                  <br />
                  Email: {contact.emails.join(' / ')}
                </div>
              </div>

              <form className="rounded-[1.5rem] bg-soft p-5 sm:p-6" onSubmit={(event) => event.preventDefault()}>
                <div className="grid gap-4">
                  <label className="grid gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue/70">Name</span>
                    <input className="min-h-12 rounded-2xl border border-blue/10 bg-white px-4 text-sm text-deep outline-none transition focus:border-green/40 focus:ring-4 focus:ring-green/10" placeholder="Your name" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue/70">Phone or Email</span>
                    <input className="min-h-12 rounded-2xl border border-blue/10 bg-white px-4 text-sm text-deep outline-none transition focus:border-green/40 focus:ring-4 focus:ring-green/10" placeholder="How can we reach you?" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue/70">Service Interest</span>
                    <select className="min-h-12 rounded-2xl border border-blue/10 bg-white px-4 text-sm text-deep outline-none transition focus:border-green/40 focus:ring-4 focus:ring-green/10">
                      <option>MCA & ROC Compliance</option>
                      <option>Audit & Assurance</option>
                      <option>Income Tax</option>
                      <option>GST & Indirect Tax</option>
                      <option>Loan & Subsidy Consultancy</option>
                      <option>Miscellaneous Services</option>
                    </select>
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue/70">Message</span>
                    <textarea className="min-h-28 resize-none rounded-2xl border border-blue/10 bg-white px-4 py-3 text-sm text-deep outline-none transition focus:border-green/40 focus:ring-4 focus:ring-green/10" placeholder="Briefly describe your requirement" />
                  </label>
                  <Button type="submit" className="w-full" icon>
                    Book Consultation
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
