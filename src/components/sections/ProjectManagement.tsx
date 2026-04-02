import { useNavigate } from 'react-router';
import trainingImage from '../../assets/image.png';

function Arrowrightline() {
  return (
    <svg style={{ width: '20px', height: '20px', overflow: 'hidden' }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_15598_1312)">
        <path d="M13.4763 9.16689L9.00634 4.69689L10.1847 3.51855L16.6663 10.0002L10.1847 16.4819L9.00634 15.3036L13.4763 10.8336H3.33301V9.16689H13.4763Z" fill="#E13B3B" />
      </g>
      <defs>
        <clipPath id="clip0_15598_1312">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: '167px',
        height: '44px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '24px',
        paddingRight: '24px',
        overflow: 'hidden',
        backgroundColor: 'rgba(251, 231, 231, 1)',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      <p style={{ color: 'rgba(99, 7, 7, 1)', fontSize: '16px', fontWeight: '400', textAlign: 'left', lineHeight: '139.9999976158142%', margin: 0 }}>Learn more</p>
      <Arrowrightline />
    </div>
  );
}

export default function ProjectManagement() {
  const navigate = useNavigate();

  return (
    <div style={{ width: '1728px', height: '430px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: '48px', overflow: 'hidden', backgroundColor: 'rgba(186, 14, 14, 1)' }}>
      <img src={trainingImage} alt="Training with Mock Exam" style={{ width: '864px', height: '430px', objectFit: 'cover' }} />
      <div style={{ width: '615px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', paddingTop: '20px', paddingBottom: '20px' }}>
        <div style={{ alignSelf: 'stretch', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px' }}>
          <h1 style={{ alignSelf: 'stretch', width: '100%', maxWidth: '615px', color: 'rgba(255, 255, 255, 1)', fontSize: '32px', fontWeight: '600', textAlign: 'left', lineHeight: '120.00000476837158%', margin: 0 }}>Start Your Journey</h1>
          <h3 style={{ alignSelf: 'stretch', width: '100%', maxWidth: '615px', color: 'rgba(251, 231, 231, 1)', fontSize: '18px', fontWeight: '400', textAlign: 'left', lineHeight: '139.9999976158142%', margin: 0 }}>
            Explore our programs, choose the pathway that fits your goals, and take the next step in your professional development. THE CIPM supports your growth from your first credential to your most advanced.
          </h3>
        </div>
        <Button onClick={() => navigate('/about-mock-exam')} />
      </div>
    </div>
  );
}
