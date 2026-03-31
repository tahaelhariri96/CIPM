interface FaqCardProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function FaqCard({ question, answer, isOpen, onClick }: FaqCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '12px',
        padding: '24px',
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: '24px',
        border: '1px solid rgba(241,241,241,1)',
        boxShadow: isOpen ? '5px 3px 21.1px 0px rgba(54,6,89,0.1)' : '5px 3px 21.1px 0px rgba(54,6,89,0)',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '30px', flexShrink: 0 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {isOpen
            ? <rect x="5" y="5" width="14" height="14" rx="2" fill="rgba(219,16,16,1)" />
            : <rect x="5" y="11" width="14" height="2" fill="rgba(149,150,149,1)" />
          }
        </svg>
      </div>
      <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '4px' }}>
        <h3 style={{ margin: 0, color: 'rgba(55,56,55,1)', fontSize: '18px', fontWeight: 600, lineHeight: '120%' }}>
          {question}
        </h3>
        {isOpen && (
          <p style={{ margin: 0, color: 'rgba(83,84,83,1)', fontSize: '16px', fontWeight: 300, lineHeight: '140%' }}>
            {answer}
          </p>
        )}
      </div>
    </div>
  );
}
