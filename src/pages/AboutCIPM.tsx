import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutCIPMHero from '../components/sections/AboutCIPMHero';
import AboutCIPMIntroSection from '../components/sections/AboutCIPMIntroSection';
import Frame2608792 from '../components/sections/Frame2608792';
import Frame2608961 from '../components/sections/Frame2608961';
import Frame2608969 from '../components/sections/Frame2608969';
import Frame2608959 from '../components/sections/Frame2608959';
import ProjectManagement from '../components/sections/ProjectManagement';
import Frame2608970 from '../components/sections/Frame2608970';
import AboutCIPMContent from '../components/sections/AboutCIPMContent';

export default function AboutCIPMPage() {
  return (
    <div style={{ width: '1728px', backgroundColor: 'white', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, width: '1728px' }}>
        <Navbar />
      </div>

      {/* Hero */}
      <AboutCIPMHero />

      <AboutCIPMIntroSection />
      <Frame2608792 />
      <Frame2608961 />
      <Frame2608969 />
      <Frame2608959 />
      <ProjectManagement />
      <Frame2608970 />

      {/* Contact */}
      <AboutCIPMContent />

      {/* Footer */}
      <div id="site-footer" style={{ backgroundColor: 'rgba(39,40,39,1)' }}>
        <Footer />
      </div>
    </div>
  );
}
