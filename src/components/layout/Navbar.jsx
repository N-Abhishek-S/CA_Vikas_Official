import { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../constants/site.js';
import Button from '../ui/Button.jsx';
import brandMark from '../../assets/brand-mark.svg';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`site-header ${scrolled ? 'site-header--scrolled' : 'site-header--transparent'}`}
    >
      <nav className="site-nav-shell mx-auto flex h-18 max-w-[1480px] items-center justify-between px-4 sm:h-20 sm:px-7 lg:px-8">
        <a
          href="#home"
          className="brand-link group flex items-center gap-3"
          aria-label="CA Person home"
        >
          <img
            src={brandMark}
            alt=""
            className="brand-mark h-11 w-11 rounded-full"
          />
          <span className="leading-tight">
            <span className="brand-title block font-display text-lg font-semibold">
              CA Person
            </span>
            <span className="brand-subtitle block text-xs uppercase tracking-[0.24em]">
              Advisory Office
            </span>
          </span>
        </a>

        <div className="nav-menu hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#contact" size="sm" variant="navSecondary">
            Client Desk
          </Button>
          <Button href="#contact" size="sm" variant="navPrimary">
            Book Consultation
          </Button>
        </div>

        <button
          type="button"
          className="nav-icon-button grid h-11 w-11 place-items-center rounded-full lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <Motion.div
            id="mobile-navigation"
            className="mobile-drawer mt-3 px-5 pb-7 pt-4 lg:hidden"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28 }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="mobile-nav-link"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contact" className="mt-3 w-full" variant="navPrimary" onClick={close}>
                Book Consultation
              </Button>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
