import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { profile, experience } from '../data/experience';
import { skillGroups } from '../data/skills';
import { publications } from '../data/publications';
import { projects } from '../data/projects';
import { Button } from '../components/ui/Button';
import { useDocumentTitle } from '../hooks/useScrollReveal';
import './Resume.css';

export function Resume() {
  useDocumentTitle(`Resume | ${site.name}`);

  const selectedProjects = projects.filter((p) =>
    ['malawian-fish-room', 'pawn-stars', 'hubbit', 'kitchen-navigator'].includes(p.slug),
  );

  return (
    <div className="resume-page">
      <div className="page-hero container">
        <p className="section-label accent-gold">Resume</p>
        <h1>{site.name}</h1>
        <p>Senior Designer in London, Ontario</p>
        <div className="resume-actions">
          <Button
            href={`${import.meta.env.BASE_URL}resume/Christian_Winsor_Resume.pdf`}
            variant="primary"
            external
          >
            Download PDF resume
          </Button>
          <Button href={`mailto:${site.email}`} variant="secondary">Email me</Button>
        </div>
      </div>

      <section className="resume-section container">
        <h2 className="section-title">Profile</h2>
        <p className="resume-prose">{profile}</p>
      </section>

      <section className="resume-section container">
        <h2 className="section-title">Experience</h2>
        <div className="resume-exp-list">
          {experience.map((item) => (
            <article key={`${item.company}-${item.dates}`} className="resume-exp-item">
              <div className="resume-exp-header">
                <h3>{item.title}</h3>
                <time>{item.dates}</time>
              </div>
              <p className="resume-exp-co">{item.company}</p>
              <ul>
                {item.bullets.map((b) => (
                  <li key={b.slice(0, 50)}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section container">
        <h2 className="section-title">Selected projects</h2>
        <div className="resume-projects">
          {selectedProjects.map((p) => (
            <article key={p.slug} className="resume-project-item">
              <div className="resume-project-header">
                <h3>
                  <Link to={`/projects/${p.slug}`}>{p.title}</Link>
                </h3>
                <span>{p.timeline}</span>
              </div>
              <p>{p.subtitle}</p>
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                  View live ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section container">
        <h2 className="section-title">Skills & tools</h2>
        <div className="resume-skills">
          {skillGroups.map((group) => (
            <div key={group.title} className="resume-skill-group">
              <h3>{group.title}</h3>
              <p>{group.skills.join(' · ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section container">
        <h2 className="section-title">Writing & research</h2>
        <div className="resume-pubs">
          {publications.map((pub) => (
            <article key={pub.url}>
              <h3>{pub.title}</h3>
              <p>{pub.venue}, {pub.year}</p>
              <a href={pub.url} target="_blank" rel="noopener noreferrer">{pub.url.replace('https://', '')} ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section container">
        <h2 className="section-title">Education & achievements</h2>
        <ul className="resume-achievements">
          <li>
            Continuous Focus: Ongoing self-directed advanced study in full-stack development, design, creative
            writing, philosophy, and logic.
          </li>
          <li>
            Academic Recognition: Awards and recognition for achievements in Mathematics and Creative Writing.
          </li>
          <li>
            Personal Milestones: Achieved Brown Belt in Shorin-Ryu Karate Jutsu; 8-ball league champion.
          </li>
        </ul>
      </section>

      <section className="resume-contact container">
        <p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {' · '}
          {site.phone}
        </p>
      </section>
    </div>
  );
}
