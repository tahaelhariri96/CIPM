import { useState } from 'react';
import { useNavigate } from 'react-router';
import certImg from '../../assets/cipm-cert.webp';
import img04SmacBadgeLogo from '../../assets/04. SMAC Badge Logo.svg';
import img05SmccBadgeLogo from '../../assets/05. SMCC Badge Logo.svg';
import img06SmfcBadgeLogo from '../../assets/06. SMFC Badge Logog.svg';
import img03PmfcBadgeLogo from '../../assets/03. PMFC Badge Logo.svg';
import img01PmacBadgeLogo from '../../assets/01. PMAC Badge Logo 2.svg';
import img02PmccBadgeLogo from '../../assets/02. PMCC Badge Logo 1.svg';
import group2507 from '../../assets/Group 2507.svg';
import icoPmfc from '../../assets/PMFC ICO.svg';
import icoPmcc from '../../assets/PMCC ICO.svg';
import icoPmac from '../../assets/PMAC ICO.svg';
import icoAppc from '../../assets/APPC ICO.svg';
import icoApmf from '../../assets/APMF ICO.svg';
import icoApma from '../../assets/APMA ICO.svg';

const CERT_SHADOW = '9px 10px 36.7px 8px rgba(219,16,16,0.14), 10px 10px 30.6px 0px rgba(0,0,0,0.2)';

const TABS = ['Project Management', 'Agile Project Management'] as const;
type Tab = typeof TABS[number];

const TAB_INDICATOR_WIDTH: Record<Tab, string> = {
  'Project Management':       '220px',
  'Agile Project Management': '270px',
};

const TAB_BG: Record<Tab, (i: number) => string> = {
  'Project Management':       (i) => i % 2 === 0 ? '#EDE6F3' : 'transparent',
  'Agile Project Management': (i) => i === 1 ? '#F3E6F3' : 'transparent',
};

type TabTheme = { bg: string; primary: string; shadow: string; headingColor: string; learnMoreBg: string };
const TAB_THEMES: Record<Tab, TabTheme> = {
  'Project Management':       { bg: '#EDE6F3', primary: '#6B2E99', shadow: 'rgba(86,8,143,0.21)', headingColor: '#22003A', learnMoreBg: '#4B0082' },
  'Agile Project Management': { bg: '#F3E6F3', primary: '#A02EA0', shadow: 'rgba(86,8,143,0.21)', headingColor: '#3F003F', learnMoreBg: '#8B008B' },
};

type CertItem = { logo: string; icon: string; code: string; title: string; heading: string; desc: string; route: string };

const PM_CERTS: CertItem[] = [
  { logo: img03PmfcBadgeLogo, icon: icoPmfc, code: 'CIPM-PMFC', title: 'Project Management Foundation Certificate', heading: 'Launch Your PM Career',                                  desc: 'Master the essentials of project management with comprehensive foundation course.',                                                                                                                                                                    route: '/cert-pmfc' },
  { logo: img01PmacBadgeLogo, icon: icoPmac, code: 'CIPM-PMAC', title: 'Project Management Advanced Certificate',   heading: 'Strategic Leadership for Complex Projects',             desc: 'Advanced certification to master complex project lifecycles and strategic delivery.',                                                                                                                                                                   route: '/cert-pmac' },
  { logo: img02PmccBadgeLogo, icon: icoPmcc, code: 'CIPM-PMCC', title: 'Project Management Core Certificate',       heading: 'Take Your Project Management Career to the Next Level', desc: 'Build on existing knowledge and master core methodologies used by senior project managers.',                                                                                                                                                            route: '/cert-pmcc' },
];

const APM_CERTS: CertItem[] = [
    { logo:  img06SmfcBadgeLogo , icon: icoApmf, code: 'CIPM-APMF', title: 'Agile Project Management Foundation',       heading: 'Your Foundation in Agile Project Delivery',             desc: 'Build a practical understanding of Agile principles, iterative delivery, and collaborative project practices—designed for professionals ready to lead adaptive, value-driven work.',       route: '/cert-apmf' },

    { logo: img05SmccBadgeLogo, icon: icoAppc, code: 'CIPM-APPC', title: 'Agile Project Practitioner Certificate',    heading: 'Your Next Step in Agile Project Leadership',           desc: 'Build the applied skills to lead Agile project teams with confidence, navigate complexity through adaptive planning, and deliver measurable value across evolving stakeholder landscapes.', route: '/cert-appc' },
  { logo: img04SmacBadgeLogo , icon: icoApma, code: 'CIPM-APMA', title: 'Agile Project Management Advanced',         heading: 'Your Path to Advanced Agile Leadership',               desc: 'Strengthen your ability to lead enterprise agile adoption, drive organizational transformation, and align agile strategy with business outcomes across complex, multi-team environments.',  route: '/cert-apma' },
];

const TAB_CERTS: Record<Tab, CertItem[]> = {
  'Project Management':       PM_CERTS,
  'Agile Project Management': APM_CERTS,
};

function CertImages() {
  return (
    <div style={{ position: 'relative', width: '520px', height: '380px', flexShrink: 0 }}>
      <img
        src={certImg}
        alt="CIPM certificate background"
        style={{
          position: 'absolute',
          width: '480px',
          borderRadius: '12px',
          boxShadow: CERT_SHADOW,
          transform: 'rotate(-6.6deg)',
          top: '40px',
          left: '0',
        }}
      />
      <img
        src={certImg}
        alt="CIPM certificate front"
        style={{
          position: 'absolute',
          width: '500px',
          borderRadius: '12px',
          boxShadow: CERT_SHADOW,
          transform: 'rotate(8.12deg)',
          top: '0',
          left: '20px',
        }}
      />
    </div>
  );
}

export default function AllCertificationsContent() {
  const [activeTab, setActiveTab] = useState<Tab>('Project Management');
  const navigate = useNavigate();
  const certs = TAB_CERTS[activeTab];

  return (
    <div style={{ width: '1728px', backgroundColor: 'white' }}>

      {/* Header + Images + Tabs */}
      <div style={{ padding: '80px 246px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '36px', fontWeight: 600, lineHeight: '1.2', color: '#373837', marginBottom: '8px' }}>
              What are CIPM Certifications?
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 300, lineHeight: '1.4', color: '#535453' }}>
              The CIPM certification framework offers a structured pathway across Project Management and Agile Project Management disciplines, covering Foundation, Core, and Advanced levels. Each certificate is designed to build practical capability, validate professional competence, and support career progression—from essential fundamentals to advanced leadership and delivery mastery.
            </p>
          </div>
          <CertImages />
        </div>

        {/* Tabs */}
        <div style={{ marginTop: '40px' }}>
          <div style={{ display: 'flex', gap: '80px', alignItems: 'center' }}>
            {TABS.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '24px',
                  lineHeight: '1.2',
                  cursor: 'pointer',
                  color: activeTab === tab ? '#6b2e99' : '#666766',
                  fontWeight: activeTab === tab ? 600 : 400,
                  paddingBottom: '16px',
                  borderBottom: activeTab === tab ? '3px solid #6b2e99' : '3px solid transparent',
                  transition: 'border-color 0.3s ease',
                }}
              >
                {tab}
              </div>
            ))}
          </div>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#dcdcdc' }} />
        </div>
      </div>

      {/* Certs Rows */}
      {certs.map((cert, i) => {
        const theme = TAB_THEMES[activeTab];
        return (
          <div
            key={cert.code}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '86px 164px',
              gap: '64px',
              width: '1728px',
              height: i === 2 ? '432px' : '431px',
              backgroundColor: TAB_BG[activeTab](i),
              boxSizing: 'border-box',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Card */}
            <div style={{ display: 'flex', gap: '24px', width: '1000px', alignItems: 'center' }}>
              <div style={{ width: '211px', flexShrink: 0 }}>
                <img src={cert.logo} alt={cert.code} style={{ width: '100%', filter: 'drop-shadow(0px 0px 30px rgba(104,23,163,0.54))' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '36px', fontWeight: 600, lineHeight: '1.2', color: theme.primary }}>
                    {cert.code}
                  </div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 300, lineHeight: '1.4', color: '#373837' }}>
                    {cert.title}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 400, lineHeight: '1.2', color: theme.headingColor }}>
                    {cert.heading}
                  </div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 300, lineHeight: '1.4', color: theme.primary }}>
                    {cert.desc}
                  </div>
                </div>
                <button
                  onClick={() => navigate(cert.route)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '12px',
                    background: theme.learnMoreBg, color: '#fff',
                    padding: '16px 24px', borderRadius: '16px', border: 'none',
                    cursor: 'pointer', fontFamily: 'Poppins, sans-serif',
                    fontSize: '18px', alignSelf: 'flex-start',
                  }}
                >
                  Learn more
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_15464_2983)"><path d="M16.0034 9.414L7.39642 18.021L5.98242 16.607L14.5884 8H7.00342V6H18.0034V17H16.0034V9.414Z" fill="white"/></g><defs><clipPath id="clip0_15464_2983"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                </button>
              </div>
              {/* Icon زخرفة يمين المحتوى */}
              <img src={cert.icon} alt="" style={{ width: '160px', flexShrink: 0, opacity: 0.9 }} />
            </div>
          </div>
        );
      })}

    </div>
  );
}
