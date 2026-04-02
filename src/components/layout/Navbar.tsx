import { useState } from 'react';
import { useNavigate } from 'react-router';
import svgPaths from '../../imports/svg-pt8brrterb';
import img01BlackRedOriginalLogo1 from '../../assets/d8cdfa2dffa885f9ac0bc2c52abdbc8c7634dc42.webp';

// ── بيانات ────────────────────────────────────────────────────────────────────

const PM_CERTS = [
  { title: 'CIPM-PMFC', desc: 'Project Management Foundation Certificate', href: '/cert-pmfc' },
  { title: 'CIPM-PMCC', desc: 'Project Management Core Certificate',       href: '/cert-pmcc' },
  { title: 'CIPM-PMAC', desc: 'Project Management Advanced Certificate',   href: '/cert-pmac' },
];
const SM_CERTS = [
  { title: 'CIPM-APMF', desc: 'Agile Project Management Foundation',       href: '/cert-apmf' },
  { title: 'CIPM-APPC', desc: 'Agile Project Practitioner Certificate',    href: '/cert-appc' },
  { title: 'CIPM-APMA', desc: 'Agile Project Management Advanced',         href: '/cert-apma' },
];
const ABOUT_ITEMS = [
  { id: 1, title: 'About THE CIPM',            href: '/about-cipm' },
  { id: 2, title: 'About Mock Exam',            href: '/about-mock-exam' },
  { id: 3, title: 'About Project Management',   href: '/about-project-management' },
  { id: 4, title: 'About Agile Project Management', href: '/about-agile-project-management' },
];

// ── أيقونات ───────────────────────────────────────────────────────────────────

function ChevronDownIcon({ open }: { open?: boolean }) {
  return (
    <svg
      className="w-[18px] h-[18px] shrink-0 transition-transform duration-200"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
      viewBox="0 0 18 18" fill="none"
    >
      <path d="M9 10.5L6 7.5H12L9 10.5Z" fill="#666766" />
    </svg>
  );
}

function ArrowRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-[20px] h-[20px] ${className}`} viewBox="0 0 20 20" fill="none">
      <path d="M13.4763 9.16664L9.00634 4.69664L10.1847 3.51831L16.6663 9.99998L10.1847 16.4816L9.00634 15.3033L13.4763 10.8333H3.33301V9.16664H13.4763Z" fill="currentColor" />
    </svg>
  );
}

function StarItemIcon() {
  return (
    <svg className="w-[14px] h-[12px] shrink-0 text-[#272827]" viewBox="0 0 14 12" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.97694 12H7.25529L7.1889 10.9912L7.44444 10.7916C8.59969 10.9166 9.63409 11.0295 10.7877 11.1575L10.4955 10.2417C10.4485 10.0805 10.5148 9.90533 10.6459 9.80727L14 7.21698L13.3048 6.90597C13.0002 6.80223 13.086 6.63974 13.1946 6.24683L13.7057 4.47643L11.7593 4.86563C11.5684 4.89315 11.4422 4.77805 11.4145 4.66929L11.1624 3.83629L9.62234 5.47651C9.40347 5.73925 8.96055 5.73925 9.09879 5.13165L9.75681 1.80905L8.87451 2.24433C8.62602 2.37516 8.37941 2.397 8.23882 2.16221L6.99988 0L5.76047 2.16178C5.62247 2.39656 5.37398 2.37538 5.1269 2.24433L4.2446 1.80905L4.90309 5.13121C5.03944 5.73947 4.59653 5.73947 4.37766 5.47651L2.83757 3.83629L2.58696 4.66929C2.5571 4.77805 2.43321 4.89315 2.24208 4.86607L0.294101 4.47643L0.805192 6.24639C0.915451 6.63908 1.00126 6.80223 0.696579 6.90641L0 7.21698L3.35407 9.80683C3.48713 9.90468 3.55507 10.0809 3.50782 10.2417L3.21372 11.1575C4.36731 11.0297 5.40172 10.9172 6.55697 10.7916L6.81251 10.9912L6.7007 12H6.97717H6.97694Z" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

function CertBadgeIcon({ color }: { color: string }) {
  return (
    <svg className="w-[16px] shrink-0 mt-[3px]" viewBox="0 0 16 18" fill="none">
      <path opacity="0.9" fillRule="evenodd" clipRule="evenodd" d="M7.97364 18H8.29176L8.21588 16.8231L8.50793 16.5902C9.82821 16.736 11.0104 16.8677 12.3288 17.017L11.9948 15.9486C11.9411 15.7606 12.0169 15.5562 12.1668 15.4418L16 12.4198L15.2055 12.057C14.8573 11.9359 14.9554 11.7464 15.0795 11.288L15.6636 9.22251L13.4392 9.67657C13.2211 9.70868 13.0768 9.57439 13.0451 9.4475L12.7571 8.47567L10.997 10.3893C10.7468 10.6958 10.2406 10.6958 10.3986 9.98693L11.1506 6.11056L10.1423 6.61839C9.85831 6.77102 9.57646 6.7965 9.4158 6.52258L7.99987 4L6.5834 6.52207C6.42569 6.79599 6.14169 6.77127 5.85931 6.61839L4.85097 6.11056L5.60353 9.98642C5.75937 10.6961 5.25318 10.6961 5.00304 10.3893L3.24293 8.47567L2.95652 9.4475C2.9224 9.57439 2.78081 9.70868 2.56238 9.67708L0.336115 9.22251L0.92022 11.2875C1.04623 11.7456 1.1443 11.9359 0.796091 12.0575L0 12.4198L3.83322 15.4413C3.98529 15.5555 4.06294 15.7611 4.00893 15.9486L3.67282 17.017C4.99122 16.868 6.1734 16.7367 7.49368 16.5902L7.78573 16.8231L7.65795 18H7.97391H7.97364Z" fill={color} />
    </svg>
  );
}

// ── زر القائمة المنسدلة (مشترك) ──────────────────────────────────────────────
function DropdownTrigger({ label, open }: { label: string; open: boolean }) {
  return (
    <div
      className="flex gap-[4px] items-center px-[12px] py-[12px] rounded-[12px] cursor-pointer transition-all duration-200 select-none"
      style={{ backgroundColor: open ? '#f3f4f6' : 'transparent' }}
    >
      <span className="font-['Poppins',sans-serif] leading-[1.4] text-[#373837] text-[16px] whitespace-nowrap">
        {label}
      </span>
      <ChevronDownIcon open={open} />
    </div>
  );
}

// ── عنصر شهادة واحد ──────────────────────────────────────────────────────────
function CertItem({ color, title, desc, href }: { color: string; title: string; desc: string; href: string }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-start gap-[8px] p-[8px] rounded-[8px] cursor-pointer hover:bg-gray-50 transition-colors group" onClick={() => navigate(href)}>
      <CertBadgeIcon color={color} />
      <div className="flex-1 flex flex-col">
        <p className="font-['Poppins',sans-serif] font-normal text-[18px] leading-[1.2]" style={{ color }}>{title}</p>
        <p className="font-['Poppins',sans-serif] font-light text-[#666766] text-[14px] leading-[1.4]">{desc}</p>
      </div>
      <svg className="w-[24px] h-[24px] text-gray-300 group-hover:text-gray-500 transition-colors shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12.1718 12L9.34277 9.17196L10.7568 7.75696L14.9998 12L10.7568 16.243L9.34277 14.828L12.1718 12Z" fill="currentColor" />
      </svg>
    </div>
  );
}

// ── قائمة Certifications ──────────────────────────────────────────────────────
function CertificationsMegaMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="relative shrink-0"
      style={{ zIndex: 9999 }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <DropdownTrigger label="Certifications" open={open} />

      {/* جسر شفاف يمنع إغلاق القائمة عند الانتقال من الزر إليها */}
      {open && <div className="absolute left-0 right-0 h-[8px] top-full" />}

      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-[8px] bg-white rounded-[24px] p-[32px] flex flex-col gap-[24px] cursor-default"
          style={{ width: '800px', boxShadow: '0px 8px 30px 0px rgba(0,0,0,0.1)', zIndex: 9999 }}
        >
          <p className="font-['Poppins',sans-serif] font-semibold text-[#272827] text-[24px] leading-[1.2]">
            Certifications
          </p>
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[8px] cursor-pointer group">
              <p className="font-['Poppins',sans-serif] font-normal text-[#40006F] text-[18px] leading-[1.4]" onClick={() => navigate('/all-certifications')}>All Certifications</p>
              <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
            </div>
            <hr className="border-[#D4C2E1]" />
            <div className="flex flex-row gap-[40px]">
              <div className="flex flex-col flex-1 gap-[16px]">
                <p className="font-['Poppins',sans-serif] font-semibold text-[#6B2E99] text-[18px] leading-[1.2] border-b border-[#D4C2E1] pb-[8px]">Project Management</p>
                <div className="flex flex-col gap-[8px]">
                  {PM_CERTS.map((c) => <CertItem key={c.title} color="#6B2E99" title={c.title} desc={c.desc} href={c.href} />)}
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-[16px]">
                <p className="font-['Poppins',sans-serif] font-semibold text-[#760076] text-[18px] leading-[1.2] border-b border-[#E3C2E3] pb-[8px]">Agile Project Management</p>
                <div className="flex flex-col gap-[8px]">
                  {SM_CERTS.map((c) => <CertItem key={c.title} color="#A02EA0" title={c.title} desc={c.desc} href={c.href} />)}
                </div>
              </div>
            </div>
            <hr className="border-[#D4C2E1]" />
            <div className="flex items-center gap-[8px] cursor-pointer group">
              <p className="font-['Poppins',sans-serif] font-normal text-[#40006F] text-[18px] leading-[1.4]">Verify Certificate</p>
              <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── قائمة About ───────────────────────────────────────────────────────────────
function AboutMegaMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="relative shrink-0"
      style={{ zIndex: 9999 }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <DropdownTrigger label="About" open={open} />

      {open && <div className="absolute left-0 right-0 h-[8px] top-full" />}

      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-[8px] bg-white rounded-[24px] p-[32px] flex flex-col gap-[24px] cursor-default"
          style={{ width: '395px', boxShadow: '0px 8px 30px 0px rgba(0,0,0,0.1)', zIndex: 9999 }}
        >
          <div className="flex flex-col gap-[4px]">
            {ABOUT_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-[8px] cursor-pointer group px-[8px] py-[10px] rounded-[8px] hover:bg-gray-50 transition-colors"
                onClick={() => { navigate(item.href); setOpen(false); }}
              >
                <StarItemIcon />
                <span className="flex-1 font-['Poppins',sans-serif] font-normal text-[#272827] text-[16px] leading-[1.4] group-hover:text-black transition-colors">
                  {item.title}
                </span>
                <svg className="w-[24px] h-[24px] text-[#C4C5C4] group-hover:text-gray-500 transition-colors shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M12.1718 12L9.34277 9.17199L10.7568 7.75699L14.9998 12L10.7568 16.243L9.34277 14.828L12.1718 12Z" fill="currentColor" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── روابط التنقل ──────────────────────────────────────────────────────────────
function NavLinks() {
  const navigate = useNavigate();
  return (
    <div className="flex gap-[12px] items-center relative shrink-0">
      <CertificationsMegaMenu />
      <AboutMegaMenu />
      {(['Insights', 'Contact'] as const).map((label) => (
        <button
          key={label}
          onClick={() => {
            if (label === 'Insights') navigate('/insights');
            if (label === 'Contact') navigate('/contact');
          }}
          className="flex gap-[4px] items-center px-[12px] py-[12px] rounded-[12px] cursor-pointer transition-colors duration-200 bg-transparent border-none hover:bg-gray-50"
        >
          <span className="font-['Poppins',sans-serif] leading-[1.4] text-[#373837] text-[16px] whitespace-nowrap">
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}

// ── أزرار Login / Register ────────────────────────────────────────────────────
function NavbarActions() {
  return (
    <div className="flex gap-[16px] items-center justify-end shrink-0 w-[330px]">
      <button className="bg-[#fbe7e7] flex gap-[8px] h-[44px] items-center justify-center px-[24px] rounded-[12px] cursor-pointer border-none hover:bg-[#f6d0d0] transition-colors duration-200">
        <span className="font-['Poppins',sans-serif] leading-[1.4] text-[#630707] text-[16px] whitespace-nowrap">Login</span>
      </button>
      <button className="bg-[#ba0e0e] flex gap-[8px] h-[44px] items-center justify-center px-[16px] rounded-[12px] shrink-0 w-[141px] cursor-pointer border-none hover:bg-[#9e0c0c] transition-colors duration-200">
        <span className="font-['Poppins',sans-serif] leading-[1.4] text-[16px] text-white whitespace-nowrap">Register</span>
        <svg className="shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d={svgPaths.p265166c0} stroke="white" strokeLinecap="round" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}

// ── الشعار ────────────────────────────────────────────────────────────────────
function NavbarBrand() {
  const navigate = useNavigate();
  return (
    <div className="flex items-end relative shrink-0 w-[330px] cursor-pointer" onClick={() => navigate('/')}>
      <div className="h-[51px] relative shrink-0 w-[207px]">
        <div className="-translate-x-1/2 absolute aspect-[1303/322] bottom-0 left-1/2 top-0">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img01BlackRedOriginalLogo1} />
        </div>
      </div>
    </div>
  );
}

// ── المكوّن الرئيسي ───────────────────────────────────────────────────────────
export default function Navbar() {
  return (
    <div
      className="shrink-0 bg-white"
      style={{ width: '1728px', backdropFilter: 'blur(9.25px)', paddingTop: 24, paddingBottom: 24, boxShadow: '0 1px 0 0 rgba(0,0,0,0.06)' }}
    >
      <div className="flex w-full flex-row items-center justify-between px-[120px] box-border">
        <NavbarBrand />
        <NavLinks />
        <NavbarActions />
      </div>
    </div>
  );
}
