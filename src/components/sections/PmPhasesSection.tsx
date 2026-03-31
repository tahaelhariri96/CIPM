import svgPaths from '../../imports/svg-pt8brrterb';

const PHASES = ['Initiation', 'Planning', 'Execution', 'Monitoring & Controlling', 'Closing', 'Support'];

export default function PmPhasesSection() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'rgba(251,231,231,1)',
        marginTop: '100px',
        padding: '56px 64px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '1236px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', padding: '0 40px' }}>
        {/* الخط المتقطع */}
        <div style={{ position: 'absolute', top: '38px', left: '100px', right: '100px', borderTop: '2px dashed rgba(240,152,152,1)', zIndex: 0 }} />
        {PHASES.map((phase) => (
          <div key={phase} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 1, width: '120px' }}>
            <div
              style={{
                width: '76px',
                height: '76px',
                backgroundColor: 'rgba(255,255,255,1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(241,241,241,1)',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d={svgPaths.p3ccf5900} fill="rgba(227,59,59,1)" />
              </svg>
            </div>
            <p style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgba(55,56,55,1)', fontSize: '18px', lineHeight: '140%', textAlign: 'center' }}>
              {phase}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
