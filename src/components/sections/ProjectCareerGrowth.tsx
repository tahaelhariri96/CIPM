import './ProjectCareerGrowth.css';
import bulletIcon from '../../assets/bullet-icon.svg';
import growthIcon from '../../assets/growth-icon.svg';

const careerList = [
  "Demand for skilled project managers continues to accelerate. The PMI estimates that the global economy will need 25 million new project professionals by 2030, creating one of the largest talent gaps in the modern workforce. This demand spans industries from construction and finance to healthcare, IT, and government.",
  "Career paths in the field are equally diverse. Roles such as project coordinator, project manager, program manager, and portfolio director offer a clear trajectory from entry-level to executive leadership.",
  "Certified project managers consistently report higher earning potential than their non-certified peers, with mid-career salaries often exceeding six figures in major markets. For professionals looking for a career with upward mobility, cross-industry flexibility, and long-term relevance, few fields offer a stronger combination."
];

export default function ProjectCareerGrowth() {
  return (
    <section className="career-section">
      <div className="career-image-wrapper">
        <div className="career-image">
          <img src={growthIcon} alt="Growth illustration" />
        </div>
      </div>

      <div className="career-content">
        <h2 className="career-title">Career Opportunities and Growth</h2>

        <div className="career-list">
          <div className="career-line"></div>

          {careerList.map((text, index) => (
            <div key={index} className="career-item">
              <div className="career-icon">
                <img src={bulletIcon} alt="Bullet icon" />
              </div>
              <p className="career-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
