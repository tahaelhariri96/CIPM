interface TextFieldProps {
  placeholder?: string;
  multiline?: boolean;
  height?: number;
}

export default function TextField({ placeholder = 'Your Name', multiline = false, height = 46 }: TextFieldProps) {
  const style: React.CSSProperties = {
    width: '100%',
    height: `${height}px`,
    padding: '12px',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: '12px',
    border: '1px solid rgba(217,221,226,1)',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 300,
    fontSize: '16px',
    color: 'rgba(149,150,149,1)',
    lineHeight: '1.4',
    outline: 'none',
    resize: 'none',
    boxSizing: 'border-box',
  };

  return multiline
    ? <textarea style={style} placeholder={placeholder} />
    : <input type="text" style={style} placeholder={placeholder} />;
}
