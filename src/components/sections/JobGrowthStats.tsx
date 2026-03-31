import svgPaths from '../../imports/svg-pt8brrterb';

// ── كومبوننت: نقطة التسلسل الزمني ────────────────────────────────────────────
function TimelineDot({ color }: { color: string }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 size-[24px]" style={{ top: '-12px' }}>
      <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" fill={color} r="9.5" stroke="white" strokeWidth="5" />
      </svg>
    </div>
  );
}

// ── كومبوننت: نقطة صغيرة على الخط ───────────────────────────────────────────
function SmallDot() {
  return (
    <svg className="shrink-0" style={{ width: '15px', height: '15px' }} fill="none" viewBox="0 0 15 15">
      <circle cx="7.5" cy="7.5" fill="white" r="6.5" stroke="#959695" strokeWidth="2" />
    </svg>
  );
}

// ── كومبوننت: بطاقة السنة النشطة (2026) ──────────────────────────────────────
function ActiveYearCard() {
  return (
    <div className="flex flex-col gap-[12px] items-center w-full">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[#db1010] text-[24px] text-center w-full">
        2026
      </p>
      <div className="bg-[#db1010] relative rounded-[16px] w-full">
        <div className="flex flex-col gap-[8px] items-center pb-[8px] pt-[24px] px-[8px] relative w-full">
          <p className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[#fbe7e7] text-[46px] whitespace-nowrap">
            40
          </p>
          <div className="bg-[#fbe7e7] relative rounded-[8px] w-full">
            <div className="flex items-center justify-center p-[12px] w-full">
              <p className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[#9b0b0b] text-[16px] text-center" style={{ width: '126px' }}>
                millions job opening now
              </p>
            </div>
          </div>
          <TimelineDot color="#DB1010" />
        </div>
      </div>
    </div>
  );
}

// ── كومبوننت: بطاقة سنة غير نشطة ─────────────────────────────────────────────
function InactiveYearCard({ year, value, label, cardWidth }: { year: string; value: string; label: string; cardWidth?: string }) {
  return (
    <div className="flex flex-col gap-[16px] items-center w-full">
      <SmallDot />
      <p className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[#303130] text-[18px] text-center w-full">
        {year}
      </p>
      <div className="relative rounded-[16px] border border-[#dcdcdc]" style={{ width: cardWidth ?? '100%' }}>
        <div className="flex flex-col gap-[8px] items-center pb-[8px] pt-[24px] px-[8px] relative w-full">
          <p className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[#373837] text-[46px] whitespace-nowrap">
            {value}
          </p>
          <div className="bg-[#f1f1f1] relative rounded-[8px] w-full">
            <div className="flex items-center justify-center p-[12px] w-full">
              <p className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[#272827] text-[16px] text-center whitespace-nowrap">
                {label}
              </p>
            </div>
          </div>
          <TimelineDot color="#666766" />
        </div>
      </div>
    </div>
  );
}

// ── كومبوننت: نقطة "Now" النشطة ──────────────────────────────────────────────
function NowIndicator() {
  return (
    <div className="flex flex-col items-center shrink-0">
      <p className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[16px] text-black">Now</p>
      <div style={{ transform: 'scaleY(-1)' }}>
        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
          <path d={svgPaths.p308b700} fill="#E13B3B" />
        </svg>
      </div>
    </div>
  );
}

// ── كومبوننت: النقطة النشطة الكبيرة ──────────────────────────────────────────
function ActiveDot() {
  return (
    <svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" fill="#DB1010" opacity="0.2" r="12" />
      <circle cx="12" cy="12" fill="#DB1010" opacity="0.2" r="10" />
      <circle cx="12" cy="12" fill="#DB1010" r="9.5" stroke="white" strokeWidth="5" />
    </svg>
  );
}

// ── كومبوننت: الخط الأفقي المتدرج ────────────────────────────────────────────
function TimelineAxis() {
  return (
    <div className="absolute" style={{ left: 'calc(50% - 502px)', top: '67px', width: '1004px', height: '3px' }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1004 3">
        <line stroke="url(#timelineGrad)" strokeWidth="3" x2="1004" y1="1.5" y2="1.5" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="timelineGrad" x1="0" x2="1004" y1="3.5" y2="3.5">
            <stop offset="0.370192" stopColor="#ECECEC" />
            <stop offset="0.5"       stopColor="#DB1010" />
            <stop offset="0.639423" stopColor="#ECECEC" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// ── كومبوننت: عنوان القسم ─────────────────────────────────────────────────────
function SectionHeader() {
  return (
    <div className="flex flex-col gap-[4px] items-center not-italic text-center" style={{ width: '964px' }}>
      <p className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[#272827] text-[36px] w-full">
        The Growing Field of Project Management
      </p>
      <p className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[#666766] text-[18px] w-full">
        How will the work spread in the past and coming years
      </p>
    </div>
  );
}

// ── كومبوننت: الـ Timeline كاملاً ────────────────────────────────────────────
function Timeline() {
  return (
    <div className="relative shrink-0" style={{ width: '1236px', height: '294px' }}>
      <TimelineAxis />

      {/* 2016 — يسار */}
      <div className="absolute" style={{ left: 0, top: '58px', width: '229px' }}>
        <InactiveYearCard year="2016" value="25" label="million positions" />
      </div>

      {/* 2026 — مركز (Now) */}
      <div className="absolute flex flex-col gap-[12px] items-center" style={{ left: 'calc(50% - 104px)', top: 0, width: '208px' }}>
        <NowIndicator />
        <ActiveDot />
        <ActiveYearCard />
      </div>

      {/* 2036 — يمين */}
      <div className="absolute" style={{ left: '1008px', top: '58px', width: '228px' }}>
        <InactiveYearCard year="2036" value="80" label="million potential positions" cardWidth="260px" />
      </div>
    </div>
  );
}

// ── الكومبوننت الرئيسي ────────────────────────────────────────────────────────
export default function JobGrowthStats() {
  return (
    <section
      className="flex flex-col items-center"
      style={{ width: '1728px', padding: '107px 240px 112px' }}
    >
      <div className="flex flex-col gap-[36px] items-center" style={{ width: '1236px' }}>
        <SectionHeader />
        <Timeline />
      </div>
    </section>
  );
}
