import React from 'react';
import image0 from '../assets/06. SMFC Badge Logog.svg';
import image1 from '../assets/04. SMAC Badge Logo.svg';
import image2 from '../assets/05. SMCC Badge Logo.svg';

export default function Frame2609262() {
  return (
    <div style={{ position: 'relative', width: '390.05px', height: '425.28px' }}>
      {/* الصورة الأولى - مدورة 7.87 درجة */}
      <img 
        src={image0} 
        alt="SMAC Badge"
        style={{
          position: 'absolute',
          width: '295.5px',
          height: '273px',
          left: '142px',
          top: '218px',
          transform: 'rotate(7.87deg)',
          filter: 'drop-shadow(0px 0px 30px rgba(104, 23, 163, 0.3))',
          padding: '15px'
        }}
      />
      
      {/* الصورة الثانية - مدورة -14.49 درجة */}
      <img 
        src={image1} 
        alt="SMCC Badge"
        style={{
          position: 'absolute',
          width: '247.5px',
          height: '297px',
          left: '0px',
          top: '47px',
          transform: 'rotate(-14.49deg)',
          filter: 'drop-shadow(0px 0px 30px rgba(104, 23, 163, 0.3))',
          padding: '15px'
        }}
      />
      
      {/* الصورة الثالثة - مدورة 12.14 درجة */}
      <img 
        src={image2} 
        alt="SMFC Badge"
        style={{
          position: 'absolute',
          width: '238.5px',
          height: '291px',
          left: '193px',
          top: '0px',
          transform: 'rotate(12.14deg)',
          filter: 'drop-shadow(0px 0px 30px rgba(104, 23, 163, 0.3))',
          padding: '15px'
        }}
      />
    </div>
  );
}
