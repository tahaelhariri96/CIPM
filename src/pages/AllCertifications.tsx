import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AllCertificationsHero from '../components/sections/AllCertificationsHero';
import AllCertificationsContent from '../components/sections/AllCertificationsContent';

export default function AllCertificationsPage() {
  return (
    <div style={{ width: '1728px', backgroundColor: 'white', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, width: '1728px' }}>
        <Navbar />
      </div>

      <AllCertificationsHero />

      <div style={{ marginTop: '24px' }}>
        <AllCertificationsContent />
      </div>

      <div id="site-footer" style={{ backgroundColor: 'rgba(39,40,39,1)' }}>
        <Footer />
      </div>
    </div>
  );
}
