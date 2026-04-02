import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import TermsOfUseHero from '../components/sections/TermsOfUseHero';
import TermsOfUse from '../components/sections/TermsOfUse';

export default function TermsOfUsePage() {
  return (
    <div style={{ width: '1728px', backgroundColor: 'white', overflow: 'visible', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, width: '1728px' }}>
        <Navbar />
      </div>

      {/* Hero */}
      <TermsOfUseHero />

      {/* Content */}
      <TermsOfUse />

      {/* Footer */}
      <div id="site-footer" style={{ backgroundColor: 'rgba(39,40,39,1)' }}>
        <Footer />
      </div>
    </div>
  );
}
