import img1 from '../../assets/0d224996d652739a2ed14345bfcce8c15cfdcde3.png';
import img2 from '../../assets/ce87036de0f163b38609abda059d25fdb4d27ebe.png';
import img3 from '../../assets/610d4915e8e66f9f659139165fcaae1a759a1978.png';
import img4 from '../../assets/08785335084e7e5103ff43dfe54825941c0863ee.png';
import img5 from '../../assets/87111671f09308d8ce2d8552c60afb3f983d9bef.png';

// ── بيانات الفئات المستهدفة ───────────────────────────────────────────────────
type AudienceItem = { title: string; img: string; h: string; l: string; t: string; w: string };

const AUDIENCES: AudienceItem[] = [
  { title: 'Students & Entry-Level Professionals', img: img1, h: '104.15%', l: '-13.92%', t: '0.08%',  w: '137.06%' },
  { title: 'Working Project Managers',             img: img2, h: '100.07%', l: '-46.72%', t: '-0.07%', w: '154.71%' },
  { title: 'Scrum Masters & Agile Practitioners',  img: img3, h: '102.88%', l: '-49.22%', t: '-0.18%', w: '188.64%' },
  { title: 'Career Switchers',                     img: img4, h: '123.27%', l: '0.07%',   t: '-8.05%', w: '99.88%'  },
  { title: 'Organizations & Teams',                img: img5, h: '109.74%', l: '-34.79%', t: '-0.13%', w: '169.84%' },
];

// ── كومبوننت: بطاقة فئة واحدة ────────────────────────────────────────────────
function AudienceCard({ title, img, h, l, t, w }: AudienceItem) {
  return (
    <div className="flex flex-col flex-1 gap-[12px] items-start min-h-px min-w-px">
      <div className="relative rounded-[4px] shrink-0 w-full overflow-hidden" style={{ height: '235px' }}>
        <img
          alt={title}
          className="absolute max-w-none"
          style={{ height: h, left: l, top: t, width: w }}
          src={img}
        />
      </div>
      <p className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[#373837] text-[18px] w-full">
        {title}
      </p>
    </div>
  );
}

// ── كومبوننت: عنوان القسم ─────────────────────────────────────────────────────
function SectionHeader() {
  return (
    <div className="flex flex-col gap-[4px] items-center not-italic text-center" style={{ width: '706px' }}>
      <p className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[#272827] text-[36px] w-full">
        Who These Certifications Are For
      </p>
      <p className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[#666766] text-[16px] w-full">
        How will the work spread in the past and coming years
      </p>
    </div>
  );
}

// ── الكومبوننت الرئيسي ────────────────────────────────────────────────────────
export default function TargetAudience() {
  return (
    <section
      className="bg-[#fbe7e7] flex flex-col items-center"
      style={{ width: '1728px', padding: '56px 240px' }}
    >
      <div className="flex flex-col gap-[36px] items-center" style={{ width: '1236px' }}>
        <SectionHeader />
        <div className="flex gap-[24px] items-start w-full">
          {AUDIENCES.map((a) => <AudienceCard key={a.title} {...a} />)}
        </div>
      </div>
    </section>
  );
}
