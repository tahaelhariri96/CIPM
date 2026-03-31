export default function VisionSection() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '100px' }}>
      <div
        style={{
          width: '1316px',
          height: '274px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 120px',
          backgroundColor: 'rgba(251,231,231,1)',
          borderRadius: '137px',
          boxShadow: '0px 5px 30px rgba(133,6,6,0.05), 6px 24px 30px rgba(133,6,6,0.49)',
        }}
      >
        <div style={{ maxWidth: '778px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h2 style={{ margin: 0, color: 'rgba(219,16,16,1)', fontSize: '36px', fontWeight: 600, lineHeight: '120%' }}>
            Our Vision
          </h2>
          <p style={{ margin: 0, color: 'rgba(155,11,11,1)', fontSize: '18px', fontWeight: 300, lineHeight: '140%' }}>
            To be Canada's premier catalyst for professional excellence in project delivery.<br />
            We envision a professional landscape where every project practitioner is equipped with the practical skills, ethical grounding, and strategic insight necessary to drive innovation and organizational success. We aspire to foster a lifelong learning community that adapts to the evolving demands of the global economy.
          </p>
        </div>
      </div>
    </div>
  );
}
