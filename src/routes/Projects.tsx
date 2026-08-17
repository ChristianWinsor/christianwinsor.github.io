import { useState } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { filterProjects, type ProjectFilter } from '../data/projects';
import { Tag } from '../components/ui/Tag';
import { useDocumentTitle } from '../hooks/useScrollReveal';
import './Projects.css';

const filters: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'client', label: 'Client work' },
  { id: 'personal', label: 'Personal' },
  { id: 'professional', label: 'Design leadership' },
];

export function Projects() {
  useDocumentTitle(`Projects | ${site.name}`);
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const filtered = filterProjects(filter).filter((project) => project.featured);
  const activeLabel = filters.find((f) => f.id === filter)?.label ?? 'All';

  return (
    <>
      <div className="page-hero container">
        <p className="section-label accent-purple">Work</p>
        <h1>Selected projects</h1>
        <p>
          Client builds, personal products, and design leadership, from first wireframe to shipped product.
        </p>
      </div>

      <div className="projects-page container">
        <div className="project-filters" role="group" aria-label="Filter projects by type">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              className={`filter-pill ${filter === f.id ? 'active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Showing {filtered.length} {filtered.length === 1 ? 'project' : 'projects'} in {activeLabel}.
        </p>

        <ul className="project-grid">
          {filtered.map((project) => (
            <li key={project.slug}>
              <Link to={`/projects/${project.slug}`} className="project-card">
                <div className="project-card-image">
                  <img
                    src={project.heroImage}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={`project-status status-${project.status}`}>{project.status}</span>
                </div>
                <div className="project-card-body">
                  <span className="project-type">{project.type.replace('-', ' ')}</span>
                  <h2>{project.title}</h2>
                  <p>{project.cardDescription}</p>
                  <div className="project-card-tags">
                    {project.stack.slice(0, 4).map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </div>
                <span className="project-card-arrow" aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="projects-gallery-link">
          Looking for visual design work? <Link to="/gallery">Browse the gallery →</Link>
        </p>
      </div>
    </>
  );
}
