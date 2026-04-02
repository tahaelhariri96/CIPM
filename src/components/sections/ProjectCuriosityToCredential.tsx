import './ProjectCuriosityToCredential.css';
import objectsIcon from '../../assets/Group 2482.svg';

export default function ProjectCuriosityToCredential() {
  return (
    <section className="section-wrapper">
      <div className="card" >
        <div className="card__content">
          <h2 className="card__title">
            From Understanding to Action
          </h2>

          <div className="card__text">
            <p>
              Knowing why project management matters is the first step. The next is building the skills and credentials that set you apart.
            </p>
            <p>
              Whether you're exploring the field for the first time or preparing to formalize your experience with a recognized certification, structured training can help you move forward with confidence and purpose.
            </p>
          </div>
        </div>

        <div className="decor" style={{  position: "absolute",  right: "100px",  top: "-50px",  width: "219px", height: "321px",transform: "scale(1.7)"}} >
          <img className="decor__img" src={objectsIcon} alt="Decorative graphic"/>
        </div>
      </div>
    </section>
  );
}
