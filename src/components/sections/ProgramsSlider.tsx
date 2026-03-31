import { useState } from 'react';
import { useNavigate } from 'react-router';
import svgPaths from '../../imports/svg-pt8brrterb';
import img04SmacBadgeLogo  from '../../assets/cf4a8004b8d2719ad7d3444fcdefddb661906228.webp';
import img05SmccBadgeLogo  from '../../assets/c6a09660194cfcd682326fcf4ff4f61ec44d08f0.webp';
import img03PmfcBadgeLogo  from '../../assets/096b689d0e5599c3ac89cb7134d0a17e410a6460.webp';
import img01PmacBadgeLogo  from '../../assets/d65e100de6f39e2dfcd66856a3fdb33272b1fdfd.webp';
import img02PmccBadgeLogo  from '../../assets/af1b79cf93e804a875053efbb57a858d27aed408.webp';
import img06SmfcBadgeLogo  from '../../assets/a7341730e28c9ccb3b327437eb064317cc2332b8.webp';

// ── أنواع ─────────────────────────────────────────────────────────────────────
type Theme = {
  bg: string; dot: string; primary: string; shadow: string;
  learnMoreBg: string; exploreTxt: string; headingColor: string;
};
type Slide = { logo: string; code: string; title: string; heading: string; desc: string };
type BadgeSize = { w: string; h: string; x: string };

// ── بيانات ────────────────────────────────────────────────────────────────────
const SLIDES: Slide[] = [
  { logo: img04SmacBadgeLogo, code: 'CIPM-SMAC', title: 'Scrum Master Foundation Certificate',       heading: 'Unlock the Power of Agile Delivery',                   desc: 'Step into the role of a Servant Leader. This comprehensive course covers the essential Scrum framework-including roles.' },
  { logo: img05SmccBadgeLogo, code: 'CIPM-SMCC', title: 'Scrum Master Core Certificate',             heading: 'Elevate Team Performance & Facilitation',               desc: 'Move beyond the basics of the Scrum Guide and master the art of servant leadership.' },
  { logo: img03PmfcBadgeLogo, code: 'CIPM-PMFC', title: 'Project Management Foundation Certificate', heading: 'Launch Your PM Career',                                  desc: 'Master the essentials of project management with comprehensive foundation course.' },
  { logo: img01PmacBadgeLogo, code: 'CIPM-PMAC', title: 'Project Management Advanced Certificate',   heading: 'Strategic Leadership for Complex Projects',             desc: 'Advanced certification to master complex project lifecycles and strategic delivery.' },
  { logo: img02PmccBadgeLogo, code: 'CIPM-PMCC', title: 'Project Management Core Certificate',       heading: 'Take Your Project Management Career to the Next Level', desc: 'Build on existing knowledge and master core methodologies used by senior project managers.' },
  { logo: img06SmfcBadgeLogo, code: 'CIPM-SMFC', title: 'Scrum Master Advanced Certificate',         heading: 'Scaling Agility & Leading Enterprise Transformation',    desc: 'Designed for expert practitioners driving organizational change.' },
];

const SLIDE_ROUTES: string[] = [
  '/about-scrum-master',
  '/about-scrum-master',
  '/about-cipm',
  '/about-cipm',
  '/about-cipm',
  '/about-scrum-master',
];

const THEMES: Theme[] = [
  { bg: '#F3E6F3', dot: '#B65EB6', primary: '#A02EA0', shadow: 'rgba(86,8,143,0.21)', learnMoreBg: '#8B008B', exploreTxt: '#760076', headingColor: '#3F003F' },
  { bg: '#F3E6F3', dot: '#B65EB6', primary: '#A02EA0', shadow: 'rgba(86,8,143,0.21)', learnMoreBg: '#8B008B', exploreTxt: '#760076', headingColor: '#3F003F' },
  { bg: '#EDE6F3', dot: '#8E5EB0', primary: '#6B2E99', shadow: 'rgba(86,8,143,0.21)', learnMoreBg: '#4B0082', exploreTxt: '#40006F', headingColor: '#22003A' },
  { bg: '#EDE6F3', dot: '#8E5EB0', primary: '#6B2E99', shadow: 'rgba(86,8,143,0.21)', learnMoreBg: '#4B0082', exploreTxt: '#40006F', headingColor: '#22003A' },
  { bg: '#EDE6F3', dot: '#8E5EB0', primary: '#6B2E99', shadow: 'rgba(86,8,143,0.21)', learnMoreBg: '#4B0082', exploreTxt: '#40006F', headingColor: '#22003A' },
  { bg: '#F3E6F3', dot: '#B65EB6', primary: '#A02EA0', shadow: 'rgba(86,8,143,0.21)', learnMoreBg: '#8B008B', exploreTxt: '#760076', headingColor: '#3F003F' },
];

const BADGE_SIZES: BadgeSize[] = [
  { w: '170px', h: '208px', x: '434px' },
  { w: '170px', h: '208px', x: '434px' },
  { w: '177px', h: '212px', x: '431px' },
  { w: '177px', h: '212px', x: '431px' },
  { w: '177px', h: '212px', x: '431px' },
  { w: '227px', h: '210px', x: '406px' },
];

// ── حساب موضع الـ badge ───────────────────────────────────────────────────────
function getBadgeStyle(index: number, activeIndex: number): React.CSSProperties {
  let offset = (index - activeIndex) % 6;
  if (offset < -2) offset += 6;
  if (offset > 3)  offset -= 6;
  const { w, h, x } = BADGE_SIZES[activeIndex];
  switch (offset) {
    case -2: return { transform: 'translateX(23px) translateY(173px)',            width: '68px', height: '78px',  opacity: 0,   zIndex: 10 };
    case -1: return { transform: 'translateX(116px) translateY(168px)',           width: '72px', height: '88px',  opacity: 0.6, zIndex: 10 };
    case  0: return { transform: `translateX(${x}) translateY(106px)`,            width: w,      height: h,       opacity: 1,   zIndex: 20, filter: 'drop-shadow(0px 0px 30px rgba(104,23,163,0.54))' };
    case  1: return { transform: 'translateX(1414px) translateY(168px)',          width: '68px', height: '84px',  opacity: 0.6, zIndex: 10 };
    case  2: return { transform: 'translateX(1543px) translateY(173px)',          width: '84px', height: '77px',  opacity: 0.6, zIndex: 10 };
    default: return { transform: 'translateX(241px) translateY(173px)',           width: '83px', height: '77px',  opacity: 0.6, zIndex: 10 };
  }
}

// ── كومبوننت: الخلفية البيضاوية الملونة ──────────────────────────────────────
function SliderBackground({ theme }: { theme: Theme }) {
  return (
    <div
      className="absolute rounded-[137px] transition-colors duration-500"
      style={{ left: '372px', top: '75px', width: '984px', height: '274px', backgroundColor: theme.bg, boxShadow: `3px 13px 30px 0px ${theme.shadow}` }}
    />
  );
}

// ── كومبوننت: العنوان وأزرار التنقل ──────────────────────────────────────────
function SliderHeader({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="absolute flex items-center justify-between z-30" style={{ left: '50%', transform: 'translateX(-50%)', top: 0, width: '936px' }}>
      <p className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[#272827] text-[36px] whitespace-nowrap">
        Unlock Professional Success
      </p>
      <div className="flex gap-[12px] items-center shrink-0">
        <button onClick={onPrev} className="cursor-pointer flex h-[32px] items-center justify-center overflow-hidden p-[16px] rounded-[56px] shrink-0 hover:bg-gray-100 transition-colors">
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p357c6700} fill="#666766" /></svg>
        </button>
        <button onClick={onNext} className="cursor-pointer flex h-[32px] items-center justify-center overflow-hidden p-[16px] rounded-[56px] shrink-0 hover:bg-gray-100 transition-colors">
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p32c88600} fill="#666766" /></svg>
        </button>
      </div>
    </div>
  );
}

// ── كومبوننت: الـ Badges المتحركة ────────────────────────────────────────────
function BadgeCarousel({ activeIndex }: { activeIndex: number }) {
  return (
    <>
      {SLIDES.map((s, i) => (
        <div key={i} className="absolute transition-all duration-500 ease-in-out left-0 top-0" style={getBadgeStyle(i, activeIndex)}>
          <img alt={s.code} className="absolute mix-blend-multiply object-contain size-full" src={s.logo} />
        </div>
      ))}
    </>
  );
}

// ── كومبوننت: تلاشي الحواف ────────────────────────────────────────────────────
function EdgeFades() {
  return (
    <>
      <div className="absolute pointer-events-none z-30 bg-gradient-to-r from-white to-transparent" style={{ left: 0,        top: '155px', width: '372px', height: '114px' }} />
      <div className="absolute pointer-events-none z-30 bg-gradient-to-l from-white to-transparent" style={{ left: '1356px', top: '155px', width: '372px', height: '114px' }} />
    </>
  );
}

// ── كومبوننت: نص الـ slide النشط ─────────────────────────────────────────────
function SlideContent({ slide, theme }: { slide: Slide; theme: Theme }) {
  return (
    <div className="absolute flex gap-[24px] items-center z-30" style={{ left: '656px', top: '132px', width: '652px' }}>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col gap-[24px] items-end not-italic pr-[16px] w-full">
          <div className="flex flex-col gap-[2px] items-start w-full whitespace-nowrap">
            <p className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[36px] transition-colors duration-500" style={{ color: theme.primary }}>
              {slide.code}
            </p>
            <p className="font-['Poppins',sans-serif] font-light leading-[1.4] text-[#373837] text-[18px]">
              {slide.title}
            </p>
          </div>
          <div className="flex flex-col gap-[2px] items-start w-full">
            <p className="font-['Poppins',sans-serif] font-normal leading-[1.2] text-[20px] min-w-full" style={{ color: theme.headingColor }}>
              {slide.heading}
            </p>
            <p className="font-['Poppins',sans-serif] font-light leading-[1.4] text-[16px] transition-colors duration-500 whitespace-normal" style={{ color: theme.primary, width: '429px', minHeight: '44px' }}>
              {slide.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── كومبوننت: نقاط التنقل وأزرار الاستكشاف ───────────────────────────────────
// ── الكومبوننت الرئيسي ────────────────────────────────────────────────────────
export default function ProgramsSlider() {
  const [activeIndex, setActiveIndex] = useState(5);
  const navigate = useNavigate();
  const theme = THEMES[activeIndex];
  const slide = SLIDES[activeIndex];

  const handleNext = () => setActiveIndex((p) => (p + 1) % SLIDES.length);
  const handlePrev = () => setActiveIndex((p) => (p - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative overflow-hidden" style={{ width: '1728px', padding: '112px 0' }}>
      <div className="relative" style={{ height: '429px' }}>
        <SliderBackground theme={theme} />
        <SliderHeader onPrev={handlePrev} onNext={handleNext} />
        <BadgeCarousel activeIndex={activeIndex} />
        <EdgeFades />
        <SlideContent slide={slide} theme={theme} />
        <div className="absolute flex items-center justify-between z-30" style={{ left: '50%', transform: 'translateX(-50%)', top: '373px', width: '790px' }}>
          {/* نقاط التنقل */}
          <div className="flex gap-[8px] items-center shrink-0">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="relative shrink-0 transition-all duration-300 cursor-pointer border-none p-0"
                style={{ width: activeIndex === i ? '94px' : '12px', height: '12px', borderRadius: '24px', backgroundColor: activeIndex !== i ? theme.bg : 'transparent' }}
              >
                {activeIndex === i && (
                  <>
                    <div className="absolute inset-0 rounded-[24px] transition-colors duration-500" style={{ backgroundColor: theme.bg }} />
                    <div className="absolute bottom-0 left-0 rounded-[24px] top-0 transition-all duration-500" style={{ width: '35px', backgroundColor: theme.dot }} />
                  </>
                )}
              </button>
            ))}
          </div>

          {/* أزرار الاستكشاف */}
          <div className="flex gap-[24px] items-center shrink-0">
            <button className="flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[12px] rounded-[16px] cursor-pointer border-none bg-transparent">
              <span className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[16px] whitespace-nowrap" style={{ color: theme.exploreTxt }}>
                Explore all Certifications
              </span>
            </button>
            <button 
              onClick={() => navigate(SLIDE_ROUTES[activeIndex])}
              className="flex gap-[12px] h-[56px] items-center justify-center pl-[24px] pr-[16px] py-[16px] rounded-[16px] cursor-pointer border-none" 
              style={{ backgroundColor: theme.learnMoreBg }}
            >
              <span className="font-['Poppins',sans-serif] font-normal leading-[1.4] text-[18px] text-white whitespace-nowrap">Learn more</span>
              <svg className="size-[24px] shrink-0" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p3cb1b80} fill="white" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
