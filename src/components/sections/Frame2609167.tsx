export default function Frame2609167() {
  const steps = [
    ['1.', 'Start the mock exam'],
    ['2.', 'Answer questions within the time limit'],
    ['3.', 'Improves time management'],
    ['4.', 'Submit the exam'],
    ['5.', 'Review your results and performance'],
  ];

  return (
    <div
      style={{
        width: '1728px',
        minHeight: '450px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '48px',
        paddingTop: '72px',
        paddingBottom: '72px',
        paddingLeft: '246px',
        paddingRight: '246px',
        backgroundColor: 'rgba(246, 246, 246, 1)',
      }}
    >
      <div style={{ width: '732px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '12px' }}>
        <h2 style={{ color: 'rgba(39, 40, 39, 1)', fontSize: '28px', fontWeight: '600', textAlign: 'left', lineHeight: '120.00000476837158%', margin: 0 }}>How Our Mock Exams Work</h2>
        <h3 style={{ alignSelf: 'stretch', width: '100%', maxWidth: '732px', color: 'rgba(83, 84, 83, 1)', fontSize: '18px', fontWeight: '300', textAlign: 'left', lineHeight: '139.9999976158142%', margin: 0 }}>
          Our mock exams are designed to closely reflect the actual certification exam. Each test follows the same structure, timing, and level of difficulty to ensure a realistic experience.
        </h3>
        <div style={{ alignSelf: 'stretch', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '12px', position: 'relative' }}>
          <svg style={{ position: 'absolute', left: '5.949224948883057px', top: '13px', width: '2px', height: '144px' }} width="2" height="144" viewBox="0 0 2 144" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="4.37114e-08" x2="0.999994" y2="144" stroke="#F6C6C6" strokeWidth="2" />
          </svg>

          {steps.map(([index, label]) => (
            <div key={index} style={{ alignSelf: 'stretch', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '12px' }}>
              <svg style={{ width: '14px', height: '25px', flexShrink: 0 }} width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="12.5" r="6" fill="white" stroke="#E13B3B" strokeWidth="2" />
              </svg>
              <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: '4px' }}>
                <h3 style={{ color: 'rgba(225, 59, 59, 1)', fontSize: '18px', fontWeight: '600', textAlign: 'left', lineHeight: '120.00000476837158%', margin: 0 }}>{index}</h3>
                <h3 style={{ color: 'rgba(55, 56, 55, 1)', fontSize: '18px', fontWeight: '400', textAlign: 'left', lineHeight: '139.9999976158142%', margin: 0 }}>{label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <svg style={{ width: '203px', height: '235px', flexShrink: 0 }} width="203" height="235" viewBox="0 0 203 235" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="20" width="128" height="176" rx="10" fill="#F3EAEA" stroke="#D5CACA" />
        <path d="M152 52L186 58L160 214L126 208" fill="#E8DCDC" />
        <path d="M152 52L186 58L160 214L126 208" stroke="#D2C5C5" />
        <rect x="40" y="34" width="32" height="12" rx="4" fill="#DD2929" />
        <rect x="40" y="60" width="92" height="6" rx="3" fill="#C7BBBB" />
        <rect x="40" y="78" width="92" height="6" rx="3" fill="#C7BBBB" />
        <rect x="40" y="96" width="64" height="6" rx="3" fill="#C7BBBB" />
        <rect x="40" y="120" width="92" height="6" rx="3" fill="#D8CCCC" />
        <rect x="40" y="138" width="92" height="6" rx="3" fill="#D8CCCC" />
        <rect x="40" y="156" width="48" height="6" rx="3" fill="#D8CCCC" />
        <path d="M74 201C74 186 85 173 100 173C115 173 126 186 126 201V207H74V201Z" fill="black" />
        <path d="M110 152C110 158 105 163 99 163C93 163 88 158 88 152C88 146 93 141 99 141C105 141 110 146 110 152Z" fill="black" />
        <path d="M22 18L5 198" stroke="#BA0E0E" strokeWidth="4" />
      </svg>
    </div>
  );
}
