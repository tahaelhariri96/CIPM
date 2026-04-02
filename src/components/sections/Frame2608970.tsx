import { useState } from 'react';

function ToggleIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg style={{ width: '24px', height: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: '10px', flexShrink: 0 }} width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_15598_11074)">
        <path d={expanded ? 'M5 14H19V16H5V14Z' : 'M11 14V8H13V14H19V16H13V22H11V16H5V14H11Z'} fill="#DB1010" />
      </g>
      <defs>
        <clipPath id="clip0_15598_11074">
          <rect width="24" height="24" fill="white" transform="translate(0 3)" />
        </clipPath>
      </defs>
    </svg>
  );
}

function FaqCard({
  question,
  answer,
  expanded = false,
  onToggle,
}: {
  question: string;
  answer?: string;
  expanded?: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        alignSelf: 'stretch',
        width: '100%',
        minHeight: expanded ? '122px' : '78px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: expanded ? 'flex-start' : 'center',
        gap: '12px',
        paddingTop: '24px',
        paddingBottom: '24px',
        paddingLeft: '24px',
        paddingRight: '24px',
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: '24px',
        border: '1px solid rgba(241, 241, 241, 1)',
        cursor: 'pointer',
      }}
      onClick={onToggle}
    >
      <ToggleIcon expanded={expanded} />
      <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', paddingTop: '4px' }}>
        <h3 style={{ alignSelf: 'stretch', width: '100%', maxWidth: '900px', color: 'rgba(55, 56, 55, 1)', fontSize: '18px', fontWeight: '600', textAlign: 'left', lineHeight: '120.00000476837158%', margin: 0 }}>
          {question}
        </h3>
        {answer ? (
          <p style={{ alignSelf: 'stretch', width: '100%', maxWidth: '900px', color: 'rgba(83, 84, 83, 1)', fontSize: '16px', fontWeight: '300', textAlign: 'left', lineHeight: '139.9999976158142%', margin: 0 }}>
            {answer}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default function Frame2608970() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      question: 'How do I enroll in a certification program?',
      answer:
        "To enroll, create an account, select your certification, complete the payment process, and you'll gain immediate access to your course materials in your dashboard.",
    },
    {
      question: 'How long do I have access to the course materials?',
      answer: 'Your access period depends on the certification package, but enrolled learners typically retain access long enough to complete training and prepare for the exam comfortably.',
    },
    {
      question: 'Are CIPM certifications recognized internationally?',
      answer: 'THE CIPM certifications are designed for professionals in Canada and internationally, helping demonstrate verified project management knowledge across global work environments.',
    },
    {
      question: 'Can I retake the exam if I do not pass on the first attempt?',
      answer: 'Yes. Retake options are available, and the exact process depends on the certification policy attached to your program enrollment.',
    },
  ];

  return (
    <div
      style={{
        width: '1728px',
        minHeight: '680px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '32px',
        paddingTop: '72px',
        paddingBottom: '72px',
        paddingLeft: '246px',
        paddingRight: '246px',
      }}
    >
      <div style={{ width: '1236px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px' }}>
        <div style={{ width: '393px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '8px' }}>
          <h1 style={{ color: 'rgba(55, 56, 55, 1)', fontSize: '36px', fontWeight: '600', textAlign: 'center', lineHeight: '120.00000476837158%', margin: 0 }}>FAQ</h1>
          <h3 style={{ color: 'rgba(83, 84, 83, 1)', fontSize: '18px', fontWeight: '300', textAlign: 'center', lineHeight: '139.9999976158142%', margin: 0 }}>Important Notice Regarding Our Credentials</h3>
        </div>
      </div>

      <div style={{ width: '984px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px' }}>
        {faqs.map((faq, index) => (
          <FaqCard
            key={faq.question}
            expanded={openIndex === index}
            question={faq.question}
            answer={openIndex === index ? faq.answer : undefined}
            onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
          />
        ))}
      </div>
    </div>
  );
}
