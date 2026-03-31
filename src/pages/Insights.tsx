import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import InsightsHero from '../components/sections/InsightsHero';
import AboutCIPMContent from '../components/sections/AboutCIPMContent';
import groupIn7Svg from '../assets/Group in7.svg';

const SVG_W = 1236;
const SVG_H = 1314;

export default function InsightsPage() {
  return (
    <div style={{ width: '1728px', backgroundColor: 'white', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, width: '1728px' }}>
        <Navbar />
      </div>

      <InsightsHero />

      <div style={{ width: '1728px', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 9999, marginTop: '48px' }}>
        <img
          src={groupIn7Svg}
          alt=""
          style={{
            width: `${SVG_W}px`,
            height: `${SVG_H}px`,
            display: 'block',
            maxWidth: 'none',
          }}
        />
      </div>

  <div style={{
            width: `${SVG_W}px`,
            height: `50px`,
            display: 'block',
            maxWidth: 'none',
          } }>
      </div>

      <div id="site-footer" style={{ backgroundColor: 'rgba(39,40,39,1)' }}>
        <Footer />
      </div>
    </div>
  );
}
