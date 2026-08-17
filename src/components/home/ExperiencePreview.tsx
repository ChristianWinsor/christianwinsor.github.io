import { Link } from 'react-router-dom';
import { experience } from '../../data/experience';
import './ExperiencePreview.css';

export function ExperiencePreview() {
  const preview = experience.slice(0, 3);

  return (
    <section className="home-section container" aria-labelledby="experience-heading">
      <div className="section-header">
        <h2 id="experience-heading" className="section-title">Experience</h2>
        <Link to="/resume" className="text-link">Download resume ↓</Link>
      </div>
      <div className="exp-list">
        {preview.map((item) => (
          <article key={`${item.company}-${item.dates}`} className="exp-row">
            <time className="exp-dates">{item.dates}</time>
            <div className="exp-body">
              <h3 className="exp-title">{item.title}</h3>
              <p className="exp-co">{item.company}</p>
              <ul className="exp-bullets">
                {item.bullets.slice(0, 2).map((bullet) => (
                  <li key={bullet.slice(0, 40)}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
