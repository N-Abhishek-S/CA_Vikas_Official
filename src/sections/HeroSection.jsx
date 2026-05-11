import { useLayoutEffect, useRef } from 'react';
import { ArrowDown, BadgeCheck, ShieldCheck } from 'lucide-react';
import { brand, companyIntro, heroTrustItems, media } from '../constants/site.js';
import { gsap } from '../animations/gsapSetup.js';
import Button from '../components/ui/Button.jsx';

export default function HeroSection() {
  const scope = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('[data-hero-brand]', { autoAlpha: 0, y: 18, duration: 0.55 })
        .from('[data-hero-title]', { autoAlpha: 0, y: 32, duration: 0.78 }, '-=0.2')
        .from('[data-hero-copy]', { autoAlpha: 0, y: 20, duration: 0.65 }, '-=0.32')
        .from('[data-hero-actions]', { autoAlpha: 0, y: 18, duration: 0.55 }, '-=0.28')
        .from('[data-hero-trust]', { autoAlpha: 0, y: 18, duration: 0.55 }, '-=0.24')
        .from('[data-hero-visual]', { autoAlpha: 0, x: 32, duration: 0.85 }, '-=0.72');

      gsap.to('[data-float-shape]', {
        y: -16,
        rotate: 2,
        duration: 4.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={scope}
      className="relative isolate min-h-svh overflow-hidden bg-[linear-gradient(135deg,#f7fbfd_0%,#eef7f3_48%,#fff7ed_100%)] pt-28 text-deep sm:pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div data-float-shape className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-green/12 blur-3xl" />
        <div data-float-shape className="absolute right-[-8rem] top-28 h-96 w-96 rounded-full bg-blue/12 blur-3xl" />
        <div data-float-shape className="absolute bottom-10 left-1/2 h-56 w-56 rounded-full bg-orange/12 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue/15 to-transparent" />
      </div>

      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-370 items-center gap-14 px-5 pb-14 sm:px-8 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] lg:px-10">
        <div className="max-w-4xl">
          <div data-hero-brand className="inline-flex items-center gap-3 rounded-full border border-blue/12 bg-white/72 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em] text-blue shadow-[0_14px_40px_rgba(22,93,137,0.08)] backdrop-blur-xl">
            <ShieldCheck size={16} className="text-green" />
            {brand.descriptor}
          </div>

          <h1 data-hero-title className="mt-7 max-w-5xl font-display text-[clamp(3.15rem,8vw,8.3rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-deep">
            {brand.name}
            <span className="mt-5 block max-w-4xl text-[clamp(1.75rem,4.3vw,4.45rem)] leading-[1.02] tracking-[-0.04em] text-blue">
              Strategic tax, audit, GST and compliance advisory.
            </span>
          </h1>

          <p data-hero-copy className="mt-7 max-w-2xl text-base leading-8 text-slate sm:text-xl sm:leading-9">
            {companyIntro[0]}
          </p>

          <div data-hero-actions className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" size="lg">
              Get Consultation
            </Button>
            <Button href="#services" size="lg" variant="secondary">
              Explore Services
            </Button>
          </div>

          <div data-hero-trust className="mt-12 grid gap-3 sm:grid-cols-3">
            {heroTrustItems.map((item) => (
              <div
                key={`${item.value}-${item.label}`}
                className="rounded-2xl border border-blue/10 bg-white/68 p-4 shadow-[0_18px_48px_rgba(24,66,95,0.08)] backdrop-blur-xl"
              >
                <p className="font-display text-3xl font-semibold text-blue">{item.value}</p>
                <p className="mt-1 text-sm font-semibold text-slate">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-hero-visual className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -right-6 -top-8 hidden h-28 w-28 rounded-full border-[18px] border-green/18 lg:block" />
          <div className="absolute -bottom-7 -left-8 hidden h-24 w-24 rounded-full bg-orange/14 lg:block" />

          <div className="relative overflow-hidden rounded-[2rem] border border-blue/10 bg-white p-3 shadow-[0_34px_110px_rgba(24,66,95,0.18)]">
            <img
              src={media.principal}
              alt="VOK & Associates professional advisory"
              className="h-[28rem] w-full rounded-[1.45rem] object-cover object-center sm:h-[34rem] lg:h-[36rem]"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/60 bg-white/84 p-5 shadow-[0_18px_54px_rgba(24,66,95,0.16)] backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-green/12 text-green">
                  <BadgeCheck size={20} />
                </span>
                <div>
                  <p className="font-display text-xl font-semibold text-deep">Established in {brand.established}</p>
                  <p className="mt-1 text-sm leading-6 text-slate">
                    Professional guidance across taxation, audit, accounting, regulatory compliance and financial advisory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 right-5 hidden h-12 w-12 place-items-center rounded-full border border-blue/12 bg-white/76 text-blue shadow-[0_18px_44px_rgba(24,66,95,0.13)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-green/35 hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/45 lg:grid"
        aria-label="Scroll to about"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
