import svgPaths from '../../imports/svg-pt8brrterb';

const ITEMS = [
  {
    icon: svgPaths.p27405100,
    title: 'Professional, Not Academic',
    desc: 'Certifications issued by THE CIPM are professional certificates of completion and competency. They are not academic degrees, diplomas, or graduate credentials, nor are they equivalent to university or college-level credits.',
  },
  {
    icon: svgPaths.p3ccf5900,
    title: 'Validation of Training',
    desc: 'Our certifications serve as a formal validation that the candidate has completed the specific CIPM training curriculum and successfully passed the associated examination, demonstrating a grasp of the concepts, terminology, and practical applications covered in the coursework.',
  },
  {
    icon: svgPaths.p224e3e00,
    title: 'Industry Focus',
    desc: 'These credentials are designed for professional development and career enhancement. They demonstrate to employers and peers that an individual possesses a verified baseline of knowledge and dedication to their professional growth within the project management and agile domains.',
  },
];

export default function CertClarificationSection() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '72px 246px' }}>
      <div style={{ width: '1236px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
          <h2 style={{ margin: 0, color: 'rgba(55,56,55,1)', fontSize: '36px', fontWeight: 600, lineHeight: '120%' }}>
            Certification Clarification &amp; Scope
          </h2>
          <p style={{ margin: 0, color: 'rgba(83,84,83,1)', fontSize: '18px', fontWeight: 300, lineHeight: '140%' }}>
            Important Notice Regarding Our Credentials
          </p>
        </div>

        {/* Items */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', paddingLeft: '40px' }}>
          {/* الخط الرأسي المتقطع */}
          <div style={{ position: 'absolute', left: '31px', top: 0, bottom: 0, borderLeft: '2px dashed rgba(246,198,198,1)' }} />

          {ITEMS.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: 'rgba(251,231,231,1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '4px solid white',
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d={item.icon} fill="rgba(219,16,16,1)" />
                </svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '10px' }}>
                <h3 style={{ margin: 0, color: 'rgba(55,56,55,1)', fontSize: '18px', fontWeight: 600, lineHeight: '120%' }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, color: 'rgba(83,84,83,1)', fontSize: '18px', fontWeight: 300, lineHeight: '140%' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
