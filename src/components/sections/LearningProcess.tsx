import svgPaths from '../../imports/svg-pt8brrterb';

// ── بيانات الخطوات ────────────────────────────────────────────────────────────
type Step = { label: string; icon: string; viewBox: string; inset?: string };

const STEPS: Step[] = [
  {
    label:   'Choose a Certification',
    icon:    svgPaths.p3ccf5900,
    viewBox: '0 0 32 32',
  },
  {
    label:   'Learn & Prepare',
    icon:    svgPaths.p27aee580,
    viewBox: '0 0 32 32',
  },
  {
    label:   'Take Exam & Get Certified',
    icon:    svgPaths.p7f21900,
    viewBox: '0 0 26.6667 28.6667',
    inset:   '8.33% 4.17% 2.08% 12.5%',
  },
];

// ── الخط المتقطع بين الخطوات ──────────────────────────────────────────────────
function DashedConnector() {
  return (
    <div className="absolute" style={{ left: '51px', top: 'calc(50% - 32px)', width: '635px', height: '0' }}>
      <div className="absolute" style={{ inset: '-2px 0 0 0' }}>
        <svg className="block" style={{ width: '635px', height: '2px' }} fill="none" viewBox="0 0 635 2">
          <line stroke="#F09898" strokeDasharray="9 9" strokeWidth="2" x2="635" y1="1" y2="1" />
        </svg>
      </div>
    </div>
  );
}

// ── خطوة واحدة ───────────────────────────────────────────────────────────────
function StepItem({ label, icon, viewBox, inset }: Step) {
  return (
    <div className="flex flex-col gap-[16px] items-center relative shrink-0" style={{ width: '134px' }}>
      <div className="bg-[#f6c6c6] flex items-center p-[16px] rounded-[56px] shrink-0">
        <div className="overflow-hidden relative shrink-0 size-[32px]">
          {inset ? (
            <div className="absolute" style={{ inset }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={viewBox}>
                <path d={icon} fill="#DB1010" />
              </svg>
            </div>
          ) : (
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={viewBox}>
              <path d={icon} fill="#DB1010" />
            </svg>
          )}
        </div>
      </div>
      <p
        className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[#272827] text-[18px] text-center"
        style={{ width: '120px' }}
      >
        {label}
      </p>
    </div>
  );
}

// ── صف الخطوات ───────────────────────────────────────────────────────────────
function StepsRow() {
  return (
    <div className="flex items-start justify-between relative shrink-0" style={{ width: '728px' }}>
      <DashedConnector />
      {STEPS.map((step, i) => <StepItem key={i} {...step} />)}
    </div>
  );
}

// ── عنوان القسم ───────────────────────────────────────────────────────────────
function SectionHeader() {
  return (
    <div className="flex flex-col gap-[4px] items-center text-center not-italic">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[#272827] text-[36px] whitespace-nowrap">
        Easy way to shape make your future better
      </p>
      <p className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[#666766] text-[18px] w-[580px]">
        Simple way to make this process done
      </p>
    </div>
  );
}

// ── الزخرفة الخلفية ───────────────────────────────────────────────────────────
function BackgroundDecoration() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: '50%', top: 'calc(50% + 126.5px)', transform: 'translate(-50%, -50%)', width: '1676px', height: '1589px' }}
    >
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1676 1589">
        <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p1097d700} fill="#951616" opacity="0.04" />
      </svg>
    </div>
  );
}

// ── الكومبوننت الرئيسي ────────────────────────────────────────────────────────
export default function LearningProcess() {
  return (
    <section
      className="bg-[#fbe7e7] overflow-hidden relative flex flex-col items-center"
      style={{ width: '1728px', padding: '112px 240px' }}
    >
      <BackgroundDecoration />
      <div className="relative flex flex-col gap-[36px] items-center" style={{ width: '1236px' }}>
        <SectionHeader />
        <StepsRow />
      </div>
    </section>
  );
}
