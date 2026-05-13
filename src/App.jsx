import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import CursorAura from './components/layout/CursorAura.jsx';
import Footer from './components/layout/Footer.jsx';
import Navbar from './components/layout/Navbar.jsx';
import SmoothScroll from './components/layout/SmoothScroll.jsx';
import HomePage from './pages/HomePage.jsx';

const routeSections = {
  '/': 'home',
  '/about': 'about',
  '/services': 'services',
  '/contact': 'contact',
  '/careers': 'home',
};

function RouteScrollManager() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const targetId = hash ? window.decodeURIComponent(hash.slice(1)) : routeSections[pathname];
    const timeout = window.setTimeout(() => {
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'auto' });
        return;
      }

      document.getElementById(targetId)?.scrollIntoView({
        block: 'start',
        behavior: 'auto',
      });
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <SmoothScroll />
      <CursorAura />
      <RouteScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/services" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
          <Route path="/careers" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
