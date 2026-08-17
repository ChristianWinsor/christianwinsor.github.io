import { Link, Navigate, useParams } from 'react-router-dom';
import { site } from '../data/site';
import { getProject } from '../data/projects';
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';
import { useDocumentTitle } from '../hooks/useScrollReveal';
import './ProjectCaseStudy.css';

export function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  useDocumentTitle(project ? `${project.title} | ${site.name}` : `Project | ${site.name}`);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const next = project.nextProject ? getProject(project.nextProject) : undefined;

  return (
    <article className="case-study">
      <header className="case-hero">
        <div className="case-hero-image">
          <img src={project.heroImage} alt={`${project.title} preview`} />
          <div className="case-hero-overlay" />
        </div>
        <div className="container case-hero-content">
          <Link to="/projects" className="case-back">← All projects</Link>
          <div className="case-meta">
            <span className="case-type">{project.type}</span>
            <span className="case-timeline">{project.timeline}</span>
            <span className={`case-status status-${project.status}`}>{project.status}</span>
          </div>
          <h1>{project.title}</h1>
          <p className="case-subtitle">{project.subtitle}</p>
          <p className="case-role">{project.role}</p>
          <div className="case-actions">
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary" external>View live ↗</Button>
            )}
            {project.repoUrl && (
              <Button href={project.repoUrl} variant="secondary" external>GitHub ↗</Button>
            )}
            <Button to="/contact" variant="secondary">Discuss a project</Button>
          </div>
          <div className="case-tags">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </header>

      <section className="case-section container">
        <h2>Overview</h2>
        <p className="case-prose">{project.overview}</p>
      </section>

      <section className="case-section container case-columns">
        <div>
          <h2>The challenge</h2>
          <ul className="case-list">
            {project.challenge.map((item) => (
              <li key={item.slice(0, 40)}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>What I delivered</h2>
          <ul className="case-list case-list-check">
            {project.deliverables.map((item) => (
              <li key={item.slice(0, 40)}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {project.sections?.map((section) => (
        <section key={section.title} className="case-section container case-feature">
          <h2>{section.title}</h2>
          <p className="case-prose">{section.body}</p>
        </section>
      ))}

      <section className="case-section container">
        <h2>Approach</h2>
        <ul className="case-list">
          {project.solution.map((item) => (
            <li key={item.slice(0, 40)}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="case-section container">
        <h2>Tech stack</h2>
        <div className="case-tech">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </div>
      </section>

      {next && (
        <section className="case-next container">
          <p className="section-label">Next project</p>
          <Link to={`/projects/${next.slug}`} className="case-next-link">
            <span>{next.title}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      )}
    </article>
  );
}
