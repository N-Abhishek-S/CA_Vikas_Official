import { Route, Routes } from 'react-router-dom';
import CursorAura from './components/layout/CursorAura.jsx';
import Footer from './components/layout/Footer.jsx';
import Navbar from './components/layout/Navbar.jsx';
import SmoothScroll from './components/layout/SmoothScroll.jsx';
import HomePage from './pages/HomePage.jsx';

export default function App() {
  return (
    <>
      <SmoothScroll />
      <CursorAura />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
