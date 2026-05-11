import { brand, contact, navLinks, serviceCategories } from '../../constants/site.js';

export default function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto grid max-w-370 gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,13fr)_minmax(0,8fr)_minmax(0,10fr)_minmax(0,11fr)] lg:px-10">
        <div>
          <div className="flex items-center gap-4">
            <span className="grid h-15 w-20 place-items-center rounded-2xl bg-white p-2">
              <img src={brand.logo} alt="" className="h-full w-full object-contain" />
            </span>
            <div>
              <p className="font-display text-2xl font-semibold">{brand.name}</p>
              <p className="text-sm font-semibold text-white/58">{brand.descriptor}</p>
            </div>
          </div>
          <p className="mt-7 max-w-sm text-sm leading-7 text-white/62">
            Established in 2014, the firm provides taxation, audit, accounting, compliance, financial advisory, project finance, and subsidy consultancy support.
          </p>
        </div>

        <div>
          <h3 className="footer-title">Quick Links</h3>
          <div className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="block text-sm text-white/62 transition hover:text-orange">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="footer-title">Services</h3>
          <div className="mt-5 space-y-3">
            {serviceCategories.map((service) => (
              <a key={service.title} href="#services" className="block text-sm text-white/62 transition hover:text-orange">
                {service.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="footer-title">Contact</h3>
          <div className="mt-5 space-y-3 text-sm leading-7 text-white/62">
            <p>{contact.address}</p>
            <p>{contact.phones.join(' / ')} • {contact.landline}</p>
            <p>{contact.emails.join(' / ')}</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {contact.social.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/[0.07] text-white/78 transition duration-300 hover:-translate-y-0.5 hover:border-orange/55 hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50"
                  aria-label={social.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs uppercase tracking-[0.22em] text-white/42">
        Copyright 2026 {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
