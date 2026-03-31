import { useNavigate } from 'react-router';
import imgMockExam from '../../imports/fda80a9771238dbb29aaf8ac678ef87b4ad41040.png';
import svgPaths from '../../imports/svg-pt8brrterb';

export default function MockExamBanner() {
  const navigate = useNavigate();
  return (
    <div style={{ width: '100%', height: '430px', backgroundColor: 'rgba(186,14,14,1)', display: 'flex', overflow: 'hidden' }}>
      <div style={{ width: '864px', overflow: 'hidden', flexShrink: 0 }}>
        <img src={imgMockExam} alt="Mock Exam" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div
        style={{
          width: '615px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '16px',
          padding: '20px 80px 20px 48px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h3 style={{ margin: 0, color: 'rgba(255,255,255,1)', fontSize: '32px', fontWeight: 600, lineHeight: '120%' }}>
            Training with Mock Exam
          </h3>
          <p style={{ margin: 0, color: 'rgba(251,231,231,1)', fontSize: '18px', fontWeight: 400, lineHeight: '140%' }}>
            Test your knowledge and get familiar with the exam format before taking the real certification exam.
          </p>
        </div>
        <button
          onClick={() => navigate('/about-mock-exam')}
          style={{
            height: '44px',
            padding: '12px 24px',
            backgroundColor: 'rgba(251,231,231,1)',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            alignSelf: 'flex-start',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            color: 'rgba(99,7,7,1)',
            fontSize: '16px',
          }}
        >
          Learn more
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d={svgPaths.p19240400} fill="rgba(227,59,59,1)" />
          </svg>
        </button>
      </div>
    </div>
  );
}
