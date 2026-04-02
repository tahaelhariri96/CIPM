import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PrivacyPolicyHero from '../components/sections/PrivacyPolicyHero';
import PrivacyPolicyContent from '../components/sections/PrivacyPolicyContent';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ width: '1728px', backgroundColor: 'white', overflow: 'visible', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, width: '1728px' }}>
        <Navbar />
      </div>

      {/* Hero */}
      <PrivacyPolicyHero />

      {/* Content */}
      <PrivacyPolicyContent />

      {/* Footer */}
      <div id="site-footer" style={{ backgroundColor: 'rgba(39,40,39,1)' }}>
        <Footer />
      </div>
    </div>
  );
}
