import './CareerGrowth.css';
import bulletIcon from '../../assets/bullet-icon.svg';
import growthIcon from '../../assets/growth-icon.svg';

const careerList = [
  "The demand for professionals skilled in agile project delivery has grown steadily as organizations across every sector embrace adaptive ways of working. Job postings for agile project roles span well beyond the technology industry, appearing regularly in banking, insurance, telecommunications, government, healthcare, and energy.",
  "Employers increasingly recognize that agile delivery skills apply wherever teams need to collaborate on complex, evolving work — making agile project management one of the most transferable competencies a professional can develop.",
  "Professionals who earn recognized agile credentials consistently command higher compensation than their non-certified peers. As practitioners build experience, career advancement opportunities expand into senior delivery leadership, program coordination, portfolio governance, organizational transformation, and executive advisory roles — making agile project management a strong foundation for long-term career growth across industries and sectors."
];

export default function CareerGrowth() {
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
