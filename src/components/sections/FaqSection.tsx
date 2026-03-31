import { useState } from 'react';
import FaqCard from '../ui/FaqCard';

const FAQS = [
  {
    q: "How do I enroll in a certification program?",
    a: "To enroll, create an account, select your certification, complete the payment process, and you'll gain immediate access to your course materials in your dashboard.",
  },
  {
    q: "What are the prerequisites for the certification?",
    a: "Prerequisites vary by program level. Foundation certificates typically require no previous experience.",
  },
  {
    q: "How long does the certification process take?",
    a: "Most candidates complete the training and exam within 4-6 weeks.",
  },
  {
    q: "Are there any recertification requirements?",
    a: "Yes, to maintain your active status, you must submit professional development units every 3 years.",
  },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '72px 246px' }}>
      <div style={{ width: '1236px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
          <h2 style={{ margin: 0, color: 'rgba(55,56,55,1)', fontSize: '36px', fontWeight: 600, lineHeight: '120%' }}>
            FAQ
          </h2>
          <p style={{ margin: 0, color: 'rgba(83,84,83,1)', fontSize: '18px', fontWeight: 300, lineHeight: '140%' }}>
            Important Notice Regarding Our Credentials
          </p>
        </div>
        <div style={{ width: '984px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {FAQS.map((faq, i) => (
            <FaqCard
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openFaq === i}
              onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
