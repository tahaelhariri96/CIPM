import { useState, useEffect, ReactNode } from 'react';

const DESIGN_WIDTH = 1728;

export default function ScaledPage({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => setScale(window.innerWidth / DESIGN_WIDTH);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <div
        style={{
          width: `${DESIGN_WIDTH}px`,
          transformOrigin: 'top left',
          transform: `scale(${scale})`,
          // height scales too so the page doesn't collapse
          marginBottom: `calc(${scale * 100}% - 100%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
