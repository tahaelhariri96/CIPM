interface NavbarLinkProps {
  text: string;
  color?: string;
  onClick?: () => void;
}

export default function NavbarLink({ text, color = 'rgba(255,255,255,1)', onClick }: NavbarLinkProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '8px 12px',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      <p style={{ margin: 0, color, fontSize: '16px', fontWeight: 400, lineHeight: '140%', whiteSpace: 'nowrap' }}>
        {text}
      </p>
    </div>
  );
}
