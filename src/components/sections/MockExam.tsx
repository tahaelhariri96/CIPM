import { useNavigate } from 'react-router';
import svgPaths from '../../imports/svg-pt8brrterb';
import mockImg from '../../assets/fda80a9771238dbb29aaf8ac678ef87b4ad41040.webp';

// ── كومبوننت: صورة القسم ──────────────────────────────────────────────────────
function MockExamImage() {
  return (
    <div className="relative rounded-[16px] shrink-0 overflow-hidden" style={{ width: '444px', height: '285px' }}>
      <img
        alt="Mock Exam"
        className="absolute max-w-none"
        style={{ height: '124.72%', left: '-7.45%', top: '-15.87%', width: '120.19%' }}
        src={mockImg}
      />
    </div>
  );
}

// ── الكومبوننت الرئيسي ────────────────────────────────────────────────────────
export default function MockExam() {
  const navigate = useNavigate();
  return (
    <section style={{ width: '1728px', padding: '0 240px', marginTop: '-109px', position: 'relative', zIndex: 10 }}>
      <div
        className="bg-[#ba0e0e] flex gap-[32px] items-end overflow-hidden rounded-[32px]"
        style={{ padding: '16px' }}
      >
        <MockExamImage />
        <div className="flex flex-col gap-[16px] items-start py-[20px] shrink-0" style={{ width: '615px' }}>
          <div className="flex flex-col gap-[4px] items-start not-italic w-full">
            <p className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-white text-[28px] w-full">
              Training with Mock Exam
            </p>
            <p className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[#fbe7e7] text-[18px] w-full">
              Test your knowledge and get familiar with the exam format before taking the real certification exam.
            </p>
          </div>
          <button 
            onClick={() => navigate('/about-cipm')}
            className="bg-[#fbe7e7] flex gap-[8px] h-[44px] items-center justify-center overflow-hidden px-[24px] py-[12px] rounded-[8px] shrink-0 cursor-pointer border-none hover:bg-[#f6d0d0] transition-colors duration-200"
          >
            <span className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[#630707] text-[16px] whitespace-nowrap">
              Learn more
            </span>
            <div className="overflow-hidden relative shrink-0 size-[20px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p19240400} fill="#E13B3B" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
