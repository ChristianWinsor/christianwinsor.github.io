import { site } from '../data/site';
import { profile, aboutProcess, experience } from '../data/experience';
import { skillGroups } from '../data/skills';
import { publications } from '../data/publications';
import { Button } from '../components/ui/Button';
import { useDocumentTitle, useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

export function About() {
  useDocumentTitle(`About | ${site.name}`);
  const introRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <div className="page-hero container">
        <p className="section-label accent-purple">About</p>
        <h1>Design lead who ships.</h1>
        <p>
          Proficient with the complete design lifecycle, from discovery and user flows through design systems,
          high-fidelity prototypes, and production-ready implementation.
        </p>
      </div>

      <section className="about-section container" ref={introRef}>
        <h2 className="section-title">Profile</h2>
        <p className="about-prose">{profile}</p>
      </section>

      <section className="about-section container">
        <h2 className="section-title">How I work</h2>
        <div className="process-grid">
          {aboutProcess.map((step) => (
            <article key={step.step} className="process-card">
              <span className="process-step accent-gold">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section container">
        <h2 className="section-title">Design leadership at Accelera / Root</h2>
        <p className="about-prose">
          From 2021 through 2024 I served as the sole designer and design lead across multiple applications.
          I built the visual design system and designed critical product flows; from login verification
          to customizable dashboards, iterating rapidly through internal review cycles with engineering.
        </p>
        <div className="about-highlights">
          <ul>
            <li>Ground-up design system and component library</li>
            <li>Interactive high-fidelity prototypes across multiple apps</li>
            <li>YouTube channel branding and content design</li>
            <li>Style guides and digital asset libraries</li>
          </ul>
        </div>
        <Button to="/projects/accelera" variant="secondary">View Accelera case study →</Button>
      </section>

      <section className="about-section container">
        <h2 className="section-title">Experience</h2>
        <div className="exp-list">
          {experience.map((item) => (
            <article key={`${item.company}-${item.dates}`} className="exp-row">
              <time className="exp-dates">{item.dates}</time>
              <div className="exp-body">
                <h3 className="exp-title">{item.title}</h3>
                <p className="exp-co">{item.company}</p>
                <ul className="exp-bullets">
                  {item.bullets.map((b) => (
                    <li key={b.slice(0, 50)}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section container">
        <h2 className="section-title">Tools I reach for</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <p className="skill-group-title">{group.title}</p>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section container">
        <h2 className="section-title">Writing & research</h2>
        <div className="pub-list">
          {publications.map((pub) => (
            <article key={pub.url} className="pub-row">
              <h3 className="pub-title">{pub.title}</h3>
              <p className="pub-desc">{pub.description}</p>
              <a href={pub.url} className="pub-link" target="_blank" rel="noopener noreferrer">
                {pub.venue}, {pub.year} ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta container">
        <Button to="/projects" variant="primary">View projects</Button>
        <Button to="/contact" variant="secondary">Contact me</Button>
      </section>
    </>
  );
}
