import './AgileTraining.css';
import bulletIcon from '../../assets/bullet-icon.svg';
import learningIcon from '../../assets/learning-icon.svg';

const trainingList = [
  "Agile project management attracts professionals from a wide range of backgrounds, and no single career path is required. People who thrive in agile environments tend to be strong collaborators, adaptive thinkers, and individuals who find satisfaction in delivering tangible results through teamwork.",
  "If you enjoy working in fast-paced settings where priorities evolve and creative problem-solving is valued, agile project management may be a natural fit.",
  "Project coordinators and team leads looking to modernize their delivery approach gain practical skills grounded in flexibility, stakeholder engagement, and iterative planning. Professionals in operations, business analysis, or quality assurance often discover that their analytical and organizational strengths translate directly into agile project leadership. Career changers from fields such as education, healthcare administration, or communications frequently find that their facilitation and people skills are highly valued in agile teams.",
  "Technical professionals — developers, engineers, and designers — who want to step into broader project leadership responsibilities also find agile project management to be a compelling and rewarding path forward."
];

export default function AgileTraining() {
  return (
    <section className="training-section">
      <div className="training-content">
        <h2 className="training-title">
          Who Should Pursue Agile Project Management Training
        </h2>

        <div className="training-list">
          {trainingList.map((text, index) => (
            <div key={index} className="training-list-item">
              <div className="training-list-icon">
                <img src={bulletIcon} alt="bullet" />
              </div>
              <p className="training-list-text">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="training-image">
        <div className="training-image-inner">
          <img src={learningIcon} alt="learning illustration" />
        </div>
      </div>
    </section>
  );
}
