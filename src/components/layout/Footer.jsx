import { navLinks, services, socialLinks } from '../../constants/site.js';
import brandMark from '../../assets/brand-mark.svg';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(184,148,77,0.12),transparent_34%),radial-gradient(circle_at_86%_12%,rgba(95,153,145,0.14),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-[1480px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={brandMark} alt="" className="h-12 w-12 rounded-full" />
            <div>
              <p className="font-display text-xl font-semibold">CA Person</p>
              <p className="text-sm text-ivory/70">Chartered Accountant & Financial Consultant</p>
            </div>
          </div>
          <p className="mt-7 max-w-sm text-sm leading-7 text-ivory/72">
            Premium taxation, audit, compliance, and strategic finance advisory for serious founders, families, and growing companies.
          </p>
        </div>

        <div>
          <h3 className="footer-title">Quick Links</h3>
          <div className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="block text-sm text-ivory/72 transition hover:text-gold">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="footer-title">Services</h3>
          <div className="mt-5 space-y-3">
            {services.slice(0, 6).map((service) => (
              <a key={service.title} href="#services" className="block text-sm text-ivory/72 transition hover:text-gold">
                {service.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="footer-title">Legal</h3>
          <div className="mt-5 space-y-3">
            {['Privacy Policy', 'Terms of Engagement', 'Disclosure', 'Professional Standards'].map((item) => (
              <a key={item} href="#" className="block text-sm text-ivory/72 transition hover:text-gold">
                {item}
              </a>
            ))}
          </div>
          <div className="mt-7 flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} className="grid h-10 w-10 place-items-center rounded-full border border-ivory/14 bg-ivory/[0.07] text-ivory/80 transition duration-300 hover:-translate-y-0.5 hover:border-gold/55 hover:bg-ivory/[0.12] hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy active:translate-y-0" aria-label={social.label}>
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative border-t border-ivory/10 px-5 py-6 text-center text-xs uppercase tracking-[0.24em] text-ivory/55">
        Copyright 2026 CA Person Advisory Office. All rights reserved.
      </div>
    </footer>
  );
}
