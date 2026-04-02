import { useNavigate } from 'react-router';
import projectManagementImage from '../../assets/435031.jpg';

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

export default function Frame2608961() {
  const navigate = useNavigate();

  return (
    <div style={{ width: '1728px', height: '510px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <img src={projectManagementImage} alt="About Project Management" style={{ width: '726px', height: '510px', objectFit: 'cover' }} />
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
          backgroundColor: 'rgba(246, 246, 246, 1)',
        }}
      >
        <div style={{ alignSelf: 'stretch', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ color: 'rgba(55, 56, 55, 1)', fontSize: '28px', fontWeight: '600', textAlign: 'left', lineHeight: '120.00000476837158%', margin: 0 }}>What We Offer</h2>
          <h3 style={{ alignSelf: 'stretch', width: '100%', maxWidth: '700px', color: 'rgba(83, 84, 83, 1)', fontSize: '18px', fontWeight: '300', textAlign: 'left', lineHeight: '139.9999976158142%', margin: 0 }}>
            THE CIPM offers structured online pathways across Project Management, Agile Project Management, and Scrum Practice. Learners progress through Foundation, Core or Practitioner, and Advanced levels with comprehensive materials, unlimited practice exams, secure assessments, the official exam fee included, and a verifiable digital certificate upon successful completion.
          </h3>
        </div>
        <Button onClick={() => navigate('/about-project-management')} />
      </div>
    </div>
  );
}
