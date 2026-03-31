import svgPaths from '../../imports/svg-pt8brrterb';
import img1 from '../../assets/235944aac1c9c41d33c0cd99652bc3e536a5988b.webp';
import img2 from '../../assets/0a2e87dc5dfebfea8280d675c1e8b18b14cd9148.webp';
import img3 from '../../assets/bb581ef3fb72f5b2bb2b6400cf5d8b84009b08fb.webp';

type Article = { title: string; date: string; img: string };

const ARTICLES: Article[] = [
  { title: 'Why Mock Exams Matter Before Your Certification Test',    date: 'January 2, 2026', img: img1 },
  { title: 'How Mock Exams Prepare You for Real Certification Exams', date: 'January 2, 2026', img: img2 },
  { title: 'Mock Exams vs Real Exams: What to Expect',               date: 'January 2, 2026', img: img3 },
];

function ArticleImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-white overflow-hidden relative rounded-[4px] shrink-0 w-full" style={{ height: '254px' }}>
      <div
        className="absolute"
        style={{ left: '-0.61px', right: '-0.61px', top: '50%', transform: 'translateY(-50%)', aspectRatio: '355/227' }}
      >
        <img alt={alt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={src} />
      </div>
    </div>
  );
}

function ArticleCard({ title, date, img }: Article) {
  return (
    <div className="flex flex-col flex-1 gap-[16px] items-start min-h-px min-w-px">
      <ArticleImage src={img} alt={title} />
      <div className="flex flex-col gap-[2px] items-start not-italic w-full">
        <p className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[#373837] text-[20px] w-full">
          {title}
        </p>
        <p className="font-['Poppins',sans-serif] font-light leading-[1.4] text-[#666766] text-[16px] w-full">
          Posted on {date}
        </p>
      </div>
    </div>
  );
}

function ShowAllButton() {
  return (
    <button className="bg-[#f6c6c6] flex gap-[8px] h-[44px] items-center justify-center overflow-hidden px-[24px] py-[12px] rounded-[12px] shrink-0 cursor-pointer border-none hover:bg-[#f0b0b0] transition-colors duration-200">
      <span className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[#630707] text-[16px] whitespace-nowrap">
        Show all
      </span>
      <div className="overflow-hidden relative shrink-0 size-[20px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p19240400} fill="#E13B3B" />
        </svg>
      </div>
    </button>
  );
}

function SectionHeader() {
  return (
    <div className="flex flex-col gap-[4px] items-center not-italic text-center" style={{ width: '550px' }}>
      <p className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[#272827] text-[36px] whitespace-nowrap">
        Important insights to consider
      </p>
      <p className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[#666766] text-[18px] w-full">
        How will the work spread in the past and coming years
      </p>
    </div>
  );
}

export default function InsightsBlog() {
  return (
    <section
      className="bg-[#fbe7e7] flex flex-col items-center"
      style={{ width: '1728px', padding: '88px 240px 56px' }}
    >
      <div className="flex flex-col gap-[36px] items-center" style={{ width: '1236px' }}>
        <SectionHeader />
        <div className="flex gap-[24px] items-center w-full">
          {ARTICLES.map((a) => <ArticleCard key={a.title} {...a} />)}
        </div>
        <ShowAllButton />
      </div>
    </section>
  );
}
