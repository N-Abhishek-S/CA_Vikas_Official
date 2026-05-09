import HeroSection from '../sections/HeroSection.jsx';
import AboutSection from '../sections/AboutSection.jsx';
import ServicesSection from '../sections/ServicesSection.jsx';
import GallerySection from '../sections/GallerySection.jsx';
import TeamSection from '../sections/TeamSection.jsx';
import WhyChooseUsSection from '../sections/WhyChooseUsSection.jsx';
import TestimonialsSection from '../sections/TestimonialsSection.jsx';
import CaseStudiesSection from '../sections/CaseStudiesSection.jsx';
import InsightsSection from '../sections/InsightsSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TeamSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <InsightsSection />
      <ContactSection />
    </>
  );
}
