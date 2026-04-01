import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import svgPaths from "../imports/svg-2m43jtwopl";
import svgPathsSlider from "../imports/svg-pt8brrterb";
import img04SmacBadgeLogo from "../assets/04. SMAC Badge Logo.svg";
import imgApma1 from "../assets/Apma1.svg";
import img06SmfcBadgeLogo from "../assets/06. SMFC Badge Logog.svg";
import img05SmccBadgeLogo from "../assets/05. SMCC Badge Logo.svg";
import icoApmf from '../assets/APMF ICO.svg';
import icoAppc from '../assets/APPC ICO.svg';
import icoApma from '../assets/APMA ICO.svg';

const poppins = { fontFamily: "'Poppins', sans-serif" } as const;
const fw300 = { ...poppins, fontWeight: 300 } as const;
const fw400 = { ...poppins, fontWeight: 400 } as const;
const fw600 = { ...poppins, fontWeight: 600 } as const;

const innerContainer: React.CSSProperties = {
  maxWidth: "1236px",
  margin: "0 auto",
  padding: "0 24px",
};

// Theme configuration for Agile Project Management (APMF, APPC, APMA)
const theme = { 
  bg: '#F3E6F3', 
  primary: '#A02EA0', 
  shadow: 'rgba(160,46,160,0.21)', 
  headingColor: '#3F003F', 
  learnMoreBg: '#8B008B',
  darkPrimary: '#7A0080',
  buttonBg: '#8B008B'
};

function IconArrowRight({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.p19240400} fill={color} />
    </svg>
  );
}

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div style={{ position: "relative", overflow: "hidden", backgroundColor: theme.bg, height: "320px" }}>
      <svg
        viewBox="0 0 1926 498"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          top: "6px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1926px",
          height: "498px",
          pointerEvents: "none",
        }}
      >
        <defs>
          <mask id="heroShapeMask" maskUnits="userSpaceOnUse">
            <path
              d="M1827 397.773C1890.38 407.038 1926 417.468 1926 428.5C1926 466.884 1494.85 498 963 498C431.15 498 0 466.884 0 428.5C0 417.468 35.6153 407.038 99 397.773V0H1827V397.773Z"
              fill="white"
            />
          </mask>
        </defs>
        <rect x="0" y="0" width="1926" height="498" fill={theme.bg} mask="url(#heroShapeMask)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={svgPaths.p39134400}
          fill="#8B008B"
          opacity="0.05"
          mask="url(#heroShapeMask)"
        />
      </svg>

      <div
        onClick={() => navigate('/all-certifications')}
        style={{
          position: "absolute",
          top: "24px",
          left: "246px",
          backgroundColor: "#e5d1e8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "56px",
          height: "56px",
          borderRadius: "12px",
          cursor: "pointer",
        }}
      >
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <path d={svgPaths.p357c6700} fill={theme.darkPrimary} />
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "334px",
          width: "260px",
          height: "240px",
          filter: "drop-shadow(0px 0px 30px rgba(160,46,160,0.54))",
        }}
      >
        <img
          src={img04SmacBadgeLogo}
          alt="CIPM-APMA Badge"
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", mixBlendMode: "multiply" }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "50px",
          left: "592px",
          width: "826px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <p style={{ ...fw600, fontSize: "46px", color: theme.darkPrimary, lineHeight: 1.2, margin: 0 }}>
            CIPM-APMA
          </p>
          <p style={{ ...fw400, fontSize: "20px", color: "#535453", lineHeight: 1.2, margin: 0 }}>
            Agile Project Management Advanced
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p style={{ ...fw400, fontSize: "24px", color: theme.headingColor, lineHeight: 1.2, margin: 0 }}>
            Your Path to Advanced Agile Leadership
          </p>
          <p style={{ ...fw300, fontSize: "18px", color: theme.primary, lineHeight: 1.4, margin: 0 }}>
            Strengthen your ability to lead enterprise agile adoption, drive organizational transformation, and align agile strategy with business outcomes across complex, multi-team environments.
          </p>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "250px",
          left: "1064px",
          width: "354px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <span style={{ ...fw300, fontSize: "16px", color: theme.buttonBg, lineHeight: 1.4 }}>Total Fee</span>
          <span style={{ ...fw600, fontSize: "18px", color: theme.primary, lineHeight: 1.2 }}>$350</span>
        </div>
        <button
          style={{
            backgroundColor: theme.buttonBg,
            color: "white",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "0 24px",
            borderRadius: "12px",
            ...fw400,
            fontSize: "16px",
            lineHeight: 1,
            border: "none",
            cursor: "pointer",
            height: "44px",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          Register Now
          <IconArrowRight />
        </button>
      </div>
    </div>
  );
}

function InfoCard() {
  const rows = [
    { label: "Language", value: "English", bg: theme.bg, pt: "18px", pb: "12px" },
    { label: "Format", value: "Online", bg: "white", pt: "12px", pb: "12px" },
    { label: "Time Limit", value: "120 Minutes", bg: theme.bg, pt: "12px", pb: "12px" },
    { label: "Estimated Effort", value: "35 Hours", bg: "white", pt: "12px", pb: "12px" },
    { label: "Length", value: "75 Multiple Choice Questions.", bg: theme.bg, pt: "12px", pb: "16px" },
  ];
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "24px",
        overflow: "hidden",
        border: "3px solid #e5d1e8",
        boxShadow: "5px 5px 30px 0px rgba(160,46,160,0.32)",
        width: "354px",
        flexShrink: 0,
      }}
    >
      {rows.map((row, i) => (
        <div
          key={i}
          style={{
            backgroundColor: row.bg,
            display: "flex",
            alignItems: "center",
            padding: `${row.pt} 22px ${row.pb} 24px`,
          }}
        >
          <span style={{ ...fw300, fontSize: "16px", color: "#272827", lineHeight: 1.4, width: "145px", flexShrink: 0 }}>
            {row.label}
          </span>
          <span style={{ ...fw600, fontSize: "16px", color: "#272827", lineHeight: 1.3, flex: 1 }}>
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}

function OverviewSection() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ ...innerContainer, paddingTop: "56px", paddingBottom: "56px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "40px" }}>
          <div style={{ flex: 1, maxWidth: "798px" }}>
            <p style={{ ...fw600, fontSize: "28px", color: "#373837", lineHeight: 1.2, margin: "0 0 8px" }}>
              Overview:
            </p>
            <p style={{ ...fw300, fontSize: "18px", color: "#535453", lineHeight: 1.4, margin: 0 }}>
              The CIPM-APMA (Agile Project Management Advanced) is the pinnacle credential in THE CIPM's Agile certification pathway, designed for senior professionals who are responsible for leading agile strategy, guiding organizational transformation, and governing agile delivery at the portfolio or enterprise level. Building upon both the foundational knowledge of the CIPM-APMF and the applied delivery skills of the CIPM-APPC, this advanced certificate validates the strategic competencies expected of leaders who shape how entire organizations adopt, scale, and sustain agile ways of working.
            </p>
            {showMore && (
              <>
                <p style={{ ...fw300, fontSize: "18px", color: "#535453", lineHeight: 1.4, margin: "16px 0 0" }}>
                  Learners develop mastery in enterprise agile governance, organizational change leadership, cross-functional program coordination, agile maturity assessment, and executive stakeholder alignment. The program equips participants to evaluate and evolve an organization's agile practices, establish governance structures that enable autonomy while ensuring accountability, lead through resistance during transformation initiatives, and make strategic decisions in complex adaptive environments where uncertainty is the norm rather than the exception.
                </p>
                <p style={{ ...fw300, fontSize: "18px", color: "#535453", lineHeight: 1.4, margin: "16px 0 0" }}>
                  Because enterprise agile leadership is increasingly critical across sectors—including technology, financial services, government, healthcare, energy, and professional services—the CIPM-APMA provides the strategic depth and cross-industry credibility that senior professionals need to lead large-scale agile initiatives, advise executive teams, and champion continuous improvement at the organizational level.
                </p>
              </>
            )}
            <button
              onClick={() => setShowMore(!showMore)}
              style={{
                marginTop: "16px",
                backgroundColor: "transparent",
                border: "none",
                color: theme.primary,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 0",
                ...fw400,
                fontSize: "16px",
              }}
            >
              {showMore ? "Show Less" : "Read More"}
              <IconArrowRight color={theme.primary} size={16} />
            </button>
          </div>
          <InfoCard />
        </div>
      </div>
    </div>
  );
}

function AudienceIconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "76px",
        height: "76px",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

function GradCapSvg() {
  return (
    <div style={{ width: "52px", height: "34px", position: "relative", overflow: "hidden" }}>
      <svg viewBox="0 0 52 33.9007" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none">
        <path d={svgPaths.p1c7de700} fill="#FFC244" />
        <path d={svgPaths.pb8a0140} fill="#FFD05B" />
        <path d={svgPaths.p2b67eb00} fill="#FFC244" />
        <path d={svgPaths.p20924000} fill="#615260" />
        <path d={svgPaths.p2cb5d880} fill="#4E3D4D" />
        <path d={svgPaths.p14cf2700} fill="#736572" />
        <path d={svgPaths.p2f7dbe00} fill="#615260" />
        <path d={svgPaths.p10251300} fill="#FFE077" />
        <path d={svgPaths.p20f5af00} fill="#4E3D4D" />
      </svg>
    </div>
  );
}

function LaptopSvg() {
  return (
    <div style={{ width: "47px", height: "37px", position: "relative", overflow: "hidden" }}>
      <svg viewBox="0 0 47.0812 37.3459" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none">
        <path d={svgPaths.p7ff4400} fill="#DFD0C9" />
        <path d={svgPaths.p320097b0} fill="#B4AAAA" />
        <path d={svgPaths.p27a05800} fill="#4E3D4D" />
        <path d={svgPaths.p3cd1000} fill="#B4AAAA" />
        <path d={svgPaths.p2ab27800} fill="#EBDED9" />
        <path d={svgPaths.p1b9e4000} fill="#DAD0CB" />
        <path d={svgPaths.p1ff6300} fill="#DAD0CB" />
      </svg>
    </div>
  );
}

function BriefcaseSvg() {
  return (
    <div style={{ width: "52px", height: "52px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.5102 8.66516H9.89055C7.03663 8.66516 4.71484 10.987 4.71484 13.8409V32.245C4.71484 35.0989 7.03671 37.4207 9.89055 37.4207H39.5102C42.3642 37.4207 44.6859 35.0989 44.6859 32.245V13.8409C44.6859 10.987 42.3642 8.66516 39.5102 8.66516Z" fill="#F29F5C"/>
        <path d="M26.7772 37.4208H24.1289V9.44986C24.1289 9.05098 24.4522 8.72766 24.8511 8.72766H26.0549C26.4538 8.72766 26.7771 9.05098 26.7771 9.44986L26.7772 37.4208Z" fill="#E08546"/>
        <path d="M40.5533 9.99951H8.84762C7.56827 9.99951 6.39057 10.4402 5.45555 11.176C4.98571 11.9549 4.71484 12.8668 4.71484 13.841V21.9066C4.75879 21.9249 4.80308 21.9428 4.84861 21.9584C10.3035 23.8231 17.3538 24.8501 24.7005 24.8501C32.0472 24.8501 39.0974 23.8231 44.5524 21.9584C44.5979 21.9428 44.6421 21.9249 44.6861 21.9066V13.841C44.6861 12.8669 44.4153 11.9549 43.9454 11.176C43.0103 10.4402 41.8327 9.99951 40.5533 9.99951Z" fill="#E08546"/>
        <path d="M39.5091 8.66516H37.0234C39.8774 8.66516 42.1991 10.987 42.1991 13.8409V32.245C42.1991 35.0989 39.8773 37.4207 37.0234 37.4207H39.5091C42.363 37.4207 44.6848 35.0989 44.6848 32.245V13.8409C44.6848 10.987 42.363 8.66516 39.5091 8.66516Z" fill="#E08546"/>
        <path d="M30.6645 9.91606C30.319 9.91606 30.0391 9.63611 30.0391 9.29061V6.8685C30.0391 6.523 30.319 6.24304 30.6645 6.24304C31.01 6.24304 31.29 6.523 31.29 6.8685V9.29061C31.29 9.63603 31.01 9.91606 30.6645 9.91606Z" fill="#656D88"/>
        <path d="M18.7348 9.91606C18.3893 9.91606 18.1094 9.63611 18.1094 9.29061V6.8685C18.1094 6.523 18.3893 6.24304 18.7348 6.24304C19.0803 6.24304 19.3603 6.523 19.3603 6.8685V9.29061C19.3603 9.63603 19.0803 9.91606 18.7348 9.91606Z" fill="#656D88"/>
        <path d="M28.5806 1.48645H20.8207C18.6566 1.48645 16.9023 3.24074 16.9023 5.40482V6.61829C16.9023 6.98673 17.2011 7.28545 17.5695 7.28545H19.9009C20.2693 7.28545 20.568 6.98673 20.568 6.61829V5.40482C20.568 5.26522 20.6812 5.15214 20.8207 5.15214H28.5806C28.7202 5.15214 28.8333 5.2653 28.8333 5.40482V6.61829C28.8333 6.98673 29.132 7.28545 29.5005 7.28545H31.8319C32.2003 7.28545 32.499 6.98673 32.499 6.61829V5.40482C32.4991 3.24074 30.7447 1.48645 28.5806 1.48645Z" fill="#F29F5C"/>
        <path d="M40.5534 8.66516H8.84767C5.81712 8.66516 3.35156 11.1307 3.35156 14.1613V18.5346C3.35156 19.4782 3.95325 20.3179 4.84866 20.6239C10.3036 22.4886 17.3538 23.5156 24.7005 23.5156C32.0472 23.5156 39.0975 22.4887 44.5524 20.6239C45.4478 20.3179 46.0495 19.4782 46.0495 18.5346V14.1613C46.0495 11.1307 43.5839 8.66516 40.5534 8.66516Z" fill="#F9C295"/>
        <path d="M24.7025 23.5157C25.3971 23.5157 26.089 23.5065 26.7772 23.4883V9.28315C26.7772 9.02079 26.6368 8.79179 26.4275 8.66528H24.4786C24.2693 8.79179 24.1289 9.02079 24.1289 9.28315V23.5132C24.32 23.5147 24.511 23.5157 24.7025 23.5157Z" fill="#E59F6A"/>
        <path d="M40.5564 8.66516H39.1758C41.7593 9.09756 43.7425 11.4987 43.7425 14.3874V18.9961C43.7425 19.9905 43.1509 20.8754 42.2706 21.1978C41.7353 21.394 41.1838 21.581 40.6184 21.7593C42.0023 21.4251 43.3201 21.0462 44.5554 20.624C45.4508 20.3179 46.0525 19.4783 46.0525 18.5346V14.1614C46.0525 11.1307 43.5869 8.66516 40.5564 8.66516Z" fill="#E59F6A"/>
        <path d="M26.0233 37.4209H23.375V9.36648C23.375 8.96761 23.6983 8.64429 24.0972 8.64429H25.301C25.6999 8.64429 26.0232 8.96761 26.0232 9.36648L26.0233 37.4209Z" fill="#5C9CEE"/>
        <path d="M27.1862 21.9415C27.1862 20.5687 26.0733 19.4558 24.7005 19.4558C23.3277 19.4558 22.2148 20.5687 22.2148 21.9415C22.2148 22.9324 22.7962 23.7855 23.6351 24.1847V25.6073C23.6351 26.1957 24.1121 26.6727 24.7005 26.6727C25.2889 26.6727 25.7659 26.1957 25.7659 25.6073V24.1847C26.6048 23.7854 27.1862 22.9324 27.1862 21.9415Z" fill="#F2DF33"/>
        <path d="M44.7207 38.1863V49.6247C44.7207 50.4861 43.7775 51.0145 43.043 50.5656L38.3178 47.6793C37.9654 47.4641 37.5209 47.4641 37.1685 47.6793L32.4436 50.5656C31.7088 51.0145 30.7656 50.4857 30.7656 49.6247V38.1863H44.7207Z" fill="#F44545"/>
        <path d="M44.7207 38.1863V41.1965C44.7042 41.2101 44.6906 41.2229 44.6796 41.2343C44.6184 41.2981 44.548 41.4081 44.5564 41.5683L44.6305 43.0289C44.6763 43.9174 44.3697 44.7557 43.7695 45.3879C43.16 46.0292 42.3027 46.397 41.4171 46.397C40.5132 46.397 39.6756 46.0204 39.0581 45.3369L38.0779 44.2515C37.961 44.122 37.818 44.1022 37.7431 44.1022C37.6683 44.1022 37.5253 44.122 37.4084 44.2515L36.4282 45.3369C35.8107 46.0204 34.9731 46.397 34.0692 46.397C33.1836 46.397 32.3263 46.0299 31.7176 45.3886C31.1166 44.756 30.8104 43.9181 30.8558 43.0289L30.9303 41.5683C30.9383 41.4081 30.8679 41.2981 30.8071 41.2346C30.7961 41.2229 30.7821 41.2104 30.7656 41.1965V38.1863H44.7207Z" fill="#D63030"/>
        <path d="M46.5618 39.7956L45.1009 39.7216C44.0203 39.6658 43.1288 40.5573 43.1845 41.6379L43.259 43.0985C43.3466 44.815 41.2311 45.691 40.0801 44.4157L39.1003 43.3302C38.6016 42.778 37.8502 42.6053 37.1938 42.8121C36.8949 42.906 36.6155 43.0787 36.3893 43.3302L35.4091 44.4157C34.258 45.691 32.1425 44.815 32.2306 43.0985L32.305 41.6379C32.3604 40.5573 31.4689 39.6658 30.3883 39.7216L28.9277 39.7956C27.2116 39.8837 26.3355 37.7682 27.6105 36.6171L28.6963 35.6373C29.4998 34.912 29.4998 33.6516 28.6963 32.9259L27.6105 31.9461C26.3355 30.7947 27.2116 28.6796 28.9277 28.7668L30.3883 28.8417C31.4689 28.8967 32.3604 28.006 32.305 26.9249L32.2306 25.4647C32.1425 23.7486 34.258 22.8722 35.4091 24.1476L36.3893 25.2333C36.4806 25.3346 36.5807 25.4229 36.6867 25.4988C37.4237 26.0239 38.4662 25.9356 39.1003 25.2333L40.0801 24.1476C41.2311 22.8722 43.347 23.7486 43.259 25.4647L43.1845 26.9249C43.1288 28.006 44.0206 28.8967 45.1009 28.8417L46.5618 28.7668C48.278 28.6796 49.154 30.7947 47.8786 31.9461L46.7932 32.9259C45.9898 33.6516 45.9898 34.912 46.7932 35.6373L47.8786 36.6171C49.154 37.7682 48.278 39.8837 46.5618 39.7956Z" fill="#FFC14F"/>
        <path d="M46.56 39.7956L45.099 39.7215C44.0184 39.6658 43.1269 40.5572 43.1827 41.6379L43.2571 43.0985C43.3447 44.815 41.2293 45.691 40.0782 44.4156L39.0984 43.3302C38.5997 42.778 37.8483 42.6052 37.1919 42.8121C34.8535 40.5613 33.3984 37.3985 33.3984 33.8965C33.3984 30.6553 34.6445 27.7049 36.6848 25.4984C37.4218 26.0235 38.4644 25.9352 39.0984 25.2329L40.0782 24.1472C41.2293 22.8721 43.3451 23.7482 43.2571 25.4643L43.1827 26.9245C43.1269 28.0055 44.0187 28.8966 45.099 28.8416L46.56 28.7668C48.2761 28.6792 49.1521 30.7943 47.8768 31.9457L46.7913 32.9259C45.9879 33.6512 45.9879 34.9116 46.7913 35.6369L47.8768 36.6167C49.1521 37.7681 48.2761 39.8836 46.56 39.7956Z" fill="#FFCD71"/>
        <path d="M44.5363 34.2816C44.5363 37.7531 41.9321 40.6167 38.5698 41.023C38.2992 41.056 38.0242 41.0732 37.7447 41.0732C36.9255 41.0732 36.1397 40.928 35.4118 40.6625C32.8104 39.7106 30.9531 37.2126 30.9531 34.2816C30.9531 31.5812 32.5288 29.2498 34.8104 28.1548C35.6986 27.7283 36.6938 27.49 37.7447 27.49C38.0242 27.49 38.2992 27.5069 38.5698 27.5399C41.9317 27.9465 44.5363 30.8101 44.5363 34.2816Z" fill="#F29500"/>
        <path d="M44.5343 34.2816C44.5343 37.7531 41.93 40.6167 38.5678 41.023C38.2972 41.056 38.0221 41.0732 37.7427 41.0732C36.9235 41.0732 36.1377 40.928 35.4098 40.6625C34.1381 38.7179 33.3984 36.3938 33.3984 33.8966C33.3984 31.8244 33.9074 29.871 34.8084 28.1548C35.6965 27.7287 36.6917 27.49 37.7427 27.49C38.0221 27.49 38.2972 27.5069 38.5678 27.5399C41.9297 27.9465 44.5343 30.8101 44.5343 34.2816Z" fill="#FFA90B"/>
        <path d="M40.191 35.0615C40.0285 35.2265 39.9544 35.4643 39.993 35.6977L40.1558 36.6863L40.2116 37.0241C40.3084 37.6116 39.7158 38.06 39.2096 37.7825L38.0647 37.1561C37.8632 37.0455 37.6236 37.0455 37.4219 37.1561L36.2777 37.7825C35.7707 38.06 35.1789 37.6116 35.2752 37.0241L35.4943 35.6977C35.5325 35.4643 35.4583 35.2265 35.2955 35.0615L34.3693 34.1215C33.9598 33.7056 34.1855 32.9812 34.7525 32.895L36.0317 32.7014C36.0573 32.6975 36.0827 32.6925 36.1075 32.685C36.2999 32.6328 36.4624 32.4959 36.5515 32.3084L37.1244 31.1008C37.3773 30.5663 38.1092 30.5663 38.3625 31.1008L38.9353 32.3084C39.0357 32.5203 39.2302 32.6675 39.4551 32.7014L40.7348 32.895C41.3013 32.9812 41.5276 33.7056 41.1175 34.1215L40.191 35.0615Z" fill="#FFC14F"/>
        <path d="M41.1206 34.1134L40.2019 35.0513C40.0408 35.2159 39.9672 35.4531 40.0056 35.6859L40.167 36.6723C38.2806 36.1199 36.775 34.6128 36.1523 32.6804C36.3431 32.6283 36.5043 32.4916 36.5927 32.3046L37.1608 31.0999C37.4116 30.5666 38.1374 30.5666 38.3886 31.0999L38.9567 32.3046C39.0562 32.516 39.2491 32.6629 39.4721 32.6967L40.7412 32.8899C41.3029 32.9758 41.5273 33.6983 41.1206 34.1134Z" fill="#FFCD71"/>
      </svg>
    </div>
  );
}

function AudienceItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
      <AudienceIconWrapper>{icon}</AudienceIconWrapper>
      <div style={{ flex: 1 }}>
        <p style={{ ...fw600, fontSize: "18px", color: "#373837", lineHeight: 1.2, margin: "0 0 4px" }}>{title}</p>
        <p style={{ ...fw300, fontSize: "18px", color: "#535453", lineHeight: 1.4, margin: 0 }}>{description}</p>
      </div>
    </div>
  );
}

function CertificateForSection() {
  return (
    <div style={{ display: "flex", minHeight: "510px" }}>
      <div style={{ width: "50%", overflow: "hidden", flexShrink: 0 }}>
        <img
          src={imgApma1}
          alt="Certificate"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          width: "50%",
          backgroundColor: "#f6f6f6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "24px",
          padding: "64px",
        }}
      >
        <p style={{ ...fw400, fontSize: "28px", color: "#373837", lineHeight: 1.2, margin: 0 }}>
          Whose Certificate for?
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <AudienceItem
            icon={<GradCapSvg />}
            title="Senior Agile Practitioners"
            description="Senior agile practitioners and project leaders responsible for guiding agile adoption across teams, departments, or business units"
          />
          <AudienceItem
            icon={<LaptopSvg />}
            title="Program & Portfolio Leaders"
            description="Program managers, delivery directors, and portfolio leads seeking to formalize advanced agile governance and transformation competencies"
          />
          <AudienceItem
            icon={<BriefcaseSvg />}
            title="Change Leaders & Consultants"
            description="Organizational change leaders and consultants driving enterprise-wide agile maturity and continuous improvement strategies"
          />
          <AudienceItem
            icon={<BriefcaseSvg />}
            title="CIPM Certification Holders"
            description="CIPM-APMF or CIPM-APPC holders ready to advance to the highest level of THE CIPM's Agile certification pathway"
          />
        </div>
      </div>
    </div>
  );
}

function BalloonIllustration() {
  return (
    <div style={{ width: "203px", height: "284px", position: "relative", flexShrink: 0 }}>
      <div style={{ position: "absolute", bottom: "27px", left: "59px", width: "79px", height: "230px" }}>
        <svg viewBox="0 0 78.9545 229.608" style={{ width: "100%", height: "100%" }} fill="none">
          <path d={svgPaths.p134b3640} fill="#8B008B" />
          <path d={svgPaths.p3819bd00} fill="#A02EA0" />
          <path d={svgPaths.p21a02700} fill="#6B0070" />
          <path d={svgPaths.pdba7680} fill="#A02EA0" />
          <path d={svgPaths.p6c08a80} fill="#E5CCFF" />
        </svg>
      </div>
      <div style={{ position: "absolute", bottom: "31px", left: "106px", width: "79px", height: "167px" }}>
        <svg viewBox="0 0 79.0543 166.687" style={{ width: "100%", height: "100%" }} fill="none">
          <path d={svgPaths.p3b013400} fill="#8B008B" />
          <path d={svgPaths.p20200a00} fill="#A02EA0" />
          <path d={svgPaths.pa044540} fill="#6B0070" />
          <path d={svgPaths.p378881b0} fill="#A02EA0" />
          <path d={svgPaths.p14616a0} fill="#FBF9FD" />
          <path d={svgPaths.p24789d00} fill="#F9F4F4" />
          <path d={svgPaths.p351e9900} fill="#A02EA0" />
        </svg>
      </div>
    </div>
  );
}

function TopicItem({ number, text }: { number: string; text: string }) {
  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <div style={{ width: "14px", height: "24px", flexShrink: 0 }}>
        <svg viewBox="0 0 14 24" style={{ width: "100%", height: "100%" }} fill="none">
          <circle cx="7" cy="12" r="6" fill="white" stroke="#E5D1E8" strokeWidth="2" />
        </svg>
      </div>
      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
        <span style={{ ...fw600, fontSize: "18px", color: theme.primary, lineHeight: 1.2 }}>{number}.</span>
        <span style={{ ...fw400, fontSize: "18px", color: "#373837", lineHeight: 1.4 }}>{text}</span>
      </div>
    </div>
  );
}

function TopicsSection() {
  const topics = [
    { n: "1", t: "Enterprise agile governance and organizational change leadership." },
    { n: "2", t: "Cross-functional program coordination and agile maturity assessment." },
    { n: "3", t: "Executive stakeholder alignment and strategic decision-making." },
    { n: "4", t: "Governance structures enabling autonomy with accountability." },
    { n: "5", t: "Leading transformation initiatives in complex adaptive environments." },
  ];

  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ ...innerContainer, paddingTop: "56px", paddingBottom: "56px" }}>
        <div style={{ display: "flex", gap: "65px", alignItems: "center", minHeight: "438px" }}>
          <div style={{ width: "203px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={icoApma} alt="APMA Icon" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ ...fw600, fontSize: "28px", color: "#373837", lineHeight: 1.2, margin: "0 0 16px" }}>
              What are the main topics covered in this program?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: "7px",
                  top: "12px",
                  bottom: "12px",
                  width: "2px",
                  backgroundColor: "#E5D1E8",
                }}
              />
              {topics.map((t) => (
                <TopicItem key={t.n} number={t.n} text={t.t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ svgPath, text }: { svgPath: string; text: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", flex: 1 }}>
      <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
        <path d={svgPath} fill="#E5D1E8" />
      </svg>
      <p style={{ ...fw400, fontSize: "18px", color: theme.bg, lineHeight: 1.4, textAlign: "center", margin: 0 }}>
        {text}
      </p>
    </div>
  );
}

function FeaturesBanner() {
  return (
    <div style={{ backgroundColor: theme.primary, padding: "72px 0" }}>
      <div style={{ ...innerContainer }}>
        <div style={{ display: "flex", gap: "32px", justifyContent: "center", alignItems: "flex-start" }}>
          <FeatureItem svgPath={svgPaths.p1c37d80} text="Two years' experience preferred" />
          <FeatureItem svgPath={svgPaths.p160e0d00} text="Secure testing environment" />
          <FeatureItem svgPath={svgPaths.p3f3af100} text="24/7 online Access" />
        </div>
      </div>
    </div>
  );
}

function KnowMoreBtn() {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: theme.primary,
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        ...fw400,
        fontSize: "16px",
        lineHeight: 1.4,
        padding: "12px 24px",
        borderRadius: "12px",
      }}
    >
      Know more
      <IconArrowRight color={theme.primary} size={20} />
    </button>
  );
}

function InclusionCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "24px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "flex-end",
        flex: "0 0 calc(50% - 8px)",
      }}
    >
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
        {icon}
        <div>
          <p style={{ ...fw600, fontSize: "18px", color: "#373837", lineHeight: 1.2, margin: "0 0 4px" }}>
            {title}
          </p>
          <p style={{ ...fw300, fontSize: "18px", color: "#535453", lineHeight: 1.4, margin: 0 }}>
            {description}
          </p>
        </div>
      </div>
      <KnowMoreBtn />
    </div>
  );
}

function CertIcon42() {
  return (
    <div style={{ position: "relative", width: "42px", height: "42px", flexShrink: 0 }}>
      <div style={{ position: "absolute", inset: "8.33% 4.17% 2.08% 12.5%" }}>
        <svg viewBox="0 0 35 37.625" style={{ width: "100%", height: "100%" }} fill="none">
          <path d={svgPaths.p2fb74000} fill="#C77FD8" />
        </svg>
      </div>
    </div>
  );
}

function InclusionsSection() {
  return (
    <div style={{ backgroundColor: theme.bg, padding: "72px 0" }}>
      <div style={{ ...innerContainer }}>
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          <div
            style={{
              flex: "0 0 354px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "400px",
              paddingTop: "24px",
              paddingBottom: "24px",
            }}
          >
            <p style={{ ...fw600, fontSize: "28px", color: "#373837", lineHeight: 1.2, margin: 0 }}>
              What do the Program Inclusions?
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", flex: 1 }}>
            <InclusionCard
              icon={<CertIcon42 />}
              title="Digital Certificate:"
              description="Upon successfully passing the exam, receive an instant, verifiable digital certificate."
            />
            <InclusionCard
              icon={
                <svg width={42} height={42} viewBox="0 0 42 42" fill="none">
                  <path d={svgPaths.p35916c00} fill="#C77FD8" />
                </svg>
              }
              title="Comprehensive Learning Materials"
              description="24/7 access to high-quality online learning resources designed to support your success."
            />
            <InclusionCard
              icon={
                <svg width={42} height={42} viewBox="0 0 42 42" fill="none">
                  <path d={svgPaths.p2f377b00} fill="#C77FD8" />
                </svg>
              }
              title="Unlimited Mock & Practice Exams:"
              description="Go beyond instruction with access to a premium exam simulator offering unlimited attempts, allowing you to confidently master exam timing and question formats before the final assessment."
            />
            <InclusionCard
              icon={
                <svg width={42} height={42} viewBox="0 0 42 42" fill="none">
                  <path d={svgPaths.p1585ea00} fill="#C77FD8" />
                </svg>
              }
              title="Official Final Exam Fee Included:"
              description="Your enrollment includes the official online final exam at no additional cost."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StepIconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: theme.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

function CertSmallIcon() {
  return (
    <div style={{ position: "relative", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg viewBox="0 0 26.6667 28.6667" style={{ width: "100%", height: "100%" }} fill="none">
        <path d={svgPaths.p7f21900} fill={theme.primary} />
      </svg>
    </div>
  );
}

function EasyJoinSection() {
  const steps = [
    {
      icon: (
        <svg width={48} height={48} viewBox="0 0 32 32" fill="none">
          <path d={svgPaths.p1572fa80} fill={theme.primary} />
        </svg>
      ),
      title: "1. Create account",
      desc: "Sign up in minutes to access the learning platform",
    },
    {
      icon: (
        <svg width={48} height={48} viewBox="0 0 32 32" fill="none">
          <path d={svgPaths.p3ccf5900} fill={theme.primary} />
        </svg>
      ),
      title: "2. Register in one of Certificate",
      desc: "Choose the certification that matches your goals",
    },
    {
      icon: (
        <svg width={48} height={48} viewBox="0 0 32 32" fill="none">
          <path d={svgPaths.p27aee580} fill={theme.primary} />
        </svg>
      ),
      title: "3. Take training and mock exam",
      desc: "Complete the training by studying the educational materials and practicing with as many mock tests as you want.",
    },
    {
      icon: <CertSmallIcon />,
      title: "4. Pass final exam and Get Certified",
      desc: "Successfully pass the exam and receive your certification.",
    },
  ];

  return (
    <div style={{ backgroundColor: "white", padding: "72px 0" }}>
      <div style={{ ...innerContainer }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
          <p style={{ ...fw600, fontSize: "28px", color: "#373837", lineHeight: 1.2, margin: 0, textAlign: "center" }}>
            Easy join and apply
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              width: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "32px",
                right: "32px",
                top: "32px",
                height: "2px",
                backgroundImage:
                  `repeating-linear-gradient(to right, ${theme.bg} 0, ${theme.bg} 9px, transparent 9px, transparent 18px)`,
              }}
            />
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  width: "260px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <StepIconWrapper>{step.icon}</StepIconWrapper>
                <div>
                  <p style={{ ...fw600, fontSize: "18px", color: "#373837", lineHeight: 1.2, margin: "0 0 4px" }}>
                    {step.title}
                  </p>
                  <p style={{ ...fw300, fontSize: "18px", color: "#535453", lineHeight: 1.4, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CTABanner() {
  return (
    <div style={{ backgroundColor: theme.primary, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <svg
          viewBox="0 0 1448 1375"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: "absolute", width: "60%", height: "auto", minHeight: "300%" }}
        >
          <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p2c7ce900} fill="white" opacity="0.05" />
        </svg>
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "56px 246px", gap: "150px", isolation: "isolate", position: "relative" }}>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width={56} height={56} viewBox="0 0 43 42" fill="none">
              <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p129a1600} fill="white" opacity="0.9" />
            </svg>
          </div>
          <div>
            <p style={{ ...fw400, fontSize: "32px", color: "white", lineHeight: 1.2, margin: "0 0 4px" }}>
              Lead the Future of Work
            </p>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span style={{ ...fw300, fontSize: "16px", color: theme.bg, lineHeight: 1.4 }}>
                Join CIPM-APMA For only total Fee
              </span>
              <span style={{ ...fw600, fontSize: "18px", color: theme.bg, lineHeight: 1.2 }}>$350</span>
            </div>
          </div>
        </div>
        <button
          style={{
            backgroundColor: theme.bg,
            color: "#3F003F",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px 16px 16px 24px",
            borderRadius: "12px",
            height: "56px",
            ...fw400,
            fontSize: "18px",
            lineHeight: 1.4,
            border: "none",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          Register Now
          <IconArrowRight color="#3F003F" size={24} />
        </button>
      </div>
    </div>
  );
}

function OtherProgramsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const slides = [
    { logo: img06SmfcBadgeLogo, icon: icoApmf, code: 'CIPM-APMF', title: 'Agile Project Management Foundation', heading: 'Your Foundation in Agile Project Delivery', desc: 'Build a practical understanding of Agile principles, iterative delivery, and collaborative project practices.', route: '/cert-apmf' },
    { logo: img04SmacBadgeLogo, icon: icoApma, code: 'CIPM-APMA', title: 'Agile Project Management Advanced', heading: 'Your Path to Advanced Agile Leadership', desc: 'Strengthen your ability to lead enterprise agile adoption and drive organizational transformation.', route: '/cert-apma' },
    { logo: img05SmccBadgeLogo, icon: icoAppc, code: 'CIPM-APPC', title: 'Agile Project Practitioner Certificate', heading: 'Your Next Step in Agile Project Leadership', desc: 'Build the applied skills to lead Agile project teams with confidence and navigate complexity.', route: '/cert-appc' },
  ];

  const handleNext = () => setActiveIndex((p) => (p + 1) % slides.length);
  const handlePrev = () => setActiveIndex((p) => (p - 1 + slides.length) % slides.length);

  const slide = slides[activeIndex];

  function getBadgeStyle(index: number): React.CSSProperties {
    let offset = (index - activeIndex) % 3;
    if (offset < -1) offset += 3;
    if (offset > 1) offset -= 3;
    switch (offset) {
      case -1: return { transform: 'translateX(116px) translateY(168px)', width: '72px', height: '88px', opacity: 0.6, zIndex: 10 };
      case 0: return { transform: 'translateX(414px) translateY(87px)', width: '210px', height: '250px', opacity: 1, zIndex: 20, filter: 'drop-shadow(0px 0px 30px rgba(160,46,160,0.54))' };
      case 1: return { transform: 'translateX(1414px) translateY(168px)', width: '68px', height: '84px', opacity: 0.6, zIndex: 10 };
      default: return { transform: 'translateX(241px) translateY(173px)', width: '83px', height: '77px', opacity: 0.6, zIndex: 10 };
    }
  }

  return (
    <div style={{ backgroundColor: 'white', padding: '112px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1728px', margin: '0 auto', position: 'relative', height: '429px' }}>
        <div
          style={{
            position: 'absolute',
            left: '372px',
            top: '75px',
            width: '984px',
            height: '274px',
            backgroundColor: theme.bg,
            borderRadius: '137px',
            boxShadow: `3px 13px 30px 0px ${theme.shadow}`,
            transition: 'background-color 0.5s',
          }}
        />

        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, width: '936px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 30 }}>
          <p style={{ ...fw600, fontSize: '36px', color: '#272827', lineHeight: 1.2, margin: 0, whiteSpace: 'nowrap' }}>
            Other programs in the same category
          </p>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexShrink: 0 }}>
            <button onClick={handlePrev} style={{ cursor: 'pointer', display: 'flex', height: '32px', alignItems: 'center', justifyContent: 'center', padding: '16px', borderRadius: '56px', flexShrink: 0, border: 'none', background: 'transparent' }}>
              <svg width={24} height={24} fill="none" viewBox="0 0 24 24"><path d={svgPathsSlider.p357c6700} fill="#666766" /></svg>
            </button>
            <button onClick={handleNext} style={{ cursor: 'pointer', display: 'flex', height: '32px', alignItems: 'center', justifyContent: 'center', padding: '16px', borderRadius: '56px', flexShrink: 0, border: 'none', background: 'transparent' }}>
              <svg width={24} height={24} fill="none" viewBox="0 0 24 24"><path d={svgPathsSlider.p32c88600} fill="#666766" /></svg>
            </button>
          </div>
        </div>

        {slides.map((s, i) => (
          <div key={i} style={{ position: 'absolute', left: 0, top: 0, transition: 'all 0.5s ease-in-out', ...getBadgeStyle(i) }}>
            <img alt={s.code} src={s.logo} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          </div>
        ))}

        <div style={{ position: 'absolute', left: 0, top: '155px', width: '372px', height: '114px', background: 'linear-gradient(to right, white, transparent)', pointerEvents: 'none', zIndex: 30 }} />
        <div style={{ position: 'absolute', left: '1356px', top: '155px', width: '372px', height: '114px', background: 'linear-gradient(to left, white, transparent)', pointerEvents: 'none', zIndex: 30 }} />

        <div style={{ position: 'absolute', left: '656px', top: '87px', width: '652px', height: '250px', display: 'flex', gap: '24px', alignItems: 'center', zIndex: 30 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-end', paddingRight: '16px', width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-start', width: '100%', whiteSpace: 'nowrap' }}>
                <p style={{ ...fw600, fontSize: '36px', color: theme.primary, lineHeight: 1.2, margin: 0, transition: 'color 0.5s' }}>
                  {slide.code}
                </p>
                <p style={{ ...fw300, fontSize: '18px', color: '#373837', lineHeight: 1.4, margin: 0 }}>
                  {slide.title}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-start', width: '100%' }}>
                <p style={{ ...fw400, fontSize: '20px', color: theme.headingColor, lineHeight: 1.2, margin: 0, minHeight: '48px', minWidth: '100%' }}>
                  {slide.heading}
                </p>
                <p style={{ ...fw300, fontSize: '16px', color: theme.primary, lineHeight: 1.4, margin: 0, width: '429px', minHeight: '44px', whiteSpace: 'normal', transition: 'color 0.5s' }}>
                  {slide.desc}
                </p>
              </div>
            </div>
          </div>
          <img src={slide.icon} alt="" style={{ width: '120px', flexShrink: 0, opacity: 0.9 }} />
        </div>

        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '373px', width: '790px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 30 }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  position: 'relative',
                  flexShrink: 0,
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  border: 'none',
                  padding: 0,
                  width: activeIndex === i ? '94px' : '12px',
                  height: '12px',
                  borderRadius: '24px',
                  backgroundColor: activeIndex !== i ? theme.bg : 'transparent',
                }}
              >
                {activeIndex === i && (
                  <>
                    <div style={{ position: 'absolute', inset: 0, borderRadius: '24px', backgroundColor: theme.bg, transition: 'background-color 0.5s' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, top: 0, width: '35px', borderRadius: '24px', backgroundColor: '#C77FD8', transition: 'all 0.5s' }} />
                  </>
                )}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexShrink: 0 }}>
            <button onClick={() => navigate('/all-certifications')} style={{ display: 'flex', gap: '8px', height: '44px', alignItems: 'center', justifyContent: 'center', padding: '12px 16px', borderRadius: '16px', cursor: 'pointer', border: 'none', background: 'transparent' }}>
              <span style={{ ...fw400, fontSize: '16px', color: theme.darkPrimary, lineHeight: 1.4, whiteSpace: 'nowrap' }}>
                Explore all Certifications
              </span>
            </button>
            <button onClick={() => navigate(slide.route)} style={{ display: 'flex', gap: '12px', height: '56px', alignItems: 'center', justifyContent: 'center', padding: '16px 24px 16px 24px', borderRadius: '16px', cursor: 'pointer', border: 'none', backgroundColor: theme.learnMoreBg }}>
              <span style={{ ...fw400, fontSize: '18px', color: 'white', lineHeight: 1.4, whiteSpace: 'nowrap' }}>Learn more</span>
              <svg width={24} height={24} fill="none" viewBox="0 0 24 24"><path d={svgPathsSlider.p3cb1b80} fill="white" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CertAPMAPage() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "white" }}>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, width: '100%' }}>
        <Navbar />
      </div>
      <div style={{ marginTop: '99px' }}>
        <HeroSection />
        <OverviewSection />
        <CertificateForSection />
        <TopicsSection />
        <FeaturesBanner />
        <InclusionsSection />
        <EasyJoinSection />
        <CTABanner />
        <OtherProgramsSlider />
      </div>
      <div id="site-footer" style={{ backgroundColor: 'rgba(39,40,39,1)' }}>
        <Footer />
      </div>
    </div>
  );
}
