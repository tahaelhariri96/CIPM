import svgPaths from '../../imports/svg-pt8brrterb';
import imgBg from '../../assets/12647b593b4cdded76efa4d26c6900faa5596b62.webp';

// الخلفية الزخرفية — تغطي الجزء العلوي فقط (h=223px) كما في التصميم الأصلي
function DecorativeBackground() {
  return (
    <div
      className="absolute flex items-center justify-center pointer-events-none"
      style={{ left: '-3px', top: 0, width: '1734px', height: '223px' }}
    >
      <div className="flex-none rotate-90">
        <div className="relative" style={{ width: '223px', height: '1734px' }}>
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute max-w-none h-full"
              style={{ left: '-143.05%', top: 0, width: '518.39%' }}
              src={imgBg}
            />
          </div>
          <div className="absolute inset-0 bg-[rgba(219,16,16,0.64)]" />
        </div>
      </div>
    </div>
  );
}

function SendMessageButton() {
  return (
    <button className="relative z-10 bg-white flex gap-[8px] h-[44px] items-center justify-center overflow-hidden px-[24px] py-[12px] rounded-[12px] shrink-0 cursor-pointer border-none hover:bg-gray-50 transition-colors duration-200">
      <span className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[#666766] text-[16px] whitespace-nowrap">
        Send a message
      </span>
      <div className="overflow-hidden relative shrink-0 size-[20px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p3f85ce00} fill="#666766" />
        </svg>
      </div>
    </button>
  );
}

export default function ContactCTA() {
  return (
    <section
      className="bg-[#db1010] relative overflow-hidden flex flex-col gap-[24px] items-center"
      style={{ width: '1728px', padding: '56px 249px' }}
    >
      <DecorativeBackground />

      <p className="relative z-10 font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[36px] text-center text-white whitespace-nowrap">
        Feel free to contact with us
      </p>

      <SendMessageButton />
    </section>
  );
}
