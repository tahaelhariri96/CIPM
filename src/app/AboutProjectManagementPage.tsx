import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutProjectManagementHero from '../components/sections/AboutProjectManagementHero';
import AboutProjectManagementContent from '../components/sections/AboutProjectManagementContent';
import ProjectManagement from '../components/sections/ProjectManagement';
import ProjectTraining from '../components/sections/ProjectTraining';
import ProjectCareerGrowth from '../components/sections/ProjectCareerGrowth';
import ProjectCuriosityToCredential from '../components/sections/ProjectCuriosityToCredential';
import Frame2609262 from '../components/Frame2609262';
import group2507Svg from '../assets/Group 2507.svg';

// Group 2507.svg: height=2692 — يُعرض كاملاً بدون قطع
const SVG_TOTAL_H = 2692;
const SVG_W = 1728;

export default function AboutProjectManagementPage() {
  return (
    <div style={{ width: '1728px', backgroundColor: 'white', overflow: 'visible', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Navbar */}
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, width: '1728px' }}>
        <Navbar />
      </div>

      {/* Hero */}
      <AboutProjectManagementHero />

      {/* الصور المدورة - أسفل الهيرو على اليمين */}
      <div style={{ position: 'absolute', right: '183px', top: '650px', width: '390.05px', height: '425.28px', zIndex: 10 }}>
        <Frame2609262 />
      </div>

      {/* Project Management Section */}
      <ProjectManagement />

      {/* Project Training Section */}
      <ProjectTraining />

      {/* Career Growth Section */}
      <ProjectCareerGrowth />

      {/* Curiosity to Credential Section */}
      <ProjectCuriosityToCredential />

      {/* Contact */}
      <AboutProjectManagementContent />

      {/* Footer */}
      <div id="site-footer" style={{ backgroundColor: 'rgba(39,40,39,1)' }}>
        <Footer />
      </div>
    </div>
  );
}
