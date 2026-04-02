import { useNavigate } from 'react-router';
import svgPaths from '../../imports/svg-pt8brrterb';
import img03WhiteRedOriginalLogo1 from '../../assets/d5a9445cbaa0423f577aba2b88dd9db5f7043e12.webp';

// ── بيانات الروابط ────────────────────────────────────────────────────────────

const CERT_PM_LINKS = [
  { label: 'CIPM-PMFC', href: '/cert-pmfc' },
  { label: 'CIPM-PMCC', href: '/cert-pmcc' },
  { label: 'CIPM-PMAC', href: '/cert-pmac' },
];
const CERT_SM_LINKS = [
  { label: 'CIPM-APMF', href: '/cert-apmf' },
  { label: 'CIPM-APPC', href: '/cert-appc' },
  { label: 'CIPM-APMA', href: '/cert-apma' },
];
const LEARNING_LINKS = [
  { label: 'All Certifications', href: '/all-certifications' },
  { label: 'Mock Exams', href: '/about-mock-exam' },
  { label: 'Verify Certificate', href: '#' },
];
const INSIGHTS_LINKS = [
  { label: 'Blog', href: '/insights' },
  { label: 'FAQs', href: '/insights' },
];
const ACCOUNT_LINKS = ['Overview', 'Profile & Security', 'My Certificates', 'Learning Materials', 'Settings'];
const COMPANY_LINKS = [
  { label: 'About THE CIPM', href: '/about-cipm' },
  { label: 'About Mock Exam', href: '/about-mock-exam' },
  { label: 'About Project Management', href: '/about-project-management' },
  { label: 'About Agile Project Management', href: '/about-agile-project-management' },
];
const LEGAL_LINKS = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

// ── مكوّن رابط واحد ───────────────────────────────────────────────────────────

function FooterLink({ label, href = '#' }: { label: string; href?: string }) {
  const navigate = useNavigate();
  return (
    <div 
      className="relative rounded-[4px] shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="Navbar Link"
      onClick={() => href !== '#' && navigate(href)}
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#fdfdfd] text-[16px] whitespace-nowrap">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── مكوّن عمود روابط ─────────────────────────────────────────────────────────

function FooterLinksColumn({ links }: { links: (string | { label: string; href: string })[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Links">
      {links.map((link) => {
        const label = typeof link === 'string' ? link : link.label;
        const href = typeof link === 'string' ? '#' : link.href;
        return <FooterLink key={label} label={label} href={href} />;
      })}
    </div>
  );
}

// ── أيقونات السوشيال ──────────────────────────────────────────────────────────

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="social-icons">
      {/* Instagram */}
      <div className="h-[44px] relative rounded-[48px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
          <div className="relative shrink-0 size-[20px]">
            <div className="absolute inset-[12.5%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <g id="instagram">
                  <path d={svgPaths.p32fdc700} fill="#F1F1F1" />
                  <path d={svgPaths.p179e2280} fill="#F1F1F1" />
                  <path d={svgPaths.p12d4e500} fill="#F1F1F1" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#666766] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[48px]" />
      </div>
      {/* Facebook */}
      <div className="h-[44px] relative rounded-[48px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
          <div className="relative shrink-0 size-[20px]">
            <div className="absolute inset-[12.5%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <path d={svgPaths.p224e3e00} fill="var(--fill-0, #F1F1F1)" id="facebook" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#666766] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[48px]" />
      </div>
      {/* LinkedIn */}
      <div className="h-[44px] relative rounded-[48px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
          <div className="relative shrink-0 size-[20px]">
            <div className="absolute inset-[12.5%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <path d={svgPaths.p6647e00} fill="var(--fill-0, #F1F1F1)" id="linkedin" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#666766] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[48px]" />
      </div>
      {/* Twitter */}
      <div className="h-[44px] relative rounded-[48px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
          <div className="relative shrink-0 size-[20px]">
            <div className="absolute inset-[16.67%_12.5%_16.67%_16.67%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1667 13.3333">
                <path d={svgPaths.p2b780c0} fill="var(--fill-0, #F1F1F1)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#666766] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[48px]" />
      </div>
    </div>
  );
}

// ── الصف الأول: شعار + سوشيال + لغة ─────────────────────────────────────────

function FirstLine() {
  const navigate = useNavigate();
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full z-[5]" data-name="First-line">
      {/* Logo */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[235px]">
        <div className="content-stretch flex items-center relative shrink-0 cursor-pointer" data-name="Navbar Brand" onClick={() => navigate('/')}>
          <div className="h-[51px] relative shrink-0 w-[207px]">
            <div className="-translate-x-1/2 absolute aspect-[1303/322] bottom-0 left-1/2 top-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img03WhiteRedOriginalLogo1} />
            </div>
          </div>
        </div>
      </div>

      {/* Social + Language */}
      <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Navbar Menu">
          <div className="content-stretch flex gap-[4px] items-center p-[12px] relative rounded-[12px] shrink-0">
            <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              Follow us
            </p>
          </div>
          <SocialIcons />
        </div>
        <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[4px] shrink-0">
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#fdfdfd] text-[16px] whitespace-nowrap">
            En
          </p>
          <div className="overflow-clip relative shrink-0 size-[18px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d="M9 10.5L6 7.5H12L9 10.5Z" fill="var(--fill-0, #DCDCDC)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── شبكة الروابط ──────────────────────────────────────────────────────────────

function FooterLinksGrid() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full z-[3]">
      {/* Certifications: PM + SM */}
      <div className="content-stretch flex gap-[17px] items-start justify-center relative shrink-0">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
          <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 whitespace-nowrap">
            <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.2] relative shrink-0 text-[18px] text-white">Certifications</p>
            <p className="font-['Poppins:Light',sans-serif] leading-[1.4] relative shrink-0 text-[#c4c5c4] text-[14px]">Project Management</p>
          </div>
          <FooterLinksColumn links={CERT_PM_LINKS} />
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
          <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 whitespace-nowrap">
            <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.2] opacity-0 relative shrink-0 text-[18px] text-white">Certifications</p>
            <p className="font-['Poppins:Light',sans-serif] leading-[1.4] relative shrink-0 text-[#c4c5c4] text-[14px]">Agile Project Management</p>
          </div>
          <FooterLinksColumn links={CERT_SM_LINKS} />
        </div>
      </div>

      {/* Learning */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[172px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Learning</p>
        </div>
        <FooterLinksColumn links={LEARNING_LINKS} />
      </div>

      {/* Insights */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[92px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Insights</p>
        </div>
        <FooterLinksColumn links={INSIGHTS_LINKS} />
      </div>

      {/* Account */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Account</p>
        </div>
        <FooterLinksColumn links={ACCOUNT_LINKS} />
      </div>

      {/* Company */}
      <div className="content-stretch flex flex-col gap-[8px] px-8 items-start relative shrink-0">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Company</p>
        </div>
        <FooterLinksColumn links={COMPANY_LINKS} />
      </div>

      {/* Legal */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">{`Legal & Compliance`}</p>
        </div>
        <FooterLinksColumn links={LEGAL_LINKS} />
      </div>
    </div>
  );
}

// ── الصف الأخير: حقوق + اشتراك ───────────────────────────────────────────────

function FooterBottom() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full z-[1]">
      {/* Copyright */}
      <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
        <p className="font-['Poppins:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#fdfdfd] text-[14px] text-right whitespace-pre" dir="auto">
          {`CIMP @2026  - All right reserved`}
        </p>
      </div>

      {/* Email subscription */}
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
        <p className="font-['Poppins:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#f1f1f1] text-[14px] text-right whitespace-nowrap">
          Email subscription
        </p>
        <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[382.5px]" data-name="Text Field">
          <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="input">
            <div aria-hidden="true" className="absolute border border-[#d9dde2] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
            <div className="flex flex-row items-center justify-end size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-end p-[12px] relative w-full">
                <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#959695] text-[16px]" dir="auto">
                  Enter your email
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#272827] content-stretch flex gap-[4px] items-center justify-center left-[408.5px] overflow-clip px-[16px] py-[8px] rounded-[10px] top-[5px]" data-name="Button">
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
            Subscribe
          </p>
        </div>
      </div>
    </div>
  );
}

// ── المكوّن الرئيسي ───────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <div className="relative shrink-0" style={{ width: '1728px' }} data-name="Contents">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] isolate items-center pb-[48px] pt-[32px] px-[168px] relative w-full">
          <FirstLine />
          <div className="h-0 relative shrink-0 w-full z-[4]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1392 1">
                <line id="Line 6" stroke="var(--stroke-0, #535453)" x2="1392" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <FooterLinksGrid />
          <div className="h-0 relative shrink-0 w-full z-[2]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1392 1">
                <line id="Line 6" stroke="var(--stroke-0, #535453)" x2="1392" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}
