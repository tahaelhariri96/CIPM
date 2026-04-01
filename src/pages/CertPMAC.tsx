import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import svgPaths from "../imports/svg-2m43jtwopl";
import svgPathsSlider from "../imports/svg-pt8brrterb";
import img03PmfcBadgeLogo from "../assets/03. PMFC Badge Logo.svg";
import imgCipmPmfc1 from "../assets/CIPM-PMFC-1.svg";
import img01PmacBadgeLogo from "../assets/01. PMAC Badge Logo 2.svg";
import imgCipmPmac1 from "../assets/CIPM-PMAC1.svg";
import img02PmccBadgeLogo from "../assets/02. PMCC Badge Logo 1.svg";
import icoPmfc from '../assets/PMFC ICO.svg';
import icoPmcc from '../assets/PMCC ICO.svg';
import icoPmac from '../assets/PMAC ICO.svg';

const poppins = { fontFamily: "'Poppins', sans-serif" } as const;
const fw300 = { ...poppins, fontWeight: 300 } as const;
const fw400 = { ...poppins, fontWeight: 400 } as const;
const fw600 = { ...poppins, fontWeight: 600 } as const;

const innerContainer: React.CSSProperties = {
  maxWidth: "1236px",
  margin: "0 auto",
  padding: "0 24px",
};

const theme = { 
  bg: '#EDE6F3', 
  primary: '#6B2E99', 
  shadow: 'rgba(86,8,143,0.21)', 
  headingColor: '#22003A', 
  learnMoreBg: '#4B0082',
  darkPrimary: '#40006F',
  buttonBg: '#4b0082'
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
          fill="#4B0082"
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
          backgroundColor: "#d4c2e1",
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
          filter: "drop-shadow(0px 0px 30px rgba(104,23,163,0.54))",
        }}
      >
        <img
          src={img01PmacBadgeLogo}
          alt="CIPM-PMAC Badge"
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
            CIPM-PMAC
          </p>
          <p style={{ ...fw400, fontSize: "20px", color: "#535453", lineHeight: 1.2, margin: 0 }}>
            Project Management Advanced Certificate
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p style={{ ...fw400, fontSize: "24px", color: theme.headingColor, lineHeight: 1.2, margin: 0 }}>
            Your Path to Advanced Project Leadership
          </p>
          <p style={{ ...fw300, fontSize: "18px", color: theme.primary, lineHeight: 1.4, margin: 0 }}>
            Elevate your project delivery expertise with an advanced, practice-driven certification designed for experienced professionals leading complex initiatives.
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
          <span style={{ ...fw600, fontSize: "18px", color: theme.primary, lineHeight: 1.2 }}>$380</span>
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
    { label: "Time Limit", value: "180 Minutes", bg: theme.bg, pt: "12px", pb: "12px" },
    { label: "Estimated Effort", value: "80 Hours", bg: "white", pt: "12px", pb: "12px" },
    { label: "Length", value: "120 Multiple Choice Questions.", bg: theme.bg, pt: "12px", pb: "16px" },
  ];
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "24px",
        overflow: "hidden",
        border: "3px solid #d4c2e1",
        boxShadow: "5px 5px 30px 0px rgba(55,8,90,0.32)",
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
  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ ...innerContainer, paddingTop: "56px", paddingBottom: "56px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "40px" }}>
          <div style={{ flex: 1, maxWidth: "798px" }}>
            <p style={{ ...fw600, fontSize: "28px", color: "#373837", lineHeight: 1.2, margin: "0 0 8px" }}>
              Overview:
            </p>
            <p style={{ ...fw300, fontSize: "18px", color: "#535453", lineHeight: 1.4, margin: 0 }}>
              The CIPM-PMAC (Project Management Advanced Certificate) is an advanced-level credential designed for professionals ready to lead projects with greater complexity, responsibility, and stakeholder impact. Built for individuals with established project management knowledge, this program deepens capability in governance, execution control, and delivery leadership. The CIPM-PMAC strengthens practical decision-making skills that employers expect from high-performing project leaders—validating advanced competence, enhancing professional credibility, and demonstrating readiness for senior delivery roles across industries.
            </p>
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
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
      <path d="M0 38C0 17.0132 17.0132 0 38 0C58.9868 0 76 17.0132 76 38C76 58.9868 58.9868 76 38 76C17.0132 76 0 58.9868 0 38Z" fill="white"/>
      <path d="M30.1797 51.1008C30.239 51.1923 30.3817 52.1762 30.3817 52.1762L36.6017 58.871C37.3558 59.6826 38.6406 59.6826 39.3947 58.871L45.6147 52.1762L45.8167 51.1008L40.5193 29.4471L37.9982 27.8167L35.477 29.4471L30.1797 51.1008Z" fill="#FF4755"/>
      <path d="M38.3329 22.8071C38.1496 22.6198 37.848 22.6198 37.6646 22.8071L33.8398 27.5307L35.4776 29.4471H37.9988H40.52L42.1577 27.5307L38.3329 22.8071Z" fill="#EA2F4A"/>
      <path d="M38.3327 23.6224L42.1574 27.5308L42.9736 26.5758L37.9985 19.8615L33.0234 26.5758L33.8396 27.5308L37.6644 23.6224C37.8477 23.4351 38.1493 23.4351 38.3327 23.6224Z" fill="#E02247"/>
      <path d="M45.8158 51.1009C45.7565 51.1924 45.6894 51.2797 45.6138 51.361L39.3938 58.0558C38.6397 58.8675 37.355 58.8675 36.6008 58.0558L30.3808 51.361C30.3052 51.2797 30.2381 51.1924 30.1788 51.1009L29.9257 52.1353C29.7734 52.7582 29.9444 53.4159 30.3808 53.8858L36.6008 60.5806C37.355 61.3922 38.6397 61.3922 39.3938 60.5806L45.6138 53.8858C46.0503 53.416 46.2213 52.7582 46.0689 52.1353L45.8158 51.1009Z" fill="#FC2B3A"/>
      <path d="M44.8524 26.8103L49.5257 19.3273C49.6046 19.2009 49.6186 19.0444 49.5633 18.906L47.9254 14.8108L42.7844 17.4562L38 21.492L43.3629 26.972C43.7946 27.4132 44.5254 27.3339 44.8524 26.8103Z" fill="#ECDAEC"/>
      <path d="M31.1466 26.8103L26.4733 19.3273C26.3944 19.2009 26.3805 19.0444 26.4357 18.906L28.0736 14.8108L33.2147 17.4562L37.9991 21.492L32.6362 26.972C32.2045 27.4132 31.4737 27.3339 31.1466 26.8103Z" fill="#ECDAEC"/>
      <path d="M45.4244 14.8108H30.5742L37.9993 20.6242L45.4244 14.8108Z" fill="#E2CBE2"/>
      <path d="M37.9996 19.809L30.5746 14.8108H28.0742L37.9996 21.492L47.9251 14.8108H45.4247L37.9996 19.809Z" fill="#DAB9D8"/>
    </svg>
  );
}

function LaptopSvg() {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
      <path d="M0 38C0 17.0132 17.0132 0 38 0C58.9868 0 76 17.0132 76 38C76 58.9868 58.9868 76 38 76C17.0132 76 0 58.9868 0 38Z" fill="white"/>
      <path d="M31.6175 21.2186C31.9382 20.6029 32.1117 19.8981 32.0834 19.1492C32.0026 17.0136 30.2456 15.2507 28.1103 15.1656C25.7435 15.0712 23.7951 16.9619 23.7951 19.3078C23.7951 19.9974 23.966 20.6464 24.264 21.2186H18.3613C17.7583 21.2186 17.2695 21.7076 17.2695 22.3104V28.213C17.8853 27.8923 18.5901 27.7188 19.339 27.7471C21.4745 27.8279 23.2374 29.5849 23.3226 31.7202C23.417 34.087 21.5262 36.0354 19.1804 36.0354C18.4908 36.0354 17.8418 35.8645 17.2695 35.5665V41.4692C17.2695 42.0722 17.7585 42.561 18.3613 42.561H37.5201C38.1231 42.561 38.6119 42.072 38.6119 41.4692V22.3104C38.6119 21.7074 38.1229 21.2186 37.5201 21.2186H31.6175Z" fill="#FF4755"/>
      <path d="M37.5203 21.2187H34.3363V37.1935C34.3363 37.7965 33.8474 38.2853 33.2443 38.2853H17.2695V41.4695C17.2695 42.0725 17.7585 42.5612 18.3613 42.5612H37.5201C38.1231 42.5612 38.6119 42.0725 38.6119 41.4695V22.3105C38.6123 21.7074 38.1233 21.2187 37.5203 21.2187Z" fill="#EF202F"/>
      <path d="M38.0921 55.0239C37.7714 55.6396 37.5978 56.3444 37.6261 57.0934C37.707 59.2289 39.4639 60.9918 41.5993 61.0769C43.966 61.1713 45.9144 59.2806 45.9144 56.9347C45.9144 56.2451 45.7435 55.5961 45.4456 55.0239H51.3482C51.9513 55.0239 52.4402 54.5349 52.4402 53.9321V48.0293C53.056 48.35 53.7608 48.5235 54.5097 48.4952C56.6452 48.4144 58.4081 46.6574 58.4933 44.5221C58.5877 42.1553 56.6969 40.2069 54.3511 40.2069C53.6612 40.2069 53.0125 40.3778 52.4402 40.6758V34.7731C52.4402 34.1701 51.9513 33.6813 51.3482 33.6813H32.1894C31.5864 33.6813 31.0977 34.1703 31.0977 34.7731V53.9319C31.0977 54.5349 31.5866 55.0237 32.1894 55.0237H38.0921V55.0239Z" fill="#FFE177"/>
      <path d="M54.3947 40.209C54.3955 40.2809 54.4002 40.3519 54.3971 40.4245C54.312 42.5598 52.5489 44.3168 50.4135 44.3976C50.4062 44.3978 50.3986 44.3982 50.3912 44.3984C49.2584 44.4354 48.3441 45.3287 48.3441 46.4619V49.8343C48.3441 50.4373 47.8551 50.9261 47.2523 50.9261H43.6508C42.6158 50.9261 41.8136 51.7813 41.8185 52.8162V52.8369C41.8185 55.1413 39.9372 57.0021 37.6273 56.9777C37.6264 56.9785 37.626 56.9789 37.625 56.98C37.6467 59.166 39.4279 60.9902 41.6008 61.0768C43.9676 61.1712 45.916 59.2805 45.916 56.9344C45.916 56.2448 45.7451 55.5958 45.4471 55.0236H51.3498C51.9528 55.0236 52.4416 54.5348 52.4416 53.9318V48.0293C53.2011 48.4249 54.0961 48.5967 55.042 48.4415C56.8567 48.1442 58.2798 46.6345 58.4739 44.8059C58.7371 42.3275 56.8138 40.2335 54.3947 40.209Z" fill="#FFD15B"/>
    </svg>
  );
}

function BriefcaseSvg() {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
      <path d="M0 38C0 17.0132 17.0132 0 38 0C58.9868 0 76 17.0132 76 38C76 58.9868 58.9868 76 38 76C17.0132 76 0 58.9868 0 38Z" fill="white"/>
      <path d="M58.4844 39.0266C59.027 39.0266 59.4668 38.5869 59.4668 38.0443C59.4668 37.5018 59.027 37.062 58.4844 37.062H51.9102V24.5417C51.9102 24.3619 52.0565 24.2156 52.2364 24.2156H58.4844C59.027 24.2156 59.4668 23.7758 59.4668 23.2332C59.4668 22.6907 59.027 22.2509 58.4844 22.2509H52.2364C50.9733 22.2509 49.9457 23.2785 49.9457 24.5417V37.062H41.955C41.4124 37.062 40.9727 37.5018 40.9727 38.0443C40.9727 38.5869 41.4124 39.0266 41.955 39.0266H49.9457V51.5472C49.9457 52.8103 50.9733 53.8379 52.2364 53.8379H58.4844C59.027 53.8379 59.4668 53.3982 59.4668 52.8556C59.4668 52.3131 59.027 51.8733 58.4844 51.8733H52.2364C52.0567 51.8733 51.9102 51.727 51.9102 51.5471V39.0265H58.4844V39.0266Z" fill="#2EABFF"/>
      <path d="M54.4141 51.6768C54.4141 54.2952 56.1925 55.1435 57.7138 55.1435C59.2351 55.1435 61.0135 53.838 61.0135 51.6768C60.5294 50.3218 59.2351 49.3521 57.7138 49.3521C56.1925 49.3519 54.8981 50.3218 54.4141 51.6768Z" fill="#FF4755"/>
      <path d="M45.6724 36.0953L42.9646 35.6882C42.6352 33.9323 41.945 32.3039 40.9733 30.8827L42.6007 28.6794C42.8855 28.2938 42.8454 27.7577 42.5064 27.4186L41.1049 26.0172C40.7658 25.6782 40.2299 25.6381 39.8442 25.923L37.6408 27.5504C36.2197 26.5786 34.5912 25.8883 32.8353 25.559L32.4282 22.8511C32.3569 22.3769 31.9496 22.0262 31.4701 22.0262H29.4881C29.0086 22.0262 28.6013 22.3769 28.53 22.8511L28.1229 25.559C26.367 25.8884 24.7385 26.5787 23.3174 27.5504L21.1142 25.923C20.7285 25.6381 20.1925 25.6782 19.8535 26.0172L18.4518 27.4188C18.1128 27.7578 18.0727 28.2939 18.3575 28.6795L19.9849 30.8828C19.0131 32.3039 18.3229 33.9324 17.9936 35.6884L15.2858 36.0954C14.8116 36.1667 14.4609 36.574 14.4609 37.0535V39.0357C14.4609 39.5152 14.8116 39.9225 15.2858 39.9938L17.9936 40.4008C18.323 42.1567 19.0132 43.7852 19.9849 45.2064L18.3575 47.4097C18.0727 47.7954 18.1128 48.3314 18.4518 48.6704L19.8535 50.0721C20.1925 50.4111 20.7285 50.4512 21.1142 50.1664L23.3174 48.539C24.7385 49.5106 26.367 50.2009 28.1229 50.5303L28.53 53.2381C28.6013 53.7122 29.0086 54.0629 29.4881 54.0629H31.4702C31.9497 54.0629 32.357 53.7122 32.4283 53.2381L32.8354 50.5303C34.5913 50.2009 36.2197 49.5106 37.641 48.539L39.8443 50.1664C40.23 50.4512 40.766 50.4111 41.105 50.0721L42.5067 48.6704C42.8457 48.3314 42.8858 47.7954 42.6009 47.4097L40.9735 45.2064C41.9452 43.7853 42.6355 42.1567 42.9648 40.4008L45.6727 39.9938C46.1468 39.9225 46.4975 39.5152 46.4975 39.0357V37.0535C46.4973 36.5739 46.1466 36.1666 45.6724 36.0953ZM36.7406 40.4263C36.7406 42.4233 34.0201 45.5755 30.479 45.5755C26.9381 45.5755 24.3054 42.2209 24.3054 40.3754L24.1775 39.2233C24.1065 38.841 24.0675 38.4474 24.0675 38.0446C24.0675 34.5037 26.938 31.6331 30.4789 31.6331C34.0198 31.6331 36.8904 34.5035 36.8904 38.0446C36.8904 38.4474 36.8515 38.841 36.7804 39.2233L36.7406 40.4263Z" fill="#F29F5C"/>
      <path d="M36.8892 40.402C36.8892 39.9992 36.8503 39.6056 36.7792 39.2233C36.2256 42.2008 33.6159 44.4559 30.4778 44.4559C27.3397 44.4559 24.73 42.2008 24.1764 39.2233C24.1054 39.6056 24.0664 39.9992 24.0664 40.402C24.0664 43.9429 26.9369 46.8135 30.4778 46.8135C34.0187 46.8134 36.8892 43.9429 36.8892 40.402Z" fill="#E87417"/>
      <path d="M57.7146 54.0016C56.1932 54.0016 54.8989 53.0319 54.4148 51.6769C54.2831 52.0453 54.2109 52.442 54.2109 52.8556C54.2109 54.7906 55.7795 56.3591 57.7144 56.3591C59.6494 56.3591 61.2179 54.7906 61.2179 52.8556C61.2179 52.442 61.1457 52.0452 61.014 51.6769C60.5301 53.0317 59.2358 54.0016 57.7146 54.0016Z" fill="#FC2B3A"/>
      <path d="M54.4141 36.8656C54.4141 39.484 56.1925 40.3323 57.7138 40.3323C59.2351 40.3323 61.0135 39.0268 61.0135 36.8656C60.5294 35.5107 59.2351 34.5409 57.7138 34.5409C56.1925 34.5409 54.8981 35.5107 54.4141 36.8656Z" fill="#FF4755"/>
      <path d="M57.7146 39.1905C56.1932 39.1905 54.8989 38.2207 54.4148 36.8657C54.2831 37.2342 54.2109 37.6308 54.2109 38.0445C54.2109 39.9794 55.7795 41.5481 57.7144 41.5481C59.6494 41.5481 61.2179 39.9794 61.2179 38.0445C61.2179 37.6308 61.1457 37.2341 61.014 36.8657C60.5301 38.2206 59.2358 39.1905 57.7146 39.1905Z" fill="#FC2B3A"/>
      <path d="M54.4141 22.0545C54.4141 24.6728 56.1925 25.5212 57.7138 25.5212C59.2351 25.5212 61.0135 24.2157 61.0135 22.0545C60.5293 20.6995 59.235 19.7297 57.7138 19.7297C56.1925 19.7297 54.8981 20.6995 54.4141 22.0545Z" fill="#FF4755"/>
      <path d="M57.7146 24.3792C56.1932 24.3792 54.8989 23.4094 54.4148 22.0544C54.2831 22.4229 54.2109 22.8195 54.2109 23.2332C54.2109 25.1682 55.7795 26.7368 57.7144 26.7368C59.6494 26.7368 61.2179 25.1682 61.2179 23.2332C61.2179 22.8195 61.1457 22.4229 61.014 22.0544C60.5301 23.4094 59.2358 24.3792 57.7146 24.3792Z" fill="#FC2B3A"/>
    </svg>
  );
}

function Icon4Svg() {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
      <path d="M0 38C0 17.0132 17.0132 0 38 0C58.9868 0 76 17.0132 76 38C76 58.9868 58.9868 76 38 76C17.0132 76 0 58.9868 0 38Z" fill="white"/>
      <path d="M36.655 42.9432L32.156 38.4442L18.0361 52.5643C16.5453 54.0551 16.5453 56.4722 18.0361 57.963C19.0299 58.9568 21.0442 58.554 22.535 57.0633L36.655 42.9432ZM19.8356 56.1634C19.3387 55.6664 19.3387 54.8607 19.8356 54.3638C20.3326 53.8668 21.1383 53.8668 21.6352 54.3638C22.1322 54.8608 22.1322 55.6665 21.6352 56.1634C21.1383 56.6603 20.3326 56.6603 19.8356 56.1634Z" fill="#C5C6CE"/>
      <path d="M36.6276 42.9198L33.9547 40.2468L22.9398 51.2617C22.6755 51.526 22.7014 51.9671 23.0022 52.1893C23.1522 52.3001 23.2959 52.4235 23.4318 52.5592C23.5709 52.6983 23.6969 52.8457 23.8098 52.9996C24.0312 53.3012 24.4734 53.3271 24.738 53.0625L36.6276 42.9198Z" fill="#DEDEDE"/>
      <path d="M35.7542 42.0435L21.6343 56.1634C20.1435 57.6542 18.5321 58.4599 18.0352 57.963C19.526 59.4538 21.9431 59.4538 23.4339 57.963L37.5538 43.843L35.7542 42.0435Z" fill="#AAACBC"/>
      <path d="M34.8516 41.1434L38.4502 37.5448L41.1492 40.2438L37.5505 43.8424L34.8516 41.1434Z" fill="#EE7B7B"/>
      <path d="M32.1523 38.4441L35.751 34.8455L39.3496 38.4441L35.751 42.0427L32.1523 38.4441Z" fill="#EF202F"/>
      <path d="M50.05 31.3475L43.3523 34.446L40.2539 41.1436L42.9533 43.843L52.7494 34.0469L50.05 31.3475Z" fill="#EF202F"/>
      <path d="M32.1523 33.0464L41.9469 23.2518L50.0439 31.3487L40.2493 41.1433L32.1523 33.0464Z" fill="#FF4755"/>
      <path d="M53.9903 53.9911H51.4453L55.8756 59.0811H58.4205C58.7904 59.0811 59.0835 58.7573 59.0338 58.3908C58.697 55.9062 56.5673 53.9911 53.9903 53.9911Z" fill="#EF202F"/>
      <path d="M51.4457 53.9911H36.2131C33.6361 53.9911 31.5065 55.9062 31.1696 58.3908C31.1198 58.7573 31.413 59.0811 31.7829 59.0811H55.8759C56.2459 59.0811 56.5389 58.7573 56.4893 58.3908C56.1524 55.9062 54.0227 53.9911 51.4457 53.9911Z" fill="#FF4755"/>
      <path d="M43.852 41.1438L42.0524 42.9433C41.5554 43.4403 41.5554 44.246 42.0524 44.7429C42.5494 45.2399 43.3551 45.2399 43.852 44.7429L46.5513 43.8431L43.852 41.1438Z" fill="#FF4755"/>
      <path d="M53.6492 34.9468C54.1462 34.4498 54.1462 33.6442 53.6492 33.1473C53.1523 32.6503 52.3466 32.6503 51.8497 33.1473L43.8532 41.1437C43.3562 41.6407 43.3562 42.4464 43.8532 42.9433C44.3502 43.4403 45.1559 43.4403 45.6527 42.9433L46.5526 43.8431L53.6492 34.9468Z" fill="#FB8B93"/>
      <path d="M34.8546 32.1458L33.0551 33.9453C32.5581 34.4423 31.7524 34.4423 31.2555 33.9453C30.7586 33.4484 30.7586 32.6427 31.2555 32.1458L32.1554 29.4464L34.8546 32.1458Z" fill="#FB8B93"/>
      <path d="M41.0525 22.3497C41.5495 21.8527 42.3552 21.8527 42.8521 22.3497C43.3491 22.8466 43.3491 23.6523 42.8521 24.1492L34.8556 32.1457C34.3586 32.6427 33.553 32.6427 33.0561 32.1457C32.5591 31.6487 32.5591 30.843 33.0561 30.3461L32.1562 29.4463L41.0525 22.3497Z" fill="#F8E5E6"/>
      <path d="M38.4546 42.9433L36.655 41.1438L34.8555 42.9433L36.655 44.7429C37.152 45.2399 37.9577 45.2399 38.4546 44.7429C38.9515 44.246 38.9515 43.4402 38.4546 42.9433Z" fill="#FB8B93"/>
      <path d="M36.6543 42.9432C37.1512 42.4462 37.1512 41.6406 36.6543 41.1437L33.0551 37.5445C32.5581 37.0475 31.7524 37.0475 31.2555 37.5445C30.7586 38.0415 30.7586 38.8471 31.2555 39.344L34.8547 42.9432C35.3517 43.4401 36.1574 43.4402 36.6543 42.9432Z" fill="#F8E5E6"/>
      <path d="M41.051 17.8507C39.8087 16.6083 37.7944 16.6083 36.552 17.8507L26.756 27.6468C25.5136 28.8892 25.5136 30.9035 26.756 32.1458C27.9984 33.3882 30.0126 33.3882 31.255 32.1458L41.051 22.3497C42.2934 21.1073 42.2934 19.0931 41.051 17.8507Z" fill="#EF202F"/>
      <path d="M58.1466 34.9469L43.8516 49.2419C45.0939 50.4843 47.1082 50.4843 48.3506 49.2419L58.1467 39.4458C59.389 38.2035 59.389 36.1893 58.1466 34.9469Z" fill="#EE7B7B"/>
      <path d="M58.1488 34.9468C56.9064 33.7044 54.8922 33.7044 53.6498 34.9468L43.8537 44.7428C42.6113 45.9852 42.6113 47.9995 43.8537 49.2418C44.1021 49.4903 45.3106 48.6846 46.553 47.4423L56.3491 37.6462C57.5915 36.4038 58.3972 35.1952 58.1488 34.9468Z" fill="#EF202F"/>
    </svg>
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
          src={imgCipmPmac1}
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
            title="Experienced Project Professionals"
            description="Experienced project professionals seeking advanced capability"
          />
          <AudienceItem
            icon={<LaptopSvg />}
            title="Complex Initiatives"
            description="Project managers leading medium-to-complex initiatives"
          />
          <AudienceItem
            icon={<BriefcaseSvg />}
            title="Senior Coordinators & Team Leads Transitioning to PM"
            description="Senior coordinators/team leads moving into full PM accountability"
          />
          <AudienceItem
            icon={<Icon4Svg />}
            title="Delivery & Governance Leaders"
            description="Professionals responsible for delivery governance, cross-functional execution, and stakeholder leadership"
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
          <path d={svgPaths.p134b3640} fill="#662C91" />
          <path d={svgPaths.p3819bd00} fill="#6906B1" />
          <path d={svgPaths.p21a02700} fill="#460774" />
          <path d={svgPaths.pdba7680} fill="#6906B1" />
          <path d={svgPaths.p6c08a80} fill="#D6AFF0" />
        </svg>
      </div>
      <div style={{ position: "absolute", bottom: "31px", left: "106px", width: "79px", height: "167px" }}>
        <svg viewBox="0 0 79.0543 166.687" style={{ width: "100%", height: "100%" }} fill="none">
          <path d={svgPaths.p3b013400} fill="#662C91" />
          <path d={svgPaths.p20200a00} fill="#6906B1" />
          <path d={svgPaths.pa044540} fill="#460774" />
          <path d={svgPaths.p378881b0} fill="#6906B1" />
          <path d={svgPaths.p14616a0} fill="#FBF9FD" />
          <path d={svgPaths.p24789d00} fill="#F9F4F4" />
          <path d={svgPaths.p351e9900} fill="#6906B1" />
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
          <circle cx="7" cy="12" r="6" fill="white" stroke="#D4C2E1" strokeWidth="2" />
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
    { n: "1", t: "Advanced project planning and governance frameworks" },
    { n: "2", t: "Execution control and lifecycle management disciplines." },
    { n: "3", t: "Risk navigation and decision-making under ambiguity." },
    { n: "4", t: "Strategic alignment of project delivery to business objectives." },
    { n: "5", t: "Leadership coordination and stakeholder management at scale." },
  ];

  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ ...innerContainer, paddingTop: "56px", paddingBottom: "56px" }}>
        <div style={{ display: "flex", gap: "65px", alignItems: "center", minHeight: "438px" }}>
          <div style={{ width: "203px", height: "284px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <img src={icoPmac} alt="PMAC Icon" style={{ width: "180px", height: "auto", objectFit: "contain" }} />
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
                  backgroundColor: "#B291C9",
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
        <path d={svgPath} fill="#D4C2E1" />
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
          <FeatureItem svgPath={svgPaths.p1c37d80} text="2 years' experience preferred" />
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
          <path d={svgPaths.p2fb74000} fill="#8E5EB0" />
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
                  <path d={svgPaths.p35916c00} fill="#8E5EB0" />
                </svg>
              }
              title="Comprehensive Learning Materials"
              description="24/7 access to high-quality online learning resources designed to support your success."
            />
            <InclusionCard
              icon={
                <svg width={42} height={42} viewBox="0 0 42 42" fill="none">
                  <path d={svgPaths.p2f377b00} fill="#8E5EB0" />
                </svg>
              }
              title="Unlimited Mock & Practice Exams:"
              description="Go beyond instruction with access to a premium exam simulator offering unlimited attempts, allowing you to confidently master exam timing and question formats before the final assessment."
            />
            <InclusionCard
              icon={
                <svg width={42} height={42} viewBox="0 0 42 42" fill="none">
                  <path d={svgPaths.p1585ea00} fill="#8E5EB0" />
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
          <svg width={43} height={42} viewBox="0 0 43 42" fill="none">
            <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p129a1600} fill="white" opacity="0.9" />
          </svg>
          <div>
            <p style={{ ...fw400, fontSize: "32px", color: "white", lineHeight: 1.2, margin: "0 0 4px" }}>
              Lead the Future of Work
            </p>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span style={{ ...fw300, fontSize: "16px", color: theme.bg, lineHeight: 1.4 }}>
                Join CIPM-PMAC For only total Fee
              </span>
              <span style={{ ...fw600, fontSize: "18px", color: theme.bg, lineHeight: 1.2 }}>$380</span>
            </div>
          </div>
        </div>
        <button
          style={{
            backgroundColor: theme.bg,
            color: "#35005c",
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
          <IconArrowRight color="#35005C" size={24} />
        </button>
      </div>
    </div>
  );
}

function OtherProgramsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const slides = [
    { logo: img03PmfcBadgeLogo, icon: icoPmfc, code: 'CIPM-PMFC', title: 'Project Management Foundation Certificate', heading: 'Launch Your PM Career', desc: 'Master the essentials of project management with comprehensive foundation course.', route: '/cert-pmfc' },
    { logo: img01PmacBadgeLogo, icon: icoPmac, code: 'CIPM-PMAC', title: 'Project Management Advanced Certificate', heading: 'Strategic Leadership for Complex Projects', desc: 'Advanced certification to master complex project lifecycles and strategic delivery.', route: '/cert-pmac' },
    { logo: img02PmccBadgeLogo, icon: icoPmcc, code: 'CIPM-PMCC', title: 'Project Management Core Certificate', heading: 'Take Your Project Management Career to the Next Level', desc: 'Build on existing knowledge and master core methodologies used by senior project managers.', route: '/cert-pmcc' },
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
      case 0: return { transform: 'translateX(414px) translateY(87px)', width: '210px', height: '250px', opacity: 1, zIndex: 20, filter: 'drop-shadow(0px 0px 30px rgba(104,23,163,0.54))' };
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
                    <div style={{ position: 'absolute', bottom: 0, left: 0, top: 0, width: '35px', borderRadius: '24px', backgroundColor: '#8E5EB0', transition: 'all 0.5s' }} />
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

export default function CertPMFCPage() {
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
