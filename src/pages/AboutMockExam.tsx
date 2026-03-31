import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutMockExamHero from '../components/sections/AboutMockExamHero';
import AboutCIPMContent from '../components/sections/AboutCIPMContent';
import group2511Svg from '../assets/Group 2511.svg';

const SVG_TOTAL_H = 2420;
const SVG_W = 1728;

export default function AboutMockExamPage() {
  return (
    <div style={{ width: '1728px', backgroundColor: 'white', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, width: '1728px' }}>
        <Navbar />
      </div>

      <AboutMockExamHero />

      <div style={{ width: `${SVG_W}px`, position: 'relative', zIndex: 9999, marginTop: '460px' }}>
        <img
          src={group2511Svg}
          alt=""
          style={{
            width: `${SVG_W}px`,
            height: `${SVG_TOTAL_H}px`,
            display: 'block',
            maxWidth: 'none',
          }}
        />
      </div>

      <AboutCIPMContent />

      <div id="site-footer" style={{ backgroundColor: 'rgba(39,40,39,1)' }}>
        <Footer />
      </div>
    </div>
  );
}
