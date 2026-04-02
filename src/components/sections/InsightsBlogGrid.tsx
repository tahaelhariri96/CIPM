import img1 from '../../assets/302570-1.png';
import img2 from '../../assets/302571-1.png';
import img3 from '../../assets/302572-1.png';

function Articles() {
  return (
    <div style={{ width: '396px', height: '342px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', cursor: 'pointer' }}>
      <img src={img1} alt="Mock Exams" style={{ alignSelf: 'stretch', width: '100%', height: '254px', objectFit: 'cover', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '4px' }} />
      <div style={{ alignSelf: 'stretch', width: '100%', height: '72px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '2px' }}>
        <h3 style={{ alignSelf: 'stretch', width: '100%', maxWidth: '396px', color: 'rgba(55, 56, 55, 1)', fontSize: '20px', fontWeight: '600', textAlign: 'left', lineHeight: '120.00000476837158%', margin: 0 }}>Why Mock Exams Matter Before Your Certification Test</h3>
        <p style={{ alignSelf: 'stretch', width: '100%', maxWidth: '396px', color: 'rgba(102, 103, 102, 1)', fontSize: '16px', fontWeight: '300', textAlign: 'left', lineHeight: '139.9999976158142%', margin: 0 }}>Posted on January 2, 2026</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div style={{ width: '396px', height: '342px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', cursor: 'pointer' }}>
      <img src={img2} alt="Mock Exams Preparation" style={{ alignSelf: 'stretch', width: '100%', height: '254px', objectFit: 'cover', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '4px' }} />
      <div style={{ alignSelf: 'stretch', width: '100%', height: '72px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '2px' }}>
        <h3 style={{ alignSelf: 'stretch', width: '100%', maxWidth: '396px', color: 'rgba(55, 56, 55, 1)', fontSize: '20px', fontWeight: '600', textAlign: 'left', lineHeight: '120.00000476837158%', margin: 0 }}>How Mock Exams Prepare You for Real Certification Exams</h3>
        <p style={{ alignSelf: 'stretch', width: '100%', maxWidth: '396px', color: 'rgba(102, 103, 102, 1)', fontSize: '16px', fontWeight: '300', textAlign: 'left', lineHeight: '139.9999976158142%', margin: 0 }}>Posted on January 2, 2026</p>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div style={{ width: '396px', height: '342px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', cursor: 'pointer' }}>
      <img src={img3} alt="Mock vs Real Exams" style={{ alignSelf: 'stretch', width: '100%', height: '254px', objectFit: 'cover', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '4px' }} />
      <div style={{ alignSelf: 'stretch', width: '100%', height: '72px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '2px' }}>
        <h3 style={{ alignSelf: 'stretch', width: '100%', maxWidth: '396px', color: 'rgba(55, 56, 55, 1)', fontSize: '20px', fontWeight: '600', textAlign: 'left', lineHeight: '120.00000476837158%', margin: 0 }}>Mock Exams vs Real Exams: What to Expect</h3>
        <p style={{ alignSelf: 'stretch', width: '100%', maxWidth: '396px', color: 'rgba(102, 103, 102, 1)', fontSize: '16px', fontWeight: '300', textAlign: 'left', lineHeight: '139.9999976158142%', margin: 0 }}>Posted on January 2, 2026</p>
      </div>
    </div>
  );
}

export default function InsightsBlogGrid() {
  return (
    <div style={{ width: '1728px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '12px', paddingLeft: '246px', paddingRight: '246px', paddingBottom: '56px' }}>
      <h2 style={{ alignSelf: 'flex-start', width: '100%', maxWidth: '1236px', color: 'rgba(55, 56, 55, 1)', fontSize: '24px', fontWeight: '400', textAlign: 'left', lineHeight: '120.00000476837158%', margin: 0 }}>All results</h2>
      <div style={{ width: '1236px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px' }}>
        <div style={{ alignSelf: 'stretch', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px' }}>
          <Articles />
          <Component13 />
          <Component14 />
        </div>
        <div style={{ alignSelf: 'stretch', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px' }}>
          <Articles />
          <Component13 />
          <Component14 />
        </div>
        <div style={{ alignSelf: 'stretch', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px' }}>
          <Articles />
          <Component13 />
          <Component14 />
        </div>
      </div>
    </div>
  );
}
