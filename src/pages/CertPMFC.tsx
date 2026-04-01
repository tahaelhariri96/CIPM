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

// Theme configuration for Project Management (PMFC, PMAC, PMCC)
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
    <div style={{ position: "relative", overflow: "hidden", backgroundColor: theme.bg }}>
      <svg
        viewBox="0 0 1926 498"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
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

      <div style={{ ...innerContainer, position: "relative", paddingTop: "56px", paddingBottom: "100px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", flexShrink: 0 }}>
            <div
              onClick={() => navigate('/all-certifications')}
              style={{
                backgroundColor: "#d4c2e1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                cursor: "pointer",
                padding: "16px",
              }}
            >
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <path d={svgPaths.p357c6700} fill={theme.darkPrimary} />
              </svg>
            </div>
            <div>
              <img
                src={img03PmfcBadgeLogo}
                alt="CIPM-PMFC Badge"
                style={{ width: "228px", height: "211px", objectFit: "contain", display: "block", mixBlendMode: "multiply" }}
              />
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <p style={{ ...fw600, fontSize: "46px", color: theme.primary, lineHeight: 1.2, margin: 0 }}>
                CIPM-PMFC
              </p>
              <p style={{ ...fw400, fontSize: "20px", color: "#535453", lineHeight: 1.2, margin: 0 }}>
                Project Management Foundation Certificate
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ ...fw400, fontSize: "24px", color: theme.headingColor, lineHeight: 1.2, margin: 0 }}>
                Your Gateway to a Professional Career
              </p>
              <p style={{ ...fw300, fontSize: "18px", color: theme.primary, lineHeight: 1.4, margin: 0 }}>
                Build strong project delivery fundamentals through a highly accessible and comprehensive
                entry-level certification
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ ...fw300, fontSize: "16px", color: theme.buttonBg, lineHeight: 1.4 }}>Total Fee</span>
              <span style={{ ...fw600, fontSize: "18px", color: theme.primary, lineHeight: 1.2 }}>$250</span>
              <button
                style={{
                  backgroundColor: theme.buttonBg,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  ...fw400,
                  fontSize: "16px",
                  lineHeight: 1.4,
                  border: "none",
                  cursor: "pointer",
                  height: "44px",
                }}
              >
                Register Now
                <IconArrowRight />
              </button>
            </div>
          </div>
        </div>
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
              The CIPM-PMFC (Project Management Foundation Certificate) is an entry-level professional credential
              designed for motivated professionals and career changers seeking to build practical project management
              capability from the ground up. This program covers essential methodologies, terminology, and processes
              required to plan and deliver projects successfully across industries. Whether pursuing a first project
              management role or strengthening current responsibilities, the CIPM-PMFC confirms credible foundational
              knowledge and prepares learners to contribute with confidence and competence.
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
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "76px",
        height: "76px",
        borderRadius: "72px",
        flexShrink: 0,
        padding: "12px",
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
    <div style={{ width: "47px", height: "40px", position: "relative", overflow: "hidden" }}>
      <svg viewBox="0 0 47.081 39.6231" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none">
        <path d={svgPaths.pd65f900} fill="#F29F5C" />
        <path d={svgPaths.pe7a9300} fill="#E08546" />
        <path d={svgPaths.p15e8100} fill="#E08546" />
        <path d={svgPaths.p3d9bc300} fill="#E08546" />
        <path d={svgPaths.p15c46c80} fill="#656D88" />
        <path d={svgPaths.p7c58d80} fill="#656D88" />
        <path d={svgPaths.p16a55780} fill="#F29F5C" />
        <path d={svgPaths.p1db79130} fill="#F9C295" />
        <path d={svgPaths.p20061000} fill="#E59F6A" />
        <path d={svgPaths.p6f7e00} fill="#E59F6A" />
        <path d={svgPaths.p14f7b800} fill="#5C9CEE" />
        <path d={svgPaths.p2fe76e80} fill="#F2DF33" />
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
          src={imgCipmPmfc1}
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
            title="Absolute Beginners"
            description="Individuals with zero prior project management experience who want a structured, credible entry point into the industry."
          />
          <AudienceItem
            icon={<LaptopSvg />}
            title="New Project Managers"
            description={`Those recently promoted or assigned to manage projects who need to quickly learn the "rules of the road."`}
          />
          <AudienceItem
            icon={<BriefcaseSvg />}
            title="Career Switchers"
            description="Professionals from other sectors (Admin, Sales, IT) looking to pivot into a high-demand project management career path."
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
    { n: "1", t: "Core project management terminology and key concepts." },
    { n: "2", t: "Essential planning methodologies and frameworks." },
    { n: "3", t: "Project lifecycle processes and delivery practices." },
    { n: "4", t: "Effective communication and team coordination fundamentals." },
    { n: "5", t: "Cross-industry project execution and management principles." },
  ];

  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ ...innerContainer, paddingTop: "56px", paddingBottom: "56px" }}>
        <div style={{ display: "flex", gap: "65px", alignItems: "center", minHeight: "438px" }}>
          <BalloonIllustration />
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
        borderRadius: "56px",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

function CertSmallIcon() {
  return (
    <div style={{ position: "relative", width: "32px", height: "32px" }}>
      <div style={{ position: "absolute", inset: "8.33% 4.17% 2.08% 12.5%" }}>
        <svg viewBox="0 0 26.6667 28.6667" style={{ width: "100%", height: "100%" }} fill="none">
          <path d={svgPaths.p7f21900} fill={theme.primary} />
        </svg>
      </div>
    </div>
  );
}

function EasyJoinSection() {
  const steps = [
    {
      icon: (
        <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
          <path d={svgPaths.p1572fa80} fill={theme.primary} />
        </svg>
      ),
      title: "1. Create account",
      desc: "Sign up in minutes to access the learning platform",
    },
    {
      icon: (
        <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
          <path d={svgPaths.p3ccf5900} fill={theme.primary} />
        </svg>
      ),
      title: "2. Register in one of Certificate",
      desc: "Choose the certification that matches your goals",
    },
    {
      icon: (
        <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
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
                Join CIPM-PMFC For only total Fee
              </span>
              <span style={{ ...fw600, fontSize: "18px", color: theme.bg, lineHeight: 1.2 }}>$250</span>
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
            <img alt={s.code} src={s.logo} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'fill', mixBlendMode: 'multiply' }} />
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
