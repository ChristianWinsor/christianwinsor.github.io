import { publications } from '../../data/publications';
import './WritingPreview.css';

export function WritingPreview() {
  return (
    <section className="home-section container" aria-labelledby="writing-heading">
      <div className="section-header">
        <h2 id="writing-heading" className="section-title">Writing & research</h2>
      </div>
      <div className="pub-list">
        {publications.map((pub) => (
          <article key={pub.url} className="pub-row">
            <h3 className="pub-title">{pub.title}</h3>
            <p className="pub-desc">{pub.description}</p>
            <a href={pub.url} className="pub-link" target="_blank" rel="noopener noreferrer">
              {pub.venue} ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
