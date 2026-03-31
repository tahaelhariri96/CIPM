import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Assets
import imgAboutPM from "./9bc2f96a1833dbde806a91e626380a6fca0f74bb.png";
import frame2608841Svg from '../assets/Frame 2608841.svg';
import imgAboutScrum from "./3685f22e9383bdf3a267b5129eefac20ec796bb9.png";
import imgMockExam from "./fda80a9771238dbb29aaf8ac678ef87b4ad41040.png";
import imgLayer11 from '../assets/293ce1547000488747b952d66afccdeaae372f60.png';
import svgPaths from './svg-pt8brrterb';

// ── Icons ───────────────────────────────────────────────────────────────────
const ArrowRightSLine = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12.1718 12L9.34277 9.17196L10.7568 7.75696L14.9998 12L10.7568 16.243L9.34277 14.828L12.1718 12Z" fill="white" />
  </svg>
);

const ArrowLeftLine = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d={svgPaths.p357c6700} fill="#666766" />
  </svg>
);

// ── Components ──────────────────────────────────────────────────────────────

function SectionBadge({ icon }: { icon: string }) {
  return (
    <div className="w-[42px] h-[42px] bg-[#fbe7e7] rounded-[12px] flex items-center justify-center shrink-0">
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <path d={icon} fill="#E13B3B" />
      </svg>
    </div>
  );
}

function FaqCard({ question, answer, isOpen, onClick }: { question: string, answer?: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div 
      className={`bg-white border border-[#f1f1f1] border-solid flex gap-[12px] items-start p-[24px] rounded-[24px] w-full cursor-pointer transition-all duration-300 ${isOpen ? 'shadow-[5px_3px_21.1px_0px_rgba(54,6,89,0.1)]' : ''}`}
      onClick={onClick}
    >
      <div className="flex h-[30px] items-center shrink-0">
        <div className="relative w-[24px] h-[24px] flex items-center justify-center">
          {isOpen ? (
            <rect width="14" height="14" rx="2" fill="#DB1010" />
          ) : (
            <rect y="11" width="14" height="2" fill="#959695" />
          )}
          {isOpen && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="absolute">
               <path d="M5 11h14v2H5z" fill="white"/>
            </svg>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[4px] pt-[4px]">
        <p className="font-['Poppins',sans-serif] font-semibold leading-[1.2] text-[#373837] text-[18px]">
          {question}
        </p>
        {isOpen && answer && (
          <p className="font-['Poppins',sans-serif] font-light leading-[1.4] text-[#535453] text-[16px]">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
}

export default function AboutCIPM() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="w-full flex flex-col items-center bg-white overflow-hidden relative" style={{ width: '1728px' }}>
      <style>{`
        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* Navbar overlay */}
      <div className="absolute top-0 left-0 z-[9999] w-full">
        <Navbar />
      </div>

      {/* 1. Page Header / Hero Area */}
      <div className="relative w-full h-[587px]">
        {/* Background Shapes */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-[-140px] left-[-99px] w-[1926px] h-[426px] bg-[#64D9A9]" />
           <div className="absolute top-[-140px] left-0 w-[1728px] h-[516px] bg-[#BA0E0E]" />
           <div className="absolute top-[-460px] left-[246px] w-[1236px] h-[1173px] bg-white opacity-15" />
        </div>
        
        {/* Breadcrumb & Title */}
        <div className="relative z-10 w-full h-full flex items-center px-[246px] pt-[65px]">
          <div className="flex gap-[24px] items-center mb-[180px]">
             <button 
               onClick={() => navigate('/')}
               className="bg-[#fbe7e7] flex items-center justify-center p-[16px] rounded-[12px] h-[56px] w-[56px] border-none cursor-pointer hover:bg-[#f6d0d0] transition-colors"
             >
               <ArrowLeftLine />
             </button>
             <div className="flex flex-col gap-[8px]">
               <div className="flex gap-[4px] items-center text-white opacity-90">
                 <span className="font-['Poppins',sans-serif] text-[16px]">Home</span>
                 <ArrowRightSLine />
               </div>
               <h1 className="font-['Poppins',sans-serif] font-normal leading-[1.2] text-[36px] text-white">
                 About CIPM
               </h1>
             </div>
          </div>
        </div>
      </div>

      {/* 2. Hero Image Section */}
      <div className="relative w-full h-[587px] mt-[-301px]">
        <div className="absolute inset-0 bg-[#BA0E0E] opacity-30 z-10 pointer-events-none" />
        <img 
          src={frame2608841Svg} 
          alt="CIPM Building" 
          className="w-full h-full object-cover"
        />
        {/* Curved White Bottom */}
        <div className="absolute bottom-[-1px] left-[-99px] w-[1926px] h-[115px] z-20">
           <svg viewBox="0 0 1926 115" fill="none" className="w-full h-full">
             <ellipse cx="963" cy="57.5" rx="963" ry="57.5" fill="white" />
           </svg>
        </div>
        
        {/* Spinning Decoration Badge (CIPM Seal) */}
        <div className="absolute right-[246px] bottom-[-20px] z-30 w-[232px] h-[232px] transform rotate-[8deg]">
          <div className="relative w-full h-full">
             <img 
               src={imgLayer11} 
               alt="" 
               className="absolute inset-0 w-full h-full animate-[heroSpin_15s_linear_infinite]"
             />
             <div className="absolute inset-[51px] rounded-full overflow-hidden border-2 border-white/20">
                <img src={imgLayer11} alt="" className="w-full h-full object-cover scale-150" />
             </div>
          </div>
        </div>
      </div>

      {/* 3. Discover Section */}
      <div className="w-full px-[246px] mt-[100px] mb-[150px]">
        <div className="max-w-[858px] flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="font-['Poppins',sans-serif] font-semibold text-[#373837] text-[36px] leading-[1.2]">
              Discover THE CIPM
            </h2>
            <p className="font-['Poppins',sans-serif] font-light text-[#535453] text-[18px] leading-[1.4]">
              The Canadian Institute of Project Management (THE CIPM), based in Toronto, Ontario, is a professional institution committed to advancing excellence in project management and agile practices across Canada and the global business community. We specialize in structured, industry-aligned training programs and the formal validation of professional competency through rigorous certification assessments.
            </p>
          </div>
          <p className="font-['Poppins',sans-serif] font-light text-[#535453] text-[18px] leading-[1.4]">
            THE CIPM exists to close the gap between knowledge and practice. Our focus is on preparing professionals to succeed in real-world environments by equipping them with practical tools, proven frameworks, and modern leadership mindsets.
          </p>
        </div>
      </div>

      {/* 4. Vision Section */}
      <div className="w-full py-[100px] relative mt-[50px] mb-[150px]">
         {/* Red Balloon / Shape Decor */}
         <div className="absolute right-[246px] top-[-50px] z-10 w-[300px]">
            {/* Visual representation of the red maple balloon from design */}
            <div className="relative w-[184px] h-[225px] bg-[#BA0E0E] rounded-t-full rounded-b-[40px] flex items-center justify-center shadow-xl">
               <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l1.5 4.5h4.5l-3.5 3 1.5 5-4-3-4 3 1.5-5-3.5-3h4.5L12 2z" />
               </svg>
               <div className="absolute bottom-[-20px] w-4 h-8 bg-[#8a0b0b]" />
            </div>
         </div>

         {/* Vision Card */}
         <div className="mx-auto w-[1316px] h-[274px] bg-[#FBE7E7] rounded-[137px] flex items-center px-[120px] shadow-[6px_24px_30px_rgba(133,6,6,0.49)] relative">
            <div className="max-w-[778px] flex flex-col gap-[8px]">
              <h2 className="font-['Poppins',sans-serif] font-semibold text-[#DB1010] text-[36px] leading-[1.2]">
                Our Vision
              </h2>
              <p className="font-['Poppins',sans-serif] font-light text-[#9B0B0B] text-[18px] leading-[1.4]">
                To be Canada's premier catalyst for professional excellence in project delivery. We envision a professional landscape where every project practitioner is equipped with the practical skills, ethical grounding, and strategic insight necessary to drive innovation and organizational success.
              </p>
            </div>
         </div>
      </div>

      {/* 5. Mission Section */}
      <div className="w-full bg-[#BA0E0E] pt-[100px] pb-[250px] relative flex flex-col items-center">
         <div className="w-full px-[246px] max-w-[1728px] mb-[60px]">
            <div className="max-w-[1030px] flex flex-col gap-[8px]">
               <h2 className="font-['Poppins',sans-serif] font-semibold text-white text-[36px] leading-[1.2]">
                 Our Mission
               </h2>
               <p className="font-['Poppins',sans-serif] font-normal text-[#F1F1F1] text-[18px] leading-[1.4]">
                 To empower professionals through accessible, high-quality training and rigorous competency validation.
               </p>
            </div>
         </div>

         {/* Mission Cards Grid */}
         <div className="absolute bottom-[-150px] w-full px-[222px] grid grid-cols-4 gap-[24px]">
            {[
              { title: "Training", icon: svgPaths.p27405100, desc: "Developing a comprehensive, industry-relevant curriculum that bridges the gap between theory and practice." },
              { title: "Validation", icon: svgPaths.p3ccf5900, desc: "Administering fair and challenging examinations that accurately reflect a candidate's understanding." },
              { title: "Ethics", icon: svgPaths.p15510c40, desc: "Promoting a culture of accountability, integrity, and professional responsibility within the community." },
              { title: "Growth", icon: svgPaths.p224e3e00, desc: "Supporting the continuous career development of our members through resources and sharing." }
            ].map(card => (
              <div key={card.title} className="bg-white p-[24px] rounded-[24px] shadow-[10px_10px_21.1px_rgba(72,8,8,0.37)] flex flex-col gap-[16px]">
                <SectionBadge icon={card.icon} />
                <div className="flex flex-col gap-[4px]">
                  <h4 className="font-['Poppins',sans-serif] font-semibold text-[#373837] text-[18px]">{card.title}</h4>
                  <p className="font-['Poppins',sans-serif] font-light text-[#535453] text-[16px] leading-[1.4]">{card.desc}</p>
                </div>
              </div>
            ))}
         </div>
      </div>

      {/* 6. Process Icons Section */}
      <div className="w-full bg-[#FBE7E7] mt-[250px] py-[60px] flex justify-center">
         <div className="w-[1236px] flex justify-between items-start relative px-[40px]">
            {/* Dashed Line */}
            <div className="absolute top-[38px] left-[100px] right-[100px] border-t-2 border-dashed border-[#F09898] z-0" />
            
            {['Initiation', 'Planning', 'Execution', 'Monitoring', 'Closing', 'Support'].map(step => (
              <div key={step} className="flex flex-col items-center gap-[12px] relative z-10 w-[120px]">
                 <div className="w-[76px] h-[76px] bg-white rounded-full flex items-center justify-center shadow-sm">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                       <path d={svgPaths.p3ccf5900} fill="#E13B3B" />
                    </svg>
                 </div>
                 <p className="font-['Poppins',sans-serif] font-normal text-[#373837] text-[16px] text-center">{step}</p>
              </div>
            ))}
         </div>
      </div>

      {/* 7. Detailed Sections: PM & Scrum */}
      <div className="w-full flex flex-col gap-[80px] my-[100px]">
         {/* PM Section */}
         <div className="flex w-full h-[510px]">
            <div className="w-[726px] overflow-hidden">
               <img src={imgAboutPM} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 bg-[#F6F6F6] flex flex-col justify-center px-[56px] pr-[246px] gap-[24px]">
               <div className="flex flex-col gap-[8px]">
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[#373837] text-[28px]">About Project Management</h3>
                  <p className="font-['Poppins',sans-serif] font-light text-[#535453] text-[18px] leading-[1.4]">
                    Project Management plans and controls work to achieve goals, deliver value, and balance time, cost, scope, quality, and resources across industries.
                  </p>
               </div>
               <button className="w-max bg-[#F6C6C6] text-[#630707] font-['Poppins',sans-serif] font-normal px-[32px] py-[12px] rounded-[16px] border-none cursor-pointer">
                  Learn more
               </button>
            </div>
         </div>

         {/* Scrum Section */}
         <div className="flex w-full h-[510px]">
            <div className="flex-1 bg-[#F6F6F6] flex flex-col justify-center px-[56px] pl-[246px] gap-[24px]">
               <div className="flex flex-col gap-[8px]">
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[#373837] text-[28px]">About Scrum Master</h3>
                  <p className="font-['Poppins',sans-serif] font-light text-[#535453] text-[18px] leading-[1.4]">
                    A Scrum Master is an Agile servant-leader who facilitates collaboration, removes impediments, and empowers teams to self-organize and deliver value through continuous improvement.
                  </p>
               </div>
               <button className="w-max bg-[#F6C6C6] text-[#630707] font-['Poppins',sans-serif] font-normal px-[32px] py-[12px] rounded-[16px] border-none cursor-pointer">
                  Learn more
               </button>
            </div>
            <div className="w-[726px] overflow-hidden">
               <img src={imgAboutScrum} alt="" className="w-full h-full object-cover" />
            </div>
         </div>
      </div>

      {/* 8. Certification Clarification */}
      <div className="w-full px-[246px] py-[100px] flex flex-col items-center gap-[60px]">
         <div className="text-center flex flex-col gap-[8px]">
            <h2 className="font-['Poppins',sans-serif] font-semibold text-[#373837] text-[36px]">Certification Clarification & Scope</h2>
            <p className="font-['Poppins',sans-serif] font-light text-[#535453] text-[18px]">Important Notice Regarding Our Credentials</p>
         </div>

         <div className="w-full max-w-[1236px] relative pl-[40px]">
            {/* Vertical Dashed Line */}
            <div className="absolute left-[31px] top-0 bottom-0 border-l-2 border-dashed border-[#F6C6C6]" />
            
            <div className="flex flex-col gap-[40px]">
               {[
                 { title: "Professional, Not Academic", icon: svgPaths.p27405100, text: "Certifications issued by THE CIPM are professional certificates of completion and competency. They are not academic degrees, diplomas, or graduate credentials." },
                 { title: "Validation of Training", icon: svgPaths.p3ccf5900, text: "Our certifications serve as a formal validation that the candidate has completed the specific CIPM training curriculum and successfully passed the associated examination." },
                 { title: "Industry Focus", icon: svgPaths.p224e3e00, text: "These credentials are designed for professional development and career enhancement. They demonstrate a verified baseline of knowledge and dedication." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-[24px] items-start relative z-10">
                    <div className="w-[64px] h-[64px] bg-[#FBE7E7] rounded-full flex items-center justify-center shrink-0 border-4 border-white">
                       <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <path d={item.icon} fill="#DB1010" />
                       </svg>
                    </div>
                    <div className="flex flex-col gap-[4px] pt-[10px]">
                       <h4 className="font-['Poppins',sans-serif] font-semibold text-[#373837] text-[18px]">{item.title}</h4>
                       <p className="font-['Poppins',sans-serif] font-light text-[#535453] text-[18px] leading-[1.4]">{item.text}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* 9. Training with Mock Exam Banner */}
      <div className="w-full h-[430px] bg-[#BA0E0E] flex mt-[100px]">
         <div className="w-[50%] overflow-hidden">
            <img src={imgMockExam} alt="" className="w-full h-full object-cover" />
         </div>
         <div className="w-[50%] flex flex-col justify-center px-[80px] gap-[24px]">
            <div className="flex flex-col gap-[8px]">
               <h3 className="font-['Poppins',sans-serif] font-semibold text-white text-[32px]">Training with Mock Exam</h3>
               <p className="font-['Poppins',sans-serif] font-normal text-[#FBE7E7] text-[18px] leading-[1.4]">
                 Test your knowledge and get familiar with the exam format before taking the real certification exam.
               </p>
            </div>
            <button className="w-max bg-[#FBE7E7] text-[#630707] font-['Poppins',sans-serif] font-normal px-[32px] py-[12px] rounded-[12px] border-none cursor-pointer flex items-center gap-[8px]">
               Learn more
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.p19240400} fill="#E13B3B" />
               </svg>
            </button>
         </div>
      </div>

      {/* 10. FAQ Section */}
      <div className="w-full px-[246px] py-[100px] flex flex-col items-center gap-[60px]">
         <div className="text-center flex flex-col gap-[8px]">
            <h2 className="font-['Poppins',sans-serif] font-semibold text-[#373837] text-[36px]">FAQ</h2>
            <p className="font-['Poppins',sans-serif] font-light text-[#535453] text-[18px]">Everything you need to know about our certifications</p>
         </div>
         
         <div className="w-full max-w-[984px] flex flex-col gap-[24px]">
            {[
              { q: "How do I enroll in a certification program?", a: "To enroll, create an account, select your certification, complete the payment process, and you'll gain immediate access to your dashboard.", open: true },
              { q: "What are the prerequisites for the certification?", a: "Prerequisites vary by program Level. Foundation certificates typically require no previous experience." },
              { q: "How long does the certification process take?", a: "Most candidates complete the training and exam within 4-6 weeks." },
              { q: "Are there any recertification requirements?", a: "Yes, to maintain your active status, you must submit professional development units every 3 years." }
            ].map((faq, idx) => (
              <FaqCard 
                key={idx}
                isOpen={openFaq === idx}
                onClick={() => setOpenFaq(idx)}
                question={faq.q}
                answer={faq.a}
              />
            ))}
         </div>
      </div>

      {/* 11. Contact Form Area */}
      <div className="w-full bg-[#FBE7E7] py-[100px] px-[372px] flex gap-[100px]">
         <div className="flex-1 flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[8px]">
               <h2 className="font-['Poppins',sans-serif] font-semibold text-[#373837] text-[28px]">Feel free to get in touch</h2>
               <p className="font-['Poppins',sans-serif] font-light text-[#535453] text-[18px]">We're here to help you on your professional journey.</p>
            </div>
            <div className="flex flex-col gap-[12px] mt-auto">
               <img src={svgPaths.p1097d700} alt="" className="w-[100px] opacity-10" />
            </div>
         </div>
         
         <div className="w-[583px] flex flex-col gap-[24px]">
            <input type="text" placeholder="Your Name" className="w-full p-[16px] rounded-[12px] border border-[#D9DDE2] font-['Poppins',sans-serif]" />
            <input type="email" placeholder="Your Email" className="w-full p-[16px] rounded-[12px] border border-[#D9DDE2] font-['Poppins',sans-serif]" />
            <textarea placeholder="Message" className="w-full p-[16px] rounded-[12px] border border-[#D9DDE2] font-['Poppins',sans-serif] h-[150px]"></textarea>
            <button className="bg-[#BA0E0E] text-white font-['Poppins',sans-serif] font-semibold py-[16px] rounded-[16px] hover:bg-[#9e0c0c] transition-colors border-none cursor-pointer flex items-center justify-center gap-[12px]">
               Send a message
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d={svgPaths.p265166c0} stroke="white" strokeWidth="2" strokeLinecap="round" />
               </svg>
            </button>
         </div>
      </div>

      <Footer />
    </div>
  );
}
