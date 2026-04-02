const sectionTitleStyle = {
  color: 'rgba(55, 56, 55, 1)',
  fontSize: '32px',
  fontWeight: 600,
  lineHeight: '120%',
  margin: 0,
};

const bodyStyle = {
  color: 'rgba(83, 84, 83, 1)',
  fontSize: '18px',
  fontWeight: 300,
  lineHeight: '160%',
  margin: 0,
};

export default function AboutCIPMTextContent() {
  return (
    <div
      style={{
        width: '1728px',
        display: 'flex',
        flexDirection: 'column',
        gap: '56px',
        paddingTop: '40px',
        paddingBottom: '96px',
        paddingLeft: '246px',
        paddingRight: '246px',
        backgroundColor: 'white',
      }}
    >
      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2 style={sectionTitleStyle}>Who We Are</h2>
        <p style={bodyStyle}>
          The Canadian Institute of Project Management (THE CIPM) is a Canadian-founded, independently operated organization that provides self-paced project management training and certification to professionals across Canada and around the world. Established to serve the evolving needs of a global workforce, THE CIPM develops and delivers rigorous, industry-relevant learning programs in project management, Agile delivery, and Scrum practice - equipping professionals with the knowledge and recognition they need to lead with confidence in today&apos;s dynamic work environments.
        </p>
        <p style={bodyStyle}>
          THE CIPM is an independent, standalone organization. It is not affiliated with, endorsed by, accredited by, or connected to any other professional body, credentialing organization, or industry association - domestically or internationally. THE CIPM operates under its own governance, develops its own curriculum, and issues its own credentials entirely independently.
        </p>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2 style={sectionTitleStyle}>Mission &amp; Vision</h2>
        <p style={bodyStyle}>
          <strong style={{ color: 'rgba(55, 56, 55, 1)', fontWeight: 600 }}>Our Mission:</strong> To provide accessible, high-quality project management education and certification that prepares professionals across Canada and globally to deliver measurable value in every industry they serve.
        </p>
        <p style={bodyStyle}>
          <strong style={{ color: 'rgba(55, 56, 55, 1)', fontWeight: 600 }}>Our Vision:</strong> To be a trusted home for project management professional development - rooted in Canada, recognized worldwide - where practitioners at every stage of their career can build real capability, earn meaningful credentials, and grow into the leaders their organizations need.
        </p>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2 style={sectionTitleStyle}>What We Offer</h2>
        <p style={bodyStyle}>
          THE CIPM offers structured pathways across three tracks: Project Management, Agile Project Management, and Scrum Practice. Each track is designed with progressive tiers - Foundation, Core or Practitioner, and Advanced - allowing learners to build competency incrementally and at their own pace. Our programs are delivered entirely online, with comprehensive learning materials, unlimited practice exams, and secure final assessments available around the clock to learners in any time zone. Every enrollment includes the official exam fee and a verifiable digital certificate upon successful completion, ensuring a complete, transparent experience with no hidden costs.
        </p>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2 style={sectionTitleStyle}>Our Values</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={bodyStyle}>
            <strong style={{ color: 'rgba(55, 56, 55, 1)', fontWeight: 600 }}>Accessibility.</strong> We believe professional development should be within reach for every practitioner, regardless of geography, background, or career stage. Our programs are designed to be affordable, flexible, and available to learners across Canada and in every corner of the globe.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'rgba(55, 56, 55, 1)', fontWeight: 600 }}>Rigour.</strong> Our programs are built on substantive, current, and practice-grounded content. We hold our programs to a high standard because the professionals who earn our certifications deserve credentials worth earning.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'rgba(55, 56, 55, 1)', fontWeight: 600 }}>Independence.</strong> We develop our curriculum and assessments without external influence. This independence ensures that our programs serve the interests of practitioners first and always.
          </p>
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2 style={sectionTitleStyle}>Our Commitment to Canadian and International Professionals</h2>
        <p style={bodyStyle}>
          Canada&apos;s economy depends on skilled project professionals who can navigate complexity, lead diverse teams, and deliver results across sectors - from technology and healthcare to infrastructure, energy, natural resources, and public service. The same is true in every growing economy worldwide. THE CIPM exists to support that global workforce. Our programs are designed with Canadian professionals at their core while remaining fully relevant to practitioners working internationally - reflecting the collaborative, inclusive, and results-oriented values that define effective project leadership in any market. Whether you are launching your career, transitioning from another discipline, or strengthening your credentials as a seasoned practitioner, THE CIPM provides a credible, professionally meaningful pathway forward - wherever you are in the world.
        </p>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2 style={sectionTitleStyle}>Start Your Journey</h2>
        <p style={bodyStyle}>
          Explore our programs, find the pathway that fits your goals, and take the next step in your professional development - wherever you are in the world. THE CIPM is here to support your growth, from your first credential to your most advanced.
        </p>
      </section>
    </div>
  );
}
