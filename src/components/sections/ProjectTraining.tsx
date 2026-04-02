import './ProjectTraining.css';
import bulletIcon from '../../assets/bullet-icon.svg';
import learningIcon from '../../assets/learning-icon.svg';

const trainingList = [
  "You don't need a specific degree or background to succeed in project management — which is part of what makes the field so compelling. Professionals transitioning from other careers often find that their existing skills in communication, problem-solving, and organization give them a strong foundation to build on.",
  "Team leads who coordinate daily work but lack formal methodology will benefit from learning proven frameworks. Entrepreneurs managing multiple moving parts across their business gain the ability to prioritize with clarity.",
  "Aspiring managers preparing for their first leadership role discover a shared language and toolkit that earns immediate credibility.",
  "Even seasoned professionals in engineering, marketing, or operations find that project management skills elevate their ability to deliver consistently at a higher level."
];

export default function ProjectTraining() {
  return (
    <section className="training-section">
      <div className="training-content">
        <h2 className="training-title">
          Who Should Learn Project Management
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
