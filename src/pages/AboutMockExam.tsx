import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutMockExamHero from '../components/sections/AboutMockExamHero';
import Frame2608896 from '../components/sections/Frame2608896';
import Frame2609166 from '../components/sections/Frame2609166';
import Frame2608954 from '../components/sections/Frame2608954';
import Frame2609167 from '../components/sections/Frame2609167';
import MockExamCTA from '../components/sections/MockExamCTA';
import MockExamArticles from '../components/sections/MockExamArticles';
import AboutCIPMContent from '../components/sections/AboutCIPMContent';

export default function AboutMockExamPage() {
  return (
    <div style={{ width: '1728px', backgroundColor: 'white', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, width: '1728px' }}>
        <Navbar />
      </div>

      <AboutMockExamHero />

      <Frame2608896 />
      <Frame2609166 />
      <Frame2608954 />
      <Frame2609167 />
      <MockExamCTA />
      <MockExamArticles />

      <AboutCIPMContent />

      <div id="site-footer" style={{ backgroundColor: 'rgba(39,40,39,1)' }}>
        <Footer />
      </div>
    </div>
  );
}
