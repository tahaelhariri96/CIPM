import svgPaths from '../../imports/svg-pt8brrterb';
import imgCert from '../../assets/a79b36824a85e33aa29209599054a166ebc75de5.png';

const CERT_SHADOW = '9px 10px 36.7px 8px rgba(219,16,16,0.14), 10px 10px 30.6px 0px rgba(0,0,0,0.2)';

// البطاقات الخلفية — قيم left مطلقة من الكود المرجعي
type CertCard = { left: string; top: string; w: string; h: string };

const BACK_CARDS: CertCard[] = [
  { left: '761.99px', top: '187.74px', w: '550.014px', h: '388.511px' },
  { left: '416px',    top: '187.74px', w: '550.014px', h: '388.511px' },
  { left: '650.26px', top: '160.84px', w: '622.176px', h: '439.317px' },
  { left: '455.83px', top: '160.84px', w: '622.176px', h: '439.317px' },
];

// ── الخلفية الحمراء مع الزخرفة ───────────────────────────────────────────────
function RedBackground() {
  return (
    <div className="absolute" style={{ left: 0, top: '199px', width: '1728px', height: '363px' }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1728 363">
        <g clipPath="url(#certClip)">
          <rect fill="#BA0E0E" height="363" width="1728" />
          <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p3a820680} fill="white" opacity="0.15" />
        </g>
        <defs>
          <clipPath id="certClip">
            <rect fill="white" height="363" width="1728" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// ── بطاقة شهادة واحدة ────────────────────────────────────────────────────────
function CertificateCard({ left, top, w, h }: CertCard) {
  return (
    <div
      className="absolute rounded-[12px] overflow-hidden"
      style={{ left, top, width: w, height: h, boxShadow: CERT_SHADOW }}
    >
      <img alt="Certificate" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCert} />
    </div>
  );
}

// ── البطاقة الأمامية الرئيسية ─────────────────────────────────────────────────
function FrontCertificateCard() {
  return (
    <div
      className="absolute rounded-[12px] overflow-hidden"
      style={{ left: '493.77px', top: '120px', width: '739.831px', height: '522px', boxShadow: CERT_SHADOW }}
    >
      <img alt="Certificate" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCert} />
    </div>
  );
}

// ── النص السفلي ───────────────────────────────────────────────────────────────
function SectionText() {
  return (
    <div
      className="absolute flex flex-col gap-[12px] items-center not-italic text-center"
      style={{ left: '372px', top: '678px', width: '984px' }}
    >
      <p className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[#272827] text-[36px] whitespace-nowrap">
        Rise Above the Competition
      </p>
      <p className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[#666766] text-[18px] text-center w-full">
        Project management skills empower you to turn ideas into results, lead effectively, and stand out with real business impact in today's competitive world.
      </p>
    </div>
  );
}

// ── الكومبوننت الرئيسي ────────────────────────────────────────────────────────
export default function CertificatesShowcase() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ width: '1728px', height: '849px' }}
    >
      <RedBackground />
      {BACK_CARDS.map((card, i) => <CertificateCard key={i} {...card} />)}
      <FrontCertificateCard />
      <SectionText />
    </section>
  );
}
