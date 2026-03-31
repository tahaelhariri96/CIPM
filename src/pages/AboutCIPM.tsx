import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutCIPMHero from '../components/sections/AboutCIPMHero';
import AboutCIPMContent from '../components/sections/AboutCIPMContent';
import frame2608841Svg from '../assets/Group 2509.svg';

const SVG_TOTAL_H = 4526;
const SVG_W = 1728;

export default function AboutCIPMPage() {
  return (
    <div style={{ width: '1728px', backgroundColor: 'white', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, width: '1728px' }}>
        <Navbar />
      </div>

      {/* Hero */}
      <AboutCIPMHero />

      {/* المحتوى */}
      <div style={{ width: `${SVG_W}px`, position: 'relative', zIndex: 9999, marginTop: '400px' }}>
        <img
          src={frame2608841Svg}
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
      <AboutCIPMContent />

      {/* Footer */}
      <div id="site-footer" style={{ backgroundColor: 'rgba(39,40,39,1)' }}>
        <Footer />
      </div>
    </div>
  );
}
