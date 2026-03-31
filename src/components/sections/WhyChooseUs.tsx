import svgPaths from '../../imports/svg-pt8brrterb';

const FEATURES = [
  { title: 'Career-oriented certifications',    icon: svgPaths.p15510c40 },
  { title: 'Online learning and exams',          icon: svgPaths.p1f40a600 },
  { title: 'Structured certification pathways', icon: svgPaths.p27405100 },
];

function FeatureIcon({ icon }: { icon: string }) {
  return (
    <div className="bg-[#f6c6c6] flex items-center p-[10px] rounded-[48px] shrink-0">
      <div className="overflow-hidden relative shrink-0 size-[24px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={icon} fill="#E13B3B" />
        </svg>
      </div>
    </div>
  );
}

function FeatureItem({ title, icon }: typeof FEATURES[0]) {
  return (
    <div className="flex flex-col flex-1 gap-[8px] items-start min-h-px min-w-px">
      <FeatureIcon icon={icon} />
      <p className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[#373837] text-[18px] w-full">
        {title}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      className="bg-[#fbe7e7] flex flex-col items-center justify-center relative"
      style={{ width: '1728px', padding: '56px 240px 165px', zIndex: 1 }}
    >
      <div className="flex items-center justify-between" style={{ width: '1236px' }}>
        <p
          className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[#272827] text-[36px]"
          style={{ flex: '1 0 0' }}
        >
          Why Choose us
        </p>

        <div className="flex gap-[44px] items-center" style={{ width: '739px' }}>
          {FEATURES.map((f) => <FeatureItem key={f.title} {...f} />)}
        </div>
      </div>
    </section>
  );
}
