import { CalendarDays, Mail, MapPin, Phone } from 'lucide-react';
import { contactDetails, socialLinks } from '../constants/site.js';
import { useGsapReveal } from '../hooks/useGsapReveal.js';
import Button from '../components/ui/Button.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';

const fields = [
  { label: 'Name', type: 'text', placeholder: 'Your full name' },
  { label: 'Email', type: 'email', placeholder: 'you@company.com' },
  { label: 'Phone', type: 'tel', placeholder: '+91' },
  { label: 'Business Type', type: 'text', placeholder: 'Individual, startup, SME...' },
];

export default function ContactSection() {
  const scope = useGsapReveal();

  return (
    <section id="contact" ref={scope} className="section-pad relative overflow-hidden bg-warm text-ink">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(184,148,77,0.14),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(49,95,152,0.12),transparent_34%)]" />
      <div className="relative mx-auto grid max-w-[1480px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <SectionHeader
            eyebrow="Consultation"
            title="Bring the numbers, leave with a financial path."
            copy="Share the context, urgency, and financial decision in front of you. The office will respond with the right engagement route."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2" data-reveal>
            {contactDetails.map((detail, index) => {
              const icons = [MapPin, CalendarDays, Mail, Phone];
              const Icon = icons[index];
              return (
                <article key={detail.label} className="rounded-[8px] border border-sand/80 bg-ivory/92 p-5 shadow-[0_18px_60px_rgba(11,27,47,0.07)]">
                  <Icon className="text-royal" size={20} />
                  <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.22em] text-bronze/62">{detail.label}</p>
                  <p className="mt-2 font-semibold text-ink">{detail.value}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap gap-3" data-reveal>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Button key={social.label} href={social.href} variant="secondary" size="sm" icon={false}>
                  {social.label} <Icon size={15} />
                </Button>
              );
            })}
          </div>
        </div>

        <form className="rounded-[8px] border border-sand/80 bg-ivory/95 p-5 shadow-[0_34px_100px_rgba(11,27,47,0.13)] sm:p-8" data-reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <label key={field.label} className="block">
                <span className="text-sm font-semibold text-charcoal/82">{field.label}</span>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="mt-2 h-13 w-full rounded-[8px] border border-sand/80 bg-soft px-4 text-ink outline-none transition placeholder:text-charcoal/42 focus:border-royal focus:bg-ivory focus:ring-4 focus:ring-royal/10"
                />
              </label>
            ))}
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-semibold text-charcoal/82">Message</span>
            <textarea
              placeholder="Tell us what you need help with..."
              rows="6"
              className="mt-2 w-full resize-none rounded-[8px] border border-sand/80 bg-soft px-4 py-4 text-ink outline-none transition placeholder:text-charcoal/42 focus:border-royal focus:bg-ivory focus:ring-4 focus:ring-royal/10"
            />
          </label>
          <div className="mt-7 flex flex-col items-start justify-between gap-5 border-t border-sand pt-6 sm:flex-row sm:items-center">
            <p className="max-w-sm text-xs leading-6 text-charcoal/62">
              By submitting, you consent to be contacted about your consultation request. Financial documents are requested only through secure channels.
            </p>
            <Button variant="primary" size="lg">
              Send Request
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
