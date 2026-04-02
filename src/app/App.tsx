import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import HomePage from './HomePage';
import svgPaths from '../imports/svg-pt8brrterb';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const AboutCIPMPage = lazy(() => import('../pages/AboutCIPM'));
const AllCertificationsPage = lazy(() => import('../pages/AllCertifications'));
const AboutProjectManagementPage = lazy(() => import('./AboutProjectManagementPage'));
const AboutScrumMasterPage = lazy(() => import('../pages/AboutScrumMaster'));
const AboutMockExamPage = lazy(() => import('../pages/AboutMockExam'));
const InsightsPage = lazy(() => import('../pages/Insights'));
const ContactPage = lazy(() => import('../pages/Contact'));
const CertPMFCPage = lazy(() => import('../pages/CertPMFC'));
const CertPMCCPage = lazy(() => import('../pages/CertPMCC'));
const CertPMACPage = lazy(() => import('../pages/CertPMAC'));
const CertAPPCPage = lazy(() => import('../pages/CertAPPC'));
const CertAPMFPage = lazy(() => import('../pages/CertAPMF'));
const CertAPMAPage = lazy(() => import('../pages/CertAPMA'));

const DESIGN_WIDTH = 1728;

function ScrollToTopButton({ scale }: { scale: number }) {
  const [visible, setVisible] = useState(false);
  const [bottom, setBottom] = useState(() => Math.round(24 * scale));

  useEffect(() => {
    const margin  = Math.round(24 * scale);
    const btnSize = Math.round(56 * scale);

    const update = () => {
      setVisible(window.scrollY > 400);

      const footer = document.getElementById('site-footer');
      if (!footer) { setBottom(margin); return; }

      const rect = footer.getBoundingClientRect();
      const footerVisible = window.innerHeight - rect.top; // كم ظهر من الفوتر

      if (footerVisible > 0) {
        // الزر يرتفع بمقدار ما ظهر من الفوتر + هامش
        setBottom(footerVisible + margin);
      } else {
        setBottom(margin);
      }
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [scale]);

  if (!visible) return null;

  const size     = Math.round(56 * scale);
  const right    = Math.round(40 * scale);
  const iconSize = Math.round(20 * scale);
  const padding  = Math.round(18 * scale);
  const border   = Math.max(1, Math.round(2 * scale));

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom,
        right,
        width:  size,
        height: size,
        padding,
        borderRadius: size,
        border: `${border}px solid #f09898`,
        zIndex: 9999,
        cursor: 'pointer',
        backgroundColor: '#fbe7e7',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'bottom 0.15s ease, background-color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f6c6c6')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fbe7e7')}
    >
      <svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.p35164400} fill="#666766" />
      </svg>
    </button>
  );
}

export default function App() {
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const s = window.innerWidth / DESIGN_WIDTH;
      setScale(s);
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight * s);
      }
    };
    update();
    window.addEventListener('resize', update);
    const ro = new ResizeObserver(update);
    if (contentRef.current) ro.observe(contentRef.current);
    return () => { window.removeEventListener('resize', update); ro.disconnect(); };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ width: '100%', height: `${contentHeight}px`, overflowX: 'hidden', position: 'relative' }}>
        <div
          ref={contentRef}
          style={{
            width: `${DESIGN_WIDTH}px`,
            transformOrigin: 'top left',
            transform: `scale(${scale})`,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-cipm" element={<AboutCIPMPage />} />
              <Route path="/all-certifications" element={<AllCertificationsPage />} />
              <Route path="/about-project-management" element={<AboutProjectManagementPage />} />
              <Route path="/about-agile-project-management" element={<AboutScrumMasterPage />} />
              <Route path="/about-mock-exam" element={<AboutMockExamPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cert-pmfc" element={<CertPMFCPage />} />
              <Route path="/cert-pmcc" element={<CertPMCCPage />} />
              <Route path="/cert-pmac" element={<CertPMACPage />} />
              <Route path="/cert-appc" element={<CertAPPCPage />} />
              <Route path="/cert-apmf" element={<CertAPMFPage />} />
              <Route path="/cert-apma" element={<CertAPMAPage />} />
            </Routes>
          </Suspense>
        </div>
        <ScrollToTopButton scale={scale} />
      </div>
    </BrowserRouter>
  );
}
