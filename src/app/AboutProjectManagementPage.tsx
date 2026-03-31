import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutProjectManagementHero from '../components/sections/AboutProjectManagementHero';
import AboutProjectManagementContent from '../components/sections/AboutProjectManagementContent';
import group2507Svg from '../assets/Group 2507.svg';

// Group 2507.svg: height=2692 — يُعرض كاملاً بدون قطع
const SVG_TOTAL_H = 2692;
const SVG_W = 1728;

export default function AboutProjectManagementPage() {
  return (
    <div style={{ width: '1728px', backgroundColor: 'white', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, width: '1728px' }}>
        <Navbar />
      </div>

      {/* Hero */}
      <AboutProjectManagementHero />

      {/* النصوص من Group 2507 كاملاً */}
      <div style={{ width: `${SVG_W}px`, position: 'relative', zIndex: 9999, marginTop: '200px' }}>
        <img
          src={group2507Svg}
          alt=""
          style={{
            width: `${SVG_W}px`,
            height: `${SVG_TOTAL_H}px`,
            display: 'block',
            maxWidth: 'none',
          }}
        />
      </div>

      {/* Contact */}
      <AboutProjectManagementContent />

      {/* Footer */}
      <div id="site-footer" style={{ backgroundColor: 'rgba(39,40,39,1)' }}>
        <Footer />
      </div>
    </div>
  );
}
