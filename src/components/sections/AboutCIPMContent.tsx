import svgPaths from '../../imports/svg-pt8brrterb';

function InputField({ type, placeholder }: { type: string; placeholder: string }) {
  return (
    <div style={{ backgroundColor: 'white', border: '1px solid #D9DDE2', borderRadius: '12px', padding: '12px', display: 'flex', alignItems: 'center' }}>
      <input
        type={type}
        placeholder={placeholder}
        style={{ flex: 1, fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '16px', color: '#959695', border: 'none', outline: 'none', background: 'transparent' }}
      />
    </div>
  );
}

export default function AboutCIPMContent() {
  return (
    <div style={{ width: '1728px', backgroundColor: 'white' }}>

      {/* ── Contact ── */}
      <div style={{ backgroundColor: '#FBE7E7', display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'flex-start', padding: '72px 372px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center', padding: '12px 0' }}>
          
            <svg style={{ width: '126.05152130126953px', height: '77.75430297851562px' }} width="127" height="78" viewBox="0 0 127 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M71.9588 6.55273L64.2451 51.302L126.052 38.9333L71.9588 6.55273Z" fill="white"/>
<path d="M80.6329 48.0231L64.2451 51.302L71.9588 6.55273L86.4592 15.234L80.6329 48.0231Z" fill="#DF1717"/>
<path d="M59.8087 72.3441C60.3709 72.4413 60.9064 72.0628 61.0001 71.5001L72.8793 1.21088C72.9763 0.648211 72.5981 0.112331 72.0359 0.0152028C71.4737 -0.0819254 70.9383 0.29654 70.8446 0.859213L58.9654 71.1485C58.8683 71.7111 59.2465 72.247 59.8087 72.3441Z" fill="#34343B"/>
<path d="M126.035 38.937L105.163 43.1135L107.844 28.0352L126.035 38.9236V38.937Z" fill="#DF1717"/>
<path d="M89.1838 36.7093L85.332 32.295L86.3895 32.0069C86.5502 31.9634 86.6539 31.806 86.6305 31.6419L86.2088 28.7716L88.6886 29.783C88.8325 29.8433 88.9998 29.7897 89.0835 29.6591L89.7829 28.5639L91.3758 31.0457C91.5599 31.3304 92.0049 31.1964 91.9983 30.8582L91.9012 25.6936L93.3201 26.8759C93.4372 26.973 93.6146 26.9529 93.705 26.8324L95.8534 23.9688L96.9276 27.385C96.9745 27.5324 97.1318 27.6094 97.2757 27.5558L99.0058 26.9127L97.202 31.7491C97.0816 32.0672 97.4564 32.3419 97.7241 32.1342L100.053 30.3223L100.351 31.5883C100.388 31.739 100.525 31.8462 100.682 31.8361L103.36 31.7089L102.008 34.2744C101.931 34.4218 101.974 34.606 102.111 34.6997L103.015 35.3227L97.9149 38.2031C97.8044 38.2667 97.7442 38.3906 97.7676 38.5179L98.0688 40.1557L94.0664 38.7021C93.8154 38.6117 93.5443 38.7758 93.5142 39.0404L92.9955 43.2571L92.5672 43.1834L92.1388 43.1097L93.0524 38.96C93.1093 38.6987 92.9085 38.4542 92.6441 38.4542L88.3874 38.4911L89.214 37.0476C89.2775 36.937 89.2642 36.7997 89.1805 36.7026L89.1838 36.7093Z" fill="#DF1717"/>
<path d="M49.9832 8.96436L61.3914 51.9653L0 45.2635L49.9832 8.96436Z" fill="#DF1717"/>
<path d="M69.2392 77.7199C68.7004 77.8639 68.1449 77.5424 68.001 76.9998L48.6213 3.82975C48.4774 3.29052 48.7986 2.73455 49.3408 2.59053C49.8795 2.44651 50.4351 2.76804 50.579 3.31062L69.962 76.4807C70.1059 77.0199 69.7847 77.5759 69.2425 77.7199H69.2392Z" fill="#34343B"/>
<path d="M40.2353 38.491L43.6119 33.849L42.5544 33.6581C42.3938 33.6279 42.28 33.4839 42.29 33.3198L42.454 30.483L40.1215 31.6854C39.9843 31.7557 39.8203 31.7189 39.7266 31.5983L38.9469 30.5902L37.6049 33.1523C37.451 33.4471 37.0059 33.3533 36.9825 33.0217L36.6278 27.9744L35.346 29.2505C35.239 29.3576 35.0649 29.3509 34.9645 29.2404L32.6187 26.6313L31.8657 30.0576C31.8322 30.205 31.685 30.2954 31.5411 30.2552L29.7976 29.7796L31.9795 34.3447C32.1234 34.6461 31.782 34.9475 31.5009 34.7667L29.0714 33.2026L28.8907 34.4619C28.8706 34.6126 28.7434 34.7265 28.5895 34.7332L25.9658 34.8404L27.5086 37.2284C27.5989 37.3657 27.5688 37.5465 27.445 37.6537L26.6184 38.3403L31.8423 40.7082C31.956 40.7585 32.023 40.879 32.0129 41.003L31.8623 42.6274L35.6405 40.8623C35.8781 40.7518 36.1559 40.8891 36.2094 41.147L37.0829 45.2197L37.4945 45.1125L37.9061 45.0053L36.6545 41.0331C36.5776 40.7853 36.7482 40.5274 37.0093 40.5073L41.1656 40.1757L40.2353 38.8394C40.165 38.7355 40.165 38.6016 40.2386 38.5011L40.2353 38.491Z" fill="white"/>
</svg>
<h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '28px', lineHeight: '1.2', color: '#373837', margin: 0 }}>
            Feel free to get in touch
          </h2>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '18px', lineHeight: '1.4', color: '#535453', margin: 0 }}>
            We're here to answer your questions about Project Management certification.
          </p>
        </div>

        <div style={{ width: '583px', display: 'flex', flexDirection: 'column', gap: '24px', flexShrink: 0 }}>
          <InputField type="text" placeholder="Your Name" />
          <InputField type="email" placeholder="Your Email" />

          <div style={{ backgroundColor: 'white', border: '1px solid #D9DDE2', borderRadius: '12px', padding: '12px', height: '101px', display: 'flex', alignItems: 'flex-start' }}>
            <textarea
              placeholder="Message"
              style={{ flex: 1, height: '100%', fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '16px', color: '#959695', border: 'none', outline: 'none', background: 'transparent', resize: 'none' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button style={{ backgroundColor: '#BA0E0E', border: 'none', borderRadius: '16px', padding: '16px 32px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '16px', color: '#FBE7E7', whiteSpace: 'nowrap' }}>
                Send a message
              </span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d={svgPaths.p19240400} fill="#FBE7E7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
