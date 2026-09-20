import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { portfolioProfile, portfolioProcess, portfolioExperience } from '../data/portfolioExperience';
import { skillGroups } from '../data/skills';
import { publications } from '../data/publications';
import { Button } from '../components/ui/Button';
import { useDocumentTitle, useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

export function About() {
  useDocumentTitle(`About | ${site.name}`);
  const introRef = useScrollReveal<HTMLElement>();

  return (
    <div className="about-page">
      <div className="page-hero container">
        <p className="section-label accent-purple">About</p>
        <h1>Design lead who ships.</h1>
        <p>
          I bring product thinking, visual direction, storytelling, and development together to make complex ideas clear and usable.
        </p>
      </div>

      <section className="about-section container" ref={introRef}>
        <h2 className="section-title">Profile</h2>
        <p className="about-prose">{portfolioProfile}</p>
      </section>

      <section className="about-section container">
        <h2 className="section-title">How I work</h2>
        <div className="process-grid">
          {portfolioProcess.map((step) => (
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
          Across nearly four years at Accelera / Root, I worked from frontend development into design leadership. I coordinated the creative and frontend teams, reported to company leaders, worked directly with clients, and connected product design, brand direction, content, and code across client and company work.
        </p>
        <div className="about-highlights">
          <ul>
            <li>Client interfaces, prototypes, websites, and design systems</li>
            <li>Developer and creative training and setup manuals</li>
            <li>More than 100 scripted and produced YouTube videos; over 60,000 channel views</li>
            <li>Presentations, brand systems, frontend work, and beta testing</li>
          </ul>
        </div>
        <Button to="/projects/accelera" variant="secondary">View Accelera case study →</Button>
      </section>

      <section className="about-section container">
        <h2 className="section-title">Experience</h2>
        <div className="exp-list">
          {portfolioExperience.map((item) => (
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
        <h2 className="section-title">Skills & tools</h2>
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
        <h2 className="section-title">Writing & publishing</h2>
        <Link to="/projects/among-the-letters" className="about-writing-feature">
          <strong>Among the Letters</strong>
          <span>My independent literary publication: concept, editorial direction, visual identity, website, and newsletter.</span>
          <span>Explore the case study →</span>
        </Link>
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
    </div>
  );
}
