function Button() {
  return (
    <div style={{ width: '248px', height: '44px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '8px', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '24px', paddingRight: '24px', overflow: 'hidden', backgroundColor: 'rgba(251, 231, 231, 1)', borderRadius: '8px', cursor: 'pointer' }}>
      <p style={{ color: 'rgba(99, 7, 7, 1)', fontSize: '16px', fontWeight: '400', textAlign: 'left', lineHeight: '139.9999976158142%', margin: 0 }}>Start Your Mock Exam</p>
      <Arrowrightline />
    </div>
  );
}

function Arrowrightline() {
  return (
    <svg style={{ width: '20px', height: '20px', overflow: 'hidden' }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_15598_11247)">
        <path d="M13.4773 9.16664L9.00732 4.69664L10.1857 3.51831L16.6673 9.99998L10.1857 16.4816L9.00732 15.3033L13.4773 10.8333H3.33398V9.16664H13.4773Z" fill="#E13B3B"/>
      </g>
      <defs>
        <clipPath id="clip0_15598_11247">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export default function MockExamCTA() {
  return (
    <div style={{ width: '1728px', height: '108px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '48px', paddingTop: '32px', paddingBottom: '32px', overflow: 'hidden', backgroundColor: 'rgba(186, 14, 14, 1)', boxShadow: '5px 3px 21.100000381469727px 0px rgba(54, 6, 89, 0)' }}>
      <div style={{ width: '957px', height: '44px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px' }}>
        <div style={{ width: '693px', height: '38px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px' }}>
          <h1 style={{ alignSelf: 'stretch', width: '100%', maxWidth: '693px', color: 'rgba(255, 255, 255, 1)', fontSize: '32px', fontWeight: '600', textAlign: 'left', lineHeight: '120.00000476837158%', margin: 0 }}>Walk into your exam with total confidence.</h1>
        </div>
        <Button />
      </div>
    </div>
  );
}
