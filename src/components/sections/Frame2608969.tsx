import { useNavigate } from 'react-router';
import agileImage from '../../assets/4453942.jpg';

function Button({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: '155px',
        height: '54px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        paddingTop: '16px',
        paddingBottom: '16px',
        paddingLeft: '32px',
        paddingRight: '32px',
        overflow: 'hidden',
        backgroundColor: 'rgba(246, 198, 198, 1)',
        borderRadius: '16px',
        cursor: 'pointer',
      }}
    >
      <p style={{ color: 'rgba(99, 7, 7, 1)', fontSize: '16px', fontWeight: '400', textAlign: 'left', lineHeight: '139.9999976158142%', margin: 0 }}>Learn more</p>
    </div>
  );
}

export default function Frame2608969() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: '1728px',
        height: '510px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid rgba(220, 220, 220, 1)',
      }}
    >
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
          backgroundColor: 'rgba(246, 246, 246, 1)',
        }}
      >
        <div style={{ alignSelf: 'stretch', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ color: 'rgba(55, 56, 55, 1)', fontSize: '28px', fontWeight: '600', textAlign: 'left', lineHeight: '120.00000476837158%', margin: 0 }}>Our Commitment to Canadian and International Professionals</h2>
          <h3 style={{ alignSelf: 'stretch', width: '100%', maxWidth: '700px', color: 'rgba(83, 84, 83, 1)', fontSize: '18px', fontWeight: '300', textAlign: 'left', lineHeight: '139.9999976158142%', margin: 0 }}>
            THE CIPM supports professionals in Canada and around the world with programs built around practical leadership, inclusivity, collaboration, and results. Whether you are starting out, changing careers, or strengthening existing credentials, our pathways are designed to remain relevant across industries and international markets.
          </h3>
        </div>
        <Button onClick={() => navigate('/about-agile-project-management')} />
      </div>
      <img src={agileImage} alt="About Agile Project Management" style={{ width: '726px', height: '510px', objectFit: 'cover' }} />
    </div>
  );
}
