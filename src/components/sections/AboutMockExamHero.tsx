import { useNavigate } from 'react-router';
import imgHero from '../../../assets/nick-morrison-FHnnjk1Yj7Y-unsplash 1.svg';
import svgPaths from '../../imports/svg-pt8brrterb';

function Button({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} style={{ width: '56px', height: '56px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(251, 231, 231, 1)', borderRadius: '12px', overflow: 'hidden', flexShrink: 0, cursor: 'pointer' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7.828 11.0002H20V13.0002H7.828L13.192 18.3642L11.778 19.7782L4 12.0002L11.778 4.2222L13.192 5.6362L7.828 11.0002Z" fill="#666766"/>
      </svg>
    </div>
  );
}

function Arrowrightsline() {
  return (
    <svg style={{ width: '20px', height: '20px', overflow: 'hidden' }} width="20" height="20" viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#clip0_mock_hero)">
        <path d="M10.9766 10.0001L6.85156 5.87511L8.0299 4.69678L13.3332 10.0001L8.0299 15.3034L6.85156 14.1251L10.9766 10.0001Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_mock_hero">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export default function AboutMockExamHero() {
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', width: '100%', height: '267px', overflow: 'visible' }}>
      <div style={{ position: 'absolute', left: '-99px', top: '0px', width: '1926px', height: '267px', zIndex: 5, pointerEvents: 'none' }}>
        <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 1926 267">
          <path d="M1827 200C1890.38 209 1926 220 1926 230C1926 248 1494.85 267 963 267C431.15 267 0 248 0 230C0 220 35.6153 209 99 200V0H1827V200Z" fill="#BA0E0E" />
          <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p3ec22500} fill="white" opacity="0.15" />
        </svg>
      </div>

      <img src={imgHero} alt="Mock Exam" style={{ position: 'absolute', left: '0px', top: '230px', width: '1728px', height: '615px', zIndex: 4 }} />

      <div style={{ position: 'absolute', left: '246px', top: '143px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', zIndex: 100 }}>
        <Button onClick={() => navigate('/')} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4px' }}>
            <p style={{ color: 'rgba(255,255,255,1)', fontSize: '16px', fontWeight: 400, lineHeight: '139.9999976158142%', margin: 0 }}>Home</p>
            <Arrowrightsline />
          </div>
          <h1 style={{ color: 'rgba(255,255,255,1)', fontSize: '36px', fontWeight: 400, lineHeight: '120.00000476837158%', margin: 0, whiteSpace: 'nowrap' }}>About Mock Exam</h1>
        </div>
      </div>
    </div>
  );
}
