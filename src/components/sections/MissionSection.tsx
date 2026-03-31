import { Slideshowline, Checkdoubleline, Scales3line, Linechartline } from '../icons';

const PILLARS = [
  {
    Icon: Slideshowline,
    title: 'Training',
    desc: "Developing a comprehensive, industry-relevant curriculum that bridges the gap between theory and practice.",
  },
  {
    Icon: Checkdoubleline,
    title: 'Validation',
    desc: "Administering fair and challenging examinations that accurately reflect a candidate's understanding of core subject matter.",
  },
  {
    Icon: Scales3line,
    title: 'Ethics',
    desc: "Promoting a culture of accountability, integrity, and professional responsibility within the project management community.",
  },
  {
    Icon: Linechartline,
    title: 'Growth',
    desc: "Supporting the continuous career development of our members through resources that encourage skill refinement and knowledge sharing.",
  },
];

export default function MissionSection() {
  return (
    <>
      {/* الخلفية الحمراء */}
      <div style={{ width: '100%', backgroundColor: 'rgba(186,14,14,1)', paddingTop: '80px', paddingBottom: '250px' }}>
        <div style={{ padding: '0 326px 60px' }}>
          <div style={{ maxWidth: '1030px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h2 style={{ margin: 0, color: 'rgba(255,255,255,1)', fontSize: '36px', fontWeight: 600, lineHeight: '120%' }}>
              Our Mission
            </h2>
            <p style={{ margin: 0, color: 'rgba(241,241,241,1)', fontSize: '18px', fontWeight: 300, lineHeight: '140%' }}>
              To empower professionals through accessible, high-quality training and rigorous competency validation.
            </p>
          </div>
        </div>
      </div>

      {/* البطاقات تتداخل مع الخلفية */}
      <div style={{ width: '100%', marginTop: '-200px', padding: '0 222px', paddingBottom: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {PILLARS.map(({ Icon, title, desc }) => (
            <div
              key={title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '24px',
                backgroundColor: 'rgba(255,255,255,1)',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '10px 10px 21.1px rgba(72,9,9,0.37)',
              }}
            >
              <Icon />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h3 style={{ margin: 0, color: 'rgba(55,56,55,1)', fontSize: '18px', fontWeight: 600, lineHeight: '120%' }}>
                  {title}
                </h3>
                <p style={{ margin: 0, color: 'rgba(83,84,83,1)', fontSize: '18px', fontWeight: 300, lineHeight: '140%' }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
