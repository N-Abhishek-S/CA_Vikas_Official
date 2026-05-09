import { galleryItems } from '../constants/site.js';
import { useGsapReveal } from '../hooks/useGsapReveal.js';
import SectionHeader from '../components/ui/SectionHeader.jsx';

export default function GallerySection() {
  const scope = useGsapReveal({ start: 'top 84%' });

  return (
    <section id="gallery" ref={scope} className="section-pad section-texture relative overflow-hidden bg-cream text-ink">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(93,139,139,0.12),transparent_26%),linear-gradient(180deg,#efe7da,#f6f2ea_78%,#efe7da)]" />
      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeader
            eyebrow="Gallery"
            title="A closer look at the people, process, and office behind the advisory."
            copy="Professional presentation matters in financial services. This gallery is designed to showcase the CA principal, staff culture, and client-ready office environment with quiet confidence."
          />
          <p className="max-w-xl text-sm leading-7 text-charcoal/72 lg:justify-self-end" data-reveal>
            A calm visual record of senior review, client confidentiality, and the operating discipline behind each engagement.
          </p>
        </div>

        <div className="gold-rule mt-12" data-reveal />

        <div className="mt-10 grid auto-rows-[270px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <article
              key={item.title}
              className={`gallery-card group ${item.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
              data-reveal
              style={{ transitionDelay: `${index * 35}ms` }}
            >
              <img src={item.image} alt={item.title} loading="lazy" className="editorial-photo h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/22 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_16%,rgba(246,242,234,0.16),transparent_28%)] opacity-70" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-gold">{item.category}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-ivory">{item.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-ivory/82">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
