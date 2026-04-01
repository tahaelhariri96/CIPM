import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import svgPaths from "../imports/svg-2m43jtwopl";
import svgPathsSlider from "../imports/svg-pt8brrterb";
import img03PmfcBadgeLogo from "../assets/03. PMFC Badge Logo.svg";
import imgCipmPmcc1 from "../assets/CIPM-PMCC1.svg";
import img01PmacBadgeLogo from "../assets/01. PMAC Badge Logo 2.svg";
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
          src={img02PmccBadgeLogo}
          alt="CIPM-PMCC Badge"
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
            CIPM-PMCC
          </p>
          <p style={{ ...fw400, fontSize: "20px", color: "#535453", lineHeight: 1.2, margin: 0 }}>
            Project Management Core Certificate
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p style={{ ...fw400, fontSize: "24px", color: theme.headingColor, lineHeight: 1.2, margin: 0 }}>
            Your Path to Core Project Leadership
          </p>
          <p style={{ ...fw300, fontSize: "18px", color: theme.primary, lineHeight: 1.4, margin: 0 }}>
            Strengthen your project management capability with a practical, career-focused core certificate designed for professionals ready to move beyond the basics.
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
          <span style={{ ...fw600, fontSize: "18px", color: theme.primary, lineHeight: 1.2 }}>$280</span>
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
    { label: "Time Limit", value: "150 Minutes", bg: theme.bg, pt: "12px", pb: "12px" },
    { label: "Estimated Effort", value: "50 Hours", bg: "white", pt: "12px", pb: "12px" },
    { label: "Length", value: "90 Multiple Choice Questions.", bg: theme.bg, pt: "12px", pb: "16px" },
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
              The CIPM-PMCC (Project Management Core Certificate) is an intermediate-level professional credential designed for individuals with foundational project knowledge who are ready to operate with greater confidence, structure, and consistency. Bridging the gap between introductory learning and advanced practice, this program strengthens essential competencies in planning, stakeholder coordination, risk awareness, and project delivery. The CIPM-PMCC equips professionals with practical, transferable skills recognized across industries—supporting stronger performance, clearer communication, and meaningful career advancement.
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

function Icon1Svg() {
  return (
    <div style={{ width: "52px", height: "52px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="52" height="52" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 38C0 17.0132 17.0132 0 38 0C58.9868 0 76 17.0132 76 38C76 58.9868 58.9868 76 38 76C17.0132 76 0 58.9868 0 38Z" fill="white"/>
<path d="M39.0769 24.8274H36.1927V19.9271C36.1927 19.603 35.9285 19.3392 35.6038 19.3392H27.1097C26.7851 19.3392 26.521 19.603 26.521 19.9271V24.8274H23.6367V19.9271C23.6367 18.0125 25.1947 16.4548 27.1097 16.4548H35.6038C37.5189 16.4548 39.0769 18.0125 39.0769 19.9271V24.8274Z" fill="#D5E3F4"/>
<path d="M48.6064 28.3674V44.0408C48.6064 45.4515 47.4628 46.595 46.0522 46.595H16.6636C15.2529 46.595 14.1094 45.4515 14.1094 44.0408V28.3674H48.6064Z" fill="#BC7C63"/>
<path d="M44.7612 25.0955V44.0408C44.7612 45.4514 43.6177 46.595 42.207 46.595H46.0528C47.4634 46.595 48.607 45.4514 48.607 44.0408V25.0955H44.7612Z" fill="#AA6A51"/>
<path d="M31.3997 39.6988C30.3095 39.6988 29.4258 38.8151 29.4258 37.7249V32.4841H33.3736V37.7249C33.3736 38.8151 32.4898 39.6988 31.3997 39.6988Z" fill="#E5EEF9"/>
<path d="M14.1094 25.1092V29.5102C14.1094 30.3788 14.7028 31.1324 15.5403 31.3273L30.5311 34.8159C31.1017 34.9487 31.6955 34.9422 32.2631 34.7972L47.2137 30.9772C48.0327 30.768 48.6064 30.0232 48.6064 29.1695V25.1092C48.6064 23.691 47.4689 22.5413 46.0658 22.5413H16.6499C15.2469 22.5413 14.1094 23.691 14.1094 25.1092Z" fill="#D1A08F"/>
<path d="M46.0645 22.5413H42.2188C43.6218 22.5413 44.7593 23.691 44.7593 25.1092V31.604L47.2124 30.9772C48.0314 30.768 48.6051 30.0232 48.6051 29.1695V25.1092C48.6051 23.691 47.4676 22.5413 46.0645 22.5413Z" fill="#C68D7A"/>
<path d="M60.1327 31.7035H53.3547C52.4319 31.7035 51.6838 32.4596 51.6838 33.3924C51.6838 34.3253 52.4319 35.0814 53.3547 35.0814H55.96L40.8497 50.3259L35.2648 44.681C34.6208 44.0299 33.5458 44.0299 32.9018 44.681L18.716 59.0147C18.0634 59.6743 18.0634 60.7437 18.716 61.4032C19.3607 62.0548 20.4343 62.0548 21.079 61.4032L34.0832 48.2637L39.668 53.9086C40.3121 54.5596 41.387 54.5596 42.0311 53.9086L58.4615 37.3296V40.243C58.4615 41.1757 59.2097 41.9319 60.1325 41.9319C61.0553 41.9319 61.8034 41.1758 61.8034 40.243V33.3923C61.8036 32.4596 61.0555 31.7035 60.1327 31.7035Z" fill="#6FD7A3"/>
<path d="M57.544 14.4801L58.5573 16.5395C58.6542 16.7365 58.8416 16.873 59.0583 16.9046L61.3243 17.2349C61.8701 17.3144 62.088 17.9871 61.6931 18.3732L60.0534 19.9761C59.8966 20.1295 59.825 20.3504 59.8621 20.5668L60.2491 22.8304C60.3423 23.3755 59.7718 23.7913 59.2837 23.5339L57.257 22.4652C57.0632 22.363 56.8316 22.363 56.6378 22.4652L54.6111 23.5339C54.123 23.7913 53.5525 23.3755 53.6457 22.8304L54.0327 20.5668C54.0698 20.3503 53.9982 20.1294 53.8414 19.9761L52.2016 18.3731C51.8068 17.987 52.0247 17.3143 52.5704 17.2348L54.8364 16.9045C55.0531 16.873 55.2404 16.7365 55.3374 16.5394L56.3507 14.48C56.5948 13.984 57.2999 13.984 57.544 14.4801Z" fill="#FFE177"/>
<path d="M59.7835 26.4086C59.3853 26.4086 59.0625 26.7314 59.0625 27.1296V28.8922C59.0625 29.2905 59.3853 29.6133 59.7835 29.6133C60.1818 29.6133 60.5046 29.2904 60.5046 28.8922V27.1296C60.5046 26.7314 60.1818 26.4086 59.7835 26.4086Z" fill="#D5E3F4"/>
<path d="M56.9476 24.8702C56.5494 24.8702 56.2266 25.1931 56.2266 25.5913V28.8922C56.2266 29.2905 56.5494 29.6132 56.9476 29.6132C57.3458 29.6132 57.6687 29.2904 57.6687 28.8922V25.5913C57.6687 25.1931 57.3458 24.8702 56.9476 24.8702Z" fill="#D5E3F4"/>
<path d="M54.1078 26.4086C53.7095 26.4086 53.3867 26.7314 53.3867 27.1296V28.8922C53.3867 29.2905 53.7095 29.6133 54.1078 29.6133C54.506 29.6133 54.8288 29.2904 54.8288 28.8922V27.1296C54.8288 26.7314 54.506 26.4086 54.1078 26.4086Z" fill="#D5E3F4"/>
</svg>

    </div>
  );
}

function Icon2Svg() {
  return (
    <div style={{ width: "52px", height: "52px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <svg width="52" height="52" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
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

    </div>
  );
}

function Icon3Svg() {
  return (
    <div style={{ width: "52px", height: "52px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <svg width="52" height="52" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 38C0 17.0132 17.0132 0 38 0C58.9868 0 76 17.0132 76 38C76 58.9868 58.9868 76 38 76C17.0132 76 0 58.9868 0 38Z" fill="white"/>
<path d="M58.4844 39.0266C59.027 39.0266 59.4668 38.5869 59.4668 38.0443C59.4668 37.5018 59.027 37.062 58.4844 37.062H51.9102V24.5417C51.9102 24.3619 52.0565 24.2156 52.2364 24.2156H58.4844C59.027 24.2156 59.4668 23.7758 59.4668 23.2332C59.4668 22.6907 59.027 22.2509 58.4844 22.2509H52.2364C50.9733 22.2509 49.9457 23.2785 49.9457 24.5417V37.062H41.955C41.4124 37.062 40.9727 37.5018 40.9727 38.0443C40.9727 38.5869 41.4124 39.0266 41.955 39.0266H49.9457V51.5472C49.9457 52.8103 50.9733 53.8379 52.2364 53.8379H58.4844C59.027 53.8379 59.4668 53.3982 59.4668 52.8556C59.4668 52.3131 59.027 51.8733 58.4844 51.8733H52.2364C52.0567 51.8733 51.9102 51.727 51.9102 51.5471V39.0265H58.4844V39.0266Z" fill="#2EABFF"/>
<path d="M54.4141 51.6768C54.4141 54.2952 56.1925 55.1435 57.7138 55.1435C59.2351 55.1435 61.0135 53.838 61.0135 51.6768C60.5294 50.3218 59.2351 49.3521 57.7138 49.3521C56.1925 49.3519 54.8981 50.3218 54.4141 51.6768Z" fill="#FF4755"/>
<path d="M45.6724 36.0953L42.9646 35.6882C42.6352 33.9323 41.945 32.3039 40.9733 30.8827L42.6007 28.6794C42.8855 28.2938 42.8454 27.7577 42.5064 27.4186L41.1049 26.0172C40.7658 25.6782 40.2299 25.6381 39.8442 25.923L37.6408 27.5504C36.2197 26.5786 34.5912 25.8883 32.8353 25.559L32.4282 22.8511C32.3569 22.3769 31.9496 22.0262 31.4701 22.0262H29.4881C29.0086 22.0262 28.6013 22.3769 28.53 22.8511L28.1229 25.559C26.367 25.8884 24.7385 26.5787 23.3174 27.5504L21.1142 25.923C20.7285 25.6381 20.1925 25.6782 19.8535 26.0172L18.4518 27.4188C18.1128 27.7578 18.0727 28.2939 18.3575 28.6795L19.9849 30.8828C19.0131 32.3039 18.3229 33.9324 17.9936 35.6884L15.2858 36.0954C14.8116 36.1667 14.4609 36.574 14.4609 37.0535V39.0357C14.4609 39.5152 14.8116 39.9225 15.2858 39.9938L17.9936 40.4008C18.323 42.1567 19.0132 43.7852 19.9849 45.2064L18.3575 47.4097C18.0727 47.7954 18.1128 48.3314 18.4518 48.6704L19.8535 50.0721C20.1925 50.4111 20.7285 50.4512 21.1142 50.1664L23.3174 48.539C24.7385 49.5106 26.367 50.2009 28.1229 50.5303L28.53 53.2381C28.6013 53.7123 29.0086 54.063 29.4881 54.063H31.4701C31.9496 54.063 32.3569 53.7123 32.4282 53.2381L32.8353 50.5303C34.5912 50.2009 36.2197 49.5107 37.6408 48.539L39.8442 50.1664C40.2299 50.4512 40.7658 50.4111 41.1049 50.0721L42.5064 48.6704C42.8454 48.3314 42.8855 47.7954 42.6007 47.4097L40.9733 45.2064C41.945 43.7852 42.6352 42.1568 42.9646 40.4009L45.6724 39.9938C46.1466 39.9225 46.4973 39.5152 46.4973 39.0357V37.0535C46.4973 36.574 46.1466 36.1667 45.6724 36.0953ZM30.4791 42.5891C27.4598 42.5891 25.0099 40.1392 25.0099 37.1199C25.0099 34.1006 27.4598 31.6507 30.4791 31.6507C33.4984 31.6507 35.9483 34.1006 35.9483 37.1199C35.9483 40.1392 33.4984 42.5891 30.4791 42.5891Z" fill="#FFD15C"/>
<path d="M30.4791 33.6152C28.5432 33.6152 26.9746 35.184 26.9746 37.1198C26.9746 39.0556 28.5434 40.6244 30.4791 40.6244C32.4149 40.6244 33.9837 39.0556 33.9837 37.1198C33.9837 35.184 32.4149 33.6152 30.4791 33.6152Z" fill="#F8B64C"/>
</svg>
    </div>
  );
}

function Icon4Svg() {
  return (
    <div style={{ width: "52px", height: "52px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <svg width="52" height="52" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 38C0 17.0132 17.0132 0 38 0C58.9868 0 76 17.0132 76 38C76 58.9868 58.9868 76 38 76C17.0132 76 0 58.9868 0 38Z" fill="white"/>
<path d="M43.1777 30.973C43.2441 30.6455 43.2793 30.3066 43.2793 29.9595C43.2793 27.1598 41.0098 24.8902 38.21 24.8901C35.4102 24.8901 33.1403 27.1596 33.1403 29.9595C33.1403 30.2632 33.1675 30.5606 33.2187 30.8497L33.2419 30.973L24.1157 30.973L24.1157 28.6749C24.1157 27.7224 24.8881 26.9501 25.8405 26.9501L26.7512 26.9501C27.4487 26.9501 28.0772 26.5298 28.3435 25.8851C28.3463 25.8781 28.3495 25.871 28.3524 25.8639C28.6199 25.2197 28.4729 24.478 27.9797 23.9848L27.3353 23.3408C26.6618 22.6673 26.6618 21.5752 27.3353 20.9016L29.1525 19.0848C29.8261 18.4114 30.9178 18.4114 31.5913 19.0848L32.2357 19.7292C32.7289 20.2222 33.4703 20.3693 34.1144 20.1018C34.1214 20.099 34.1287 20.0958 34.1357 20.093C34.7804 19.8267 35.2006 19.1982 35.2006 18.5007L35.2006 17.5896C35.2007 16.6371 35.9731 15.8652 36.9255 15.8652L39.4949 15.8652C40.4474 15.8652 41.2193 16.6373 41.2193 17.5896L41.2193 18.5007C41.2193 19.1983 41.6399 19.8268 42.2847 20.0929C42.2918 20.0959 42.2989 20.0989 42.306 20.1018C42.9501 20.3694 43.6918 20.2224 44.185 19.7292L44.829 19.0848C45.5026 18.4113 46.5947 18.4113 47.2682 19.0848L49.085 20.9016C49.7586 21.5752 49.7586 22.6673 49.085 23.3408L48.441 23.9848C47.9478 24.478 47.8004 25.2197 48.068 25.8639C48.0708 25.8709 48.0741 25.8777 48.0769 25.8848C48.3431 26.5297 48.9716 26.9501 49.6691 26.9501L50.5799 26.9501C51.5324 26.9501 52.3047 27.7224 52.3047 28.6749L52.3047 30.973L43.1777 30.973Z" fill="#FF4755"/>
<path d="M29.9243 30.9728C30.6264 24.9741 35.3289 20.1987 41.293 19.3856C41.1359 19.1235 41.0472 18.8194 41.0472 18.5005L41.0472 17.5895C41.0472 16.6371 40.2751 15.8649 39.3225 15.8649L36.753 15.8649C35.8006 15.8649 35.0284 16.637 35.0284 17.5895L35.0284 18.5006C35.0284 19.1981 34.608 19.8266 33.9632 20.0928C33.9562 20.0957 33.9491 20.0987 33.9422 20.1015C33.298 20.3691 32.5564 20.222 32.0632 19.7288L31.4191 19.0847C30.7455 18.4111 29.6536 18.4111 28.9801 19.0847L27.1631 20.9015C26.4896 21.575 26.4896 22.667 27.1631 23.3405L27.8073 23.9846C28.3005 24.4778 28.4476 25.2194 28.18 25.8636C28.1771 25.8707 28.1741 25.8777 28.1713 25.8847C27.9051 26.5295 27.2766 26.9499 26.5791 26.9499L25.6681 26.9499C24.7157 26.9499 23.9435 27.722 23.9435 28.6746L23.9435 30.9728L29.9243 30.9728Z" fill="#EF202F"/>
<path d="M33.0703 30.973L37.1035 30.973C37.037 30.6455 37.0019 30.3066 37.0019 29.9595C37.0019 27.8766 38.2586 26.0878 40.0547 25.308C39.4365 25.0396 38.7549 24.89 38.0381 24.89C35.2383 24.89 32.9687 27.1596 32.9687 29.9595C32.9686 30.3066 33.0037 30.6456 33.0703 30.973Z" fill="#EA0F1E"/>
<path d="M56.5083 60.135H19.5023C18.6574 60.135 17.9727 59.4502 17.9727 58.6054V33.2588C17.9727 32.4141 18.6574 31.7292 19.5023 31.7292H56.5084C57.3531 31.7292 58.038 32.414 58.038 33.2588V58.6054C58.0379 59.4502 57.3531 60.135 56.5083 60.135Z" fill="#FFE177"/>
<path d="M56.5094 31.7294H54.8438C55.6885 31.7294 56.3733 32.4142 56.3733 33.2589V58.6055C56.3733 59.4502 55.6885 60.135 54.8438 60.135H56.5094C57.3542 60.135 58.039 59.4502 58.039 58.6055V33.2589C58.039 32.4142 57.3541 31.7294 56.5094 31.7294Z" fill="#FFD15B"/>
<path d="M37.4879 55.9288C32.4798 53.6071 27.4717 53.4392 22.4636 55.4254C21.655 55.7461 20.7773 55.1552 20.7773 54.2853V30.8487C20.7773 30.3023 21.139 29.825 21.6625 29.6685C26.983 28.078 32.3035 28.1301 37.624 29.8245C37.8713 29.9033 38.1362 29.9033 38.3834 29.8245C43.704 28.1301 49.0244 28.078 54.345 29.6685C54.8684 29.825 55.2301 30.3023 55.2301 30.8487V54.2853C55.2301 55.1552 54.3524 55.7461 53.5438 55.4254C48.5357 53.4392 43.5276 53.6071 38.5195 55.9288C38.1924 56.0804 37.8149 56.0804 37.4879 55.9288Z" fill="#F9F7F8"/>
<path d="M54.3456 29.6685C54.0534 29.581 53.761 29.4995 53.4688 29.4221C53.4769 29.485 53.4818 29.5489 53.4818 29.6139V55.4015C53.5027 55.4097 53.5236 55.4172 53.5445 55.4255C54.3531 55.7462 55.2308 55.1552 55.2308 54.2853V30.8487C55.2308 30.3023 54.8691 29.8249 54.3456 29.6685Z" fill="#EFEDEF"/>
<path d="M24.4912 33.3019C24.2263 33.3019 23.9831 33.1265 23.9088 32.8587C23.8196 32.5369 24.0082 32.2038 24.3299 32.1145C27.5521 31.2209 30.8199 31.1902 34.0426 32.023C34.3659 32.1065 34.5603 32.4364 34.4767 32.7596C34.3931 33.0829 34.0637 33.277 33.74 33.1937C30.7257 32.4146 27.6681 32.4436 24.653 33.2798C24.5991 33.2948 24.5447 33.3019 24.4912 33.3019Z" fill="#554E56"/>
<path d="M24.4912 36.7605C24.2263 36.7605 23.9831 36.585 23.9088 36.3172C23.8196 35.9955 24.0082 35.6623 24.3299 35.5731C27.552 34.6794 30.8198 34.6487 34.0425 35.4814C34.3659 35.5649 34.5603 35.8948 34.4767 36.218C34.3931 36.5414 34.0633 36.7353 33.7401 36.6522C30.7254 35.8732 27.668 35.9023 24.653 36.7383C24.5991 36.7533 24.5447 36.7605 24.4912 36.7605Z" fill="#554E56"/>
<path d="M24.4912 40.219C24.2263 40.219 23.9831 40.0436 23.9088 39.7758C23.8196 39.454 24.0082 39.1209 24.3299 39.0316C27.5518 38.1381 30.8196 38.1072 34.0426 38.9401C34.3659 39.0236 34.5603 39.3535 34.4767 39.6768C34.3931 40 34.0637 40.1944 33.74 40.1108C30.7255 39.3317 27.6681 39.3607 24.653 40.1969C24.5991 40.2119 24.5447 40.219 24.4912 40.219Z" fill="#554E56"/>
<path d="M24.4912 43.6777C24.2263 43.6777 23.9831 43.5022 23.9088 43.2344C23.8196 42.9127 24.0082 42.5795 24.3299 42.4903C27.5521 41.5966 30.8199 41.5659 34.0426 42.3987C34.3659 42.4822 34.5603 42.8121 34.4767 43.1354C34.3931 43.4586 34.0637 43.6529 33.74 43.5694C30.7257 42.7904 27.6681 42.8193 24.653 43.6555C24.5991 43.6705 24.5447 43.6777 24.4912 43.6777Z" fill="#554E56"/>
<path d="M24.4912 47.1363C24.2263 47.1363 23.9831 46.9608 23.9088 46.6931C23.8196 46.3713 24.0082 46.0382 24.3299 45.9489C27.552 45.0553 30.8198 45.0245 34.0425 45.8573C34.3659 45.9407 34.5603 46.2707 34.4767 46.5938C34.3931 46.9172 34.0633 47.1114 33.7401 47.028C30.7254 46.2491 27.668 46.2779 24.653 47.1141C24.5991 47.1291 24.5447 47.1363 24.4912 47.1363Z" fill="#554E56"/>
<path d="M24.4912 50.5948C24.2263 50.5948 23.9831 50.4194 23.9088 50.1516C23.8196 49.8298 24.0082 49.4967 24.3299 49.4074C27.552 48.5138 30.8198 48.483 34.0425 49.3158C34.3659 49.3993 34.5603 49.7292 34.4767 50.0524C34.3931 50.3757 34.0633 50.5699 33.7401 50.4865C30.7254 49.7075 27.668 49.7365 24.653 50.5727C24.5991 50.5876 24.5447 50.5948 24.4912 50.5948Z" fill="#554E56"/>
<path d="M51.5204 33.3022C51.4669 33.3022 51.4125 33.295 51.3586 33.28C48.3434 32.4439 45.2862 32.4149 42.2716 33.194C41.9475 33.2776 41.6185 33.0831 41.535 32.7599C41.4515 32.4366 41.6459 32.1067 41.969 32.0232C45.1918 31.1905 48.4597 31.2214 51.6817 32.1148C52.0035 32.2041 52.1919 32.5372 52.1027 32.859C52.0285 33.1267 51.7853 33.3022 51.5204 33.3022Z" fill="#554E56"/>
<path d="M51.5204 36.7605C51.4669 36.7605 51.4125 36.7533 51.3586 36.7384C48.3435 35.9022 45.2863 35.8733 42.2716 36.6522C41.9481 36.7358 41.6185 36.5413 41.535 36.2181C41.4515 35.8948 41.6459 35.565 41.9691 35.4815C45.1921 34.6488 48.4598 34.6796 51.6817 35.5731C52.0035 35.6624 52.1919 35.9955 52.1027 36.3173C52.0285 36.5851 51.7853 36.7605 51.5204 36.7605Z" fill="#554E56"/>
<path d="M51.5204 40.219C51.4669 40.219 51.4125 40.2118 51.3586 40.1968C48.3436 39.3606 45.2864 39.3317 42.2716 40.1107C41.9475 40.1943 41.6185 39.9998 41.535 39.6767C41.4515 39.3533 41.6459 39.0235 41.969 38.94C45.1919 38.1073 48.4598 38.1381 51.6817 39.0316C52.0035 39.1208 52.1919 39.454 52.1027 39.7757C52.0285 40.0435 51.7853 40.219 51.5204 40.219Z" fill="#554E56"/>
<path d="M51.5204 43.6777C51.4669 43.6777 51.4125 43.6705 51.3586 43.6555C48.3434 42.8194 45.2862 42.7904 42.2716 43.5694C41.9475 43.653 41.6185 43.4585 41.535 43.1354C41.4515 42.812 41.6459 42.4822 41.969 42.3987C45.1918 41.5659 48.4597 41.5969 51.6817 42.4903C52.0035 42.5796 52.1919 42.9127 52.1027 43.2344C52.0285 43.5021 51.7853 43.6777 51.5204 43.6777Z" fill="#554E56"/>
<path d="M51.5204 47.1362C51.4669 47.1362 51.4125 47.129 51.3586 47.1141C48.3435 46.278 45.2863 46.249 42.2716 47.0279C41.9481 47.1115 41.6185 46.9171 41.535 46.5938C41.4515 46.2705 41.6459 45.9407 41.9691 45.8572C45.1921 45.0245 48.4598 45.0553 51.6817 45.9488C52.0035 46.0381 52.1919 46.3712 52.1027 46.693C52.0285 46.9607 51.7853 47.1362 51.5204 47.1362Z" fill="#554E56"/>
<path d="M51.5204 50.5948C51.4669 50.5948 51.4125 50.5876 51.3586 50.5727C48.3435 49.7366 45.2863 49.7075 42.2716 50.4865C41.9481 50.5701 41.6185 50.3756 41.535 50.0524C41.4515 49.7291 41.6459 49.3993 41.9691 49.3158C45.1921 48.4831 48.4598 48.514 51.6817 49.4074C52.0035 49.4967 52.1919 49.8299 52.1027 50.1516C52.0285 50.4194 51.7853 50.5948 51.5204 50.5948Z" fill="#554E56"/>
<path d="M38.0069 52.0063C37.6729 52.0063 37.4023 51.7357 37.4023 51.4017V32.6972C37.4023 32.3632 37.673 32.0927 38.0069 32.0927C38.3409 32.0927 38.6115 32.3633 38.6115 32.6972V51.4017C38.6115 51.7357 38.3408 52.0063 38.0069 52.0063Z" fill="#EFEDEF"/>
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
          src={imgCipmPmcc1}
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
            icon={<Icon1Svg />}
            title="Early-Career Project Professionals"
            description="Build strong project fundamentals and confidence to start your career right."
          />
          <AudienceItem
            icon={<Icon2Svg />}
            title="Team Leads and Coordinators"
            description="Strengthen planning, coordination, and delivery skills to lead teams effectively."
          />
          <AudienceItem
            icon={<Icon3Svg />}
            title="Professionals Transitioning into Project Management"
            description="Gain practical project management skills to move smoothly into PM roles."
          />
          <AudienceItem
            icon={<Icon4Svg />}
            title="Individuals Seeking a Structured PM Foundation"
            description="Individuals seeking a structured, practical understanding of core project management concepts."
          />
        </div>
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
    { n: "1", t: "Core project management terminology and foundational concepts." },
    { n: "2", t: "Structured planning and scheduling techniques." },
    { n: "3", t: "Stakeholder coordination and team communication." },
    { n: "4", t: "Risk identification and issue management." },
    { n: "5", t: "Practical project delivery and execution practices." },
  ];

  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ ...innerContainer, paddingTop: "56px", paddingBottom: "56px" }}>
        <div style={{ display: "flex", gap: "65px", alignItems: "center", minHeight: "438px" }}>
          <div style={{ width: "203px", height: "284px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <img src={icoPmcc} alt="PMCC Icon" style={{ width: "180px", height: "auto", objectFit: "contain" }} />
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
          <FeatureItem svgPath={svgPaths.p1c37d80} text="No prior experience required" />
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
                Join CIPM-PMCC For only total Fee
              </span>
              <span style={{ ...fw600, fontSize: "18px", color: theme.bg, lineHeight: 1.2 }}>$280</span>
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

export default function CertPMCCPage() {
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
