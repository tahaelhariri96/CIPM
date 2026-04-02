import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutScrumMasterHero from '../components/sections/AboutScrumMasterHero';
import AgileManagement from '../components/sections/AgileManagement';
import AgileTraining from '../components/sections/AgileTraining';
import CareerGrowth from '../components/sections/CareerGrowth';
import CuriosityToCredential from '../components/sections/CuriosityToCredential';
import AboutCIPMContent from '../components/sections/AboutCIPMContent';
import Frame2609262 from '../components/Frame2609262';
import group2510Svg from '../assets/Group 2510.svg';

const SVG_TOTAL_H = 2500;
const SVG_W = 1728;

export default function AboutScrumMasterPage() {
  return (
    <div style={{ width: '1728px', backgroundColor: 'white', overflow: 'visible', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, width: '1728px' }}>
        <Navbar />
      </div>

      <AboutScrumMasterHero />

      {/* الصور المدورة - أسفل الهيرو على اليمين */}
      <div style={{ position: 'absolute', right: '183px', top: '650px', width: '390.05px', height: '425.28px', zIndex: 10 }}>
        <Frame2609262 />
      </div>

      <AgileManagement />

      <AgileTraining />

      <CareerGrowth />

      <CuriosityToCredential />

      <AboutCIPMContent />

      <div id="site-footer" style={{ backgroundColor: 'rgba(39,40,39,1)' }}>
        <Footer />
      </div>
    </div>
  );
}
