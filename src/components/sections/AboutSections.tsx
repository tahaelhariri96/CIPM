import { useNavigate } from 'react-router';
import imgAboutPM from '../../imports/9bc2f96a1833dbde806a91e626380a6fca0f74bb.png';
import imgAboutScrum from '../../imports/3685f22e9383bdf3a267b5129eefac20ec796bb9.png';

const learnBtn: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 400,
  color: 'rgba(99,7,7,1)',
  fontSize: '16px',
  backgroundColor: 'rgba(246,198,198,1)',
  borderRadius: '16px',
  border: 'none',
  cursor: 'pointer',
  padding: '16px 32px',
  alignSelf: 'flex-start',
};

export default function AboutSections() {
  const navigate = useNavigate();
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* About Project Management */}
      <div style={{ display: 'flex', width: '100%', height: '510px' }}>
        <div style={{ width: '726px', overflow: 'hidden', flexShrink: 0 }}>
          <img src={imgAboutPM} alt="About Project Management" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div
          style={{
            flex: '1 1 0',
            height: '510px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '24px',
            paddingLeft: '56px',
            paddingRight: '246px',
            backgroundColor: 'rgba(246,246,246,1)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h2 style={{ margin: 0, color: 'rgba(55,56,55,1)', fontSize: '28px', fontWeight: 600, lineHeight: '120%' }}>
              About Project Management
            </h2>
            <p style={{ margin: 0, color: 'rgba(83,84,83,1)', fontSize: '18px', fontWeight: 300, lineHeight: '140%', maxWidth: '700px' }}>
              Project Management plans and controls work to achieve goals, deliver value, and balance time, cost, scope, quality, and resources across industries
            </p>
          </div>
          <button style={learnBtn} onClick={() => navigate('/about-project-management')}>Learn more</button>
        </div>
      </div>

      {/* About Scrum Master */}
      <div style={{ display: 'flex', width: '100%', height: '510px', borderTop: '1px solid rgba(220,220,220,1)' }}>
        <div
          style={{
            flex: '1 1 0',
            height: '510px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '24px',
            paddingLeft: '246px',
            paddingRight: '56px',
            backgroundColor: 'rgba(246,246,246,1)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h2 style={{ margin: 0, color: 'rgba(55,56,55,1)', fontSize: '28px', fontWeight: 600, lineHeight: '120%' }}>
              About Scrum Master
            </h2>
            <p style={{ margin: 0, color: 'rgba(83,84,83,1)', fontSize: '18px', fontWeight: 300, lineHeight: '140%', maxWidth: '700px' }}>
              A Scrum Master is an Agile servant-leader who facilitates collaboration, removes impediments, and empowers teams to self-organize and deliver value through continuous improvement.
            </p>
          </div>
          <button style={learnBtn} onClick={() => navigate('/about-agile-project-management')}>Learn more</button>
        </div>
        <div style={{ width: '726px', overflow: 'hidden', flexShrink: 0 }}>
          <img src={imgAboutScrum} alt="About Scrum Master" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
}
