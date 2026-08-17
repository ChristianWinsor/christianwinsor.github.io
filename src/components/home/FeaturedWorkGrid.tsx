import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '../../data/projects';
import { Tag } from '../ui/Tag';
import './FeaturedWorkGrid.css';

export function FeaturedWorkGrid() {
  const featured = getFeaturedProjects();
  const [wide, ...rest] = featured;

  return (
    <section className="featured-work" aria-labelledby="featured-work-heading">
      <div className="container">
        <p className="section-label">Featured work</p>
        <h2 id="featured-work-heading" className="sr-only">Featured work</h2>
      </div>
      <div className="featured-grid">
        {wide && (
          <Link to={`/projects/${wide.slug}`} className="feat-card feat-card-wide">
            <div className="feat-card-body">
              <span className="feat-tag">{wide.type === 'client' ? 'Client · Full build' : wide.tags[0]}</span>
              <h3 className="feat-title">{wide.title}</h3>
              <p className="feat-desc">{wide.cardDescription}</p>
              <div className="feat-stack">
                {wide.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
            <span className="feat-arrow" aria-hidden="true">↗</span>
          </Link>
        )}
        {rest.map((project) => (
          <Link key={project.slug} to={`/projects/${project.slug}`} className="feat-card">
            <div className="feat-card-body">
              <span className="feat-tag">{project.tags.slice(0, 2).join(' · ')}</span>
              <h3 className="feat-title">{project.title}</h3>
              <p className="feat-desc">{project.cardDescription}</p>
              <div className="feat-stack">
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
            <span className="feat-arrow" aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
