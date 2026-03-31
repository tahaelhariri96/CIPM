import { useState } from 'react';
import imgContact from '../../assets/Group 389.webp';

const OPTIONS = ['General Inquiry', 'Customer Support', 'Other'];

function SelectField() {
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', padding: '16px 20px', backgroundColor: 'white', border: '1px solid #D9DDE2', borderRadius: '12px', fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: '16px', color: selected ? '#373837' : '#959695', outline: 'none', cursor: 'pointer', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none' }}
      >
        <span>{selected || 'Title of message'}</span>
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}>
          <path d="M4.699 7.5L10 12.5L15.301 7.5" stroke="#959695" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {open && (
        <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, width: '100%', backgroundColor: 'white', border: '1px solid #D9DDE2', borderRadius: '12px', zIndex: 100, overflow: 'hidden', boxShadow: '0px 8px 24px rgba(0,0,0,0.08)' }}>
          {OPTIONS.map(opt => (
            <div
              key={opt}
              onClick={() => { setSelected(opt); setOpen(false); }}
              style={{ padding: '12px 20px', fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: '16px', color: '#373837', cursor: 'pointer', backgroundColor: selected === opt ? '#FBE7E7' : 'white' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#FBE7E7')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = selected === opt ? '#FBE7E7' : 'white')}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [selectValue, setSelectValue] = useState('');
  return (
    <div style={{ width: '1728px', backgroundColor: 'white', padding: '112px 246px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: '96px' }}>

      {/* الجانب الأيسر: الصورة */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '0px' }}>
        <img
          src={imgContact}
          alt="Contact"
          style={{ width: '343.62px', height: '211.97px', objectFit: 'contain' }}
        />
      </div>

      {/* الجانب الأيمن: النموذج */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h2 style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '36px', lineHeight: '120%', color: '#272827' }}>
            Feel free to get in touch
          </h2>
          <p style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: '18px', lineHeight: '140%', color: '#666766' }}>
            Important Notice Regarding Our Credentials
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          <input
            type="text"
            placeholder="Your Name"
            style={{ width: '100%', padding: '16px 20px', backgroundColor: 'white', border: '1px solid #D9DDE2', borderRadius: '12px', fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: '16px', color: '#373837', outline: 'none', boxSizing: 'border-box' }}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            style={{ width: '100%', padding: '16px 20px', backgroundColor: 'white', border: '1px solid #D9DDE2', borderRadius: '12px', fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: '16px', color: '#373837', outline: 'none', boxSizing: 'border-box' }}
            required
          />

          <SelectField />

          <textarea
            placeholder="Message"
            rows={5}
            required
            style={{ width: '100%', padding: '16px 20px', backgroundColor: 'white', border: '1px solid #D9DDE2', borderRadius: '12px', fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: '16px', color: '#373837', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '8px' }}>
            <button
              type="submit"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#BA0E0E', color: 'white', padding: '16px 32px', borderRadius: '16px', border: 'none', cursor: 'pointer', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '16px' }}
            >
              Send a message
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19L19 5M19 5v10M19 5H9" />
              </svg>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
