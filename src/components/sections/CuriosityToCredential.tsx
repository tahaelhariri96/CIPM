import './CuriosityToCredential.css';
import objectsIcon from '../../assets/objects.svg';

export default function CuriosityToCredential() {
  return (
    <section className="section-wrapper">
      <div className="card">
        <div className="card__content">
          <h2 className="card__title">
            From Curiosity to Credential
          </h2>

          <div className="card__text">
            <p>
              Understanding what agile project management is marks the starting point.
              Turning that understanding into a recognized, verifiable skill set is what opens doors.
              Whether you are new to agile or ready to formalize years of hands-on delivery experience,
              the right training and certification can position you for immediate impact and lasting career advancement.
            </p>
            <p>
              THE CIPM offers a structured agile certification pathway — from Foundation through Practitioner to Advanced —
              designed to build your capability progressively and equip you with credentials that reflect genuine, applied knowledge.
            </p>
          </div>
        </div>

        <div className="decor">
          <img className="decor__img" src={objectsIcon} alt="Decorative graphic"/>
        </div>
      </div>
    </section>
  );
}
