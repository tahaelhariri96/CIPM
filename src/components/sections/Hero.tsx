import svgPaths from '../../imports/svg-pt8brrterb';
import img1 from '../../assets/53c27109c9cf6bc39941d8193911e9dce4217a2e.png';
import img2 from '../../assets/8818e9e0235a25477b8430b276627a22daf87c87.png';
import img3 from '../../assets/f9292fcb6a3c35ac705ce7618c909ca87cb8a5ff.png';
import img4 from '../../assets/73ca6d4707e7d66de00ac5d2a91ce5174a4439b6.png';
import img5 from '../../assets/6193a6d7829a7b0a024ceee9004e212faab994b2.png';
import imgLayer11 from '../../assets/293ce1547000488747b952d66afccdeaae372f60.png';

// ── ثوابت التخطيط ─────────────────────────────────────────────────────────────
const HERO_HEIGHT    = 975;
const SLIDER_TOP     = 164;
const SLIDER_HEIGHT  = 440;
const BANNER_TOP     = 45;
const BANNER_HEIGHT  = 188;
const ELLIPSE_W      = 1926;
const ELLIPSE_OFFSET = -99; // left offset لتمديد الـ ellipse خارج الحدود

// ── بيانات صور السلايدر ───────────────────────────────────────────────────────
const SLIDE_IMAGES = [
  { src: img1, h: '117.47%', l: '-1.52%',  t: '-2.15%',  w: '104.12%', height: 420 },
  { src: img2, h: '165.07%', l: '0',        t: '-32.51%', w: '100%',    height: 418 },
  { src: img3, h: '100%',    l: '0.07%',    t: '0',       w: '136.3%',  height: 418 },
  { src: img4, h: '109.16%', l: '-24.84%',  t: '-9.06%',  w: '149.57%', height: 420 },
  { src: img5, h: '119.55%', l: '-26.82%',  t: '-9.74%',  w: '164.18%', height: 421 },
];

// ── كومبوننت: صورة واحدة في السلايدر ─────────────────────────────────────────
function SlideImage({ src, h, l, t, w, height }: typeof SLIDE_IMAGES[0]) {
  return (
    <div className="relative shrink-0 w-[460px]" style={{ height }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute max-w-none"
          style={{ height: h, left: l, top: t, width: w }}
          src={src}
        />
      </div>
    </div>
  );
}

// ── كومبوننت: مجموعة صور السلايدر (تُكرَّر مرتين للحلقة اللانهائية) ──────────
function SlideTrack() {
  return (
    <>
      {SLIDE_IMAGES.map((img, i) => <SlideImage key={i} {...img} />)}
    </>
  );
}

// ── كومبوننت: الـ Ellipse الحمراء العلوية (انحناء أعلى السلايدر) ──────────────
function TopRedEllipse() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left:   `${ELLIPSE_OFFSET}px`,
        top:    `${SLIDER_TOP - 70}px`,
        width:  `${ELLIPSE_W}px`,
        height: '139px',
        zIndex: 1,
      }}
    >
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1926 139">
        <ellipse cx="963" cy="69.5" rx="963" ry="69.5" fill="#BA0E0E" />
      </svg>
    </div>
  );
}

// ── كومبوننت: الـ Ellipse البيضاء السفلية (انحناء أسفل السلايدر) ─────────────
function BottomWhiteEllipse() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: `${ELLIPSE_OFFSET}px`, top: '397px', width: `${ELLIPSE_W}px`, height: '115px' }}
    >
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1926 115">
        <ellipse cx="963" cy="57.5" rx="963" ry="57.5" fill="white" />
      </svg>
    </div>
  );
}

// ── كومبوننت: حاوية السلايدر ─────────────────────────────────────────────────
function ImageSlider() {
  return (
    <>
      {/* الصور مع overflow-clip لقطعها داخل الحدود */}
      <div
        className="absolute left-0 overflow-clip w-[1728px]"
        style={{ top: `${SLIDER_TOP}px`, height: `${SLIDER_HEIGHT}px`, zIndex: 1 }}
      >
        {/* الصور مُوسَّطة عمودياً */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[421px] left-1/2 overflow-clip top-[calc(50%+0.5px)] w-[1728px]">
          <div
            className="absolute flex gap-[8px] h-[421px] items-center left-0 top-0 w-max"
            style={{ animation: 'slideImages 40s linear infinite' }}
          >
            <SlideTrack />
            <SlideTrack />
          </div>
        </div>

        {/* طبقة اللون الأحمر المدمجة فوق الصور */}
        <div className="absolute bg-[#ba0e0e] h-[430px] left-0 mix-blend-color opacity-40 top-[10px] w-[1728px]" />

        {/* الانحناء السفلي الأبيض */}
        <BottomWhiteEllipse />
      </div>

      {/* الانحناء العلوي الأحمر — خارج overflow-clip ليظهر فوق الخلفية البيضاء */}
      <TopRedEllipse />
    </>
  );
}

// ── كومبوننت: الشريط الأحمر مع الورقة البيضاء الزخرفية ──────────────────────
function RedBanner() {
  return (
    <>
      {/* خلفية بيضاء للجزء العلوي قبل السلايدر */}
      <div
        className="absolute left-0 top-0 w-[1728px] bg-white"
        style={{ height: `${SLIDER_TOP}px` }}
      />

      {/* الشريط الأحمر المنحني مع الزخرفة — z-index فوق الـ ellipse الحمراء */}
      <div
        className="absolute pointer-events-none"
        style={{
          left:   `${ELLIPSE_OFFSET}px`,
          top:    `${BANNER_TOP}px`,
          width:  `${ELLIPSE_W}px`,
          height: `${BANNER_HEIGHT}px`,
          zIndex: 5,
        }}
      >
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1926 188">
          {/* الـ mask يُشكّل الانحناء السفلي للشريط */}
          <mask id="mask_red_banner" maskUnits="userSpaceOnUse" x="0" y="0" width="1926" height="188" style={{ maskType: 'alpha' }}>
            <path d={svgPaths.p3a6d3570} fill="#64D9A9" />
          </mask>
          <g mask="url(#mask_red_banner)">
            <ellipse cx="963" cy="118.5" rx="963" ry="69.5" fill="#BA0E0E" />
            <rect x="99" y="50" width="1728" height="119" fill="#BA0E0E" />
            {/* الزخرفة البيضاء الشفافة — overflow:visible والـ mask يقصها */}
            <g overflow="visible">
              <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p3ec22500} fill="white" opacity="0.15" />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}

// ── كومبوننت: النجمة البيضاء المركزية ────────────────────────────────────────
function StarBadge() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: '833px', top: '133px', width: '62px', height: '60px', zIndex: 6 }}
    >
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 60">
        <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p3f655600} fill="white" opacity="0.9" />
      </svg>
    </div>
  );
}

// ── كومبوننت: الدائرة الدوارة الزخرفية ───────────────────────────────────────
function SpinningDecoration() {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{ left: '131px', top: '451px', width: '282.792px', height: '282.286px', zIndex: 10 }}
    >
      <div className="flex-none rotate-[-14.32deg]">
        <div className="relative" style={{ width: '232.644px', height: '231.944px' }}>
          {/* الحلقة الخارجية الدوارة */}
          <div className="-translate-y-1/2 absolute aspect-[540/539] left-0 right-0 top-1/2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              style={{ animation: 'heroSpin 15s linear infinite' }}
              src={imgLayer11}
            />
          </div>
          {/* الدائرة الداخلية */}
          <div className="-translate-y-1/2 absolute aspect-[204/203] left-[19.28%] right-[19.28%] rounded-[101.5px] top-1/2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[101.5px]">
              <img alt="" className="absolute h-[163.24%] left-[-31.37%] max-w-none top-[-31.62%] w-[162.75%]" src={imgLayer11} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── كومبوننت: النص الرئيسي والأزرار ─────────────────────────────────────────
function HeroContent() {
  return (
    <div
      className="absolute flex flex-col gap-[24px] items-center"
      style={{ left: 'calc(16.67% + 94px)', top: '654px', width: '964px', zIndex: 30 }}
    >
      <div className="flex flex-col gap-[12px] items-center text-center w-full">
        <p className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[#141514] text-[40px] w-full">
          Professional management requires a professional strategy
        </p>
        <p className="font-['Poppins',sans-serif] leading-[1.4] text-[#666766] text-[18px] w-[580px]">
          Managing projects and leading your team requires putting in extra effort to achieve the best results for your team.
        </p>
      </div>
      <div className="flex gap-[24px] items-center">
        <button className="bg-[#ba0e0e] flex gap-[12px] h-[56px] items-center justify-center px-[24px] rounded-[12px] border-none cursor-pointer hover:bg-[#9e0c0c] transition-colors duration-200">
          <span className="font-['Poppins',sans-serif] leading-[1.4] text-[#fbe7e7] text-[18px] whitespace-nowrap">
            Explore Certifications
          </span>
        </button>
        <button className="bg-[#fbe7e7] flex gap-[12px] h-[56px] items-center justify-center px-[24px] rounded-[12px] border-none cursor-pointer hover:bg-[#f6d0d0] transition-colors duration-200">
          <span className="font-['Poppins',sans-serif] leading-[1.4] text-[#ba0e0e] text-[18px] whitespace-nowrap">
            Register / Login
          </span>
          <svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p3cb1b80} fill="#BA0E0E" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── الكومبوننت الرئيسي ────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <div className="bg-white relative" style={{ width: '1728px', height: `${HERO_HEIGHT}px` }}>
      <style>{`
        @keyframes slideImages {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-50% - 4px)); }
        }
        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* الترتيب: السلايدر أولاً، ثم الشريط الأحمر فوقه، ثم النجمة والمحتوى */}
      <ImageSlider />
      <RedBanner />
      <StarBadge />
      <SpinningDecoration />
      <HeroContent />
    </div>
  );
}
