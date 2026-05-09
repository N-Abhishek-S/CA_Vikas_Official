import { lazy, Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './components/layout/Loader.jsx';
import SmoothScroll from './components/layout/SmoothScroll.jsx';
import CursorAura from './components/layout/CursorAura.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import { initGsap } from './animations/gsapSetup.js';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));

function AppShell() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return undefined;
    const id = window.decodeURIComponent(location.hash);
    const timeout = window.setTimeout(() => {
      document.querySelector(id)?.scrollIntoView({ block: 'start', behavior: 'auto' });
    }, 80);
    return () => window.clearTimeout(timeout);
  }, [location.hash]);

  return (
    <AnimatePresence mode="wait">
      <Motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Navbar />
        <main>
          <Suspense fallback={<Loader compact />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const qaMode = new URLSearchParams(window.location.search).has('qa');
  const [loading, setLoading] = useState(!qaMode);

  useEffect(() => {
    initGsap();
    if (qaMode) return undefined;
    const timeout = window.setTimeout(() => setLoading(false), 1450);
    return () => window.clearTimeout(timeout);
  }, [qaMode]);

  return (
    <>
      <SmoothScroll />
      <CursorAura />
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <AppShell />
    </>
  );
}
