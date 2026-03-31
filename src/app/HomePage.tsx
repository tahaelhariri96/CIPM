import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ProgramsSlider from '../components/sections/ProgramsSlider';
import LearningProcess from '../components/sections/LearningProcess';
import MockExam from '../components/sections/MockExam';
import TargetAudience from '../components/sections/TargetAudience';
import JobGrowthStats from '../components/sections/JobGrowthStats';
import InsightsBlog from '../components/sections/InsightsBlog';
import ContactCTA from '../components/sections/ContactCTA';
import CertificatesShowcase from '../components/sections/CertificatesShowcase';

export default function HomePage() {
  return (
    <div className="bg-white overflow-x-hidden relative" style={{ width: '1728px' }}>
      {/* Navbar — يطفو فوق الـ Hero */}
      <div className="absolute top-0 left-0 z-[9999]" style={{ width: '1728px' }}>
        <Navbar />
      </div>

      <Hero />
      <LearningProcess />
      <ProgramsSlider />
      <WhyChooseUs />
      <MockExam />
      <CertificatesShowcase />
      <TargetAudience />
      <div style={{ marginTop: '107px' }}>
        <JobGrowthStats />
      </div>
      <div style={{ marginTop: '88px' }}>
        <InsightsBlog />
      </div>
      <ContactCTA />

      <div id="site-footer" className="bg-[#272827]">
        <Footer />
      </div>
    </div>
  );
}
