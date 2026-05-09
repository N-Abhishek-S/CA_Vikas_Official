import { lazy, Suspense, useLayoutEffect, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import { ChevronDown, ShieldCheck } from 'lucide-react';
import { gsap } from '../animations/gsapSetup.js';
import { heroStats } from '../constants/site.js';
import Button from '../components/ui/Button.jsx';
import MetricCounter from '../components/ui/MetricCounter.jsx';

const FinanceScene = lazy(() => import('../components/three/FinanceScene.jsx'));

export default function HeroSection() {
  const scope = useRef(null);
  const qaMode = new URLSearchParams(window.location.search).has('qa');

  useLayoutEffect(() => {
    if (qaMode) return undefined;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.08 });
      tl.from('[data-hero-kicker]', { autoAlpha: 0, y: 18, duration: 0.65 })
        .from('[data-hero-title]', { autoAlpha: 0, y: 44, filter: 'blur(14px)', duration: 0.95 }, '-=0.25')
        .from('[data-hero-copy]', { autoAlpha: 0, y: 24, duration: 0.75 }, '-=0.35')
        .from('[data-hero-actions]', { autoAlpha: 0, y: 24, duration: 0.65 }, '-=0.4')
        .from('[data-hero-stat]', { autoAlpha: 0, y: 24, stagger: 0.08, duration: 0.7 }, '-=0.35');
    }, scope);

    return () => ctx.revert();
  }, [qaMode]);

  return (
    <section id="home" ref={scope} className="relative min-h-svh overflow-hidden bg-[#050b13] text-white">
      <div className="absolute inset-0">
        <Suspense fallback={<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(45,125,255,0.28),transparent_38%)]" />}>
          <FinanceScene />
        </Suspense>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,13,0.94)_0%,rgba(5,11,19,0.82)_38%,rgba(5,11,19,0.34)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-[#050b13] to-transparent" />
      <div className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto flex min-h-svh max-w-370 flex-col justify-center px-5 pb-12 pt-28 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <div data-hero-kicker className="inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/7.5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white/85 backdrop-blur-xl">
            <ShieldCheck size={16} className="text-gold" />
            Chartered Accountant Office
          </div>
          <h1 data-hero-title className="mt-7 font-display text-[clamp(3.05rem,8vw,8.7rem)] font-semibold leading-[0.9] tracking-[-0.045em]">
            CA Person
            <span className="mt-4 block max-w-4xl text-[clamp(1.78rem,7vw,4rem)] leading-[0.98] text-white/90 sm:text-[clamp(2.1rem,5vw,5.8rem)]">
              <span className="block sm:inline">Trusted Chartered</span>
              <span className="block sm:inline"> Accountant &</span>
              <span className="block">Financial Consultant</span>
            </span>
          </h1>
          <p data-hero-copy className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-xl sm:leading-9">
            Taxation, auditing, GST, compliance, and strategic business finance for clients who need precision, confidentiality, and boardroom-level clarity.
          </p>
          <div data-hero-actions className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" size="lg" variant="primary">
              Book Consultation
            </Button>
            <Button href="#services" size="lg" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-0 overflow-hidden rounded-lg border border-white/10 bg-[#03070d]/48 py-2 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <div data-hero-stat key={stat.label} className="border-white/10 px-5 py-5 lg:border-r lg:last:border-r-0">
              <MetricCounter value={stat.value} suffix={stat.suffix} label={stat.label} light />
            </div>
          ))}
        </div>
      </div>

      <Motion.a
        href="#about"
        className="absolute bottom-6 right-5 hidden h-14 w-14 place-items-center rounded-full border border-ivory/18 bg-ivory/[0.075] text-ivory shadow-[0_18px_52px_rgba(11,31,51,0.28),inset_0_1px_0_rgba(246,242,234,0.08)] backdrop-blur-xl transition-[transform,border-color,background,color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-gold/55 hover:bg-ivory/[0.12] hover:text-gold hover:shadow-[0_24px_70px_rgba(11,31,51,0.34),0_0_0_1px_rgba(199,163,107,0.12),inset_0_1px_0_rgba(246,242,234,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy active:translate-y-0 active:scale-[0.985] lg:grid"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to about"
      >
        <ChevronDown size={22} />
      </Motion.a>
    </section>
  );
}
