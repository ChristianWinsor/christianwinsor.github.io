import { useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { site } from '../data/site';
import { getProject } from '../data/projects';
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';
import { useDocumentTitle } from '../hooks/useScrollReveal';
import './ProjectCaseStudy.css';

const statusLabels = {
  live: 'Live',
  shipped: 'Shipped',
  'in-progress': 'In development',
  documented: 'Case study',
  archived: 'Archived',
} as const;

export function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;
  const mediaRef = useRef<HTMLDivElement>(null);

  useDocumentTitle(project ? project.title + ' | ' + site.name : 'Project | ' + site.name);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const next = project.nextProject ? getProject(project.nextProject) : undefined;
  const logoHero = project.slug === 'kitchen-navigator';

  return (
    <article className="case-study">
      <header className="case-hero">
        <div className={'case-hero-image' + (logoHero ? ' case-hero-image--logo' : '')}>
          <img src={project.heroImage} alt="" />
          <div className="case-hero-overlay" />
        </div>
        <div className="container case-hero-content">
          <Link to="/projects" className="case-back">← All projects</Link>
          <div className="case-meta">
            <span className="case-type">{project.type.replace('-', ' ')}</span>
            <span className="case-timeline">{project.timeline}</span>
            <span className={'case-status status-' + project.status}>{statusLabels[project.status]}</span>
          </div>
          <h1>{project.title}</h1>
          <p className="case-subtitle">{project.subtitle}</p>
          <p className="case-role">{project.role}</p>
          <div className="case-actions">
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary" external>
                {project.slug === 'among-the-letters' ? 'Visit publication site' : 'View live site'}
              </Button>
            )}
            {project.publicationUrl && (
              <Button href={project.publicationUrl} variant="secondary" external>
                Read on Substack
              </Button>
            )}
            {project.repoUrl && (
              <Button href={project.repoUrl} variant="secondary" external>
                View source
              </Button>
            )}
            <Button to="/contact" variant="secondary">Discuss a project</Button>
          </div>
          <div className="case-tags">
            {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
        </div>
      </header>

      <div className="container case-intro">
        <div className="case-intro-label">
          <span className="section-label accent-gold">The work at a glance</span>
          <span className="case-intro-rule" aria-hidden="true" />
        </div>
        <p>{project.overview}</p>
      </div>

      <section className="case-section container case-columns" aria-labelledby="challenge-heading">
        <div className="case-panel">
          <span className="case-panel-index">01 / Problem</span>
          <h2 id="challenge-heading">What needed to change</h2>
          <ul className="case-list">
            {project.challenge.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="case-panel">
          <span className="case-panel-index">02 / Response</span>
          <h2>What I designed and built</h2>
          <ul className="case-list case-list-check">
            {project.solution.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      {project.sections && project.sections.length > 0 && (
        <section className="case-section container" aria-labelledby="decisions-heading">
          <div className="case-section-heading">
            <span className="section-label accent-purple">Behind the work</span>
            <h2 id="decisions-heading">Decisions that shaped the result</h2>
          </div>
          <div className="case-decision-grid">
            {project.sections.map((section, index) => (
              <div key={section.title} className="case-decision">
                <span className="case-decision-number">0{index + 1}</span>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.media && project.media.length > 0 && (
        <section className="case-section container" aria-labelledby="media-heading">
          <div className="case-section-heading">
            <span className="section-label accent-blue">Selected visuals</span>
            <h2 id="media-heading">A closer look</h2>
            {project.mediaIntro && <p className="case-media-intro">{project.mediaIntro}</p>}
            {project.slug === 'maidol' && (
              <div className="case-media-controls">
                <span>Swipe or use the arrows to explore the screens</span>
                <button type="button" aria-label="Previous Maidol screens" onClick={() => mediaRef.current?.scrollBy({ left: -280, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>←</button>
                <button type="button" aria-label="Next Maidol screens" onClick={() => mediaRef.current?.scrollBy({ left: 280, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>→</button>
              </div>
            )}
          </div>
          <div ref={mediaRef} tabIndex={project.slug === 'maidol' ? 0 : undefined} aria-label={project.slug === 'maidol' ? 'Maidol screen gallery' : undefined} className={'case-media-grid' + (project.slug === 'maidol' ? ' case-media-grid--screens' : project.slug === 'kitchen-navigator' ? ' case-media-grid--kitchen' : '')}>
            {project.media.map((item) => (
              <figure key={item.src} className="case-media-item">
                <a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={item.caption + ": open full image"}><img src={item.src} alt={item.alt} loading="lazy" decoding="async" /></a>
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="case-section container case-results" aria-labelledby="results-heading">
        <div>
          <span className="section-label accent-green">The result</span>
          <h2 id="results-heading">What the work delivered</h2>
          <p>The work in practice, from the first decision to what was delivered.</p>
        </div>
        <ul className="case-result-list">
          {(project.outcomes ?? project.deliverables).map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="case-section container case-delivery" aria-labelledby="delivery-heading">
        <div>
          <span className="section-label accent-gold">Scope</span>
          <h2 id="delivery-heading">Deliverables</h2>
          <ul className="case-list">
            {project.deliverables.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <span className="section-label accent-blue">Capabilities</span>
          <h2>Disciplines and tools</h2>
          <div className="case-tech">
            {project.techStack.map((item) => <span key={item} className="tech-pill">{item}</span>)}
          </div>
        </div>
      </section>

      {next && (
        <section className="case-next container">
          <p className="section-label">Continue exploring</p>
          <Link to={'/projects/' + next.slug} className="case-next-link">
            <span>
              <small>Next project</small>
              {next.title}
            </span>
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      )}
    </article>
  );
}
